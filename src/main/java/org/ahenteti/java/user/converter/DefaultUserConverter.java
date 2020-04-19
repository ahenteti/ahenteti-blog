package org.ahenteti.java.user.converter;

import org.ahenteti.java.user.model.api.GetUserApiResult;
import org.ahenteti.java.user.model.business.User;
import org.springframework.stereotype.Component;

@Component
public class DefaultUserConverter implements IUserConverter {

    @Override
    public GetUserApiResult toGetUserApiResult(User user) {
        GetUserApiResult res = new GetUserApiResult();
        res.setUsername(user.getUsername());
        res.setEmail(user.getEmail());
        return res;
    }
}
