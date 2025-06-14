const html = document.documentElement;
const toggleThemeButton = document.getElementById('toggle-theme');

// TODO create getPreferredTheme function using localStorage
let preferredTheme = 'light';

const themeButtonMessages = {
  light: 'Tema escuro',
  dark: 'Tema claro'
};

toggleThemeButton.addEventListener('click', (event) => {
  preferredTheme = preferredTheme === 'light' ? 'dark' : 'light';

  html.dataset.theme = preferredTheme;
  toggleThemeButton.textContent = themeButtonMessages[preferredTheme];
});
