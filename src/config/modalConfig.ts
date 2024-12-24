export const MODAL_TYPES = {
  UPDATE_NAME: "UPDATE_NAME",
  UPDATE_FULL: "UPDATE_FULL",
  DELETE: "DELETE",
  DELETE_BY_ID: "DELETE_BY_ID",
  DELETE_BY_NAME_CATEGORY: "DELETE_BY_NAME_CATEGORY",
  DELETE_BY_DESC_AUTHOR: "DELETE_BY_DESC_AUTHOR",
  SHOW_BY_ID: "SHOW_BY_ID",
  SHOW_BY_NAME: "SHOW_BY_NAME",
  SHOW_BY_NAME_AUTHOR: "SHOW_BY_NAME_AUTHOR",
} as const;

export const modalConfig = {
  UPDATE_NAME: {
    title: "Update Book Name",
    fields: [
      { name: "oldBookName", placeholder: "Enter Current Book Name" },
      { name: "newBookName", placeholder: "Enter New Book Name" },
    ],
  },
  UPDATE_FULL: {
    title: "Update Book Details",
    fields: [
      { name: "oldBookName", placeholder: "Enter Current Book Name" },
      { name: "oldAuthor", placeholder: "Enter Current Author Name" },
      { name: "newBookName", placeholder: "Enter New Book Name" },
      { name: "newAuthor", placeholder: "Enter New Author Name" },
    ],
  },
  DELETE: {
    title: "Delete Book",
    fields: [{ name: "bookName", placeholder: "Enter Book Name to Delete" }],
  },
  DELETE_BY_ID: {
    title: "Delete Book by ID",
    fields: [{ name: "bookId", placeholder: "Enter Book ID" }],
  },
  DELETE_BY_NAME_CATEGORY: {
    title: "Delete Book by Name and Category",
    fields: [
      { name: "bookName", placeholder: "Enter Book Name" },
      { name: "category", placeholder: "Enter Book Category" },
    ],
  },
  DELETE_BY_DESC_AUTHOR: {
    title: "Delete Book by Description and Author",
    fields: [
      { name: "author", placeholder: "Enter Author Name" },
      { name: "description", placeholder: "Enter Book Description" },
    ],
  },
  SHOW_BY_ID: {
    title: "Show Book by ID",
    fields: [{ name: "bookId", placeholder: "Enter Book ID" }],
  },
  SHOW_BY_NAME: {
    title: "Show Book by Name",
    fields: [{ name: "bookName", placeholder: "Enter Book Name" }],
  },
  SHOW_BY_NAME_AUTHOR: {
    title: "Show Book by Name and Author",
    fields: [
      { name: "bookName", placeholder: "Enter Book Name" },
      { name: "author", placeholder: "Enter Author Name" },
    ],
  },
};
