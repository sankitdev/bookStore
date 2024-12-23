import { StateSetters } from "../types/types";

export const bookActions: { [key: string]: (setters: StateSetters) => void } = {
  updateByName: ({ setIsModelOpen }) => {
    setIsModelOpen(true);
  },
  deleteByBookId: () => {
    alert("Deleting book by ID...");
  },
  showAll: ({ setIndex }) => {
    setIndex(null);
  },
  sortByBookName: ({ setSort }) => {
    alert("Sorting books by name...");
    if (setSort) setSort("name");
  },
};
