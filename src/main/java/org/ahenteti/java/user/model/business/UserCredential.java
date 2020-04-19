package org.ahenteti.java.user.model.business;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserCredential {
    private String username;
    private String password;
}
