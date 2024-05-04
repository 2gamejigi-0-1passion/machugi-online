package com.example.machugionline.controller;


import com.example.machugionline.exception.BadRequestException;
import com.example.machugionline.model.AuthProvider;
import com.example.machugionline.model.User;
import com.example.machugionline.payload.Auth.ApiResponse;
import com.example.machugionline.payload.Auth.AuthResponse;
import com.example.machugionline.payload.Auth.LoginRequest;
import com.example.machugionline.payload.Auth.SignUpRequest;
import com.example.machugionline.repository.UserRepository;
import com.example.machugionline.security.TokenProvider;
import com.example.machugionline.security.UserPrincipal;
import com.example.machugionline.util.AuthenticationSuccessHandlerUtil;
import com.example.machugionline.util.JwtTokenUtil;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

@RestController  //Controller처럼 동작하면서 return값을 response body에 입력가능
@RequiredArgsConstructor // Lombok에서 @AutoWired 대체하는 어노테이션
public class AuthController {
    private final RedirectStrategy redirectStrategy;
    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    private final UserRepository userRepository;

    private final TokenProvider tokenProvider;
    private final JwtTokenUtil jwtTokenUtil;
    private final AuthenticationSuccessHandlerUtil successHandler;
    //@Valid는 LoginRequest 객체 검증

    private String determineRedirectUrl(HttpServletRequest request, Authentication authentication) {

        String redirectUrl = "http://localhost:3000/local/redirect";

        UriComponentsBuilder builder = UriComponentsBuilder.fromUriString(redirectUrl);

        Long userId = ((UserPrincipal)authentication.getPrincipal()).getId();

        String token = jwtTokenUtil.generateToken(userId);

        builder.queryParam("token", token);

        return builder.toUriString();
    }

    @PostMapping("/signIn")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = tokenProvider.createToken(authentication);
        return ResponseEntity.ok(new AuthResponse(token));
    }
    @PostMapping("/signUp")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {

        if(userRepository.existsByEmail(signUpRequest.getEmail())) {
            throw new BadRequestException("Email address already in use.");
        }

        // Creating user's account
        User user = new User();
        user.setName(signUpRequest.getName());
        user.setEmail(signUpRequest.getEmail());
        user.setPassword(signUpRequest.getPassword());
        user.setAuthProvider(AuthProvider.local);

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        userRepository.save(user);

        // 회원 가입 성공 API 리턴
        return ResponseEntity.ok(new ApiResponse(true, "User registered successfully"));

    }
}