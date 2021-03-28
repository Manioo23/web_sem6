package pl.edu.pwr.ztw.books.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.edu.pwr.ztw.books.models.Person;
import pl.edu.pwr.ztw.books.services.PersonService;

import java.util.Optional;

@RestController
public class PersonController {
    @Autowired
    PersonService personService;

    @RequestMapping(value = "/persons", method = RequestMethod.GET)
    public ResponseEntity<Object> getPersons() { return new ResponseEntity<>(personService.findAll(), HttpStatus.OK); }

    @RequestMapping(value = "/persons/{id}", method = RequestMethod.GET)
    public ResponseEntity<Object> getPersons(long id) { return new ResponseEntity<>(personService.findById(id), HttpStatus.OK); }

    @RequestMapping(value = "/persons/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> deletePerson(@PathVariable("id") Long id) {
        Optional<Person> person = personService.findById(id);
        if (person.isPresent()){
            personService.delete(person.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @RequestMapping(value = "/persons/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Object> updatePersons(@RequestBody Person newPerson, @PathVariable("id") long id) {
        Optional<Person> person = personService.findById(id);
        if(person.isPresent()) {
            person.map(prs -> {
                prs.setFirstName(newPerson.getFirstName());
                prs.setLastName(newPerson.getLastName());
                prs.setPhoneNumber(newPerson.getPhoneNumber());
                return personService.save(prs);
            });
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @RequestMapping(value = "/persons", method = RequestMethod.POST)
    public ResponseEntity<Object> addPerson(@RequestBody Person newPerson) {
        return new ResponseEntity<>(personService.save(newPerson), HttpStatus.OK);
    }
}
