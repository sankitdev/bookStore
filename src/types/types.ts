export type Book = {
  bookId: number;
  bookName: string;
  bookDes: string;
  bookAuthor: string;
  noOfPages: number;
  bookCategory: string;
  bookPrice: number;
  releasedYear: number;
};

export type StateSetters = {
  setIndex: (
    index: number | null | ((prev: number | null) => number | null)
  ) => void;
  setIsModelOpen: (isOpen: boolean) => void;
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  setOriginalBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  originalBooks: Book[];
};
