package com.examly.springapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginModel {
    private String email;
    private String password;
}
