import { createHighlighter, Highlighter } from "shiki";

let highlighter: Highlighter | null = null;

export async function getShikiHighlighter(): Promise<Highlighter> {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ["tokyo-night"],
      langs: [
        "javascript",
        "typescript",
        "python",
        "java",
        "go",
        "rust",
        "css",
        "html",
      ],
    });
  }
  return highlighter;
}

export async function highlightCode(
  code: string,
  language: string = "javascript",
  theme: string = "tokyo-night"
): Promise<string> {
  const hl = await getShikiHighlighter();
  return hl.codeToHtml(code, { lang: language as any, theme: theme as any });
}
