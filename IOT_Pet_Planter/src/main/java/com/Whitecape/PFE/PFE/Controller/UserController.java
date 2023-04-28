package com.Whitecape.PFE.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Whitecape.PFE.exceptions.UserAlreadyExistsException;
import com.Whitecape.PFE.models.User;
import com.Whitecape.PFE.responses.LoginResponse;
import com.Whitecape.PFE.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        try {
            if (user.getUsername().equals("Admin")) {
                user.setRole("ADMIN");
            } else {
                user.setRole("USER");
            }
            User newUser = userService.createUser(user);
            return new ResponseEntity<>(newUser, HttpStatus.CREATED);
        } catch (UserAlreadyExistsException e) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }


    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<LoginResponse> login(@RequestBody User user) {
        User existingUser = userService.fetchUserByEmail(user.getEmail());

        if (existingUser == null || !existingUser.getPassword().equals(user.getPassword())) {
        	return new ResponseEntity<>(new LoginResponse("Invalid credentials", null), HttpStatus.UNAUTHORIZED);
        }

        String role = existingUser.getRole();
        LoginResponse response = new LoginResponse("Successfully logged in", role);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }


    @GetMapping("/logout/{email}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<String> logout(@PathVariable String email) {
        userService.logout(email);
        return ResponseEntity.status(HttpStatus.OK).body("{\"message\":\"Successfully logged out\"}");
    }

    @GetMapping("/{email}")
    public ResponseEntity<User> getUserByEmail(@PathVariable String email) {
        User user = userService.fetchUserByEmail(email);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/users/{userId}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Optional<User> getUserById(@PathVariable String userId) {
        return userService.getUserById(userId);
    }
    @PutMapping("/update/{email}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<User> updateUser(@PathVariable String email, @RequestBody User user) {
        User updatedUser = userService.updateUserByEmail(email, user);
        if (updatedUser != null) {
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @GetMapping("/all")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    @DeleteMapping("/delete/{email}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<String> deleteUser(@PathVariable String email) {
        if (userService.deleteUserByEmail(email)) {
            return ResponseEntity.status(HttpStatus.OK).body("{\"message\":\"User successfully deleted\"}");
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @GetMapping("/role/{email}")
    public ResponseEntity<String> getUserRoleByEmail(@PathVariable String email) {
        String role = userService.getRoleByEmail(email);
        if (role != null) {
            return new ResponseEntity<>(role, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



    }


    


