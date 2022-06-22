// 1)

function Person(name, id, age) {
    this.name = name,
        this.id = id,
        this.age = age
}

Object.prototype.sayHi = () => {
    console.log("Hello from prototype");
}

let personKatya = new Person("Katya", 1283847, 34);

console.log(personKatya);
console.log(personKatya.sayHi());


//2)

let favoriteBookRoma = {
    author: "Tolstoy L.N.",
    title: "War and Peace",
    numberOfPages: 1300,
    publishingHouse: "АСТ",
    language: "Russian",
}

function favoriteBook(author, title, numberOfPages) {
    this.author = author,
        this.title = title,
        this.numberOfPages = numberOfPages
};

favoriteBook.prototype = favoriteBookRoma;

let favoriteBookKatya = new favoriteBook("Dostoevsky F.M.", "Brosers Karamaz", 840);

favoriteBook.prototype = favoriteBookKatya;

let favoriteBookLena = new favoriteBook("Dostoevsky F.M.", "Player", 416);

console.log(favoriteBookRoma);
console.log(favoriteBookKatya);
console.log(favoriteBookLena);


//2 var

let favoriteBookRoma2 = {
    author: "Orwell G.",
    title: "Animal Farm: A Fairy Story",
    numberOfPages: 84,
    publishingHouse: "АСТ",
    language: "English",
}

let favoriteBookKatya2 = {
    author: "Dostoevsky F.M.",
    title: "Brosers Karamaz",
    numberOfPages: 840,
    language: "Russian",
    __proto__: favoriteBookRoma2,
};

let favoriteBookLena2 = {
    title: "Player",
    numberOfPages: 416,
    __proto__: favoriteBookKatya2,
}

console.log(favoriteBookKatya2);
console.log(favoriteBookRoma2);
console.log(favoriteBookLena2);


// 3)

let favoriteBookSasha = Object.create(favoriteBookRoma);

Object.setPrototypeOf(favoriteBookSasha, favoriteBookKatya);

console.log(Object.getPrototypeOf(favoriteBookSasha));