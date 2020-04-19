package org.ahenteti.java.user.service;

import org.ahenteti.java.user.model.business.User;

import java.util.Optional;

public interface IGetUserByUsernameService {

    Optional<User> getUserByUsername(String username);
    
}
