//get variables
const link = document.getElementById("link");
const btn = document.getElementById("btn");
const shortenedLink = document.getElementById("shortenedLink");

// link shortener function
function linkShortener(e) {
  const url = link.value;
  const obj = {};
  const urlShortener = (longURL = "") => {
    let shortURL = "tiny.ab/" + longURL.replace(/[^a-z]/g, "").slice(-3);
    if (!obj[shortURL]) {
      obj[shortURL] = longURL;
    }
    return shortURL;
  };
  const urlRedirector = (shortURL = "") => {
    return obj[shortURL];
  };
  const short = urlShortener(url);
  const original = urlRedirector(short);
  shortenedLink.innerHTML = short;
}
btn.addEventListener("click", linkShortener);
