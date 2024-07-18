// script.js

document.addEventListener('DOMContentLoaded', function() {
  const getJokeBtn = document.getElementById('getJokeBtn');
  const jokeDisplay = document.getElementById('jokeDisplay');
  const jokeText = document.getElementById('jokeText');

  getJokeBtn.addEventListener('click', function() {
    fetchJoke()
      .then(joke => {
        jokeText.textContent = joke.value;
        jokeDisplay.classList.remove('d-none');
      })
      .catch(error => {
        console.error('Error fetching Chuck Norris joke:', error);
      });
  });

  /**
   * Fetches a random Chuck Norris joke from the Chuck Norris Jokes API.
   * @returns {Promise<Object>} A Promise that resolves with the joke object.
   */
  function fetchJoke() {
    const url = 'https://api.chucknorris.io/jokes/random';

    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
  }
});
