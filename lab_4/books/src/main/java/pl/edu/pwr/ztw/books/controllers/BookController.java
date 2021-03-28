package pl.edu.pwr.ztw.books.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.edu.pwr.ztw.books.models.Book;
import pl.edu.pwr.ztw.books.services.BookService;

@RestController
public class BookController {

    @Autowired
    BookService bookService;

    @RequestMapping(value = "/get/books", method = RequestMethod.GET)
    public ResponseEntity<Object> getBooks()    {
        return new ResponseEntity<>(bookService.findAll(), HttpStatus.OK);
    }

    @RequestMapping(value = "/get/books/{id}", method = RequestMethod.GET)
    public ResponseEntity<Object> getBook(@PathVariable("id") Long id)    {
        return new ResponseEntity<>(bookService.getOne(id), HttpStatus.OK);
    }

    @PostMapping("books")
    public ResponseEntity<Object> addBook(@RequestBody Book newBook)    {
        return new ResponseEntity<>(bookService.save(newBook), HttpStatus.CREATED);
    }


}

