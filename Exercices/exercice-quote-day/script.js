/* C'est ici qu'il faut rédiger ton code pour utiliser l'API */
const getQuotes = () => {
  fetch('https://type.fit/api/quotes')
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response);
      const randomNumber = Math.floor(Math.random() * Math.floor(1643));
      document.getElementById('quote').textContent =
        response[randomNumber].text;
    });
};
document.getElementById('new-quote').addEventListener('click', function () {
  getQuotes();
});
