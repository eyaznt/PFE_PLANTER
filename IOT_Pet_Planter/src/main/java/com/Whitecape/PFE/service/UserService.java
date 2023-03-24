package com.Whitecape.PFE.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Whitecape.PFE.exceptions.UserAlreadyExistsException;
import com.Whitecape.PFE.models.User;
import com.Whitecape.PFE.repositories.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User createUser(User user) throws UserAlreadyExistsException {
        // verify if a user with the same email already exists
        if (userRepository.findByEmail(user.getEmail()) != null) {
            throw new UserAlreadyExistsException("Email already in use: " + user.getEmail());
        }

        // Save the new user
        return userRepository.save(user);
    }

    public User fetchUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User fetchUserByEmailAndPassword(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }

} 
   









/* public User saveUser(User user) throws UserAlreadyExistsException {
        // Check if a user with the same email or username already exists
        if (userRepository.findByEmail(user.getEmail()) != null) {
            throw new UserAlreadyExistsException("Email already in use: " + user.getEmail());
        }
        if (userRepository.findByUsername(user.getUsername()) != null) {
            throw new UserAlreadyExistsException("Username already in use: " + user.getUsername());
        }
        // Save the new user
        return userRepository.save(user);
    } */

