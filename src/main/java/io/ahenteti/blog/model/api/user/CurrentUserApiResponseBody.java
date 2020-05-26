package io.ahenteti.blog.model.api.user;

import lombok.Data;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

@Data
public class CurrentUserApiResponseBody {
    private String username;
    private String avatarUrl;
    private List<String> roles = new ArrayList<>();
}
