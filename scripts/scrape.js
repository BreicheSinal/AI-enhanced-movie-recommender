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
            genre: allGenres[index] ? allGenres[index].innerText.trim() : "N/A",
            image: allImages[index] ? allImages[index].src : "N/A",
            isNew: cardWrapper.querySelector('.label--red') ? true : false
        };
        movies.push(movie);
    });

console.log(movies);


    
}