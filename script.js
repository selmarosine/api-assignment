function fetchCats(apiKey) {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';

    fetch(apiUrl, {
        headers: {
            'x-api-key': apiKey,
        },
        cache: 'no-store',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ett fel uppstod');
        }
        return response.json();
    })
    .then(data => {
        const catImageUrl = data[0].url;
        document.getElementById('catImage').src = catImageUrl;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

/** Knappar för att generera en bild **/
document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'live_tJPgGwszXakjsu3btk73VsiX6raq5Cp5gqA8PCjyGSp0xeSSCRzhzcE3OnLCXueK';

    const desktop = document.querySelector('.desktop');
    const mobileTablet = document.querySelector('.mobile-tablet');
    const catImage = document.getElementById('catImage');

    desktop.addEventListener('click', () => {
        catImage.classList.toggle("active");
        fetchCats(apiKey);
    });

    mobileTablet.addEventListener('click', () => {
        catImage.classList.toggle("active");
        fetchCats(apiKey);
    });
});
