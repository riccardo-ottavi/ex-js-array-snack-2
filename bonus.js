console.log("prova bonus");
//http://localhost:3333/books/{id}


async function getBooks(id){
    const booksPromise = await fetch(`http://localhost:3333/books/${id}`)
    const book = booksPromise.json();
    return book
}

getBooks(3)
.then(b => console.log(b))