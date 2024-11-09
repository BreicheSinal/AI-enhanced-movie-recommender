window.onload = () => {

    let movies = [];
    let allImages=document.querySelectorAll('.card-screening__img > img');
    let allNames = document.querySelectorAll('.card-screening__right .mb-lg-4 p.h3 a');
    let allDurations = document.querySelectorAll('.card-screening__right .mb-lg-4 div.ft-secondary > span > span');
    let allGenres = document.querySelectorAll('.card-screening__right .mb-lg-4 div.ft-secondary > span');
    let allCardWrappers = document.querySelectorAll('.card-screening__right');

    allCardWrappers.forEach((cardWrapper, index) => {
        let movie = {
            name: allNames[index] ? allNames[index].innerText.trim() : "N/A",
            duration: allDurations[index] ? allDurations[index].innerText.trim() : "N/A",
            genre: allGenres[index] ? allGenres[index].childNodes[0].innerText.trim() : "N/A",
            image: allImages[index] ? allImages[index].src : "N/A",
            isNew: cardWrapper.querySelector('.label--red') ? true : false
        };
        movies.push(movie);
    });

const jsonData = JSON.stringify(movies, null,2);

const blob = new Blob([jsonData], {type:'application/json'});

const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = 'movies.json';

link.click(); 
}