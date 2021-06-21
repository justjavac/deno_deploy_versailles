import createHtml from "./createHtml.ts";

async function handleRequest(request: Request) {
  const { pathname } = new URL(request.url);

  if (pathname.startsWith("/favicon.ico")) {
    const favicon = new URL("favicon.ico", import.meta.url);
    return fetch(favicon);
  }

  if (pathname.startsWith("/style.css")) {
    const style = new URL("style.css", import.meta.url);
    const response = await fetch(style);
    const headers = new Headers(response.headers);
    headers.set("content-type", "text/css; charset=utf-8");
    return new Response(response.body, { ...response, headers });
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
