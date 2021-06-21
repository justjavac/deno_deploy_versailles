import createHtml from "./createHtml.ts";

async function handleRequest(request: Request) {
  const { pathname } = new URL(request.url);

  if (pathname.startsWith("/assets")) {
    const style = new URL(pathname.substr(1), import.meta.url);
    return fetch(style);
  }

  const data = new URL("data.txt", import.meta.url);
  const response = await fetch(data);
  const content = await response.text();
  const words = content.split("\n");
  const count = words.length;
  const index = Math.floor(Math.random() * count);
  const body = createHtml(words[index]);

  return new Response(body, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request));
});
