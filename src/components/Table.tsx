import useFetchBook from "../hooks/useFetchBook";
import Button from "./Button";
import TableHead from "./TableHead";
import { BOOK_ACTION_BUTTONS } from "../constant";
import { Book } from "../types/types";
import useTableState from "../hooks/useTableState";
import Model from "./Modal";
import { useEffect } from "react";
const Table = () => {
  const {
    index,
    handleAction,
    isModelOpen,
    setIsModelOpen,
    books,
    setBooks,
    modeltype,
    setOriginalBooks,
  } = useTableState();
  const bookData = useFetchBook();
  if (!bookData) return <div>Loading...</div>;
  useEffect(() => {
    if (bookData) {
      setBooks(bookData);
      setOriginalBooks(bookData);
    }
  }, [bookData, setBooks]);
  const displayedBooks = index === null ? books : books.slice(index, index + 5);
  const handleSubmit = (book: Book) => {
    if (modeltype === "add") {
      setBooks([...books, book]);
    } else if (modeltype === "edit") {
      const updatedBooks = books.map((item) =>
        item.bookId === book.bookId ? book : item
      );
      setBooks(updatedBooks);
    }
  };
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
      <Model
        isModelOpen={isModelOpen}
        setIsModelOpen={setIsModelOpen}
        modalType={modeltype}
        onSubmit={handleSubmit}
      />
      <table className="table">
        <thead>
          <TableHead />
        </thead>
        <tbody>
          {displayedBooks.map((books) => {
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
    </>
  );
};

export default Table;
