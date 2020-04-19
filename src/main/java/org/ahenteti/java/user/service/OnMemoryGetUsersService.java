package org.ahenteti.java.user.service;

import org.ahenteti.java.user.model.business.User;
import org.ahenteti.java.user.model.business.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OnMemoryGetUsersService implements IGetUsersService {
    
    private OnMemoryUserServiceCache cache;

    @Autowired
    public OnMemoryGetUsersService(OnMemoryUserServiceCache cache) {
        this.cache = cache;
    }

    @Override
    public Users getUsers() {
        Users res = new Users();
        res.add(new User("user1", "user1@gmail.com"));
        res.add(new User("user2", "user2@gmail.com"));
        res.add(new User("user3", "user3@gmail.com"));
        return res;
    }
}
