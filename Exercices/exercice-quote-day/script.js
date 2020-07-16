/* C'est ici qu'il faut rédiger ton code pour utiliser l'API */
const getQuotes = () => {
  const randomNumber = Math.floor(Math.random() * Math.floor(1643));
  fetch('https://type.fit/api/quotes')
    .then(response => {
      return response.json();
    })
    .then(response => {
      let data = response[randomNumber];
      console.log(data);
      document.getElementById('quote').textContent = data.text;
      document.getElementById('author').textContent = data.author;
    });
};
getQuotes();
addEventListener('click', getQuotes);
