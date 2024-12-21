import useFetchBook from "../hooks/useFetchBook"
import Pagination from "./Pagination"
import TableHead from "./TableHead"
const Table: React.FC = () => {
  const bookData = useFetchBook()
  if(!bookData) return
  else console.log(bookData)
  return (
<>
<table className="table">
  <thead>
    <TableHead/>
  </thead>
  <tbody>
    {bookData.map((books)=>{
      const {bookId, bookName, bookDesc, bookAuthor,noOfPages,bookCategory,bookPrice, releasedYear} = books
      return <tr>
      <th scope="row">{bookId}</th>
      <td>{bookName}</td>
      <td>{bookDesc}</td>
      <td>{bookAuthor}</td>
      <td>{noOfPages}</td>
      <td>{bookCategory}</td>
      <td>{bookPrice}</td>
      <td>{releasedYear}</td>
    </tr>
    })}
  </tbody>
</table>
<Pagination/>
</>
  )
}

export default Table