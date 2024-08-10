// Title on Blur


let title = document.title

function inspectTitle () {
    window.addEventListener('blur', () => {
        document.title = "Come back 😃"
    });

    window.addEventListener('focus', () => {
        document.title = "Weather | App"
    })
}

inspectTitle()

// DARK THEME


darkTheme = () => {
    let theme = document.getElementById('theme'),
        themeIcon = document.querySelector('.theme-icons')

    // Function to set the theme
    const setTheme = (isDarkTheme) => {
        if (isDarkTheme) {
            document.body.classList.add('dark-theme');
            document.body.classList.add('dark-themeIcon');
            //.dark-themeIcon
        } else {
            document.body.classList.remove('dark-theme');
            document.body.classList.remove('dark-themeIcon');
        }
    }
   /*const setThemeIcon = (isDarkThemeIcon) => {
        if (isDarkThemeIcon) {
            document.body.classList.toggle('change-theme-icon .light__toggle');
        } else {
            document.body.classList.toggle('change-theme-icon .light__toggle');
        }
    }*/

    //const isDarkThemeIcon = localStorage.getItem('darkTheme') === 'true';
    //setTheme(isDarkThemeIcon);
    // Check if there's a theme preference in localStorage
    const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
    setTheme(isDarkTheme);

    // Event listener for toggling dark theme
    theme.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-theme');
        localStorage.setItem('darkTheme', isDark);
    });

    // Event listener for toggling theme icon
    themeIcon.addEventListener('click', () => {
        //const StoreThemeIcon = 
        document.body.classList.toggle('change-theme-icon');
        //localStorage.setItem('darkTheme', StoreThemeIcon);
    });
}

darkTheme();

const builder = "davistheweb";

document.querySelector('.build-info').addEventListener('click', () => {
        window.location.href = "https://x.com/davistheweb"
    });


document.querySelector('.build-info').innerHTML = "Copyright &copy;" +" " + new Date().getFullYear() + " " + "Built by" + ' ' + builder;
