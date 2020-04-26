export function paragraphRenderer(text: string): string {
  const infoRegex = /^\[INFO\]\s*/;
  if (infoRegex.test(text)) {
    text = text.replace(infoRegex, "");
    return /* html */ `
      <div class="text-with-icon info">
        <img class="icon" src="/assets/icon/info.svg" />
        <p>${text}</p>
      </div>
    `;
  }
  const warnRegex = /^\[WARN\]\s*/;
  if (warnRegex.test(text)) {
    text = text.replace(warnRegex, "");
    return /* html */ `
      <div class="text-with-icon warn">
        <img class="icon" src="/assets/icon/warn.svg" />
        <p>${text}</p>
      </div>
    `;
  }
  const errorRegex = /^\[ERROR\]\s*/;
  if (errorRegex.test(text)) {
    text = text.replace(errorRegex, "");
    return /* html */ `
      <div class="text-with-icon error">
        <img class="icon" src="/assets/icon/error.svg" />
        <p>${text}</p>
      </div>
    `;
  }
  return `<p>${text}</p>`;
}
