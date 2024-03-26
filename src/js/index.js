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
        } else {
            document.body.classList.remove('dark-theme');
        }
    }

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
        document.body.classList.toggle('change-theme-icon');
    });
}

darkTheme();


