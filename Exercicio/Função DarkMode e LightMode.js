function changeMode() {
    changeClasses();
    changeText();
   }

   function changeClasses() {
        button.classList.toggle(darkmodeClass);
        h1.classList.toggle(darkmodeClass);
        body.classList.toggle(darkmodeClass);
        footer.classList.toggle(darkmodeClass);
   }
   
function changeText()  {
    const ligthMode = "Light Mode";
    const darkMode = "Dark Mode";
    
    if(body.classList.contains(darkmodeClass)){
        body.innerHTML = ligthMode;
        h1.innerHTML = darkMode + "ON";
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = ligthMode + 'ON';

}{
const darkmodeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
}

button.addEventListener('click', changeMode);


