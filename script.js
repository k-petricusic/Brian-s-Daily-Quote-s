const quotes = [
  "“All writing should be timed writing”",
  "“The process we take creates the product we make”",
  "“Reading should be like a good date”",
  "“Writer's block doesn't exist, you just aren't prepared”",
  "“The best learner is a teacher and the best teacher is a learner”",
  "“Learn to say more about less”",
  "“Reading is not remembering”",
];

let lastQuote = ""; // Track the previous quote

function typeWriter(text, elementId, delay = 30, callback) {
  const el = document.getElementById(elementId);
  el.innerHTML = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, delay);
    } else if (callback) {
      callback(); // Re-enable button after typing
    }
  }

  type();
}

function generateQuote() {
  const button = document.getElementById("quote-button");
  button.disabled = true;

  let quote;
  do {
    quote = quotes[Math.floor(Math.random() * quotes.length)];
  } while (quote === lastQuote && quotes.length > 1);
  lastQuote = quote;

  typeWriter(quote, "quote-box", 30, () => {
    button.disabled = false;
  });
}
