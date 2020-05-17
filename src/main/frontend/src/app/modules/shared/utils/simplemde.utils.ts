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
    "table",
    "|",
    {
      name: "info",
      action: function customFunction(editor) {
        // code inspiration: https://github.com/sparksuite/simplemde-markdown-editor/blob/6abda7ab68cc20f4aca870eb243747951b90ab04/src/js/simplemde.js#L895
        const cm = editor.codemirror;
        const startPoint = cm.getCursor("start");
        const endPoint = cm.getCursor("end");
        for (var i = startPoint.line; i <= endPoint.line; i++) {
          let text = cm.getLine(i);
          if (/\[INFO\] /.test(text)) {
            text = text.replace(/\[INFO\] /, "");
          } else {
            text = "[INFO] " + text;
          }

          cm.replaceRange(
            text,
            {
              line: i,
              ch: 0,
            },
            {
              line: i,
              ch: 99999999999999,
            }
          );
        }
        cm.focus();
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
