const movies = [
    {
        title: "The Matrix",
        director: "Wachowski Brothers",
        year: 1999,
        rating: 8.7,
    },
    {
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        rating: 8.8,
    },
    {
        title: "Interstellar",
        director: "Christopher Nolan",
        year: 2014,
        rating: 8.6,
    },
    {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: 1972,
        rating: 9.2,
    },
    {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        year: 2008,
        rating: 9.0,
    },
    {
        title: "Fight Club",
        director: "David Fincher",
        year: 1999,
        rating: 8.8
    },
];

let After2000 = movies.find(function (mov) {
    return mov.year > 2000;
});
console.log(After2000.title);

console.log("-------------------------------------------------------------------------");

let Above9 = movies.find(function (mov) {
    return mov.rating > 9;
});
console.log(Above9.title);

console.log("-------------------------------------------------------------------------");

let direc = movies.filter(function (mov) {
    return mov.director === "Christopher Nolan";
});
console.log(direc);

console.log("-------------------------------------------------------------------------");

let before2010 = movies.filter(function (mov) {
    return mov.year < 2010;
});
console.log(before2010);

console.log("-------------------------------------------------------------------------");

let titles = movies.map(function (mov) {
    return mov.title;
});
console.log(titles);

console.log("-------------------------------------------------------------------------");

let totalRate = movies.reduce(function (total, mov) {
    return total + mov.rating;
}, 0);
let averageRate = totalRate / movies.length;
console.log(averageRate);

console.log("-------------------------------------------------------------------------");

let sortYear = movies.slice().sort(function (a, b) {
    return a.year - b.year;
});
console.log(sortYear);

console.log("-------------------------------------------------------------------------");

let sortRate = movies.slice().sort(function (a, b) {
    return b.rating - a.rating;
});
console.log(sortRate);

console.log("-------------------------------------------------------------------------");

let Above8 = movies.every(function (mov) {
    return mov.rating > 8;
});
console.log(Above8);

console.log("-------------------------------------------------------------------------");

let there1999 = movies.some(function (mov) {
    return mov.year == 1999;
});
console.log(there1999);

console.log("-------------------------------------------------------------------------");

let sameDirec = movies.every(function (mov) {
    return mov.director == movies[0].director;
});
console.log(sameDirec);

console.log("-------------------------------------------------------------------------");

let rate85 = movies.some(function (mov) {
    return mov.rating < 8.5;
});
console.log(rate85);