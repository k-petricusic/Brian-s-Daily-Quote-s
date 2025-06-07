const quotes = [
  "“All writing should be timed writing”",
  "“The process we taje creates the prodcut we make”",
  "“Reading should be like a good date”",
  "“Writer's block doesn't exist, you just aren't prepared”",
  "“The best learner is a teacher and the best teacher is a learner”",
  "“Learn to say more about less”"
  


];

function generateQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote-box").innerText = quote;
}
