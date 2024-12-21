import { TABLE_HEADER } from "../constant";
const TableHead = () => {
  return (
    <tr>
     {TABLE_HEADER.map((header)=> <th scope="col">{header}</th>)}
    </tr>
  );
};

export default TableHead;
