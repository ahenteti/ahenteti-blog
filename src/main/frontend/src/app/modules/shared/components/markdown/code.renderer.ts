import hljs from "highlight.js";

const MULTIPLE_CODE = "multiple";
const MULTI_CODE_SEPARATOR = "\n---\n";

export function codeRenderer(code: string, language: string): string {
  if (language == MULTIPLE_CODE) {
    return /*html*/ `
      <div class="multiple-code-container">
        ${renderMultiTabCode(code)}
      </div>
    `;
  } else {
    return /*html*/ `
      <div class="single-code-container">
        ${renderSingleCode(code, language)}
      </div>
    `;
  }
}

export function handleCodeTabClick(event) {
  deactivateCodes(event);
  activateCurrentCode(event);
}

export function handleCopyCode(event) {
  const codeContainer = event.target.closest(".code-container");
  const code = codeContainer.querySelector("code");
  var selection = window.getSelection();
  var range = document.createRange();
  range.selectNodeContents(code);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
  selection.removeRange(range);
  const tooltipContainer = event.target.closest("[data-tooltip]");
  tooltipContainer.setAttribute("data-tooltip", "Copied");
}

export function handleCopyCodeMouseLeave(event) {
  const tooltipContainer = event.target.querySelector("[data-tooltip]");
  tooltipContainer.setAttribute("data-tooltip", "copy code");
}

function activateCurrentCode(event: any) {
  event.target.classList.add("active");
  document
    .getElementById(event.target.dataset.associatedCodeId)
    .classList.add("active");
}

function deactivateCodes(event) {
  const currentMultipleCodeContainer = event.target.parentElement.parentElement;
  currentMultipleCodeContainer
    .querySelectorAll(".code-inside-multiple-code-container")
    .forEach((code) => code.classList.remove("active"));
  currentMultipleCodeContainer
    .querySelectorAll(".code-tabs span")
    .forEach((tab) => tab.classList.remove("active"));
}

function renderMultiTabCode(multipleCode: string): string {
  const map = new Map<string, string>();
  multipleCode.split(MULTI_CODE_SEPARATOR).forEach((code) => {
    const name = getCodeName(code);
    const language = getCodeLanguage(code);
    const body = getCodeBody(code);
    map.set(name, renderSingleCode(body, language));
  });
  const associatedCodeIdPrefix = getAssociatedCodeIdPrefix();
  return /* html */ `
    <div class="code-tabs">
      ${codeTabsMarkup(map, associatedCodeIdPrefix)}
    </div>
    ${codeMarkup(map, associatedCodeIdPrefix)}
  `;
}

function codeMarkup(
  map: Map<string, string>,
  associatedCodeIdPrefix: string
): string {
  let res = "";
  let first = true;
  map.forEach((value, key) => {
    let associatedCodeId = getAssociatedCodeId(key, associatedCodeIdPrefix);
    if (first) {
      res += `<div id="${associatedCodeId}" class="code-inside-multiple-code-container active">${value}</div>`;
      first = false;
    } else {
      res += `<div id="${associatedCodeId}" class="code-inside-multiple-code-container">${value}</div>`;
    }
  });
  return res;
}

function codeTabsMarkup(
  map: Map<string, string>,
  associatedCodeIdPrefix: string
): string {
  let res = "";
  let first = true;
  map.forEach((value, key) => {
    let associatedCodeId = getAssociatedCodeId(key, associatedCodeIdPrefix);
    if (first) {
      res += `<span data-associated-code-id="${associatedCodeId}" class="active">${key}</span>`;
      first = false;
    } else {
      res += `<span data-associated-code-id="${associatedCodeId}">${key}</span>`;
    }
  });
  return res;
}

function getAssociatedCodeIdPrefix() {
  return "" + Math.round(Math.random() * 100000);
}

function getAssociatedCodeId(
  tabName: string,
  associatedCodeIdPrefix: string
): string {
  return associatedCodeIdPrefix + "-" + tabName;
}

function getCodeBody(code: string): string {
  const body = code.split(/\r?\n/);
  body.shift();
  return body.join("\n");
}

function getCodeLanguage(code: string): string {
  return code.split(/\r?\n/)[0].split("|")[1];
}

function getCodeName(code: string): string {
  return code.split(/\r?\n/)[0].split("|")[0];
}

function renderSingleCode(code: string, language: string): string {
  if (!(language && hljs.getLanguage(language))) {
    language = "markdown"; // use 'markdown' as default language
  }

  const result = hljs.highlight(language, code).value;
  const codeLineNumbers = codeLineNumbersMarkup(result.split("\n").length);
  return /* html */ `
    <div class="code-container">
      ${codeLineNumbers}
      <pre class="code"><code class="hljs ${language}">${result}</code></pre>
      <div class="copy-code-container">
        <div class="tooltip-container tooltip-left" data-tooltip="copy code">
          <span class="copy-icon iconify" data-icon="ic:round-content-copy"></span>
        </div>
      </div>
    </div>
  `;
}

function codeLineNumbersMarkup(nb: number): string {
  let markup = "";
  for (let i = 0; i < nb; i++) {
    markup += `<span>${i + 1}</span>`;
  }
  return `<div class="line-numbers">${markup}</div>`;
}
