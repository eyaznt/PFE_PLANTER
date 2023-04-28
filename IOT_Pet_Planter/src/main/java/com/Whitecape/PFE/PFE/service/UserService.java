package com.Whitecape.PFE.service;
import java.util.List;
import java.util.Optional;

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
    
    public void logout(String email) {
        User user = userRepository.findByEmail(email);
        if (user != null) {
            userRepository.save(user);
        }
    }
    
    public Optional<User> getUserById(String userId) {
        return userRepository.findById(userId);   
    }
    
    public User updateUserByEmail(String email, User user) {
        User existingUser = userRepository.findByEmail(email);
        if (existingUser != null) {
            existingUser.setUsername(user.getUsername());
            existingUser.setEmail(user.getEmail());
            existingUser.setPhone(user.getPhone());
            existingUser.setPlants(user.getPlants());
            existingUser.setPlanters(user.getPlanters());
            return userRepository.save(existingUser);
        }
        return null;
    }
    public boolean deleteUserByEmail(String email) {
        User user = userRepository.findByEmail(email);
        if (user != null) {
            userRepository.delete(user);
            return true;
        }
        return false;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public String getRoleByEmail(String email) {
        User user = fetchUserByEmail(email);
        return user != null ? user.getRole() : null;
    }



}
