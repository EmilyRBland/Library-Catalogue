class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(checkedOut) {
    this._isCheckedOut = checkedOut;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  addRating(rating) {
    this._ratings.push(rating);
  }
  getAverageRating() {
    const rating = this._ratings;
    let sum = 0;
    for(let i = 0; i < rating.length; i++) {
      sum += rating[i]; // Could have also used the reduce method
    }
    return sum /= rating.length;
  }
}

// Test for class Media
/*
const opio = new Media('Opio');

opio.addRating(3);
opio.addRating(5);
opio.addRating(2);
opio.addRating(5);
console.log(opio.getAverageRating());

opio.toggleCheckOutStatus();
console.log(opio.isCheckedOut);
*/

class Book extends Media {
  constructor(title, author) {
    super(title);
    this._author = author;
    this._pages = 'pages';
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
  set pages(number) {
    this._pages = number;
    // Used setter rather than including in constructor as I wanted to practice using them more.
  }
}
// test class Book
/*
const harryPotter = new Book('Harry Potter and the Half-Blood Prince', 'J.K.Rowling');
harryPotter.pages = 607;
harryPotter.addRating(5);
harryPotter.addRating(4);
harryPotter.addRating(5);
harryPotter.addRating(5);
harryPotter.toggleCheckOutStatus();
console.log(harryPotter);
*/

class Movie extends Media {
  constructor(title, director,runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}
// test class Movie
/*
const dayAfterTomorrow = new Movie('The Day After Tomorrow', 'Roland Emmerich', 124);

dayAfterTomorrow.addRating(4);
dayAfterTomorrow.addRating(2);
dayAfterTomorrow.addRating(3);
dayAfterTomorrow.addRating(5);
console.log(dayAfterTomorrow);
*/

class CD extends Media {
  constructor(title, artist) {
    super(title);
    this._artist = artist;
    this._songs = [];
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
  addSongs(song) {
    this._songs.push(song);
  }
}

// test class CD
/*
const tangledUp = new CD('Tangled Up', 'Thomas Rhett');
tangledUp.addSongs(['Anthem', 'Crash and Burn', 'South Side', 'Die a Happy Man', 'Vacation', 'Like It\'s the Last Time', 'T-Shirt', 'Single Girl', 'The Day You Stop Looking Back', 'Tangled', 'Playing with Fire', 'I Feel Good', 'Learned It from the Radio']);
tangledUp.addRating(4);
tangledUp.addRating(5);
tangledUp.addRating(5);
tangledUp.addRating(3);
console.log(tangledUp);

console.log(tangledUp.songs[0][4]);
*/
