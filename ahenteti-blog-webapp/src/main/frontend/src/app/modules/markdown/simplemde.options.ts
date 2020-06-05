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
    "image",
    "link",
    "code",
    "table",
    "|",
    {
      name: "references",
      action: toggleReference,
      className: "fa fa-lightbulb-o",
      title: "references",
    },
    {
      name: "info",
      action: toggleInfo,
      className: "fa fa-info",
      title: "Info message",
    },
    {
      name: "warn",
      action: toggleWarn,
      className: "fa fa-exclamation",
      title: "Warn message",
    },
    {
      name: "error",
      action: toggleError,
      className: "fa fa-exclamation-triangle",
      title: "Error message",
    },
    "|",
    "fullscreen",
    "guide",
  ],
};

function toggleReference(editor) {
  _toggleLine(editor, "reference");
}

function toggleInfo(editor) {
  _toggleLine(editor, "info");
}

function toggleWarn(editor) {
  _toggleLine(editor, "warn");
}

function toggleError(editor) {
  _toggleLine(editor, "error");
}

function _toggleLine(editor, name) {
  // code inspiration: https://github.com/sparksuite/simplemde-markdown-editor/blob/6abda7ab68cc20f4aca870eb243747951b90ab04/src/js/simplemde.js#L895
  const cm = editor.codemirror;
  var startPoint = cm.getCursor("start");
  var endPoint = cm.getCursor("end");
  var regex = {
    info: /^(\s*)\[INFO\]\s+/,
    warn: /^(\s*)\[WARN\]\s+/,
    error: /^(\s*)\[ERROR\]\s+/,
    reference: /^(\s*)## References\s+/,
  };
  var regexReplace = {
    info: "[INFO] ",
    warn: "[WARN] ",
    error: "[ERROR] ",
    reference: "## References\n* [](http://)\n* [](http://)",
  };

  for (var i = startPoint.line; i <= endPoint.line; i++) {
    var text = cm.getLine(i);
    if (regex[name].test(text)) {
      text = text.replace(regex[name], "");
    } else {
      text = regexReplace[name] + text;
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
}
