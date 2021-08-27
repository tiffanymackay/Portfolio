import { projects } from "/js/projectObjects.js";

// artistPortfolio content
const titleArtistPortfolio = document.querySelector('.artist-portfolio-h2'),
        textArtistPortfolio = document.querySelector('.artist-portfolio-text'),
        processArtistPortfolio = document.querySelector('.artist-portfolio-process');

titleArtistPortfolio.innerHTML = projects.artistPortfolio.name;
textArtistPortfolio.innerHTML = projects.artistPortfolio.text;
processArtistPortfolio.innerHTML = projects.artistPortfolio.process;
