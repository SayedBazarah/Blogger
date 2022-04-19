export const formateTitleToURL = (title) => {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[`~!@#$%^&*()_\+=\[\]{};:'"\\|\/,.<>?\s]/g, "");
};
