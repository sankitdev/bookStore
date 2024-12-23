import { useState } from "react";
import { bookActions } from "../utils/bookActions.ts";

function useTableState() {
  const [index, setIndex] = useState<number | null>(0);
  const [filter, setFilter] = useState<string | null>(null);
  const [sort, setSort] = useState<string | null>(null);
  const [isModelOpen, setIsModelOpen] = useState<boolean>(false);
  function handleAction(action: string) {
    if (bookActions[action]) {
      bookActions[action]({ setIndex, setFilter, setSort, setIsModelOpen });
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
    filter,
    sort,
  };
}

export default useTableState;
