package pl.edu.pwr.ztw.books.services;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.edu.pwr.ztw.books.models.Person;

public interface PersonService extends JpaRepository<Person, Long> {
}
