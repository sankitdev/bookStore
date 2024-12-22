export const TABLE_HEADER = [
  "Book Id",
  "Book Name",
  "Book Desc",
  "Book Author",
  "No of Page",
  "Book Category",
  "Book Price",
  "Released Year",
];
export const BOOK_ACTION_BUTTONS = [
  { label: "Update By Name", action: "updateByName" },
  { label: "Update By Name And Author", action: "updateByNameAndAuthor" },
  { label: "Delete By Book Id", action: "deleteByBookId" },
  { label: "Delete By Book Name", action: "deleteByBookName" },
  {
    label: "Delete By Book Desc And Author",
    action: "deleteByBookDescAndAuthor",
  },
  {
    label: "Delete By Book Name and Category",
    action: "deleteByBookNameAndCategory",
  },
  { label: "Show All", action: "showAll" },
  { label: "Show Book By Id", action: "showBookById" },
  { label: "Show Book By Name", action: "showBookByName" },
  { label: "Show Book By Name & Author", action: "showBookByNameAndAuthor" },
  {
    label: "Show Book pages More than 100",
    action: "showBookPagesMoreThan100",
  },
  {
    label: "Show Book pages Less then 90 More than 25",
    action: "showBookPagesLessThan90MoreThan25",
  },
  {
    label: "Show Book pages Less then 90 More than 25 But not 80",
    action: "showBookPagesLessThan90MoreThan25ButNot80",
  },
  { label: "Show Book pages Zero", action: "showBookPagesZero" },
  {
    label: "Show Book Released Year 2015 And 2001",
    action: "showBookReleasedYear2015And2001",
  },
  { label: "Sort By Book Name", action: "sortByBookName" },
  { label: "Sort By Book Price", action: "sortByBookPrice" },
  { label: "Sort By Book Author", action: "sortByBookAuthor" },
  { label: "Sort By Book No Of Pages", action: "sortByBookNoOfPages" },
  { label: "Sort By Book Category", action: "sortByBookCategory" },
  { label: "Sort By Book Released Year", action: "sortByBookReleasedYear" },
];

export const handleFunction: { [key: string]: () => void } = {
  updateByName: () => alert("Updating book by name..."),
  deleteByBookId: () => alert("Deleting book by ID..."),
  showAllBooks: () => alert("Showing all books..."),
  sortByBookName: () => alert("Sorting books by name..."),
};
