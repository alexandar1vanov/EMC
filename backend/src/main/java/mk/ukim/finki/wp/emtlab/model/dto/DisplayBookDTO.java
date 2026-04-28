package mk.ukim.finki.wp.emtlab.model.dto;

import mk.ukim.finki.wp.emtlab.model.domain.Author;
import mk.ukim.finki.wp.emtlab.model.domain.BaseEntity;
import mk.ukim.finki.wp.emtlab.model.domain.Book;

import java.time.LocalDateTime;
import java.util.List;

public record DisplayBookDTO(
        Long id,
        String name,
        Long categoryId,
        List<String> authorFullNames,
        Long stateId,
        Integer availableCopies
) {


    public static DisplayBookDTO from(Book book) {
        return new DisplayBookDTO(
                book.getId(),
                book.getName(),
                book.getCategory().getId(),
                book.getAuthors().stream().map(author -> author.getName() + " " + author.getSurname()).toList(),
                book.getState().getId(),
                book.getAvailableCopies()
        );
    }

    public static List<DisplayBookDTO> from(List<Book> books) {
        return books
                .stream()
                .map(DisplayBookDTO::from)
                .toList();
    }



}
