package pl.edu.pwr.ztw.books.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pwr.ztw.books.models.Book;
import pl.edu.pwr.ztw.books.models.Checkout;
import pl.edu.pwr.ztw.books.models.Person;
import pl.edu.pwr.ztw.books.services.CheckoutService;

import java.util.List;

@RestController
public class CheckoutController {
    @Autowired
    CheckoutService checkoutService;

    @RequestMapping(value = "/checkout", method = RequestMethod.POST)
    public ResponseEntity<Object> addCheckout(@RequestBody Checkout checkout) {
        List<Checkout> checkouts = checkoutService.findAllByBook(checkout.getBook());
        boolean bIsLend = checkouts.size() % 2 == 1;
        if(bIsLend) {
            if(checkouts.get(checkouts.size() - 1).getPerson().getId().equals(checkout.getPerson().getId())) {
                return new ResponseEntity<>(checkoutService.save(checkout), HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>(HttpStatus.CONFLICT);
            }
        } else {
            return new ResponseEntity<>(checkoutService.save(checkout), HttpStatus.CREATED);
        }
    }

}