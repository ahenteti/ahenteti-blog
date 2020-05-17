export const SIMPLEMDE_OPTIONS = {
  spellChecker: false,
  toolbar: [
    "bold",
    "italic",
    "heading",
    "|",
    "quote",
    "unordered-list",
    "ordered-list",
    "|",
    "link",
    "code",
    {
      name: "multiple-file-code",
      action: function customFunction(editor) {
        console.log(editor);
      },
      className: "fa fa-columns",
      title: "multiple file code",
    },
    "table",
    "|",
    {
      name: "info",
      action: function customFunction(editor) {
        console.log(editor);
      },
      className: "fa fa-info",
      title: "Info message",
    },
    {
      name: "warn",
      action: function customFunction(editor) {
        console.log(editor);
      },
      className: "fa fa-exclamation",
      title: "Warn message",
    },
    {
      name: "error",
      action: function customFunction(editor) {
        console.log(editor);
      },
      className: "fa fa-exclamation-triangle",
      title: "Error message",
    },
    "guide",
  ],
};
