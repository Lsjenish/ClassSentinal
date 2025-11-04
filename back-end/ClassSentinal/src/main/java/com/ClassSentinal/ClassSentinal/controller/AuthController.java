package com.ClassSentinal.ClassSentinal.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ClassSentinal.ClassSentinal.model.User;
import com.ClassSentinal.ClassSentinal.repository.UserRepository;
import com.ClassSentinal.ClassSentinal.request.LoginRequest;
import com.ClassSentinal.ClassSentinal.request.RegisterRequest;
import com.ClassSentinal.ClassSentinal.response.UserResponse;
import com.ClassSentinal.ClassSentinal.service.UserService;
import com.ClassSentinal.ClassSentinal.utill.JwtUtill;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

	private final UserService service;
	
	private final UserRepository repository;
	
	private final PasswordEncoder encoder;
	
	private final JwtUtill jwtUtill;
	
	@PostMapping("/register")
	public ResponseEntity<UserResponse> createUser(@RequestBody RegisterRequest req){	
		
		String email = req.getEmail();
		
		if(repository.findByEmail(email).isPresent()) {
			UserResponse u = new UserResponse();
			u.setMessage("The email already exists");
			return ResponseEntity.status(HttpStatus.CONFLICT).body(u);
		}
		String token = jwtUtill.generateToken(email);
		UserResponse user = service.registerUser(req , token);
		return new ResponseEntity<>(user , HttpStatus.CREATED);
	}
	
	@PostMapping("/login")
	public ResponseEntity<UserResponse> loginUser(@RequestBody LoginRequest req){
		String email = req.getEmail();
		String password  = req.getPassword();
		
		if(repository.findByEmail(email).isEmpty()) {
			UserResponse u = new UserResponse();
			u.setMessage("Please create an account before login..");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(u);
		}
		
		User user = repository.findByEmail(email).get();
		
		
		if(!encoder.matches(password , user.getPassword())){
			UserResponse u = new UserResponse();
			u.setMessage("Password doesnot matches");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(u);
		}
		
		String token = jwtUtill.generateToken(email);
		UserResponse user1 = service.loginUser(req , token);
		
		return new ResponseEntity<>(user1 , HttpStatus.ACCEPTED);
	}
}
