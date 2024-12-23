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
  setIsModalOpen: (isOpen: boolean) => void;
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  setModalType: React.Dispatch<React.SetStateAction<keyof typeof MODAL_TYPES>>;
  setOriginalBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  originalBooks: Book[];
};

export type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalType: (typeof MODAL_TYPES)[keyof typeof MODAL_TYPES];
  onSubmit: (data: Record<string, string>) => void;
};

export type FormData = {
  [key: string]: string;
};
