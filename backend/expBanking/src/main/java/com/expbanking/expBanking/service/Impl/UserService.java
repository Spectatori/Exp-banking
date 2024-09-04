package com.expbanking.expBanking.service.Impl;

import com.expbanking.expBanking.model.User;

public interface UserService {
    User findByEmail(String email);
}
