import { useState } from "react";
import { bookActions } from "../utils/bookActions.ts";
import { Book } from "../types/types.ts";
import { MODAL_TYPES } from "../config/modalConfig.ts";
function useTableState() {
  const [index, setIndex] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] =
    useState<keyof typeof MODAL_TYPES>("UPDATE_NAME");
  const [originalBooks, setOriginalBooks] = useState<Book[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  function handleAction(action: string) {
    if (bookActions[action]) {
      bookActions[action]({
        setIndex,
        setBooks,
        setIsModalOpen,
        setOriginalBooks,
        originalBooks,
        setModalType,
      });
    } else {
      alert("Function not implemented");
    }
  }

  return {
    index,
    setIndex,
    handleAction,
    modalType,
    setModalType,
    isModalOpen,
    setIsModalOpen,
    books,
    setBooks,
    setOriginalBooks,
    originalBooks,
  };
}

export default useTableState;
