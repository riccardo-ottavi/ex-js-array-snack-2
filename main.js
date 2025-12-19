console.log("prova")

const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

//Snack 1 - Filtra e Modifica
const longBooks = books.filter(b => b.pages > 300)
console.log(longBooks)

const longBooksTitles = longBooks.map(b => b.title);
console.log(longBooksTitles)

const availableBooks = books.filter(b => b.available === true)
console.log(availableBooks)

const discountedBooks = availableBooks.map((b) => {
    b.price = parseInt(b.price) - (parseInt(b.price) * 20 / 100);
    Math.round(b.price)
    b.price = b.price.toFixed(2).toString() + "€"
    return b
})
console.log(discountedBooks)

const fullPricedBook = discountedBooks.find(b => Number.isInteger(parseInt(b.price)))
console.log(fullPricedBook)

const authors = books.map(b => b.author)
console.log(authors)

const areAuthorsAdults = authors.every(author => author.age > 18)
console.log(areAuthorsAdults)

authors.sort((a, b) => {
    return b.age - a.age
}
)
console.log(authors)