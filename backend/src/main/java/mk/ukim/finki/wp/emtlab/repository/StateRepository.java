package mk.ukim.finki.wp.emtlab.repository;

import mk.ukim.finki.wp.emtlab.model.domain.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StateRepository extends JpaRepository<State, Long> {
}
