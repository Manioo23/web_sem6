package pl.edu.pwr.ztw.books.models;

import javax.persistence.*;

@Entity
@Table
public class Checkout {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name="person_id")
    private Person person;

    @ManyToOne
    @JoinColumn(name="book_id")
    private Book book;

    public Checkout(){

    }

    public Checkout(Long id, Person person, Book book) {
        this.id = id;
        this.person = person;
        this.book = book;
    }

    public Checkout(Person person, Book book) {
        this.person = person;
        this.book = book;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }
}
