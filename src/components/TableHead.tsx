import { TABLE_HEADER } from "../constant";
const TableHead = () => {
  return (
    <tr>
      {TABLE_HEADER.map((header, index) => (
        <th scope="col" key={index}>
          {header}
        </th>
      ))}
    </tr>
  );
};

export default TableHead;
