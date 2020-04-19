package org.ahenteti.java.user.converter;

import org.ahenteti.java.user.model.api.GetUsersApiResult;
import org.ahenteti.java.user.model.business.Users;

public interface IUsersConverter {
    GetUsersApiResult toGetUsersApiResult(Users users);
}
