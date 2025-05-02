/**
 * Enhanced Cookie Consent Banner with Geo-Location
 * 
 * Features:
 * - Google Consent Mode v2 compliance
 * - Microsoft UET integration with validation
 * - Geo-location based banner display
 * - Cross-browser compatibility
 * - Detailed cookie databases
 * - Robust error handling
 */

// Configuration object with all settings
const config = {
    // Domain restriction
    allowedDomains: ['dev-rpractice.pantheonsite.io', 'assistenzaelettrodomestici-firenze.com'],
    
    // Microsoft UET Configuration with enhanced validation
    uetConfig: {
        enabled: true,
        defaultTagId: '137027166', // Fallback if auto-detection fails
        autoDetectTagId: true,     // Try to detect UET tag ID automatically
        defaultConsent: 'denied',  // 'denied' or 'granted'
        enforceInEEA: true,        // Enforce consent mode in EEA countries
        validateTagPresence: true  // Check if UET tag exists before setting consent
    },
    
    // Behavior configuration
    behavior: {
        autoShow: true,
        bannerDelay: 0,
        rememberLanguage: true,
        acceptOnScroll: false,
        acceptOnContinue: true,
        showFloatingButton: true,
        showAdminButton: true,
        floatingButtonPosition: 'left',
        adminButtonPosition: 'left',
        bannerPosition: 'left',
        bannerAnimation: {
            duration: 0.4,
            easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
            enterEffect: 'fadeInUp',
            exitEffect: 'fadeOutDown'
        },
        modalAnimation: {
            duration: 0.3,
            easing: 'ease-in-out',
            enterEffect: 'fadeIn',
            exitEffect: 'fadeOut'
        },
        dashboardAnimation: {
            duration: 0.3,
            easing: 'ease-in-out',
            enterEffect: 'fadeIn',
            exitEffect: 'fadeOut'
        },
        
        // New timeline configuration for banner visibility
        bannerSchedule: {
            enabled: false, // Set to true to enable scheduling
            startDate: '2023-01-01', // Start date (YYYY-MM-DD)
            endDate: '2023-12-31',   // End date (YYYY-MM-DD)
            startTime: '00:00',      // Start time (24-hour format)
            endTime: '23:59',        // End time (24-hour format)
            daysOfWeek: [1,2,3,4,5], // 0=Sunday, 1=Monday, etc.
            durationDays: 365,       // Alternative: show banner for X days from first visit
            durationMinutes: 2       // Alternative: show banner for X minutes per session
        }
    },
    
    // Language configuration (only en and fr as requested)
    languageConfig: {
        defaultLanguage: 'en',
        availableLanguages: ['en', 'fr'], // Only en and fr as requested
        showLanguageSelector: true,
        autoDetectLanguage: true
    },
    
    // Geo-targeting configuration
    geoConfig: {
        allowedCountries: [],
        allowedRegions: [],
        allowedCities: [],
        blockedCountries: [],
        blockedRegions: [],
        blockedCities: []
    },
    
    // Analytics configuration
    analytics: {
        enabled: true,
        storageDays: 365,
        showDashboard: true,
        passwordProtect: true,
        dashboardPassword: 'admin123',
        passwordCookieDuration: 365,
        trackPageViews: true,
        trackEvents: true,
        trackConsentChanges: true
    },
    
    // UI Theme selection
    uiTheme: 'default',
    
    // Banner styling
    bannerStyle: {
        background: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        width: '465px',
        padding: '24px',
        textColor: '#2c3e50',
        linkColor: '#3498db',
        linkHoverColor: '#1d6fa5',
        border: {
            enabled: false,
            width: '1px',
            style: 'solid',
            color: '#e0e0e0'
        },
        title: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#2c3e50'
        },
        description: {
            fontSize: '14px',
            lineHeight: '1.5',
            color: '#7f8c8d'
        }
    },
    
    // Button styling
    buttonStyle: {
        borderRadius: '8px',
        padding: '12px 20px',
        fontWeight: '600',
        fontSize: '14px',
        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
        
        accept: {
            background: '#2ecc71',
            color: '#ffffff',
            border: '1px solid #2ecc71',
            hover: {
                background: '#27ae60',
                color: '#ffffff',
                transform: 'translateY(-1px)'
            }
        },
        
        reject: {
            background: '#ffffff',
            color: '#e74c3c',
            border: '1px solid #e74c3c',
            hover: {
                background: '#ffeeed',
                color: '#e74c3c',
                transform: 'translateY(-1px)'
            }
        },
        
        adjust: {
            background: '#f8f9fa',
            color: '#333333',
            border: '1px solid #e0e0e0',
            hover: {
                background: '#f0f2f5',
                color: '#333333',
                transform: 'translateY(-1px)'
            }
        },
        
        save: {
            background: '#3498db',
            color: '#ffffff',
            border: '1px solid #3498db',
            hover: {
                background: '#2980b9',
                color: '#ffffff',
                transform: 'translateY(-1px)'
            }
        }
    },
    
    // Floating button styling
    floatingButtonStyle: {
        size: '50px',
        background: '#2ecc71',
        iconColor: '#ffffff',
        border: '2px solid #ffffff',
        borderRadius: '50%',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
        hover: {
            background: '#27ae60',
            transform: 'translateY(-3px) scale(1.05)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
        }
    },
    
    // Admin button styling
    adminButtonStyle: {
        size: '60px',
        background: '#2ecc71',
        iconColor: '#ffffff',
        border: '2px solid #ffffff',
        borderRadius: '50%',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
        hover: {
            background: '#2980b9',
            transform: 'translateY(-3px) scale(1.05)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
        }
    },
    
    // Modal styling
    modalStyle: {
        background: '#ffffff',
        borderRadius: '12px',
        width: '845px',
        maxHeight: '470px',
        header: {
            background: '#f8f9fa',
            textColor: '#2c3e50',
            fontSize: '1.5rem',
            fontWeight: '600'
        },
        body: {
            background: '#fefefe',
            textColor: '#2c3e50'
        },
        footer: {
            background: '#f8f9fa',
            borderTop: '1px solid #ecf0f1'
        },
        closeButton: {
            color: '#7f8c8d',
            hoverColor: '#e74c3c'
        }
    },
    
    // Toggle switch styling
    toggleStyle: {
        activeColor: '#2ecc71',
        inactiveColor: '#bdc3c7',
        size: '50px',
        height: '26px',
        sliderSize: '20px'
    },
    
    // Cookie category styling
    categoryStyle: {
        background: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #ecf0f1',
        title: {
            fontSize: '1.1rem',
            fontWeight: '600',
            color: '#2c3e50'
        },
        description: {
            fontSize: '14px',
            color: '#7f8c8d'
        }
    },
    
    // Dashboard styling
    dashboardStyle: {
        background: '#ffffff',
        borderRadius: '12px',
        width: '900px',
        maxHeight: '600px',
        header: {
            background: '#f8f9fa',
            textColor: '#2c3e50',
            fontSize: '1.5rem',
            fontWeight: '600'
        },
        body: {
            background: '#fefefe'
        },
        statCards: {
            background: '#f8f9fa',
            borderRadius: '8px',
            acceptedColor: '#2ecc71',
            rejectedColor: '#e74c3c',
            customColor: '#3498db',
            totalColor: '#9b59b6'
        },
        barChart: {
            height: '20px',
            borderRadius: '10px',
            background: '#ecf0f1',
            acceptedColor: '#2ecc71',
            rejectedColor: '#e74c3c',
            customColor: '#3498db'
        }
    }
};

// ============== LOCATION DETECTION ============== //

/**
 * Enhanced geo-location detection with error handling
 * Pushes data to dataLayer and returns geo information
 */
function detectUserLocation() {
    const apiKey = '4c1e5d00e0ac93'; // Your API key from ipinfo.io
    
    // Push initial location event to dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'locationDetectionStarted',
        'timestamp': new Date().toISOString()
    });

    return fetch(`https://ipinfo.io/json?token=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(payload => {
            // Use fallback values if properties do not exist
            const country = (payload && payload.country) ? payload.country : "Unknown";
            const city = (payload && payload.city) ? payload.city : "Unknown";
            const zip = (payload && payload.postal) ? payload.postal : "Unknown";
            const ip = (payload && payload.ip) ? payload.ip : "Unknown";
            const street = (payload && payload.loc) ? payload.loc : "Unknown";
            const region = (payload && payload.region) ? payload.region : "Unknown";
            const timezone = (payload && payload.timezone) ? payload.timezone : "Unknown";
            const isp = (payload && payload.org) ? payload.org : "Unknown";
            const language = (navigator.language || "Unknown").split("-")[0];

            // Determine continent based on the country
            const continent = getContinentFromCountry(country);

            // Push data to the dataLayer for Google Tag Manager
            window.dataLayer.push({
                'event': 'locationDetected',
                'continent': continent,
                'country': country,
                'city': city,
                'zip': zip,
                'ip': ip,
                'street': street,
                'region': region,
                'timezone': timezone,
                'isp': isp,
                'language': language
            });

            console.log('Location Data Sent to dataLayer:', {
                continent, country, city, zip, ip, 
                street, region, timezone, isp, language
            });

            return {
                continent,
                country,
                city,
                zip,
                ip,
                street,
                region,
                timezone,
                isp,
                language
            };
        })
        .catch(error => {
            console.error('Error fetching location:', error);
            
            // Push error details to dataLayer
            window.dataLayer.push({
                'event': 'locationError',
                'error': error.message,
                'timestamp': new Date().toISOString()
            });

            // Return fallback data
            const language = (navigator.language || "en").split("-")[0];
            return {
                continent: "Unknown",
                country: "Unknown",
                city: "Unknown",
                zip: "Unknown",
                ip: "Unknown",
                street: "Unknown",
                region: "Unknown",
                timezone: "Unknown",
                isp: "Unknown",
                language
            };
        });
}

/**
 * Maps country codes to continents
 */
function getContinentFromCountry(countryCode) {
    const continentMap = {
        "AF": "Africa", "AL": "Europe", "DZ": "Africa", "AS": "Oceania", 
        "AD": "Europe", "AO": "Africa", "AR": "South America", "AM": "Asia", 
        "AU": "Oceania", "AT": "Europe", "AZ": "Asia", "BS": "North America",
        "BH": "Asia", "BD": "Asia", "BB": "North America", "BY": "Europe", 
        "BE": "Europe", "BZ": "North America", "BJ": "Africa", "BT": "Asia", 
        "BO": "South America", "BA": "Europe", "BW": "Africa", "BR": "South America",
        "BN": "Asia", "BG": "Europe", "BF": "Africa", "BI": "Africa", 
        "BJ": "Africa", "BD": "Asia", "NL": "Europe", "US": "North America", 
        "CA": "North America", "GB": "Europe", "CN": "Asia", "IN": "Asia",
        "ZA": "Africa", "AU": "Oceania", "NZ": "Oceania", "DE": "Europe", 
        "FR": "Europe", "IT": "Europe", "ES": "Europe", "PL": "Europe", 
        "SE": "Europe", "NO": "Europe", "DK": "Europe", "RU": "Europe",
        "BR": "South America", "MX": "North America", "JP": "Asia", 
        "KR": "Asia", "AE": "Asia", "SG": "Asia", "TH": "Asia", "ID": "Asia", 
        "PH": "Asia", "MY": "Asia", "KH": "Asia", "VN": "Asia", "PK": "Asia",
        "EG": "Africa", "KE": "Africa", "NG": "Africa", "ET": "Africa", 
        "TZ": "Africa", "UG": "Africa", "GH": "Africa", "MA": "Africa", 
        "MO": "Asia", "LK": "Asia", "BD": "Asia", "IQ": "Asia",
        "CO": "South America", "CL": "South America", "PE": "South America", 
        "VE": "South America", "BO": "South America", "PY": "South America", 
        "SR": "South America", "EC": "South America", "GT": "North America", 
        "HT": "North America", "DO": "North America", "CR": "North America",
        "CU": "North America", "JM": "North America", "BS": "North America", 
        "NI": "North America", "BZ": "North America", "PA": "North America", 
        "SV": "North America", "GT": "North America", "RU": "Europe", 
        "BG": "Europe", "RO": "Europe", "UA": "Europe", "CZ": "Europe", 
        "HU": "Europe", "SK": "Europe", "HR": "Europe", "SI": "Europe", 
        "MK": "Europe", "RS": "Europe", "ME": "Europe", "AL": "Europe", 
        "AM": "Asia", "AZ": "Asia", "GE": "Asia", "MN": "Asia", "NP": "Asia", 
        "BT": "Asia", "KG": "Asia", "TJ": "Asia", "UZ": "Asia", "KZ": "Asia", 
        "TM": "Asia"
    };

    return continentMap[countryCode] || "Unknown";
}

// ============== COOKIE DATABASES ============== //

// GA4 and UET cookie databases as requested
const cookieDatabase = {
    // GA4 Cookies
    '_ga': { category: 'analytics', duration: '730 days', description: 'Google Analytics - Used to distinguish users' },
    '_gid': { category: 'analytics', duration: '24 hours', description: 'Google Analytics - Used to distinguish users' },
    '_gat': { category: 'analytics', duration: '1 minute', description: 'Google Analytics - Used to throttle request rate' },
    '_ga_<container-id>': { category: 'analytics', duration: '730 days', description: 'Google Analytics - Used to persist session state' },
    
    // Microsoft UET Cookies
    '_uetvid': { category: 'advertising', duration: '390 days', description: 'Microsoft Advertising - Unique user ID' },
    '_uetsid': { category: 'advertising', duration: '1 day', description: 'Microsoft Advertising - Session ID' },
    '_uetmsclkid': { category: 'advertising', duration: 'Session', description: 'Microsoft Advertising - Click ID' },
    'MUID': { category: 'advertising', duration: '390 days', description: 'Microsoft Advertising - Unique user ID' },
    
    // Essential cookies
    'cookie_consent': { category: 'functional', duration: '365 days', description: 'Stores user consent preferences' },
    'preferred_language': { category: 'functional', duration: '365 days', description: 'Stores user language preference' },
    
    // Additional common cookies
    '_gcl_au': { category: 'advertising', duration: '90 days', description: 'Google Ads conversion tracking' },
    '_fbp': { category: 'advertising', duration: '90 days', description: 'Facebook Pixel - Conversion tracking' },
    'fr': { category: 'advertising', duration: '90 days', description: 'Facebook browser ID' }
};

// ============== TRANSLATIONS ============== //

// Language translations (only en and fr as requested)
const translations = {
    en: {
        title: "We value your privacy",
        description: "We use cookies to improve your browsing experience, provide personalized ads or content, and analyze our traffic. By clicking \"Accept All,\" you consent to the use of cookies.",
        privacy: "Privacy Policy",
        customize: "Adjust",
        reject: "Reject all",
        accept: "Accept all",
        essential: "Essential Cookies",
        essentialDesc: "Necessary for website functionality",
        analytics: "Analytics Cookies",
        analyticsDesc: "Help understand visitor interactions",
        performance: "Performance Cookies",
        performanceDesc: "Improve website performance",
        advertising: "Advertising Cookies",
        advertisingDesc: "Deliver relevant ads",
        other: "Other Cookies",
        otherDesc: "Uncategorized cookies",
        save: "Save Preferences",
        language: "English",
        statsTitle: "Consent Statistics",
        statsAccepted: "Accepted",
        statsRejected: "Rejected",
        statsCustom: "Customized",
        statsTotal: "Total",
        statsPercentage: "Percentage",
        statsLast1Day: "Last 1 Day",
        statsLast7Days: "Last 7 Days",
        statsLast30Days: "Last 30 Days",
        passwordPrompt: "Enter password to view analytics",
        passwordSubmit: "Submit",
        passwordIncorrect: "Incorrect password",
        dashboardTitle: "Consent Analytics Dashboard",
        seeAnalytics: "See Consent Analytics"
    },
    fr: {
        title: "Nous respectons votre vie privée",
        description: "Nous utilisons des cookies pour améliorer votre expérience, fournir des publicités ou du contenu personnalisé et analyser notre trafic. En cliquant sur \"Tout accepter\", vous consentez à l'utilisation de cookies.",
        privacy: "Politique de confidentialité",
        customize: "Personnaliser",
        reject: "Tout refuser",
        accept: "Tout accepter",
        essential: "Cookies essentiels",
        essentialDesc: "Nécessaires au fonctionnement",
        analytics: "Cookies d'analyse",
        analyticsDesc: "Comprennent les interactions",
        performance: "Cookies de performance",
        performanceDesc: "Améliorent les performances",
        advertising: "Cookies publicitaires",
        advertisingDesc: "Diffusent des publicités",
        other: "Autres cookies",
        otherDesc: "Cookies non catégorisés",
        save: "Enregistrer",
        language: "Français",
        statsTitle: "Statistiques de Consentement",
        statsAccepted: "Accepté",
        statsRejected: "Rejeté",
        statsCustom: "Personnalisé",
        statsTotal: "Total",
        statsPercentage: "Pourcentage",
        statsLast1Day: "Dernier Jour",
        statsLast7Days: "7 Derniers Jours",
        statsLast30Days: "30 Derniers Jours",
        passwordPrompt: "Entrez le mot de passe pour voir les analyses",
        passwordSubmit: "Soumettre",
        passwordIncorrect: "Mot de passe incorrect",
        dashboardTitle: "Tableau de bord des analyses de consentement",
        seeAnalytics: "Voir les analyses de consentement"
    }
};

// Country to language mapping (keeping all mappings but only using en/fr)
const countryLanguageMap = {
    // EU Countries
    'AT': 'en',     // Austria
    'BE': 'fr',     // Belgium (French)
    'BG': 'en',     // Bulgaria
    'HR': 'en',     // Croatia
    'CY': 'en',     // Cyprus
    'CZ': 'en',     // Czech Republic
    'DK': 'en',     // Denmark
    'EE': 'en',     // Estonia
    'FI': 'en',     // Finland
    'FR': 'fr',     // France
    'DE': 'en',     // Germany
    'GR': 'en',     // Greece
    'HU': 'en',     // Hungary
    'IE': 'en',     // Ireland
    'IT': 'en',     // Italy
    'LV': 'en',     // Latvia
    'LT': 'en',     // Lithuania
    'LU': 'fr',     // Luxembourg
    'MT': 'en',     // Malta
    'NL': 'en',     // Netherlands
    'PL': 'en',     // Poland
    'PT': 'en',     // Portugal
    'RO': 'en',     // Romania
    'SK': 'en',     // Slovakia
    'SI': 'en',     // Slovenia
    'ES': 'en',     // Spain
    'SE': 'en',     // Sweden
    
    // Other European countries
    'AL': 'en',     // Albania
    'BA': 'en',     // Bosnia and Herzegovina
    'IS': 'en',     // Iceland
    'LI': 'en',     // Liechtenstein
    'MK': 'en',     // North Macedonia
    'NO': 'en',     // Norway
    'RS': 'en',     // Serbia
    'CH': 'fr',     // Switzerland (French)
    'UA': 'en',     // Ukraine
    'GB': 'en',     // United Kingdom
    
    // Rest of the world
    'US': 'en',     // United States
    'CA': 'en',     // Canada
    'AU': 'en',     // Australia
    'NZ': 'en',     // New Zealand
    'ZA': 'en',     // South Africa
    'IN': 'en',     // India
    'CN': 'en',     // China
    'JP': 'en',     // Japan
    'KR': 'en',     // South Korea
    'BR': 'en',     // Brazil
    'MX': 'en',     // Mexico
    'AR': 'en',     // Argentina
    'RU': 'en'      // Russia
};

// ============== ANALYTICS STORAGE ============== //

let consentAnalytics = {
    total: {
        accepted: 0,
        rejected: 0,
        custom: 0
    },
    daily: {}
};

let isDashboardAuthenticated = false;
let bannerTimer = null;
let bannerShown = false;

function loadAnalyticsData() {
    try {
        const savedData = localStorage.getItem('consentAnalytics');
        if (savedData) {
            consentAnalytics = JSON.parse(savedData);
        }
        
        const today = new Date().toISOString().split('T')[0];
        if (!consentAnalytics.daily[today]) {
            consentAnalytics.daily[today] = {
                accepted: 0,
                rejected: 0,
                custom: 0
            };
        }
        
        if (config.analytics.passwordProtect) {
            isDashboardAuthenticated = getCookie('dashboard_auth') === 'true';
        } else {
            isDashboardAuthenticated = true;
        }
    } catch (e) {
        console.error('Error loading analytics data:', e);
        // Reset analytics data if corrupted
        consentAnalytics = {
            total: { accepted: 0, rejected: 0, custom: 0 },
            daily: {}
        };
    }
}

function saveAnalyticsData() {
    try {
        localStorage.setItem('consentAnalytics', JSON.stringify(consentAnalytics));
    } catch (e) {
        console.error('Error saving analytics data:', e);
    }
}

function updateConsentStats(status) {
    const today = new Date().toISOString().split('T')[0];
    
    if (status === 'accepted') {
        consentAnalytics.total.accepted++;
        consentAnalytics.daily[today].accepted++;
    } else if (status === 'rejected') {
        consentAnalytics.total.rejected++;
        consentAnalytics.daily[today].rejected++;
    } else if (status === 'custom') {
        consentAnalytics.total.custom++;
        consentAnalytics.daily[today].custom++;
    }
    
    saveAnalyticsData();
}

// ============== COOKIE MANAGEMENT ============== //

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax" + (location.protocol === 'https:' ? "; Secure" : "");
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// ============== CONSENT MODE IMPLEMENTATION ============== //

// Initialize dataLayer and gtag function
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// Initialize UET queue with validation
function initializeUetQueue() {
    if (typeof window.uetq === 'undefined') {
        window.uetq = [];
        
        // Push initialization event to dataLayer
        window.dataLayer.push({
            'event': 'uet_initialized',
            'timestamp': new Date().toISOString()
        });
    }
}

// Set default consent modes
function setDefaultConsentModes() {
    // Google Consent Mode v2 defaults
    gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'personalization_storage': 'denied',
        'functionality_storage': 'denied',
        'security_storage': 'granted'
    });
    
    // Microsoft UET consent with validation
    if (config.uetConfig.enabled) {
        // Check if UET tag exists if validation is enabled
        const uetTagExists = !config.uetConfig.validateTagPresence || detectUetTagId() !== null;
        
        if (uetTagExists) {
            const consentState = config.uetConfig.defaultConsent === 'granted' ? 'granted' : 'denied';
            
            window.uetq.push('consent', 'default', {
                'ad_storage': consentState
            });
            
            window.dataLayer.push({
                'event': 'uet_consent_default',
                'consent_mode': {
                    'ad_storage': consentState
                },
                'timestamp': new Date().toISOString()
            });
        } else {
            console.warn('Microsoft UET tag not found - consent not set');
            window.dataLayer.push({
                'event': 'uet_tag_not_found',
                'timestamp': new Date().toISOString()
            });
        }
    }
}

// Detect Microsoft UET tag ID from the page
function detectUetTagId() {
    if (!config.uetConfig.enabled || !config.uetConfig.autoDetectTagId) {
        return config.uetConfig.defaultTagId;
    }

    // 1. Check for hardcoded UET tags in DOM
    const uetTags = document.querySelectorAll('script[src*="bat.bing.com"], script[src*="bat.bing.net"]');
    if (uetTags.length > 0) {
        const tagSrc = uetTags[0].src;
        const tiMatch = tagSrc.match(/[\?&]ti=(\d+)/);
        if (tiMatch) return tiMatch[1];
    }

    // 2. Look for UET tag in scripts
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
        const script = scripts[i];
        if (script.src.includes('bat.bing.com') || script.src.includes('bat.bing.net')) {
            const matches = script.src.match(/[\?&]ti=(\d+)/);
            if (matches && matches[1]) {
                return matches[1];
            }
        }
    }

    // 3. Look for UET tag in dataLayer
    if (window.dataLayer) {
        for (let i = 0; i < window.dataLayer.length; i++) {
            const item = window.dataLayer[i];
            if (item.uetq && item.uetq.push) {
                const uetConfig = item.uetq.find(cmd => typeof cmd === 'object' && cmd.ti);
                if (uetConfig && uetConfig.ti) {
                    return uetConfig.ti;
                }
            }
        }
    }

    return config.uetConfig.defaultTagId;
}

// Update consent mode for both Google and Microsoft UET
function updateConsentMode(consentData) {
    const consentStates = {
        'ad_storage': consentData.categories.advertising ? 'granted' : 'denied',
        'analytics_storage': consentData.categories.analytics ? 'granted' : 'denied',
        'ad_user_data': consentData.categories.advertising ? 'granted' : 'denied',
        'ad_personalization': consentData.categories.advertising ? 'granted' : 'denied',
        'personalization_storage': consentData.categories.performance ? 'granted' : 'denied',
        'functionality_storage': consentData.categories.functional ? 'granted' : 'denied',
        'security_storage': 'granted'
    };

    // Determine GCS signal based on consent status and categories
    let gcsSignal = 'G100'; // Default to all denied
    
    if (consentData.status === 'accepted') {
        gcsSignal = 'G111'; // All granted
    } else if (consentData.status === 'custom') {
        if (consentData.categories.analytics && !consentData.categories.advertising) {
            gcsSignal = 'G101'; // Analytics granted, ads denied
        } else if (consentData.categories.advertising && !consentData.categories.analytics) {
            gcsSignal = 'G110'; // Ads granted, analytics denied
        } else if (consentData.categories.analytics && consentData.categories.advertising) {
            gcsSignal = 'G111'; // Both granted (same as accept all)
        } else {
            gcsSignal = ''; // Both denied (same as reject all)
        }
    }

    // Update Google consent
    gtag('consent', 'update', consentStates);
    
    // Update Microsoft UET consent if enabled
    if (config.uetConfig.enabled) {
        const uetConsentState = consentData.categories.advertising ? 'granted' : 'denied';
        
        // Check if UET tag exists if validation is enabled
        const uetTagExists = !config.uetConfig.validateTagPresence || detectUetTagId() !== null;
        
        if (uetTagExists) {
            window.uetq.push('consent', 'update', {
                'ad_storage': uetConsentState
            });
            
            // Push UET consent event to dataLayer with the exact requested format
            window.dataLayer.push({
                'event': 'uet_consent_update',
                'uet_consent': {
                    'ad_storage': uetConsentState,
                    'status': consentData.status,
                    'src': 'update',
                    'asc': uetConsentState === 'granted' ? 'G' : 'D',
                    'timestamp': new Date().toISOString()
                }
            });
        } else {
            console.warn('Microsoft UET tag not found - consent not updated');
            window.dataLayer.push({
                'event': 'uet_tag_not_found',
                'timestamp': new Date().toISOString()
            });
        }
    }
    
    // Push general consent update to dataLayer
    window.dataLayer.push({
        'event': 'cookie_consent_update',
        'consent_mode': consentStates,
        'gcs': gcsSignal,
        'consent_status': consentData.status,
        'consent_categories': consentData.categories,
        'timestamp': new Date().toISOString()
    });
}

// ============== COOKIE SCANNING AND CATEGORIZATION ============== //

function scanAndCategorizeCookies() {
    const cookies = document.cookie.split(';');
    const result = {
        functional: [],
        analytics: [],
        performance: [],
        advertising: [],
        uncategorized: []
    };

    cookies.forEach(cookie => {
        const [nameValue] = cookie.trim().split('=');
        const name = nameValue.trim();
        if (!name) return;
        
        let categorized = false;
        
        // Check against known cookie patterns
        for (const pattern in cookieDatabase) {
            if (name.startsWith(pattern) || name === pattern) {
                const cookieInfo = cookieDatabase[pattern];
                result[cookieInfo.category].push({
                    name: name,
                    value: nameValue.substring(name.length + 1) || '',
                    duration: cookieInfo.duration || getCookieDuration(name),
                    description: cookieInfo.description || 'Unknown purpose'
                });
                categorized = true;
                break;
            }
        }
        
        if (!categorized && name !== 'cookie_consent') {
            result.uncategorized.push({
                name: name,
                value: nameValue.substring(name.length + 1) || '',
                duration: getCookieDuration(name),
                description: 'Unknown cookie purpose'
            });
        }
    });
    
    return result;
}

function getCookieDuration(name) {
    const cookieMatch = document.cookie.match(new RegExp(`${name}=[^;]+(;|$)`));
    if (!cookieMatch) return "Session";
    
    const expiresMatch = document.cookie.match(new RegExp(`${name}=[^;]+; expires=([^;]+)`));
    if (expiresMatch && expiresMatch[1]) {
        const expiryDate = new Date(expiresMatch[1]);
        return expiryDate > new Date() ? 
            `Expires ${expiryDate.toLocaleDateString()}` : 
            "Expired";
    }
    return "Session";
}

// ============== COOKIE CONSENT FUNCTIONS ============== //

function acceptAllCookies() {
    const consentData = {
        status: 'accepted',
        gcs: 'G111',
        categories: {
            functional: true,
            analytics: true,
            performance: true,
            advertising: true,
            uncategorized: true
        },
        timestamp: new Date().getTime()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    loadCookiesAccordingToConsent(consentData);
    
    if (config.analytics.enabled) {
        updateConsentStats('accepted');
    }
    
    // Push dataLayer event for consent acceptance
    window.dataLayer.push({
        'event': 'cookie_consent_accepted',
        'consent_mode': {
            'ad_storage': 'granted',
            'analytics_storage': 'granted',
            'ad_user_data': 'granted',
            'ad_personalization': 'granted',
            'personalization_storage': 'granted',
            'functionality_storage': 'granted',
            'security_storage': 'granted'
        },
        'gcs': 'G111',
        'consent_status': 'accepted',
        'consent_categories': consentData.categories,
        'timestamp': new Date().toISOString()
    });
}

function rejectAllCookies() {
    const consentData = {
        status: 'rejected',
        gcs: 'G100',
        categories: {
            functional: false,
            analytics: false,
            performance: false,
            advertising: false,
            uncategorized: false
        },
        timestamp: new Date().getTime()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    clearNonEssentialCookies();
    
    if (config.analytics.enabled) {
        updateConsentStats('rejected');
    }
    
    // Push dataLayer event for consent rejection
    window.dataLayer.push({
        'event': 'cookie_consent_rejected',
        'consent_mode': {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'personalization_storage': 'denied',
            'functionality_storage': 'denied',
            'security_storage': 'granted'
        },
        'gcs': 'G100',
        'consent_status': 'rejected',
        'consent_categories': consentData.categories,
        'timestamp': new Date().toISOString()
    });
}

function saveCustomSettings() {
    const analyticsChecked = document.querySelector('input[data-category="analytics"]').checked;
    const advertisingChecked = document.querySelector('input[data-category="advertising"]').checked;
    
    let gcsSignal;
    if (analyticsChecked && advertisingChecked) {
        gcsSignal = 'G111';
    } else if (!analyticsChecked && !advertisingChecked) {
        gcsSignal = 'G100';
    } else if (analyticsChecked && !advertisingChecked) {
        gcsSignal = 'G101';
    } else if (!analyticsChecked && advertisingChecked) {
        gcsSignal = 'G110';
    }

    const consentData = {
        status: 'custom',
        gcs: gcsSignal,
        categories: {
            functional: true,
            analytics: analyticsChecked,
            performance: document.querySelector('input[data-category="performance"]').checked,
            advertising: advertisingChecked,
            uncategorized: document.querySelector('input[data-category="uncategorized"]') ? 
                document.querySelector('input[data-category="uncategorized"]').checked : false
        },
        timestamp: new Date().getTime()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    loadCookiesAccordingToConsent(consentData);
    
    if (!consentData.categories.analytics) clearCategoryCookies('analytics');
    if (!consentData.categories.performance) clearCategoryCookies('performance');
    if (!consentData.categories.advertising) clearCategoryCookies('advertising');
    if (!consentData.categories.uncategorized) clearCategoryCookies('uncategorized');
    
    if (config.analytics.enabled) {
        updateConsentStats('custom');
    }
    
    // Push dataLayer event for custom consent settings
    const consentStates = {
        'ad_storage': consentData.categories.advertising ? 'granted' : 'denied',
        'analytics_storage': consentData.categories.analytics ? 'granted' : 'denied',
        'ad_user_data': consentData.categories.advertising ? 'granted' : 'denied',
        'ad_personalization': consentData.categories.advertising ? 'granted' : 'denied',
        'personalization_storage': consentData.categories.performance ? 'granted' : 'denied',
        'functionality_storage': consentData.categories.functional ? 'granted' : 'denied',
        'security_storage': 'granted'
    };
    
    window.dataLayer.push({
        'event': 'cookie_consent_custom',
        'consent_mode': consentStates,
        'gcs': gcsSignal,
        'consent_status': 'custom',
        'consent_categories': consentData.categories,
        'timestamp': new Date().toISOString()
    });
}

function clearNonEssentialCookies() {
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
        const [nameValue] = cookie.trim().split('=');
        const name = nameValue.trim();
        let isEssential = false;
        
        for (const pattern in cookieDatabase) {
            if (name.startsWith(pattern) && cookieDatabase[pattern].category === 'functional') {
                isEssential = true;
                break;
            }
        }
        
        if (!isEssential && name && name !== 'cookie_consent') {
            deleteCookie(name);
        }
    });
}

function clearCategoryCookies(category) {
    const cookies = scanAndCategorizeCookies()[category];
    cookies.forEach(cookie => {
        deleteCookie(cookie.name);
    });
}

function loadCookiesAccordingToConsent(consentData) {
    if (consentData.categories.analytics) {
        loadAnalyticsCookies();
    }
    
    if (consentData.categories.advertising) {
        loadAdvertisingCookies();
    }
    
    if (consentData.categories.performance) {
        loadPerformanceCookies();
    }
}

// ============== TRACKING FUNCTIONS ============== //

function loadAnalyticsCookies() {
    console.log('Loading analytics cookies');
    if (typeof ga === 'undefined' && typeof gtag === 'function') {
        gtag('js', new Date());
        gtag('config', 'YOUR_GA4_MEASUREMENT_ID');
    }
}

function loadAdvertisingCookies() {
    console.log('Loading advertising cookies');
    if (typeof fbq === 'undefined') {
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', 'YOUR_PIXEL_ID');
        fbq('track', 'PageView');
    }
}

function loadPerformanceCookies() {
    console.log('Loading performance cookies');
}

// ============== DOM MANIPULATION AND UI FUNCTIONS ============== //

function generateCookieTable(cookies) {
    return `
    <table class="cookie-details-table">
        <thead>
            <tr>
                <th>Cookie Name</th>
                <th>Value</th>
                <th>Duration</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            ${cookies.map(cookie => `
            <tr>
                <td><code>${cookie.name}</code></td>
                <td class="cookie-value-cell">
                    <span class="cookie-value-full" style="display:none;">${cookie.value}</span>
                    <span class="cookie-value-truncated">${cookie.value.substring(0, 20)}${cookie.value.length > 20 ? '...' : ''}</span>
                    ${cookie.value.length > 20 ? '<button class="toggle-cookie-value" data-state="truncated">Show full</button>' : ''}
                </td>
                <td>${cookie.duration}</td>
                <td>${cookie.description}</td>
            </tr>`).join('')}
        </tbody>
    </table>`;
}

function injectConsentHTML(detectedCookies, language = 'en') {
    const lang = translations[language] || translations.en;
    const availableLanguages = getAvailableLanguages();
    
    // Generate cookie tables for each category
    const generateCategorySection = (category) => {
        const cookies = detectedCookies[category];
        const categoryKey = category === 'functional' ? 'essential' : category;
        const isEssential = category === 'functional';
        
        return `
        <div class="cookie-category">
            <div class="toggle-container">
                <h3>${lang[categoryKey]}</h3>
                <label class="toggle-switch" data-ms-consent="ad_storage">
                    <input type="checkbox" data-category="${category}" ${isEssential ? 'checked disabled' : ''}>
                    <span class="toggle-slider"></span>
                </label>
            </div>
            <p>${lang[`${categoryKey}Desc`]}</p>
            <div class="cookie-details-container">
                <div class="cookie-details-header">
                    <span>Cookie Details</span>
                    <span class="toggle-details">+</span>
                </div>
                <div class="cookie-details-content" style="display: none;">
                    ${cookies.length > 0 ? 
                        generateCookieTable(cookies) : 
                        `<p class="no-cookies-message">No cookies in this category detected.</p>`}
                </div>
            </div>
        </div>`;
    };
    
    // Generate language selector dropdown if enabled
    const languageSelector = config.languageConfig.showLanguageSelector ? `
    <div class="language-selector">
        <select id="cookieLanguageSelect">
            ${availableLanguages.map(code => `
                <option value="${code}" ${code === language ? 'selected' : ''}>${translations[code].language}</option>
            `).join('')}
        </select>
    </div>` : '';
    
    // Generate admin dashboard button if analytics enabled
    const adminButton = config.analytics.enabled && config.analytics.showDashboard && config.behavior.showAdminButton ? `
    <div id="cookieAdminButton" class="cookie-admin-button" title="${lang.dashboardTitle}">
        <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="none">
            <title>Admin Dashboard</title>
            <path d="M4.75,20.75A.25.25,0,0,0,5,20.5v-2a1,1,0,0,0-1-1H2a1,1,0,0,0-1,1v2a.25.25,0,0,0,.25.25Z"/>
            <path d="M10.75,20.75A.25.25,0,0,0,11,20.5v-7a1,1,0,0,0-1-1H8a1,1,0,0,0-1,1v7a.25.25,0,0,0,.25.25Z"/>
            <path d="M16.75,20.75A.25.25,0,0,0,17,20.5v-5a1,1,0,0,0-1-1H14a1,1,0,0,0-1,1v5a.25.25,0,0,0,.25.25Z"/>
            <path d="M22.75,20.75A.25.25,0,0,0,23,20.5V8.5a1,1,0,0,0-1-1H20a1,1,0,0,0-1,1v12a.25.25,0,0,0,.25.25Z"/>
            <path d="M3.5,13.5a2,2,0,0,0,2-2,1.981,1.981,0,0,0-.1-.6l3.167-2.64A1.955,1.955,0,0,0,11.011,7.8l2.5.834A2,2,0,0,0,17.5,8.5a1.964,1.964,0,0,0-.231-.912l3.287-3.835A1.994,1.994,0,1,0,19.5,2a1.962,1.962,0,0,0,.093.571L16.13,6.612a1.932,1.932,0,0,0-2.141.593l-2.5-.833A1.995,1.995,0,0,0,7.6,7.1L4.436,9.744A1.975,1.975,0,0,0,3.5,9.5a2,2,0,0,0,0,4Z"/>
            <path d="M23,22H1a1.016,1.016,0,0,0-1,1,1,1,0,0,0,1,1H23a1,1,0,0,0,1-1A1.015,1.015,0,0,0,23,22Z"/>
        </svg>
    </div>` : '';
    
    const html = `
    <!-- Main Consent Banner -->
    <div id="cookieConsentBanner" class="cookie-consent-banner">
        <div class="cookie-consent-container">
            ${languageSelector}
            <div class="cookie-consent-content">
                <h2>${lang.title}</h2>
                <p>${lang.description}</p>
                <a href="/privacy-policy/" class="privacy-policy-link">${lang.privacy}</a>
            </div>
            <div class="cookie-consent-buttons">
                <button id="acceptAllBtn" class="cookie-btn accept-btn">${lang.accept}</button>
                <button id="adjustConsentBtn" class="cookie-btn adjust-btn">${lang.customize}</button>
                <button id="rejectAllBtn" class="cookie-btn reject-btn">${lang.reject}</button>
            </div>
        </div>
    </div>

    <!-- Settings Modal -->
    <div id="cookieSettingsModal" class="cookie-settings-modal">
        <div class="cookie-settings-content">
            <div class="cookie-settings-header">
                <h2>${lang.title}</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div class="cookie-settings-body">
                ${generateCategorySection('functional')}
                ${generateCategorySection('analytics')}
                ${generateCategorySection('performance')}
                ${generateCategorySection('advertising')}
                ${detectedCookies.uncategorized.length > 0 ? generateCategorySection('uncategorized') : ''}
            </div>
            <div class="cookie-settings-footer">
                ${config.analytics.enabled ? `
                <div class="see-analytics-container">
                    <a href="#" class="see-analytics-link">${lang.seeAnalytics}</a>
                </div>` : ''}
                <div class="modal-buttons-container">
                    <button id="acceptAllSettingsBtn" class="cookie-btn accept-btn">${lang.accept}</button>
                    <button id="saveSettingsBtn" class="cookie-btn save-btn">${lang.save}</button>
                    <button id="rejectAllSettingsBtn" class="cookie-btn reject-btn">${lang.reject}</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Floating Settings Button -->
    <div id="cookieFloatingButton" class="cookie-settings-button" title="${lang.title}">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="none">
            <path d="M6 8H8.01V10H6V8Z" fill="currentColor"/>
            <path d="M11 11H13.01V13H11V11Z" fill="currentColor"/>
            <path d="M8 15H10.01V17H8V15Z" fill="currentColor"/>
            <path d="M15 15H17.01V17H15V15Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C12.0366 1 12.0732 1.00018 12.1097 1.00054L13.3208 1.01239L13.08 2.19932C13.0276 2.45721 13 2.72486 13 3C13 4.95769 14.4074 6.58878 16.2659 6.93296L16.9419 7.05815L17.067 7.73414C17.4112 9.59261 19.0423 11 21 11C21.2751 11 21.5428 10.9724 21.8007 10.92L22.9876 10.6792L22.9995 11.8903C22.9998 11.9268 23 11.9634 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM11.0002 3.0549C6.50018 3.55223 3 7.36736 3 12C3 16.9706 7.02944 21 12 21C16.6326 21 20.4478 17.4998 20.9451 12.9998C18.2609 12.9757 15.9991 11.1899 15.2573 8.74272C12.8101 8.00085 11.0243 5.73912 11.0002 3.0549Z" fill="currentColor"/>
        </svg>
    </div>
    
    ${adminButton}
    
    <!-- Analytics Dashboard -->
    <div id="cookieAnalyticsModal" class="cookie-analytics-modal">
        <div class="cookie-analytics-content">
            <div class="cookie-analytics-header">
                <h2>${lang.dashboardTitle}</h2>
                <span class="close-analytics-modal">&times;</span>
            </div>
            <div class="cookie-analytics-body">
                ${config.analytics.passwordProtect && !isDashboardAuthenticated ? 
                    generatePasswordPrompt(language) : 
                    generateAnalyticsDashboard(language)}
            </div>
        </div>
    </div>
    
    <style>
    /* CSS styles from the original code */
    /* ... (include all the CSS styles from the original code) ... */
    </style>`;
    
    document.body.insertAdjacentHTML('beforeend', html);
}

// ============== INITIALIZATION ============== //

// Main initialization function
async function initializeCookieConsent() {
    // First check if we should run on this domain
    if (!isDomainAllowed()) {
        console.log('Cookie consent banner disabled for this domain');
        return;
    }
    
    // Initialize UET queue
    initializeUetQueue();
    
    // Set default consent modes
    setDefaultConsentModes();
    
    // Load analytics data
    if (config.analytics.enabled) {
        loadAnalyticsData();
    }
    
    // Detect user location
    let geoData = {};
    try {
        geoData = await detectUserLocation();
    } catch (error) {
        console.error('Error detecting location:', error);
        geoData = {
            country: 'Unknown',
            region: 'Unknown',
            city: 'Unknown',
            language: (navigator.language || 'en').split('-')[0]
        };
    }
    
    // Check geo-targeting restrictions
    if (!checkGeoTargeting(geoData)) {
        console.log('Cookie consent banner disabled for this location');
        return;
    }
    
    // Detect language
    const detectedLanguage = detectUserLanguage(geoData);
    
    // Scan cookies
    const detectedCookies = scanAndCategorizeCookies();
    if (detectedCookies.uncategorized.length > 0) {
        console.log('Uncategorized cookies found:', detectedCookies.uncategorized);
    }
    
    // Inject HTML and initialize
    injectConsentHTML(detectedCookies, detectedLanguage);
    setupEventListeners();
    
    // Check if banner should be shown
    const consentGiven = getCookie('cookie_consent');
    const bannerShouldBeShown = shouldShowBanner();
    
    if (!consentGiven && config.behavior.autoShow && bannerShouldBeShown) {
        setTimeout(() => {
            showCookieBanner();
        }, config.behavior.bannerDelay * 1000);
    } else if (consentGiven) {
        const consentData = JSON.parse(consentGiven);
        updateConsentMode(consentData);
        loadCookiesAccordingToConsent(consentData);
        if (config.behavior.showFloatingButton) {
            showFloatingButton();
        }
    }
    
    // Set up cookie details toggles
    document.querySelectorAll('.cookie-details-header').forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const toggle = this.querySelector('.toggle-details');
            if (content.style.display === 'none') {
                content.style.display = 'block';
                toggle.textContent = '−';
            } else {
                content.style.display = 'none';
                toggle.textContent = '+';
            }
        });
    });
    
    // Set up cookie value toggles
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('toggle-cookie-value')) {
            const cell = e.target.closest('.cookie-value-cell');
            const full = cell.querySelector('.cookie-value-full');
            const truncated = cell.querySelector('.cookie-value-truncated');
            
            if (e.target.dataset.state === 'truncated') {
                full.style.display = 'inline';
                truncated.style.display = 'none';
                e.target.textContent = 'Hide full';
                e.target.dataset.state = 'full';
            } else {
                full.style.display = 'none';
                truncated.style.display = 'inline';
                e.target.textContent = 'Show full';
                e.target.dataset.state = 'truncated';
            }
        }
    });
    
    // Set up admin button if enabled
    if (config.analytics.enabled && config.analytics.showDashboard && config.behavior.showAdminButton) {
        const adminButton = document.getElementById('cookieAdminButton');
        if (adminButton) {
            adminButton.addEventListener('click', showAnalyticsDashboard);
            setTimeout(() => {
                adminButton.style.display = 'flex';
                adminButton.classList.add('show');
            }, 100);
        }
    }
    
    // Set up password prompt events if needed
    if (config.analytics.passwordProtect && !isDashboardAuthenticated) {
        setupPasswordPromptEvents();
    }
    
    // Set up "See Consent Analytics" link in the modal footer
    const seeAnalyticsLink = document.querySelector('.see-analytics-link');
    if (seeAnalyticsLink) {
        seeAnalyticsLink.addEventListener('click', function(e) {
            e.preventDefault();
            showAnalyticsDashboard();
        });
    }
    
    // Set up timer for durationMinutes if enabled
    if (config.behavior.bannerSchedule.enabled && config.behavior.bannerSchedule.durationMinutes) {
        if (bannerTimer) {
            clearTimeout(bannerTimer);
        }
        
        bannerTimer = setTimeout(() => {
            if (!getCookie('cookie_consent')) {
                hideCookieBanner();
            }
        }, config.behavior.bannerSchedule.durationMinutes * 60 * 1000);
    }
}

// Check if current domain is allowed
function isDomainAllowed() {
    if (config.allowedDomains.length === 0) return true;
    
    const currentDomain = window.location.hostname;
    return config.allowedDomains.some(domain => {
        if (domain.startsWith('.')) {
            return currentDomain === domain.substring(1) || currentDomain.endsWith(domain);
        }
        return currentDomain === domain;
    });
}

// Check geo-targeting restrictions
function checkGeoTargeting(geoData) {
    // Check blocked locations first
    if (config.geoConfig.blockedCountries.length > 0 && 
        config.geoConfig.blockedCountries.includes(geoData.country)) {
        return false;
    }
    
    if (config.geoConfig.blockedRegions.length > 0 && 
        config.geoConfig.blockedRegions.includes(geoData.region)) {
        return false;
    }
    
    if (config.geoConfig.blockedCities.length > 0 && 
        config.geoConfig.blockedCities.includes(geoData.city)) {
        return false;
    }
    
    // Check allowed locations (if any restrictions are set)
    if (config.geoConfig.allowedCountries.length > 0 && 
        !config.geoConfig.allowedCountries.includes(geoData.country)) {
        return false;
    }
    
    if (config.geoConfig.allowedRegions.length > 0 && 
        !config.geoConfig.allowedRegions.includes(geoData.region)) {
        return false;
    }
    
    if (config.geoConfig.allowedCities.length > 0 && 
        !config.geoConfig.allowedCities.includes(geoData.city)) {
        return false;
    }
    
    return true;
}

// Detect user language based on country and browser settings
function detectUserLanguage(geoData) {
    // First check if language is stored in cookie
    if (config.behavior.rememberLanguage) {
        const preferredLanguage = getCookie('preferred_language');
        if (preferredLanguage && translations[preferredLanguage]) {
            return preferredLanguage;
        }
    }
    
    // Then try to get language from country if auto-detection is enabled
    if (config.languageConfig.autoDetectLanguage && geoData && geoData.country) {
        const countryLang = countryLanguageMap[geoData.country];
        if (countryLang && translations[countryLang]) {
            return countryLang;
        }
    }
    
    // Fallback to browser language
    const browserLang = (navigator.language || 'en').split('-')[0];
    if (translations[browserLang]) {
        return browserLang;
    }
    
    // Final fallback to configured default language
    return config.languageConfig.defaultLanguage || 'en';
}

// Get available languages for dropdown
function getAvailableLanguages() {
    if (config.languageConfig.availableLanguages.length > 0) {
        return config.languageConfig.availableLanguages.filter(lang => translations[lang]);
    }
    return Object.keys(translations);
}

// Change language dynamically
function changeLanguage(languageCode) {
    const lang = translations[languageCode] || translations.en;
    
    // Update banner text
    const banner = document.getElementById('cookieConsentBanner');
    if (banner) {
        banner.querySelector('h2').textContent = lang.title;
        banner.querySelector('p').textContent = lang.description;
        banner.querySelector('.privacy-policy-link').textContent = lang.privacy;
        banner.querySelector('#acceptAllBtn').textContent = lang.accept;
        banner.querySelector('#adjustConsentBtn').textContent = lang.customize;
        banner.querySelector('#rejectAllBtn').textContent = lang.reject;
    }
    
    // Update modal text
    const modal = document.getElementById('cookieSettingsModal');
    if (modal) {
        modal.querySelector('h2').textContent = lang.title;
        
        const categories = {
            'functional': 'essential',
            'analytics': 'analytics',
            'performance': 'performance',
            'advertising': 'advertising',
            'uncategorized': 'other'
        };
        
        for (const [category, key] of Object.entries(categories)) {
            const categoryElement = document.querySelector(`input[data-category="${category}"]`);
            if (categoryElement) {
                const container = categoryElement.closest('.cookie-category');
                container.querySelector('h3').textContent = lang[key];
                container.querySelector('p').textContent = lang[`${key}Desc`];
            }
        }
        
        modal.querySelector('#rejectAllSettingsBtn').textContent = lang.reject;
        modal.querySelector('#saveSettingsBtn').textContent = lang.save;
        modal.querySelector('#acceptAllSettingsBtn').textContent = lang.accept;
        
        // Update "See Consent Analytics" link
        const seeAnalyticsLink = modal.querySelector('.see-analytics-link');
        if (seeAnalyticsLink) {
            seeAnalyticsLink.textContent = lang.seeAnalytics;
        }
    }
    
    // Update floating button title
    const floatingButton = document.getElementById('cookieFloatingButton');
    if (floatingButton) {
        floatingButton.title = lang.title;
    }
    
    // Update analytics dashboard if visible
    const dashboardModal = document.getElementById('cookieAnalyticsModal');
    if (dashboardModal && dashboardModal.style.display === 'flex') {
        if (config.analytics.passwordProtect && !isDashboardAuthenticated) {
            dashboardModal.querySelector('.cookie-analytics-body').innerHTML = generatePasswordPrompt(languageCode);
            setupPasswordPromptEvents();
        } else {
            dashboardModal.querySelector('.cookie-analytics-body').innerHTML = generateAnalyticsDashboard(languageCode);
        }
    }

    // Update analytics dashboard title if visible
    const dashboardTitle = document.querySelector('.cookie-analytics-header h2');
    if (dashboardTitle) {
        dashboardTitle.textContent = lang.dashboardTitle;
    }

    // Update password prompt if visible
    const passwordPrompt = document.querySelector('.password-prompt h3');
    const passwordSubmit = document.getElementById('dashboardPasswordSubmit');
    const passwordError = document.getElementById('passwordError');
    if (passwordPrompt) passwordPrompt.textContent = lang.passwordPrompt;
    if (passwordSubmit) passwordSubmit.textContent = lang.passwordSubmit;
    if (passwordError && passwordError.textContent) {
        passwordError.textContent = translations[languageCode].passwordIncorrect;
    }
    
    // Store selected language in cookie
    if (config.behavior.rememberLanguage) {
        setCookie('preferred_language', languageCode, 365);
    }
}

// Check if banner should be shown based on schedule
function shouldShowBanner() {
    if (!config.behavior.bannerSchedule.enabled) {
        return true;
    }

    const now = new Date();
    const currentDate = now.toISOString().split('T')[0];
    const currentTime = now.getHours() * 100 + now.getMinutes();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.

    // Check if we're using duration-based settings
    if (config.behavior.bannerSchedule.durationDays) {
        const firstVisit = getCookie('first_visit_date');
        if (!firstVisit) {
            setCookie('first_visit_date', currentDate, config.behavior.bannerSchedule.durationDays);
            return true;
        }
        
        const firstVisitDate = new Date(firstVisit);
        const endDate = new Date(firstVisitDate);
        endDate.setDate(endDate.getDate() + config.behavior.bannerSchedule.durationDays);
        
        return now <= endDate;
    }

    if (config.behavior.bannerSchedule.durationMinutes) {
        const sessionStart = getCookie('session_start_time');
        if (!sessionStart) {
            setCookie('session_start_time', now.getTime().toString(), 0.5); // Expires in 30 minutes
            return true;
        }
        
        const sessionStartTime = parseInt(sessionStart);
        const endTime = sessionStartTime + (config.behavior.bannerSchedule.durationMinutes * 60 * 1000);
        
        return now.getTime() <= endTime;
    }

    // Check date range
    const startDate = new Date(config.behavior.bannerSchedule.startDate);
    const endDate = new Date(config.behavior.bannerSchedule.endDate);
    
    if (now < startDate || now > endDate) {
        return false;
    }

    // Check time range
    const startTime = parseInt(config.behavior.bannerSchedule.startTime.split(':')[0]) * 100 + 
                      parseInt(config.behavior.bannerSchedule.startTime.split(':')[1]);
    const endTime = parseInt(config.behavior.bannerSchedule.endTime.split(':')[0]) * 100 + 
                    parseInt(config.behavior.bannerSchedule.endTime.split(':')[1]);

    if (currentTime < startTime || currentTime > endTime) {
        return false;
    }

    // Check days of week
    if (config.behavior.bannerSchedule.daysOfWeek.length > 0 && 
        !config.behavior.bannerSchedule.daysOfWeek.includes(currentDay)) {
        return false;
    }

    return true;
}

// ============== EVENT LISTENERS ============== //

function setupEventListeners() {
    // Banner buttons
    document.getElementById('acceptAllBtn')?.addEventListener('click', function() {
        acceptAllCookies();
        hideCookieBanner();
        if (config.behavior.showFloatingButton) {
            showFloatingButton();
        }
    });
    
    document.getElementById('rejectAllBtn')?.addEventListener('click', function() {
        rejectAllCookies();
        hideCookieBanner();
        if (config.behavior.showFloatingButton) {
            showFloatingButton();
        }
    });
    
    document.getElementById('adjustConsentBtn')?.addEventListener('click', function() {
        showCookieSettings();
        hideCookieBanner();
    });
    
    // Modal buttons
    document.getElementById('acceptAllSettingsBtn')?.addEventListener('click', function() {
        acceptAllCookies();
        hideCookieSettings();
        if (config.behavior.showFloatingButton) {
            showFloatingButton();
        }
    });
    
    document.getElementById('rejectAllSettingsBtn')?.addEventListener('click', function() {
        rejectAllCookies();
        hideCookieSettings();
        if (config.behavior.showFloatingButton) {
            showFloatingButton();
        }
    });
    
    document.getElementById('saveSettingsBtn')?.addEventListener('click', function() {
        saveCustomSettings();
        hideCookieSettings();
        if (config.behavior.showFloatingButton) {
            showFloatingButton();
        }
    });
    
    // Close buttons
    document.querySelector('.close-modal')?.addEventListener('click', function() {
        hideCookieSettings();
        if (!getCookie('cookie_consent')) {
            showCookieBanner();
        }
    });
    
    document.querySelector('.close-analytics-modal')?.addEventListener('click', function() {
        hideAnalyticsDashboard();
    });
    
    // Floating button
    document.getElementById('cookieFloatingButton')?.addEventListener('click', function() {
        if (!document.getElementById('cookieConsentBanner').classList.contains('show')) {
            showCookieBanner();
        } else {
            hideCookieBanner();
        }
    });
    
    // Language selector
    document.getElementById('cookieLanguageSelect')?.addEventListener('change', function() {
        changeLanguage(this.value);
    });
    
    // Handle scroll-based acceptance
    if (config.behavior.acceptOnScroll) {
        window.addEventListener('scroll', handleScrollAcceptance);
    }
}

function setupPasswordPromptEvents() {
    const passwordSubmit = document.getElementById('dashboardPasswordSubmit');
    if (passwordSubmit) {
        passwordSubmit.addEventListener('click', function() {
            const passwordInput = document.getElementById('dashboardPasswordInput');
            const errorMessage = document.getElementById('passwordError');
            const lang = document.getElementById('cookieLanguageSelect') ? 
                document.getElementById('cookieLanguageSelect').value : 'en';
            
            if (passwordInput.value === config.analytics.dashboardPassword) {
                isDashboardAuthenticated = true;
                setCookie('dashboard_auth', 'true', config.analytics.passwordCookieDuration);
                
                // Update the dashboard content
                document.querySelector('.cookie-analytics-body').innerHTML = generateAnalyticsDashboard(lang);
            } else {
                errorMessage.textContent = translations[lang].passwordIncorrect;
            }
        });
    }
}

// ============== UI CONTROL FUNCTIONS ============== //

function showCookieBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    banner.style.display = 'block';
    setTimeout(() => {
        banner.classList.add('show');
    }, 10);
    bannerShown = true;
}

function hideCookieBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    banner.classList.remove('show');
    setTimeout(() => {
        banner.style.display = 'none';
    }, 400);
    bannerShown = false;
}

function showCookieSettings() {
    const modal = document.getElementById('cookieSettingsModal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    hideCookieBanner();
}

function hideCookieSettings() {
    const modal = document.getElementById('cookieSettingsModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function showAnalyticsDashboard() {
    const lang = document.getElementById('cookieLanguageSelect') ? 
        document.getElementById('cookieLanguageSelect').value : 'en';
    
    if (config.analytics.passwordProtect && !isDashboardAuthenticated) {
        const modal = document.getElementById('cookieAnalyticsModal');
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    } else {
        const modal = document.getElementById('cookieAnalyticsModal');
        document.querySelector('.cookie-analytics-body').innerHTML = generateAnalyticsDashboard(lang);
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }
}

function hideAnalyticsDashboard() {
    const modal = document.getElementById('cookieAnalyticsModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function showFloatingButton() {
    const button = document.getElementById('cookieFloatingButton');
    button.style.display = 'flex';
    setTimeout(() => {
        button.classList.add('show');
    }, 100);
}

function hideFloatingButton() {
    const button = document.getElementById('cookieFloatingButton');
    button.classList.remove('show');
    setTimeout(() => {
        button.style.display = 'none';
    }, 300);
}

function handleScrollAcceptance() {
    if (bannerShown && !getCookie('cookie_consent')) {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercentage > 50) { // Accept on 50% scroll
            acceptAllCookies();
            hideCookieBanner();
            if (config.behavior.showFloatingButton) {
                showFloatingButton();
            }
            window.removeEventListener('scroll', handleScrollAcceptance);
        }
    }
}

// ============== ANALYTICS DASHBOARD ============== //

function generateAnalyticsDashboard(language = 'en') {
    const lang = translations[language] || translations.en;
    
    // Calculate totals
    const total = consentAnalytics.total.accepted + 
                 consentAnalytics.total.rejected + 
                 consentAnalytics.total.custom;
    
    const acceptedPercent = total > 0 ? Math.round((consentAnalytics.total.accepted / total) * 100) : 0;
    const rejectedPercent = total > 0 ? Math.round((consentAnalytics.total.rejected / total) * 100) : 0;
    const customPercent = total > 0 ? Math.round((consentAnalytics.total.custom / total) * 100) : 0;
    
    // Get last 1 day data
    const today = new Date().toISOString().split('T')[0];
    const last1Day = {};
    last1Day[today] = consentAnalytics.daily[today] || { accepted: 0, rejected: 0, custom: 0 };
    
    // Get last 7 days data
    const last7Days = {};
    const dates = Object.keys(consentAnalytics.daily).sort().reverse().slice(0, 7);
    dates.forEach(date => {
        last7Days[date] = consentAnalytics.daily[date];
    });
    
    // Get last 30 days data
    const last30Days = {};
    const monthlyDates = Object.keys(consentAnalytics.daily).sort().reverse().slice(0, 30);
    monthlyDates.forEach(date => {
        last30Days[date] = consentAnalytics.daily[date];
    });
    
    return `
    <div class="analytics-dashboard">
        <h3>${lang.dashboardTitle}</h3>
        
        <div class="stats-summary">
            <div class="stat-card accepted">
                <h4>${lang.statsAccepted}</h4>
                <div class="stat-value">${consentAnalytics.total.accepted}</div>
                <div class="stat-percentage">${acceptedPercent}%</div>
            </div>
            
            <div class="stat-card rejected">
                <h4>${lang.statsRejected}</h4>
                <div class="stat-value">${consentAnalytics.total.rejected}</div>
                <div class="stat-percentage">${rejectedPercent}%</div>
            </div>
            
            <div class="stat-card custom">
                <h4>${lang.statsCustom}</h4>
                <div class="stat-value">${consentAnalytics.total.custom}</div>
                <div class="stat-percentage">${customPercent}%</div>
            </div>
            
            <div class="stat-card total">
                <h4>${lang.statsTotal}</h4>
                <div class="stat-value">${total}</div>
                <div class="stat-percentage">100%</div>
            </div>
        </div>
        
        <div class="time-based-stats">
            <div class="time-stat">
                <h4>${lang.statsLast1Day}</h4>
                <div class="stat-bars">
                    ${Object.entries(last1Day).map(([date, data]) => {
                        const dayTotal = data.accepted + data.rejected + data.custom;
                        const dayAcceptedPercent = dayTotal > 0 ? (data.accepted / dayTotal) * 100 : 0;
                        const dayRejectedPercent = dayTotal > 0 ? (data.rejected / dayTotal) * 100 : 0;
                        const dayCustomPercent = dayTotal > 0 ? (data.custom / dayTotal) * 100 : 0;
                        
                        return `
                        <div class="stat-bar-container">
                            <div class="stat-bar-label">${date}</div>
                            <div class="stat-bar">
                                <div class="stat-bar-segment accepted" style="width: ${dayAcceptedPercent}%"></div>
                                <div class="stat-bar-segment custom" style="width: ${dayCustomPercent}%"></div>
                                <div class="stat-bar-segment rejected" style="width: ${dayRejectedPercent}%"></div>
                            </div>
                            <div class="stat-bar-legend">
                                <span>${data.accepted} ${lang.statsAccepted}</span>
                                <span>${data.custom} ${lang.statsCustom}</span>
                                <span>${data.rejected} ${lang.statsRejected}</span>
                            </div>
                        </div>`;
                    }).join('')}
                </div>
            </div>
            
            <div class="time-stat">
                <h4>${lang.statsLast7Days}</h4>
                <div class="stat-bars">
                    ${Object.entries(last7Days).map(([date, data]) => {
                        const dayTotal = data.accepted + data.rejected + data.custom;
                        const dayAcceptedPercent = dayTotal > 0 ? (data.accepted / dayTotal) * 100 : 0;
                        const dayRejectedPercent = dayTotal > 0 ? (data.rejected / dayTotal) * 100 : 0;
                        const dayCustomPercent = dayTotal > 0 ? (data.custom / dayTotal) * 100 : 0;
                        
                        return `
                        <div class="stat-bar-container">
                            <div class="stat-bar-label">${date}</div>
                            <div class="stat-bar">
                                <div class="stat-bar-segment accepted" style="width: ${dayAcceptedPercent}%"></div>
                                <div class="stat-bar-segment custom" style="width: ${dayCustomPercent}%"></div>
                                <div class="stat-bar-segment rejected" style="width: ${dayRejectedPercent}%"></div>
                            </div>
                            <div class="stat-bar-legend">
                                <span>${data.accepted} ${lang.statsAccepted}</span>
                                <span>${data.custom} ${lang.statsCustom}</span>
                                <span>${data.rejected} ${lang.statsRejected}</span>
                            </div>
                        </div>`;
                    }).join('')}
                </div>
            </div>
            
            <div class="time-stat">
                <h4>${lang.statsLast30Days}</h4>
                <div class="stat-bars">
                    ${Object.entries(last30Days).map(([date, data]) => {
                        const dayTotal = data.accepted + data.rejected + data.custom;
                        const dayAcceptedPercent = dayTotal > 0 ? (data.accepted / dayTotal) * 100 : 0;
                        const dayRejectedPercent = dayTotal > 0 ? (data.rejected / dayTotal) * 100 : 0;
                        const dayCustomPercent = dayTotal > 0 ? (data.custom / dayTotal) * 100 : 0;
                        
                        return `
                        <div class="stat-bar-container">
                            <div class="stat-bar-label">${date}</div>
                            <div class="stat-bar">
                                <div class="stat-bar-segment accepted" style="width: ${dayAcceptedPercent}%"></div>
                                <div class="stat-bar-segment custom" style="width: ${dayCustomPercent}%"></div>
                                <div class="stat-bar-segment rejected" style="width: ${dayRejectedPercent}%"></div>
                            </div>
                            <div class="stat-bar-legend">
                                <span>${data.accepted} ${lang.statsAccepted}</span>
                                <span>${data.custom} ${lang.statsCustom}</span>
                                <span>${data.rejected} ${lang.statsRejected}</span>
                            </div>
                        </div>`;
                    }).join('')}
                </div>
            </div>
        </div>
    </div>`;
}

function generatePasswordPrompt(language = 'en') {
    const lang = translations[language] || translations.en;
    
    return `
    <div class="password-prompt">
        <h3>${lang.passwordPrompt}</h3>
        <input type="password" id="dashboardPasswordInput" placeholder="Password">
        <button id="dashboardPasswordSubmit">${lang.passwordSubmit}</button>
        <p id="passwordError" class="error-message"></p>
    </div>`;
}

// ============== MAIN EXECUTION ============== //

// Start the consent manager when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCookieConsent);
} else {
    initializeCookieConsent();
}
