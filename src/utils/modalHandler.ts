import { ModalHandlerProps } from "../types/types";

export const handleModalSubmit = ({
  modalType,
  formData,
  originalBooks,
  setBooks,
}: ModalHandlerProps) => {
  try {
    switch (modalType) {
      case "UPDATE_NAME":
        setBooks((prevBooks) =>
          prevBooks.map((book) =>
            book.bookName === formData.oldBookName
              ? { ...book, bookName: formData.newBookName }
              : book
          )
        );
        break;

      case "UPDATE_FULL":
        setBooks((prevBooks) =>
          prevBooks.map((book) =>
            book.bookName === formData.oldBookName &&
            book.bookAuthor === formData.oldAuthor
              ? {
                  ...book,
                  bookName: formData.newBookName,
                  bookAuthor: formData.newAuthor,
                }
              : book
          )
        );
        break;

      case "DELETE":
        setBooks((prevBooks) =>
          prevBooks.filter((book) => book.bookName !== formData.bookName)
        );
        break;

      case "DELETE_BY_ID":
        setBooks((prevBooks) =>
          prevBooks.filter((book) => book.bookId.toString() !== formData.bookId)
        );
        break;

      case "DELETE_BY_NAME_CATEGORY":
        setBooks((prevBooks) =>
          prevBooks.filter(
            (book) =>
              !(
                book.bookName === formData.bookName &&
                book.bookCategory === formData.category
              )
          )
        );
        break;

      case "DELETE_BY_DESC_AUTHOR":
        setBooks((prevBooks) => {
          const filteredBooks = prevBooks.filter(
            (book) =>
              book.bookDes !== formData.description &&
              book.bookAuthor !== formData.author
          );
          return filteredBooks;
        });
        break;

      case "SHOW_BY_ID":
        const bookById = originalBooks.filter(
          (book) => book.bookId.toString() === formData.bookId
        );
        setBooks(bookById);
        break;

      case "SHOW_BY_NAME":
        const bookByName = originalBooks.filter(
          (book) => book.bookName === formData.bookName
        );
        setBooks(bookByName);
        break;

      case "SHOW_BY_NAME_AUTHOR":
        const bookByNameAuthor = originalBooks.filter(
          (book) =>
            book.bookName === formData.bookName &&
            book.bookAuthor === formData.author
        );
        setBooks(bookByNameAuthor);
        break;

      default:
        console.warn("Unhandled modal type:", modalType);
    }
    return true;
  } catch (error) {
    console.error("Error handling submission:", error);
    return false;
  }
};
