package com.ClassSentinal.ClassSentinal.response;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserResponse {

	private String message;
	
	private String name;
	
    private String email;
    
    private String jwt; 

    private Date createdAt;
}
