let myLibrary = [];

const contentContainer = document.getElementById("content");

//handle dialog
const addButton = document.getElementById("add");
const dialogWindow = document.getElementById("dialog");
const outputBox = document.getElementById("output");
const confirmButton = document.getElementById("confirm");
const cancelButton = document.getElementById("cancel");
const form = document.forms["add-book-form"];

addButton.addEventListener('click', () => {
    resetForm();
    dialogWindow.showModal();
});

confirmButton.addEventListener('click', (event) => {
    event.preventDefault();
    getFormValues();
});

cancelButton.addEventListener('click', () => {
    resetForm();
    dialogWindow.close();
});

function getFormValues() {
    console.log(0);
    if (form.title.value && form.author.value && form.pages.value && form.pages.value > 0) {
        console.log(1);
        addBookToLibrary(form.title.value, form.author.value, form.pages.value, form.read.checked);
        dialogWindow.close();
    } else {
        if (!form.title.value) {
            form.title.setCustomValidity("required");
        }
        if (!form.author.value) {
            form.author.setCustomValidity("required");
        }
        if (!form.pages.value || form.pages.value < 1) {
            form.pages.setCustomValidity("required");
        }
    }
    return;
}

function resetForm () {
    form.reset();
    form.title.setCustomValidity("");
    form.author.setCustomValidity("");
    form.pages.setCustomValidity("");
}
//

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    //remove previous books from the DOM
    let previousLibrary = document.getElementsByClassName("card");
    while (previousLibrary[0]) {
        previousLibrary[0].parentNode.removeChild(previousLibrary[0]);
    }
    //
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