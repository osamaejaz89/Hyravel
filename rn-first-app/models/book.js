class Book {
  constructor(
    displayName,
    book_id,
    key,
    book_fromdate,
    book_todate,
    book_cnic,
    book_description
  ) {
    this.displayName = displayName;
    this.book_id = book_id;
    this.key = key;
    this.book_fromdate = book_fromdate;
    this.book_todate = book_todate;
    this.book_cnic = book_cnic;
    this.book_description = book_description;
  }
}

export default Book;
