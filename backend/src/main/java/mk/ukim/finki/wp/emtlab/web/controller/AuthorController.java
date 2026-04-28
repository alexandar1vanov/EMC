package mk.ukim.finki.wp.emtlab.web.controller;

import mk.ukim.finki.wp.emtlab.model.dto.DisplayAuthorDTO;
//import mk.ukim.finki.wp.emtlab.model.dto.DisplayAuthorDTO;
import mk.ukim.finki.wp.emtlab.service.domain.AuthorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/authors")
public class AuthorController {

    private final AuthorService authorService;

    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }

    @GetMapping
    public ResponseEntity<List<DisplayAuthorDTO>> findAll() {
        return ResponseEntity.ok(
                authorService.findAll().stream()
                        .map(DisplayAuthorDTO::from)
                        .toList()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<DisplayAuthorDTO> findById(@PathVariable Long id) {
        return authorService.findById(id)
                .map(author -> ResponseEntity.ok(DisplayAuthorDTO.from(author)))
                .orElse(ResponseEntity.notFound().build());
    }
}
