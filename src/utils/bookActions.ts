import { StateSetters } from "../types/types";

export const bookActions: { [key: string]: (setters: StateSetters) => void } = {
  updateByName: ({ setIsModelOpen, setModelType }) => {
    setModelType("UPDATE_BY_NAME");
    setIsModelOpen(true);
  },
  updateByNameAndAuthor: ({ setIsModelOpen }) => {
    setIsModelOpen(true);
  },
  deleteByBookId: ({ setIsModelOpen }) => {
    setIsModelOpen(true);
  },
  deleteByBookName: ({ setIsModelOpen }) => {
    setIsModelOpen(true);
  },
  deleteByBookDescAndAuthor: ({ setIsModelOpen }) => {
    setIsModelOpen(true);
  },
  deleteByBookNameAndCategory: ({ setIsModelOpen }) => {
    setIsModelOpen(true);
  },
  showAll: ({ setIndex, setOriginalBooks, originalBooks }) => {
    setIndex(null);
    setOriginalBooks(originalBooks);
  },
  showBookById: ({ setIsModelOpen }) => {
    setIsModelOpen(true);
  },
  showBookByName: ({ setIsModelOpen }) => {
    setIsModelOpen(true);
  },
  showBookByNameAndAuthor: ({ setIsModelOpen }) => {
    setIsModelOpen(true);
  },
  showBookPagesMoreThan100: ({ setBooks, originalBooks }) => {
    setBooks(originalBooks.filter((book) => book.noOfPages > 100));
  },
  showBookPagesLessThan90MoreThan25: ({ setBooks, originalBooks }) => {
    setBooks(
      originalBooks.filter((book) => book.noOfPages < 90 && book.noOfPages > 25)
    );
  },
  showBookPagesLessThan90MoreThan25ButNot80: ({ setBooks, originalBooks }) => {
    setBooks(
      originalBooks.filter(
        (book) =>
          book.noOfPages < 90 && book.noOfPages > 25 && book.noOfPages !== 80
      )
    );
  },
  showBookPagesZero: ({ setBooks, originalBooks }) => {
    setBooks(originalBooks.filter((book) => book.noOfPages === 0));
  },
  showBookReleasedYear2015And2001: ({ setBooks, originalBooks }) => {
    setBooks(
      originalBooks.filter(
        (book) => book.releasedYear === 2015 || book.releasedYear === 2001
      )
    );
  },
  sortByBookName: ({ setBooks, originalBooks }) => {
    setBooks(
      [...originalBooks].sort((a, b) => a.bookName.localeCompare(b.bookName))
    );
  },
  sortByBookPrice: ({ setBooks, originalBooks }) => {
    setBooks([...originalBooks].sort((a, b) => a.bookPrice - b.bookPrice));
  },
  sortByBookAuthor: ({ setBooks, originalBooks }) => {
    setBooks(
      [...originalBooks].sort((a, b) =>
        a.bookAuthor.localeCompare(b.bookAuthor)
      )
    );
  },
  sortByBookNoOfPages: ({ setBooks, originalBooks }) => {
    setBooks([...originalBooks].sort((a, b) => a.noOfPages - b.noOfPages));
  },
  sortByBookCategory: ({ setBooks, originalBooks }) => {
    setBooks(
      [...originalBooks].sort((a, b) =>
        a.bookCategory.localeCompare(b.bookCategory)
      )
    );
  },
  sortByBookReleasedYear: ({ setBooks, originalBooks }) => {
    setBooks(
      [...originalBooks].sort((a, b) => a.releasedYear - b.releasedYear)
    );
  },
};
