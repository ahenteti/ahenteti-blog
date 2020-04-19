package org.ahenteti.java.user.service;

import org.ahenteti.java.user.model.business.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class OnMemoryGetUserByUsernameService implements IGetUserByUsernameService {
    
    private OnMemoryUserServiceCache cache;

    @Autowired
    public OnMemoryGetUserByUsernameService(OnMemoryUserServiceCache cache) {
        this.cache = cache;
    }

    @Override
    public Optional<User> getUserByUsername(String username) {
        return cache.getUsers().stream().filter(u -> u.getUsername().equals(username)).findFirst();
    }
}
