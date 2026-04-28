package mk.ukim.finki.wp.emtlab.model.dto;

import mk.ukim.finki.wp.emtlab.model.domain.Author;

import java.util.List;

public record DisplayAuthorDTO(
        Long id,
        String name,
        String surname,
        Long countryId
) {
    public static DisplayAuthorDTO from(Author author) {
        return new DisplayAuthorDTO(
                author.getId(),
                author.getName(),
                author.getSurname(),
                author.getCountry().getId()
        );
    }

    public static List<DisplayAuthorDTO> from(List<Author> authors) {
        return authors
                .stream()
                .map(DisplayAuthorDTO::from)
                .toList();
    }
}
