package pl.edu.pwr.ztw.books.services;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.edu.pwr.ztw.books.models.Book;

public interface BookService extends JpaRepository<Book, Long> {
}
