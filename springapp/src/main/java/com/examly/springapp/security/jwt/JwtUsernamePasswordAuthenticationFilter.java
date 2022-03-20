package com.examly.springapp.security.jwt;
import com.examly.springapp.entity.User;
import com.examly.springapp.model.LoginModel;
import com.examly.springapp.service.ApplicationUserDetailsService;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.json.simple.JSONObject;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDate;
import java.util.Date;
import java.io.PrintWriter;
import org.springframework.security.core.userdetails.UserDetails;

public class JwtUsernamePasswordAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;
    private final ApplicationUserDetailsService applicationUserDetailsService;
    private String email=null;
    private String userRole=null;

    public JwtUsernamePasswordAuthenticationFilter(AuthenticationManager authenticationManager,ApplicationUserDetailsService applicationUserDetailsService) {
        this.authenticationManager = authenticationManager;
        this.applicationUserDetailsService =applicationUserDetailsService;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        try {
            LoginModel loginModel = new ObjectMapper().readValue(request.getInputStream(), LoginModel.class);
            email=loginModel.getEmail();
            Authentication authentication = new UsernamePasswordAuthenticationToken(loginModel.getEmail(),loginModel.getPassword());
            return authenticationManager.authenticate(authentication);

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        String key = "securekeysecurekeysecurekeysecurekeysecurekeysecurekeysecurekeysecurekey";

        String token = Jwts.builder().setSubject(authResult.getName())
                .claim("authorities", authResult.getAuthorities())
                .setIssuedAt(new Date())
                .setExpiration(java.sql.Date.valueOf(LocalDate.now().plusWeeks(2)))
                .signWith(Keys.hmacShaKeyFor(key.getBytes()))
                .compact();
        User user= applicationUserDetailsService.loadUserRole(email);
        response.addHeader("Authorization", "Bearer "+token);
        response.setContentType("application/json");
        response.setCharacterEncoding("utf-8");
         PrintWriter out = response.getWriter();
         JSONObject json = new JSONObject();
         json.put("userToken", token);
         json.put("status", 200);
         json.put("email",email);
         json.put("userRole",user.getUserRole());
         out.print(json.toString());
         out.flush();
         response.setStatus(200);
    }
}
