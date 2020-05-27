package io.ahenteti.blog.shared.security;

import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.ApplicationScope;

import javax.servlet.http.HttpServletRequest;
import java.time.Instant;

@Component
@ApplicationScope
public class CudRequest {

    private Instant lastExecutionAt = Instant.now();

    public Instant getLastExecutionAt() {
        return lastExecutionAt;
    }

    public synchronized void setLastExecutionAt(Instant lastExecutionAt) {
        this.lastExecutionAt = lastExecutionAt;
    }

    public boolean isNotCudRequest(HttpServletRequest request) {
        return !this.isCudRequest(request);
    }

    public boolean isCudRequest(HttpServletRequest request) {
        // @formatter:off
        return StringUtils.equals(request.getMethod(), HttpMethod.POST.name())
            || StringUtils.equals(request.getMethod(), HttpMethod.PUT.name())
            || StringUtils.equals(request.getMethod(), HttpMethod.DELETE.name());
        // @formatter:on
    }
}
