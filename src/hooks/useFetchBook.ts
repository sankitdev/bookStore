import { useEffect, useState } from "react";

interface Book {
  bookId: number;
  bookName: string;
  bookDesc: string;
  bookAuthor: string;
  noOfPages: number;
  bookCategory: string;
  bookPrice: number;
  releasedYear: number;
}

async function fetchBookData():Promise <Book[]> {
  try {
    const response = await fetch("mockBooks.json");
    const data: Book[] = await response.json();
    return data
  } catch (error) {
    console.error(error);
    return [];
  }
}

function useFetchBook() {
  const [bookData, setBookData] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBookData();
      setBookData(data);
    } 
    fetchData()
  }, []);
  return bookData;
}

export default useFetchBook;
