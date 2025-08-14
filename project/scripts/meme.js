// select HTML elements in the document
const memesSection = document.querySelector('#memes .container');

// Meme API - Reddit memes that are wholesome/positive
const url = 'https://meme-api.com/gimme/wholesomememes'

// Backup local memes for greeting cards
const localMemes = [
    {
        title: "When someone remembers your birthday",
        url: "https://i.imgflip.com/2/1bij.jpg",
        author: "r/wholesomememes"
    },
    {
        title: "Sending you good vibes",
        url: "https://i.imgflip.com/2/30b1.jpg",
        author: "r/wholesomememes"
    },
    {
        title: "You matter and you're loved",
        url: "https://i.imgflip.com/2/26am.jpg",
        author: "r/wholesomememes"
    }
];

// Function to Fetch
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log('API failed, using local content:', error);
        displayLocalMeme(); // fallback to local content
    }
}

function displayResults(data) {
    // Clear previous meme content only
    const existingMeme = memesSection.querySelector('.meme-container');
    if (existingMeme) existingMeme.remove();

    const memeContainer = document.createElement('div');
    memeContainer.classList.add('meme-container');

    const memeTitle = document.createElement('h3');
    memeTitle.textContent = data.title;
    memeTitle.classList.add('meme-title');

    const memeImg = document.createElement('img');
    memeImg.src = data.url;
    memeImg.alt = data.title;
    memeImg.classList.add('meme-image');
    memeImg.loading = 'lazy';

    const memeSource = document.createElement('p');
    memeSource.textContent = `Source: r/${data.subreddit}`;
    memeSource.classList.add('meme-source');

    memeContainer.appendChild(memeTitle);
    memeContainer.appendChild(memeImg);
    memeContainer.appendChild(memeSource);
    memesSection.appendChild(memeContainer);
}

function displayLocalMeme() {
    // Clear previous meme content only
    const existingMeme = memesSection.querySelector('.meme-container');
    if (existingMeme) existingMeme.remove();

    const randomMeme = localMemes[Math.floor(Math.random() * localMemes.length)];

    const memeContainer = document.createElement('div');
    memeContainer.classList.add('meme-container');

    const memeTitle = document.createElement('h3');
    memeTitle.textContent = randomMeme.title;
    memeTitle.classList.add('meme-title');

    const memeImg = document.createElement('img');
    memeImg.src = randomMeme.url;
    memeImg.alt = randomMeme.title;
    memeImg.classList.add('meme-image');
    memeImg.loading = 'lazy';

    const memeSource = document.createElement('p');
    memeSource.textContent = `Source: ${randomMeme.author}`;
    memeSource.classList.add('meme-source');

    memeContainer.appendChild(memeTitle);
    memeContainer.appendChild(memeImg);
    memeContainer.appendChild(memeSource);
    memesSection.appendChild(memeContainer);
}


apiFetch();