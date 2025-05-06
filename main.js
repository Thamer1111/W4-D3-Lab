let Book = {
    title: "The Mountain is You",
    author: "Brianna Wiest",
    year: "2020",
    isAvailable: true,
    borrow : function Available(isAvailable){
        Book.isAvailable = false; 
        console.log("The book has been borrowed.");
    },
    publisher:{name:"jarir", location:{city:"Riyadh", country: "Saudi Arabia"}}
};

console.log(Book);

console.log("-------------------------------------------------------------------------");

console.log(Book.title);

Book.year = 2025;

console.log(Book);

console.log("-------------------------------------------------------------------------");

delete Book.author;

console.log(Book);

console.log("-------------------------------------------------------------------------");

Book.borrow();

console.log(Book);

console.log("-------------------------------------------------------------------------");

console.log(Book.publisher);


console.log("-------------------------------------------------------------------------");

console.log(Book.publisher.location);
