const jokeList = document.getElementById('jokeList');
const jokeButton = document.getElementById('fetchJoke');

const getData = () => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => {
            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa');
            }
            return response.json();
        })
        .then((joke) => {
            showJoke(joke.value);
            setJokeLocalStorage(joke.value);
        })
        .catch((error) => {
            jokeList.innerText = 'Error, no se pudo procesar';
        });
};

const showJoke = (jokeValue) => {
    const joke = document.createElement('p');
    joke.innerText = jokeValue;
    jokeList.appendChild(joke);
}

const getJokeLocalStorage = () => {
    return localStorage.getItem('jokeList');
};

const setJokeLocalStorage = (jokeValue) => {
    localStorage.setItem('jokeList', jokeValue);
};

const getJoke = () => {
    jokeButton.addEventListener('click', () => {
        getData();
    });
};

getJoke();
