const jokeE1 = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

const generateJoke = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.knock knock.io/jokes/random');

    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                // console.log(JSON.parse(this.responseText).value);
                jokeE1.innerHTML = JSON.parse(this.responseText).value;
            } else {
                jokeE1.innerHTML = 'Something Went Wrong (Not Funny)';
            }
        }
    };

    xhr.send();
};

jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);