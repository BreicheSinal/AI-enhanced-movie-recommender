window.onload = () => {

    let movies = [];
    let allImages=document.querySelectorAll('.card-screening__img > img');
    let allNames = document.querySelectorAll('.card-screening__right .mb-lg-4 p.h3 a');
    let allDurations = document.querySelectorAll('.card-screening__right .mb-lg-4 div.ft-secondary > span > span');
    let allGenres = document.querySelectorAll('.card-screening__right .mb-lg-4 div.ft-secondary > span');
    
    allNames.forEach((link, index)=>{
        let movie = {
            name: link.textContent.trim(),
            image: allImages[index] ? allImages[index].src : "N/A",
            duration: allDurations[index] ? allDurations[index].textContent.trim() : "N/A",
            genre: allGenres[index] ? allGenres[index].childNodes[0].textContent.trim() : "N/A"
        }
        movies.push(movie);
    });

console.log(movies);


    
}