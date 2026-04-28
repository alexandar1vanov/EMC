package mk.ukim.finki.wp.emtlab.model.dto;

import mk.ukim.finki.wp.emtlab.model.domain.Author;
import mk.ukim.finki.wp.emtlab.model.domain.Country;

public record CreateAuthorDTO(
        String name,
        String surname,
        Long countryId
) {
    public Author toAuthor(Country country) {
        return new Author(name, surname, country);
    }
}
