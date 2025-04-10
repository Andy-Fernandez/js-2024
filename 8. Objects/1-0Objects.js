const movie = {
  name: "The Matrix",
  price: 14.99,
  description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
  year: 1999,
  projectionTime: "2h 16m",
  genre: "Sci-Fi",
  director: "Wachowski Sisters",
  rating: 8.7,
  cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
  getName() {console.log(`The name in ${this.name}`)}
};

movie.getName()


movie.getFormattedInfo = function () {
  return `${this.name} (${this.year})\nDescription: ${this.description}\nRating: ${this.rating}`;
}

movie.sayGoodbye = () => console.log('bye');

console.log(movie.getFormattedInfo());
movie.sayGoodbye();

console.log(movie)