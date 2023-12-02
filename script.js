function fetchCats(apiKey) {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';

    fetch(apiUrl, {
        headers: {
            'x-api-key': apiKey,
        },
    })
    .then(Response => {
        if(!Response.ok) {
            throw new Error('Ett fel uppstod');
        }
        return Response.json();
    })
    .then(data => {
        const catImageUrl = data[0].url;
        document.getElementById('catImage').src = catImageUrl;
    })
    .catch (error => {
        console.error('Error:', error);
    });
}

const apiKey = 'live_tJPgGwszXakjsu3btk73VsiX6raq5Cp5gqA8PCjyGSp0xeSSCRzhzcE3OnLCXueK';
fetchCats(apiKey);

/** Knapp för att generera en bild **/
const knapp = document.querySelector('button')
knapp = addEventListener('click', () => {
    button.classList.toggle("active");
    fetchCats.classList.toggle("active");
})