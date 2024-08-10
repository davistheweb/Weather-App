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
    let theme = document.getElementById('theme')

    // Function to set the theme
    const setTheme = (isDarkTheme) => {
        if (isDarkTheme) {
            document.body.classList.add('dark-theme');
   
    
        } else {
            document.body.classList.remove('dark-theme');
        
        }
    }

    const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
    setTheme(isDarkTheme);

    // Event listener for toggling dark theme
    theme.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-theme');
        console.log(isDark)
        localStorage.setItem('darkTheme', isDark);
    });

}

darkTheme();

const builder = "davistheweb";

document.querySelector('.build-info').addEventListener('click', () => {
        window.location.href = "https://x.com/davistheweb"
    });


document.querySelector('.build-info').innerHTML = "Copyright &copy;" +" " + new Date().getFullYear() + " " + "Built by" + ' ' + builder;
