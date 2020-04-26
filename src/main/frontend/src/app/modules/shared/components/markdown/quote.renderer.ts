export function quoteRenderer(quote: string): string {
  const regex = /\[(.+?)\]<\/p>/;
  if (!regex.test(quote)) {
    return /* html */ `
    <div class="text-with-icon quote">
      <img class="icon" src="/assets/icon/quote.svg" />
      ${quote}
    </div>
    `;
  }
  const author = regex.exec(quote)[1];
  quote = quote.replace(regex, "</p>");
  return /* html */ `
    <div class="text-with-icon quote">
      <img class="icon" src="/assets/icon/quote.svg" />
      <div>
        ${quote}
        <p class="author">— ${author}</p>
      </div>
    </div>
  `;
}
