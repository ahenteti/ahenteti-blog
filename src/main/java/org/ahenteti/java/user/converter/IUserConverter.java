package org.ahenteti.java.user.converter;

import org.ahenteti.java.user.model.api.GetUserApiResult;
import org.ahenteti.java.user.model.business.User;

public interface IUserConverter {
    GetUserApiResult toGetUserApiResult(User user);
}
