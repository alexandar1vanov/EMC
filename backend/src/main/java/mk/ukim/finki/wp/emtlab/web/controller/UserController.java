package mk.ukim.finki.wp.emtlab.web.controller;

import mk.ukim.finki.wp.emtlab.helpers.JwtHelper;
import mk.ukim.finki.wp.emtlab.model.domain.User;
import mk.ukim.finki.wp.emtlab.model.dto.LoginUserRequestDto;
import mk.ukim.finki.wp.emtlab.model.dto.LoginUserResponseDto;
import mk.ukim.finki.wp.emtlab.model.dto.RegisterUserRequestDto;
import mk.ukim.finki.wp.emtlab.model.dto.RegisterUserResponseDto;
import mk.ukim.finki.wp.emtlab.service.application.UserApplicationService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserApplicationService userApplicationService;
    private final UserDetailsService userDetailsService;
    private final JwtHelper jwtHelper;

    public UserController(UserApplicationService userApplicationService, UserDetailsService userDetailsService, JwtHelper jwtHelper) {
        this.userApplicationService = userApplicationService;
        this.userDetailsService = userDetailsService;
        this.jwtHelper = jwtHelper;
    }

    @GetMapping("/{username}")
    public ResponseEntity<RegisterUserResponseDto> findByUsername(@PathVariable String username) {
        return userApplicationService
                .findByUsername(username)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/me")
    public ResponseEntity<RegisterUserResponseDto> me(@AuthenticationPrincipal User user) {
        return userApplicationService
                .findByUsername(user.getUsername())
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.badRequest().build());
    }

    @PostMapping("/register")
    public ResponseEntity<RegisterUserResponseDto> register(@RequestBody RegisterUserRequestDto registerUserRequestDto) {
        return userApplicationService
                .register(registerUserRequestDto)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.badRequest().build());
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody LoginUserRequestDto loginUserRequestDto) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(loginUserRequestDto.username());
        String token = jwtHelper.generateToken(userDetails);
        return ResponseEntity.ok(Map.of("token", token));
    }
}