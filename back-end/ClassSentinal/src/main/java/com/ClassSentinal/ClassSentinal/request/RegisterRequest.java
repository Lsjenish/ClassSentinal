package com.ClassSentinal.ClassSentinal.request;

import com.ClassSentinal.ClassSentinal.model.Role;

import lombok.Data;

@Data
public class RegisterRequest {

	private String name;
	
	private String email;

    private String passwordHash;

    private Role role;
}
