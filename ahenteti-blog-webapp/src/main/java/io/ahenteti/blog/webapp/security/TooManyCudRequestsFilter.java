package io.ahenteti.blog.webapp.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.Instant;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class TooManyCudRequestsFilter implements Filter {

    @Value("${cud.requests.inactivity.period.in.seconds:5}")
    private Integer cudRequestsInactivityPeriodInSeconds;
    private CudRequest cudRequest;

    @Autowired
    public TooManyCudRequestsFilter(CudRequest cudRequest) {
        this.cudRequest = cudRequest;
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        if (cudRequest.isNotCudRequest(request)) {
            filterChain.doFilter(request, response);
            return;
        }
        Instant lastCudRequestExecutedAt = cudRequest.getLastExecutionAt();
        cudRequest.setLastExecutionAt(Instant.now());
        if (isTooManyCudRequests(lastCudRequestExecutedAt)) {
            response.sendError(HttpStatus.TOO_MANY_REQUESTS.value());
        } else {
            filterChain.doFilter(request, response);
        }
    }

    private boolean isTooManyCudRequests(Instant lastCudRequestExecutedAt) {
        return Instant.now().isBefore(lastCudRequestExecutedAt.plusSeconds(cudRequestsInactivityPeriodInSeconds));
    }

}
