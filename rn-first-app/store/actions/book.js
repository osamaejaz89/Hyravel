import * as firebase from "firebase";
import Book from "../../models/book";

export const BOOK_CAR = "BOOK_CAR";
export const FETCH_CAR = "FETCH_CAR";

export const fetchCar = () => {
  return async (dispatch) => {
    const userId = firebase.auth().currentUser.uid;
    const displayName = firebase.auth().currentUser.displayName;
    const response = await fetch(
      `https://hyravelproject.firebaseio.com/book/${userId}.json`
    );
    const resData = await response.json();
    const loadedBook = [];

    for (const key in resData) {
      loadedBook.push(
        new Book(
          displayName,
          resData[key].book_id,
          key,
          resData[key].book_fromdate,
          resData[key].book_todate,
          resData[key].book_cnic,
          resData[key].book_description
        )
      );
    }
    dispatch({
      type: FETCH_CAR,
      book: loadedBook,
      currentBook: loadedBook.filter((req) => req.bookId === userId),
    });
  };
};
export const bookCar = (
  book_fromdate,
  book_todate,
  book_cnic,
  book_description
) => {
  return async (dispatch, getState) => {
    const userId = firebase.auth().currentUser.uid;
    const displayName = firebase.auth().currentUser.displayName;
    const response = await fetch(
      `https://hyravelapp.firebaseio.com/book/${userId}.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          displayName,
          book_id: userId,
          book_fromdate,
          book_todate,
          book_cnic,
          book_description,
        }),
      }
    );

    const resData = await response.json();
    dispatch({
      type: BOOK_CAR,
      bookData: {
        displayName,
        book_id: userId,
        book_reqid: resData.name,
        book_fromdate,
        book_todate,
        book_cnic,
        book_description,
      },
    });
  };
};
