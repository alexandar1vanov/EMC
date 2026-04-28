package mk.ukim.finki.wp.emtlab.model.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "countries")
public class Country extends BaseEntity {
    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String continent;

    public Country(String name, String continent) {
        this.name = name;
        this.continent = continent;
    }
}
