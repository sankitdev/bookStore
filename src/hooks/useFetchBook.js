import { useEffect, useState } from "react";

async function useFetchBook() {
  const [bookData, setBookData] = useState([]);
  const response = await fetch(".../mockBooks.json");
  const data = await response.json();
  console.log(data);
  setBookData(data);
  return bookData;
}

export default useFetchBook;
