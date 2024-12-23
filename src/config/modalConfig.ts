export const MODAL_TYPES = {
  UPDATE_NAME: "UPDATE_NAME",
  UPDATE_FULL: "UPDATE_FULL",
  DELETE: "DELETE",
} as const;

export const modalConfig = {
  UPDATE_NAME: {
    title: "Update Book Name",
    fields: [{ name: "bookName", placeholder: "Enter Book Name" }],
  },
  UPDATE_FULL: {
    title: "Update Book Details",
    fields: [
      { name: "bookName", placeholder: "Enter Book Name" },
      { name: "author", placeholder: "Enter Author Name" },
    ],
  },
  DELETE: {
    title: "Delete Book",
    fields: [{ name: "bookName", placeholder: "Enter Book Name to Delete" }],
  },
};
