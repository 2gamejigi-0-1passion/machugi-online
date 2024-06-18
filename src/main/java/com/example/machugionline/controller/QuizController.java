package com.example.machugionline.controller;


import com.example.machugionline.exception.ResourceNotFoundException;
import com.example.machugionline.model.User;
import com.example.machugionline.repository.UserRepository;
import com.example.machugionline.security.CurrentUser;
import com.example.machugionline.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class QuizController {
}
