package pl.edu.pwr.ztw.books.services;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.edu.pwr.ztw.books.models.Book;
import pl.edu.pwr.ztw.books.models.Checkout;

import java.util.List;

public interface CheckoutService extends JpaRepository<Checkout, Long> {
    public List<Checkout> findAllByBook(Book book);
}