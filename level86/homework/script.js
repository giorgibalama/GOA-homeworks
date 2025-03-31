
const book = {
    title: "Frankenstein",
    author: "Mary Shelley",
    year: 1818,
    genre: "Gothic Horror"
  };
  
  
  console.log(book);
  
  
  console.log("Title:", book.title);
  console.log("Author:", book.author);
  console.log("Year:", book.year);
  console.log("Genre:", book.genre);
  
  
  console.log("Title:", book["title"]);
  console.log("Author:", book["author"]);
  console.log("Year:", book["year"]);
  console.log("Genre:", book["genre"]);
  
  
  const sentence = `The book titled "${book.title}", written by ${book.author} and published in ${book.year}, is a ${book.genre} novel.`;

  console.log(sentence);