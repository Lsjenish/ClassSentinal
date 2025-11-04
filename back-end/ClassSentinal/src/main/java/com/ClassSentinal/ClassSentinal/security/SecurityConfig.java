package com.ClassSentinal.ClassSentinal.security;

import com.ClassSentinal.ClassSentinal.utill.Jwtfilter;

import jakarta.servlet.Filter;
import lombok.RequiredArgsConstructor;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig {

    
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
		
	}
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http , Jwtfilter jwtfilter) throws Exception{
		http
			.csrf(AbstractHttpConfigurer::disable)  // to maintain our project stateless
			.authorizeHttpRequests((auth) -> auth
					.anyRequest().permitAll()
					)
			.addFilterBefore(jwtfilter, UsernamePasswordAuthenticationFilter.class);
		return http.build();
	}
}
