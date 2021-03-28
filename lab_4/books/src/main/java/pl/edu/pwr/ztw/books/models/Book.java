package pl.edu.pwr.ztw.books.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="books")
public class Book {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private int pages;

    @ManyToOne
    @JoinColumn(name="author_id")
    private Author author;

    @OneToMany(mappedBy = "book")
    List<Checkout> checkouts;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
