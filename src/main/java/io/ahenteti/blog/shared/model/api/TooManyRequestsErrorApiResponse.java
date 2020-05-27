package io.ahenteti.blog.shared.model.api;

import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
public class TooManyRequestsErrorApiResponse extends ErrorApiResponse {

    public TooManyRequestsErrorApiResponse() {
        super(HttpStatus.TOO_MANY_REQUESTS.value(), "Too Many Requests");
    }

}
