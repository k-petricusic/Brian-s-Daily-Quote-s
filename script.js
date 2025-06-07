const quotes = [
  "“All writing should be timed writing”",
  "“The process we take creates the prodcut we make”",
  "“Reading should be like a good date”",
  "“Writer's block doesn't exist, you just aren't prepared”",
  "“The best learner is a teacher and the best teacher is a learner”",
  "“Learn to say more about less”"
  


];

function typeWriter(text, elementId, delay = 30) {
  const el = document.getElementById(elementId);
  el.innerHTML = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, delay);
    }
  }
  type();
}

function generateQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  typeWriter(quote, "quote-box");
}

const bgMusic = document.getElementById('bg-music');
const muteBtn = document.getElementById('mute-btn');

muteBtn.addEventListener('click', () => {
  bgMusic.muted = !bgMusic.muted;
  muteBtn.textContent = bgMusic.muted ? "🔇" : "🔊";
});
