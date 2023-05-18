package com.Whitecape.PFE.repositories;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;


import com.Whitecape.PFE.models.User;

public interface UserRepository extends MongoRepository<User, String> {
	User findByUsername(String username);
    User findByEmail(String email);
    User findByEmailAndPassword(String email, String password);
    void deleteByEmail(String email);
	Optional<User> findById(String userId);

}
