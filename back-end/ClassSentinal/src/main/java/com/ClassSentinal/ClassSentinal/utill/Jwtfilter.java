package com.ClassSentinal.ClassSentinal.utill;

import java.io.IOException;

import java.util.List;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class Jwtfilter extends OncePerRequestFilter{

	private final JwtUtill jwtUtill;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		String header = request.getHeader("Authorization");
		
		if(header != null && header.startsWith("Beares ")) {
			String jwt = header.substring(7);
			
			if(jwtUtill.validateJwtToken(jwt)) {
				
				String email =  jwtUtill.extractEmail(jwt);
				
				var auth = new UsernamePasswordAuthenticationToken(email , null ,List.of());
				
				SecurityContextHolder.getContext().setAuthentication(auth);
			}
		}
		
		filterChain.doFilter(request, response);
	}

	
	
	

	
}
