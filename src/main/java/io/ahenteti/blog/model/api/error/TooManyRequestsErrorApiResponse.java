package io.ahenteti.blog.model.api.error;

import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
public class TooManyRequestsErrorApiResponse extends ErrorApiResponse {

    public TooManyRequestsErrorApiResponse() {
        super(HttpStatus.TOO_MANY_REQUESTS.value(), "Too Many Requests");
    }

}
