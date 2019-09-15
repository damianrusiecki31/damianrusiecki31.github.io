"use strict";

console.log(`Hey there! 👋 My name is Damian and I’m an aspiring Frontend developer. Currently I’m looking for a new challenges so if you have one - contact me 😊`);

const list = document.querySelector('.projects-list--js');

fetch('https://api.github.com/users/damianrusiecki31/repos?sort=updated&direction=desc')
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;
    for (const repo of repos) {
      const { description, homepage, html_url, name } = repo;
      list.innerHTML += `
      <li class="project">
        <div class="project__container">
          <img class="project__logo" src="assets/img/github-icon.svg" alt="Logo Git Hub.">
          <h3 class="project__title">${name}</h3>
          ${
            description ? `<p class="project__description">${description}</p>` : ''
          }       
        </div>
        <div class="project__footer">
          ${
            homepage ? `<a class="project__link" href="${homepage}" target="_blank" rel="nofollow noreferrer" title="Demo: ${name}.">Demo</a>` : ''
          }
          <a class="project__link project__link--code" href="${html_url}" target="_blank" rel="nofollow noreferrer" title="Source code: ${name}.">GitHub</a>
        </div>
      </li>
    `;
    }
  })
  .catch(err => {
    console.log(err);
  })

