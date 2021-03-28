package pl.edu.pwr.ztw.books.services;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pl.edu.pwr.ztw.books.models.Checkout;

import java.util.List;

public interface CheckoutService extends JpaRepository<Checkout, Long> {
    @Query("SELECT c from Checkout c where c.book =:book_id ")       // using @query
    List<Checkout> findByBook(@Param("book_id") Long book_id);
}