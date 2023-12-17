package com.nastya.dblab.service;

import com.nastya.dblab.dto.request.CreateUserReq;
import com.nastya.dblab.dto.request.UpdateUserReq;
import com.nastya.dblab.model.User;
import com.nastya.dblab.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(CreateUserReq request) {
        User user = User.builder()
                .email(request.email())
                .password(request.password())
                .username(request.username())
                .build();

        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(long userId) {
        return getUserByIdOrThrowException(userId);
    }

    public User updateUser(UpdateUserReq request) {
        User userToBeUpdated = getUserByIdOrThrowException(request.userId());

        userToBeUpdated.setUsername(request.username());
        userToBeUpdated.setEmail(request.email());
        userToBeUpdated.setPassword(request.password());

        return userRepository.save(userToBeUpdated);
    }

    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }

    private User getUserByIdOrThrowException(long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User was not found"));
    }
}
