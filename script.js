let myLibrary = [];

const contentContainer = document.getElementById("content");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    //get book by form
    //store it in the array
}

function displayBooks() {
    for (item in myLibrary) {
        //create card div and assign "card" class
        let card = document.createElement("div");
        card.classList.add("card");
        //create h1, assign title to it and append it to the card
        let h1 = document.createElement("h1");
        h1.textContent = myLibrary[item].title;
        card.append(h1);
        //create h2, assign author to it and append it to the card
        let h2 = document.createElement("h2");
        h2.textContent = myLibrary[item].author;
        card.append(h2);
        //create p, assign pages to it and append it to the card
        let p = document.createElement("p");
        p.textContent = myLibrary[item].pages;
        card.append(p);
        //create a div and a p, change div class and p content according to read
        //append p to div then div to card
        divRead = document.createElement("div");
        pRead = document.createElement("p");
        if (myLibrary[item].read) {
            divRead.classList.add("read");
            pRead.textContent = "read";
        } else {
            divRead.classList.add("not-read");
            pRead.textContent = "not read yet";
        }
        divRead.append(pRead);
        card.append(divRead);

        contentContainer.append(card);
    }
}

//examples
myLibrary[0] = new Book("a", "b", 123, 1);
myLibrary[1] = new Book("a", "b", 123, 1);
myLibrary[2] = new Book("a", "b", 123, 0);

displayBooks();