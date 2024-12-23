import useFetchBook from "../hooks/useFetchBook";
import Button from "./Button";
import TableHead from "./TableHead";
import { BOOK_ACTION_BUTTONS } from "../constant";
import { Book } from "../types/types";
import useTableState from "../hooks/useTableState";
const Table = () => {
  const { index, handleAction } = useTableState();
  const bookData = useFetchBook();
  if (!bookData) return;

  return (
    <>
      {BOOK_ACTION_BUTTONS.map((btns) => {
        const { label, action } = btns;
        return (
          <Button
            key={action}
            text={label}
            action={() => handleAction(action)}
          />
        );
      })}
      <table className="table">
        <thead>
          <TableHead />
        </thead>
        <tbody>
          {bookData.slice(index, index + 5).map((books) => {
            const { bookId } = books;
            return (
              <tr key={bookId}>
                <th scope="row">{bookId}</th>
                {Object.keys(books)
                  .filter((key) => key !== "bookId")
                  .map((key) => (
                    <td key={`${bookId}-${key}`}>{books[key as keyof Book]}</td>
                  ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <Pagination /> */}
    </>
  );
};

export default Table;
