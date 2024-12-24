import { MODAL_TYPES } from "../config/modalConfig";
type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
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
  setBooks: SetState<Book[]>;
  setModalType: SetState<(typeof MODAL_TYPES)[keyof typeof MODAL_TYPES]>;
  setOriginalBooks: SetState<Book[]>;
  originalBooks: Book[];
};

export type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: SetState<boolean>;
  modalType: (typeof MODAL_TYPES)[keyof typeof MODAL_TYPES];
  onSubmit: (data: Record<string, string>) => void;
};

export type ModalHandlerProps = {
  modalType: string;
  formData: Record<string, string>;
  books: Book[];
  originalBooks: Book[];
  setBooks: SetState<Book[]>;
};

export type FormData = {
  [key: string]: string;
};
