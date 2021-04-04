import themes from './themes.json';

const themeButton = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const theme = localStorage.getItem('theme');

if (theme===themes.DARK){
  darkTheme()
};

themeButton.addEventListener('change', themeSwitch);

function darkTheme() {
  bodyRef.classList.add(themes.DARK);
  bodyRef.classList.remove(themes.LIGHT);
  themeButton.setAttribute('checked', 'true');
  localStorage.setItem('theme', themes.DARK)
};

function lightTheme() {
  bodyRef.classList.remove(themes.DARK);
  bodyRef.classList.add(themes.LIGHT);
  themeButton.removeAttribute('checked');
  localStorage.setItem('theme', themes.LIGHT)
};

function themeSwitch() {
  if (themeButton.checked){
    darkTheme();
  } else {
    lightTheme();
  };
};
