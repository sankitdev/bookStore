import useFetchBook from "../hooks/useFetchBook";
import Button from "./Button";
import Pagination from "./Pagination";
import TableHead from "./TableHead";
import { BOOK_ACTION_BUTTONS, handleFunction } from "../constant";
import { Book } from "../types/types";
const Table = () => {
  const bookData = useFetchBook();
  if (!bookData) return;

  function handleAction(action: string) {
    if (handleFunction[action]) {
      handleFunction[action]();
    } else {
      alert("Function not implemented");
    }
  }
  return (
    <>
      {BOOK_ACTION_BUTTONS.map((btns) => (
        <Button text={btns.label} action={() => handleAction(btns.action)} />
      ))}
      <table className="table">
        <thead>
          <TableHead />
        </thead>
        <tbody>
          {bookData.map((books) => {
            const { bookId } = books;
            return (
              <tr key={bookId}>
                <th scope="row">{bookId}</th>
                {Object.keys(books)
                  .filter((key) => key !== "bookId")
                  .map((key) => (
                    <td key={bookId}>{books[key as keyof Book]}</td>
                  ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination />
    </>
  );
};

export default Table;
