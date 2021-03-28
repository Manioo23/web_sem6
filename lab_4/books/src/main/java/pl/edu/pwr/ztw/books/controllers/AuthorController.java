package pl.edu.pwr.ztw.books.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.edu.pwr.ztw.books.models.Author;
import pl.edu.pwr.ztw.books.services.AuthorService;

import java.util.Optional;

@RestController
public class AuthorController {

    @Autowired
    AuthorService authorService;

    @RequestMapping(value = "/authors", method = RequestMethod.GET)
    public ResponseEntity<Object> getAuthors() { return new ResponseEntity<>(authorService.findAll(), HttpStatus.OK); }

    @RequestMapping(value = "/authors/{id}", method = RequestMethod.GET)
    public ResponseEntity<Object> getAuthor(long id) { return new ResponseEntity<>(authorService.findById(id), HttpStatus.OK); }


    @RequestMapping(value = "/authors/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> deleteBook(@PathVariable("id") Long id) {
        Optional<Author> author = authorService.findById(id);
        if (author.isPresent()){
            authorService.delete(author.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @RequestMapping(value = "/authors/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Object> updateAuthor(@RequestBody Author newAuthor, @PathVariable("id") long id) {
        Optional<Author> author = authorService.findById(id);
        if(author.isPresent()) {
            author.map(ath -> {
                ath.setFirstName(newAuthor.getFirstName());
                ath.setMiddleName(newAuthor.getMiddleName());
                ath.setLastName(newAuthor.getLastName());
                return authorService.save(ath);
            });
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @RequestMapping(value = "/authors", method = RequestMethod.POST)
    public ResponseEntity<Object> addAuthor(@RequestBody Author newAuthor) {
        return new ResponseEntity<>(authorService.save(newAuthor), HttpStatus.OK);
    }
}
