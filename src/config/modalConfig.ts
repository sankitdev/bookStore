export const MODAL_TYPES = {
  UPDATE_NAME: "UPDATE_NAME",
  UPDATE_FULL: "UPDATE_FULL",
  DELETE: "DELETE",
} as const;

export const modalConfig = {
  [MODAL_TYPES.UPDATE_NAME]: {
    title: "Update Book Name",
    fields: [{ name: "bookName", placeholder: "Enter Book Name" }],
  },
  [MODAL_TYPES.UPDATE_FULL]: {
    title: "Update Book Details",
    fields: [
      { name: "bookName", placeholder: "Enter Book Name" },
      { name: "author", placeholder: "Enter Author Name" },
    ],
  },
  [MODAL_TYPES.DELETE]: {
    title: "Delete Book",
    fields: [{ name: "bookName", placeholder: "Enter Book Name to Delete" }],
  },
};
