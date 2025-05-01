
// Cookie consent logic and helper functions

// Store user preferences
let userPreferences = {
  consentsGiven: false,
  consentsCategory: {
    necessary: true, // Always accepted by default
    analytics: false,
    marketing: false
  }
};

// Function to set a cookie with a specified name, value, and expiration (in days)
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Expiry date
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Function to get the value of a cookie by name
function getCookie(name) {
  const nameEq = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEq) === 0) {
      return c.substring(nameEq.length, c.length);
    }
  }
  return "";
}

// Function to check if the user has previously accepted or denied cookies
function checkCookieConsent() {
  const consentGiven = getCookie("cookieConsentGiven");
  if (consentGiven) {
    userPreferences.consentsGiven = true;
    userPreferences.consentsCategory = JSON.parse(getCookie("cookieConsentCategories"));
    return true;
  }
  return false;
}

// Function to save user preferences to both cookies and localStorage
function savePreferences() {
  // Save the consent status and categories to cookies
  setCookie("cookieConsentGiven", true, 365); // Consent given for 1 year
  setCookie("cookieConsentCategories", JSON.stringify(userPreferences.consentsCategory), 365);

  // Optionally, also store preferences in localStorage for quick access
  localStorage.setItem("userPreferences", JSON.stringify(userPreferences));
}

// Function to load preferences from localStorage if available
function loadPreferencesFromStorage() {
  const storedPreferences = localStorage.getItem("userPreferences");
  if (storedPreferences) {
    userPreferences = JSON.parse(storedPreferences);
    return true;
  }
  return false;
}

// Language mappings for multilingual support
const languageMappings = {
  en: {
    bannerMessage: "We use cookies to improve your experience. By continuing to browse, you consent to our use of cookies.",
    acceptButton: "Accept",
    denyButton: "Deny",
    saveButton: "Save Preferences",
    closeButton: "Close"
  },
  es: {
    bannerMessage: "Usamos cookies para mejorar su experiencia. Al continuar navegando, acepta nuestro uso de cookies.",
    acceptButton: "Aceptar",
    denyButton: "Rechazar",
    saveButton: "Guardar Preferencias",
    closeButton: "Cerrar"
  },
  fr: {
    bannerMessage: "Nous utilisons des cookies pour améliorer votre expérience. En continuant à naviguer, vous consentez à notre utilisation des cookies.",
    acceptButton: "Accepter",
    denyButton: "Refuser",
    saveButton: "Sauvegarder les préférences",
    closeButton: "Fermer"
  }
  // Add more languages as needed
};

// Function to detect the user's preferred language (using the browser's language settings)
function detectUserLanguage() {
  const userLang = navigator.language || navigator.userLanguage; // Get browser's language setting
  const langCode = userLang.split('-')[0]; // Extract language code (e.g., 'en', 'es', 'fr')
  return languageMappings[langCode] ? langCode : 'en'; // Default to 'en' if the language is not available
}

// Function to apply the appropriate language to the banner
function applyLanguage(language) {
  const langContent = languageMappings[language];
  
  document.getElementById('cookieConsentBannerMessage').textContent = langContent.bannerMessage;
  document.getElementById('acceptButton').textContent = langContent.acceptButton;
  document.getElementById('denyButton').textContent = langContent.denyButton;
  document.getElementById('saveButton').textContent = langContent.saveButton;
  document.getElementById('closeButton').textContent = langContent.closeButton;
}

// Function to enhance accessibility
function enhanceAccessibility() {
  const banner = document.getElementById('cookieConsentBanner');
  banner.setAttribute('aria-live', 'polite'); // Ensure screen readers announce the banner
  
  const acceptButton = document.getElementById('acceptButton');
  const denyButton = document.getElementById('denyButton');
  const saveButton = document.getElementById('saveButton');
  const closeButton = document.getElementById('closeButton');

  acceptButton.setAttribute('aria-label', 'Accept cookies');
  denyButton.setAttribute('aria-label', 'Deny cookies');
  saveButton.setAttribute('aria-label', 'Save cookie preferences');
  closeButton.setAttribute('aria-label', 'Close the banner');
}

// Function to initialize the language and accessibility settings
function initializeLanguageAndAccessibility() {
  const userLanguage = detectUserLanguage(); // Detect the user's preferred language
  applyLanguage(userLanguage); // Apply the language to the banner
  enhanceAccessibility(); // Apply accessibility improvements
}

// Call the initialization function when the page loads
initializeLanguageAndAccessibility();

// Function to update cookie consent categories
function updateCookieCategories(category, consented) {
  userPreferences.consentsCategory[category] = consented;
  savePreferences(); // Save the updated preferences to cookies and localStorage
}

// Function to initialize the cookie category management options
function initializeCookieCategoryPreferences() {
  // Set up event listeners for each category toggle (if any)
  document.getElementById('necessaryCookiesToggle').addEventListener('change', function () {
    updateCookieCategories('necessary', this.checked);
  });

  document.getElementById('analyticsCookiesToggle').addEventListener('change', function () {
    updateCookieCategories('analytics', this.checked);
  });

  document.getElementById('marketingCookiesToggle').addEventListener('change', function () {
    updateCookieCategories('marketing', this.checked);
  });
}

// Call this function when the user opens the preferences panel
initializeCookieCategoryPreferences();

// Function to load Google Analytics script only if consent is given
function loadAnalyticsScript() {
  if (userPreferences.consentsCategory.analytics) {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID';
    document.head.appendChild(script);
    
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function() { dataLayer.push(arguments); };
      gtag('js', new Date());
      gtag('config', 'YOUR_GA_ID');
    };
  }
}

// Check if the user has consented to analytics cookies before loading the script
if (userPreferences.consentsCategory.analytics) {
  loadAnalyticsScript();
}

// Function to show the banner with a delay
setTimeout(() => {
  if (!checkCookieConsent()) {
    openBanner();
  }
}, 5000); // 5 seconds delay

// Function to open the cookie consent banner
function openBanner() {
  const banner = document.getElementById('cookieConsentBanner');
  banner.style.display = 'block'; // Show the banner
}

// Function to close the cookie consent banner
function closeBanner() {
  const banner = document.getElementById('cookieConsentBanner');
  banner.style.display = 'none'; // Hide the banner
}

// Close the banner when the "Close" button is clicked
document.getElementById('closeButton').addEventListener('click', closeBanner);

// Accept cookies when the "Accept" button is clicked
document.getElementById('acceptButton').addEventListener('click', function () {
  userPreferences.consentsGiven = true;
  userPreferences.consentsCategory.analytics = true;
  userPreferences.consentsCategory.marketing = true;
  savePreferences();
  closeBanner();
});

// Deny cookies when the "Deny" button is clicked
document.getElementById('denyButton').addEventListener('click', function () {
  userPreferences.consentsGiven = true;
  userPreferences.consentsCategory.analytics = false;
  userPreferences.consentsCategory.marketing = false;
  savePreferences();
  closeBanner();
});

// Save preferences when the "Save Preferences" button is clicked
document.getElementById('saveButton').addEventListener('click', function () {
  savePreferences();
  closeBanner();
});
