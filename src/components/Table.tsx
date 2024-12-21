const Table: React.FC = () => {
 
  return (
<table className="table">
  <thead>
    <tr>
      <th scope="col">Book Id</th>
      <th scope="col">Book Name</th>
      <th scope="col">Book Desc</th>
      <th scope="col">Book Author</th>
      <th scope="col">No of Page</th>
      <th scope="col">Book Category</th>
      <th scope="col">Book Price</th>
      <th scope="col">Released Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>The Great Gatsby</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, et magnam. Molestiae, molestias consequuntur quidem illo autem sint omnis maxime quis quod vitae quasi necessitatibus temporibus tenetur. Voluptatum, debitis asperiores.</td>
      <td>F. Scott Fitzgerald</td>
      <td>180</td>
      <td>Fiction</td>
      <td>10.899</td>
      <td>1925</td>
    </tr>
  </tbody>
</table>
  )
}

export default Table