import { StateSetters } from "../types/types";

export const bookActions: { [key: string]: (setters: StateSetters) => void } = {
  updateByName: ({ setIsModalOpen, setModalType }) => {
    setModalType("UPDATE_NAME");
    setIsModalOpen(true);
  },
  updateByNameAndAuthor: ({ setIsModalOpen, setModalType }) => {
    setModalType("UPDATE_FULL");
    setIsModalOpen(true);
  },
  deleteByBookId: ({ setIsModalOpen, setModalType }) => {
    setModalType("DELETE_BY_ID");
    setIsModalOpen(true);
  },
  deleteByBookName: ({ setIsModalOpen, setModalType }) => {
    setModalType("DELETE");
    setIsModalOpen(true);
  },
  deleteByBookDescAndAuthor: ({ setIsModalOpen, setModalType }) => {
    setModalType("DELETE_BY_DESC_AUTHOR");
    setIsModalOpen(true);
  },
  deleteByBookNameAndCategory: ({ setIsModalOpen, setModalType }) => {
    setModalType("DELETE_BY_NAME_CATEGORY");
    setIsModalOpen(true);
  },
  showAll: ({ setIndex, setOriginalBooks, originalBooks }) => {
    setIndex(null);
    setOriginalBooks(originalBooks);
  },
  showBookById: ({ setIsModalOpen, setModalType }) => {
    setModalType("SHOW_BY_ID");
    setIsModalOpen(true);
  },
  showBookByName: ({ setIsModalOpen, setModalType }) => {
    setModalType("SHOW_BY_NAME");
    setIsModalOpen(true);
  },
  showBookByNameAndAuthor: ({ setIsModalOpen, setModalType }) => {
    setModalType("SHOW_BY_NAME_AUTHOR");
    setIsModalOpen(true);
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
