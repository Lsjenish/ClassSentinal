package com.ClassSentinal.ClassSentinal.utill;


import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

import org.springframework.stereotype.Component;


import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.Builder;

@Component
@Builder
public class JwtUtill {

	private final String SECRET = "jnhfbfondhfbrwhtbreythdfvtrgrbsdkvmmsdvmkfldmvapokcvsdpclsmvkdsmvfd";
	
	private final long EXPIRATION = 1000 * 60 * 60;
	
	private final Key secretKey = Keys.hmacShaKeyFor(SECRET.getBytes(StandardCharsets.UTF_8));
	
	public String generateToken(String email) {
		return Jwts.builder()
			.setSubject(email)
			.setIssuedAt(new Date(System.currentTimeMillis()))
			.setExpiration(new Date(System.currentTimeMillis() + EXPIRATION))
			.signWith(secretKey , io.jsonwebtoken.SignatureAlgorithm.HS384)
			.compact();
	}
	
	public boolean validateJwtToken(String jwt) {
		try {
			extractEmail(jwt);
			
			return true;
		}
		catch (JwtException e) {
			return false;
		}
	}
	public String extractEmail(String jwt) {
		return Jwts.parserBuilder()
				.setSigningKey(secretKey)
				.build()
				.parseClaimsJws(jwt)
				.getBody()
				.getSubject();
	}
	
}
