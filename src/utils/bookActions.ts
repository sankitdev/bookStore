type StateSetters = {
  setIndex: (index: number | ((prev: number) => number)) => void;
  setFilter?: (filter: string | null) => void;
  setSort?: (sort: string | null) => void;
};

export const bookActions: { [key: string]: (setters: StateSetters) => void } = {
  updateByName: () => {
    alert("Updating book by name...");
  },
  deleteByBookId: () => {
    alert("Deleting book by ID...");
  },
  showAllBooks: ({ setIndex }) => {
    alert("Showing all books...");
    setIndex((prev) => prev + 5);
  },
  sortByBookName: ({ setSort }) => {
    alert("Sorting books by name...");
    if (setSort) setSort("name");
  },
};
