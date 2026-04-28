package mk.ukim.finki.wp.emtlab.model.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import mk.ukim.finki.wp.emtlab.model.domain.Author;
import mk.ukim.finki.wp.emtlab.model.domain.Book;
import mk.ukim.finki.wp.emtlab.model.domain.Category;
import mk.ukim.finki.wp.emtlab.model.domain.State;

import java.util.List;

public record CreateBookDTO(
        @NotBlank(message = "A name is required")
        String name,
        @NotNull(message = "A category must be selected")
        Long categoryId,
        @NotEmpty(message = "At least one Author must be provided")
        List<Long> authorIds,
        @NotNull(message = "A state must be selected")
        Long stateId,
        @Positive(message = "Available copies must be greater than 0")
        @NotNull(message = "Please specify the number of copies")
        Integer availableCopies
) {
    public Book toBook(Category category, List<Author> authors, State state) {
        return new Book(name, category, authors, state, availableCopies);
    }
}
