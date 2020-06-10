var quotes = [
  "I wish I knew how to quit you - Brokeback Mountain, 2005",
  "Why so serious? - The Dark Knight, 2008",
  "I'm going to make him an offer he can't refuse. - The Godfather, 1972",
  "May the Force be with you. - Star Wars, 1977",
  "A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti. - The Silence of the Lambs, 1991",
  "I see dead people. - The Sixth Sense, 1999",
  "Here's Johnny! - The Shining, 1980",
]

function getQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('newQuoteSection').innerHTML = quotes[randomNumber];
}
