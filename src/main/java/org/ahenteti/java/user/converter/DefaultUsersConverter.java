package org.ahenteti.java.user.converter;

import org.ahenteti.java.user.model.api.GetUsersApiResult;
import org.ahenteti.java.user.model.business.User;
import org.ahenteti.java.user.model.business.Users;
import org.springframework.stereotype.Component;

@Component
public class DefaultUsersConverter implements IUsersConverter {

    private IUserConverter userConverter;

    public DefaultUsersConverter(IUserConverter userConverter) {
        this.userConverter = userConverter;
    }

    @Override
    public GetUsersApiResult toGetUsersApiResult(Users users) {
        GetUsersApiResult res = new GetUsersApiResult();
        for (User user : users) {
            res.add(userConverter.toGetUserApiResult(user));
        }
        return res;
    }
}
