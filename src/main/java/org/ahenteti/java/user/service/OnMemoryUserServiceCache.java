package org.ahenteti.java.user.service;

import org.ahenteti.java.user.model.business.User;
import org.ahenteti.java.user.model.business.Users;
import org.springframework.stereotype.Component;

@Component
public class OnMemoryUserServiceCache {
    private Users users;

    public OnMemoryUserServiceCache() {
        users = new Users();
        users.add(new User("user1", "user1@gmail.com"));
        users.add(new User("user2", "user2@gmail.com"));
        users.add(new User("user3", "user3@gmail.com"));
    }

    public Users getUsers() {
        return users;
    }
}
