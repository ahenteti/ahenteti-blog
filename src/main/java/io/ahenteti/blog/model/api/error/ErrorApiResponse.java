package io.ahenteti.blog.model.api.error;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class ErrorApiResponse {
    private NestedErrorApiResponse error;

    public ErrorApiResponse(Integer code, String message) {
        this.error = new NestedErrorApiResponse(code, message);
    }

    @Data
    @AllArgsConstructor
    private static class NestedErrorApiResponse {
        private Integer code;
        private String message;
    }
}
