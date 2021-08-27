import { projects } from "/js/projectObjects.js";

// responsiveRecipe content
const titleResponsiveRecipe = document.querySelector('.responsive-recipe-h2'),
    textResponsiveRecipe = document.querySelector('.responsive-recipe-text'),
    processResponsiveRecipe = document.querySelector('.responsive-recipe-process');

    titleResponsiveRecipe.innerHTML = projects.responsiveRecipe.name;
    textResponsiveRecipe.innerHTML = projects.responsiveRecipe.text;
    processResponsiveRecipe.innerHTML = projects.responsiveRecipe.process;
