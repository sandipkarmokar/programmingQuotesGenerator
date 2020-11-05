const quoteSpace = document.querySelector('.quote');
const authorSpace = document.querySelector('.author');
const newQuote = document.querySelector('.btn');

Quote();

function Quote() {
    fetch('https://programming-quotes-api.herokuapp.com/quotes/lang/en')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let i = Math.trunc(Math.random() * data.length);
            let random = data[i];
            let quote = random.en;
            let author = random.author;
            quoteSpace.textContent = quote;
            authorSpace.textContent = author;
        })
        .catch((err) => {
            console.log(err);
        });
}

newQuote.addEventListener('click', Quote);
