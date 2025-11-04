package com.ClassSentinal.ClassSentinal.service;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ClassSentinal.ClassSentinal.model.User;
import com.ClassSentinal.ClassSentinal.repository.UserRepository;
import com.ClassSentinal.ClassSentinal.request.LoginRequest;
import com.ClassSentinal.ClassSentinal.request.RegisterRequest;
import com.ClassSentinal.ClassSentinal.response.UserResponse;
import com.ClassSentinal.ClassSentinal.utill.JwtUtill;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

	private final UserRepository repository;
	
	private final PasswordEncoder encoder;
	
	private final JwtUtill jwtUtill;

	
	
	public UserResponse registerUser(RegisterRequest req , String token) {
		
		User user = new User();
		
		user.setName(req.getName());
		user.setEmail(req.getEmail());
		user.setPassword(encoder.encode(req.getPasswordHash()));
		user.setRole(req.getRole());
		user.setCreatedAt(new Date(System.currentTimeMillis()));
		
		
		repository.save(user);
		UserResponse savedUser = UserResponse.builder()
				.message("the user created successfully...")
				.jwt(token)
				.name(user.getName())
				.email(user.getEmail())
				.createdAt(user.getCreatedAt())
				.build();
		
		return savedUser;
	}

	public UserResponse loginUser(LoginRequest req , String jwt) {
		UserResponse u = new UserResponse();
		u.setMessage("Logged In SuccessFully");
		u.setJwt(jwt);
		return u;
	}
	
	
	
}
