package com.nastya.dblab.dto.request;

public record UpdateUserReq(Long userId, String username, String password, String email) {
}
