addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});
function handleRequest(request) {
  var acknowledge = "Got it " + date("u");
  return new Response(`PHP Worker hello world. ${acknowledge}`, {
    headers: {
      "content-type": "text/plain"
    }
  });
};
