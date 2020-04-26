import { Renderer } from "marked";
import { codeRenderer } from "./code.renderer";
import { quoteRenderer } from "./quote.renderer";
import { paragraphRenderer } from "./paragraph.renderer";

export function createRenderer(): Renderer {
  const renderer = new Renderer();
  renderer.code = codeRenderer;
  renderer.blockquote = quoteRenderer;
  renderer.paragraph = paragraphRenderer;
  return renderer;
}
