package mk.ukim.finki.wp.emtlab.model.dto;

import mk.ukim.finki.wp.emtlab.model.domain.User;
import mk.ukim.finki.wp.emtlab.model.enums.Role;

public record RegisterUserResponseDto(
        String username,
        Role role
) {
    public static RegisterUserResponseDto from(User user) {
        return new RegisterUserResponseDto(
                user.getUsername(),
                user.getRole()
        );
    }
}