package pl.edu.pwr.ztw.books.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.edu.pwr.ztw.books.models.Author;
import pl.edu.pwr.ztw.books.services.AuthorService;

import java.util.Optional;

@RestController
public class AuthorController {

    @Autowired
    AuthorService authorService;

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(value = "/authors", method = RequestMethod.GET)
    public ResponseEntity<Object> getAuthors() { return new ResponseEntity<>(authorService.findAll(), HttpStatus.OK); }

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(value = "/authors/{id}", method = RequestMethod.GET)
    public ResponseEntity<Object> getAuthor(long id) { return new ResponseEntity<>(authorService.findById(id), HttpStatus.OK); }

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(value = "/authors/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> deleteAuthor(@PathVariable("id") Long id) {
        Optional<Author> author = authorService.findById(id);
        if (author.isPresent()){
            authorService.delete(author.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @CrossOrigin(origins = "http://localhost:8080")
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

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(value = "/authors", method = RequestMethod.POST)
    public ResponseEntity<Object> addAuthor(@RequestBody Author newAuthor) {
        return new ResponseEntity<>(authorService.save(newAuthor), HttpStatus.OK);
    }
}
