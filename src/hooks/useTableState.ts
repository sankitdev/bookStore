import { useState } from "react";
import { bookActions } from "../utils/bookActions";

function useTableState() {
  const [index, setIndex] = useState(0);

  function handleAction(action: string) {
    if (bookActions[action]) {
      bookActions[action]({setIndex});
    } else {
      alert("Function not implemented");
    }
  }

  return { index, setIndex, handleAction };
}

export default useTableState;