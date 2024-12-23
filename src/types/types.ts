import { MODAL_TYPES } from "../config/modalConfig";

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
  setModelType: React.Dispatch<React.SetStateAction<string>>;
  setOriginalBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  originalBooks: Book[];
};

export type ModalProps = {
  isModelOpen: boolean;
  setIsModelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalType: keyof typeof MODAL_TYPES;
  onSubmit: (data: Record<string, string>) => void;
};
