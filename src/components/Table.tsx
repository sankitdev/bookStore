import useFetchBook from "../hooks/useFetchBook";
import Button from "./Button";
import TableHead from "./TableHead";
import { BOOK_ACTION_BUTTONS } from "../constant";
import { Book } from "../types/types";
import useTableState from "../hooks/useTableState";
import Modal from "./Modal";
import { useEffect } from "react";
import { handleModalSubmit } from "../utils/modalHandler";

const Table = () => {
  const {
    index,
    handleAction,
    isModalOpen,
    setIsModalOpen,
    books,
    setBooks,
    modalType,
    originalBooks,
    setOriginalBooks,
  } = useTableState();
  const bookData = useFetchBook();
  useEffect(() => {
    if (bookData) {
      setBooks(bookData);
      setOriginalBooks(bookData);
    }
  }, [bookData, setBooks, setOriginalBooks]);

  const handleSubmit = (formData: Record<string, string>) => {
    const success = handleModalSubmit({
      modalType,
      formData,
      books,
      originalBooks,
      setBooks,
    });

    if (success) {
      console.log("Success");
    } else {
      alert("An error occurred while processing your request");
    }
  };
  if (!bookData) return <div>Loading...</div>;
  const displayedBooks = index === null ? books : books.slice(index, index + 5);

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
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalType={modalType}
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
