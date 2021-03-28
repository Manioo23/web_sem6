package pl.edu.pwr.ztw.books.services;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.edu.pwr.ztw.books.models.Author;

public interface AuthorService extends JpaRepository<Author, Long> {}