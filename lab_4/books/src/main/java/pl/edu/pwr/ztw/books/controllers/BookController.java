package pl.edu.pwr.ztw.books.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.edu.pwr.ztw.books.models.Book;
import pl.edu.pwr.ztw.books.services.BookService;

import java.util.Optional;

@RestController
public class BookController {

    @Autowired
    BookService bookService;

<<<<<<< HEAD
    @CrossOrigin(origins = "http://localhost:8080")
=======
    @CrossOrigin(origins = "http://localhost:8080/*")
>>>>>>> 92d9846... yep
    @RequestMapping(value = "/get/books", method = RequestMethod.GET)
    public ResponseEntity<Object> getBooks() {
        return new ResponseEntity<>(bookService.findAll(), HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(value = "/get/books/{id}", method = RequestMethod.GET)
    public ResponseEntity<Object> getBook(@PathVariable("id") Long id) {
        Optional<Book> item = bookService.findById(id);
        if (item.isPresent()){
            return new ResponseEntity<>(item, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("ERROR",HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(value = "/books/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Object> replaceBook(@RequestBody Book newBook) {
        return new ResponseEntity<>(bookService.save(newBook), HttpStatus.OK);

    }

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(value = "/books/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> deleteBook(@PathVariable("id") Long id) {
        Optional<Book> item = bookService.findById(id);
        if (item.isPresent()){
            bookService.delete(item.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}

