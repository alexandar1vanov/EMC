package mk.ukim.finki.wp.emtlab.model.dto;

import mk.ukim.finki.wp.emtlab.model.domain.User;

public record RegisterUserRequestDto(
        String username,
        String password
) {
    public User toUser() {
        return new User(username, password);
    }
}