import { useState } from "react";
import { bookActions } from "../utils/bookActions.ts";
import { Book } from "../types/types.ts";
function useTableState() {
  const [index, setIndex] = useState<number | null>(0);
  const [isModelOpen, setIsModelOpen] = useState<boolean>(false);
  const [originalBooks, setOriginalBooks] = useState<Book[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  function handleAction(action: string) {
    if (bookActions[action]) {
      bookActions[action]({
        setIndex,
        setBooks,
        setIsModelOpen,
        setOriginalBooks,
        originalBooks,
      });
    } else {
      alert("Function not implemented");
    }
  }

  return {
    index,
    setIndex,
    handleAction,
    isModelOpen,
    setIsModelOpen,
    books,
    setBooks,
    setOriginalBooks,
    originalBooks,
  };
}

export default useTableState;
