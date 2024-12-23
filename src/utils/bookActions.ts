import { StateSetters } from "../types/types";

export const bookActions: { [key: string]: (setters: StateSetters) => void } = {
  updateByName: ({ setIsModelOpen }) => {
    setIsModelOpen(true);
  },
  updateByNameAndAuthor: ({ setIsModelOpen }) => {
    setIsModelOpen(true);
  },
  deleteByBookId: () => {
    alert("Deleting book by ID...");
  },
  deleteByBookName: () => {
    alert("Deleting book by name...");
  },
  deleteByBookDescAndAuthor: () => {
    alert("Deleting book by description and author...");
  },
  deleteByBookNameAndCategory: () => {
    alert("Deleting book by name and category...");
  },
  showAll: ({ setIndex }) => {
    setIndex(null);
  },
  showBookById: () => {
    alert("Showing book by ID...");
  },
  showBookByName: () => {
    alert("Showing book by name...");
  },
  showBookByNameAndAuthor: () => {
    alert("Showing book by name and author...");
  },
  showBookPagesMoreThan100: () => {
    alert("Showing book pages more than 100...");
  },
  showBookPagesLessThan90MoreThan25: () => {
    alert("Showing book pages less than 90 and more than 25...");
  },
  showBookPagesLessThan90MoreThan25ButNot80: () => {
    alert("Showing book pages less than 90 and more than 25 but not 80...");
  },
  showBookPagesZero: () => {
    alert("Showing book pages zero...");
  },
  showBookReleasedYear2015And2001: () => {
    alert("Showing book released year 2015 and 2001...");
  },
  sortByBookName: ({ setSort }) => {
    alert("Sorting books by name...");
    if (setSort) setSort("name");
  },
  sortByBookPrice: ({ setSort }) => {
    alert("Sorting books by price...");
    if (setSort) setSort("price");
  },
  sortByBookAuthor: ({ setSort }) => {
    alert("Sorting books by author...");
    if (setSort) setSort("author");
  },
  sortByBookNoOfPages: ({ setSort }) => {
    alert("Sorting books by number of pages...");
    if (setSort) setSort("pages");
  },
  sortByBookCategory: ({ setSort }) => {
    alert("Sorting books by category...");
    if (setSort) setSort("category");
  },
  sortByBookReleasedYear: ({ setSort }) => {
    alert("Sorting books by released year...");
    if (setSort) setSort("year");
  },
};
