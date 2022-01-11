//TOGGLE THEME / FAVICON START//
var pageWrapper = document.querySelector('.page_wrapper');
var toggleThemeBtn = document.querySelector('[btn]');

toggleThemeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    pageWrapper.classList.toggle('night_theme');
    if(pageWrapper.classList.contains('night_theme')) {
        changeFaviconOnClick(true);
        toggleThemeBtn.innerText = "Dia";
    } else {
        changeFaviconOnClick(false);
        toggleThemeBtn.innerText = "Noite";
    };
});
function changeFaviconOnClick(isNightThemeEnabled=false) {
    const favicon = document.querySelector(`link[id='favicon']`);

    if(isNightThemeEnabled) {
        favicon.setAttribute('href', './favicon_noite.png');
    } else {
        favicon.setAttribute('href', './favicon.png');
    };
};
//TOGGLE THEME / FAVICON END//

//PARALLAX JS START//
let insetos = document.getElementById('insetos');
let flores = document.getElementById('flores');
let folhas = document.getElementById('folhas');
let jama = document.getElementById('jama');
let face = document.getElementById('face');
let folhas_costas = document.getElementById('folhas_costas');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    insetos.style.left = value * -0.25 + 'px';
    folhas.style.left = value * 0.40 + 'px';
    jama.style.right = value * 0.25 + 'px';
    folhas_costas.style.left = value * -1 + 'px';
})
//PARALLAX JS END//
