const dictionary = {
    "pl": {
        // Logowanie / Aktywacja
        "greeting": "Dzień dobry!",
        "sub_greeting": "Zaloguj się do aplikacji.",
        "bio_login": "Zaloguj się biometrią",
        "password_label": "Hasło",
        "login_btn": "Zaloguj się",
        "bio_switch": "Logowanie biometrią",
        "forgot_password": "Nie pamiętasz hasła?",
        "activation_title": "Aktywacja Systemu",
        "activation_desc": "Wprowadź unikalny klucz licencyjny, aby powiązać to urządzenie z bazą centralną.",
        "activation_btn": "Zweryfikuj klucz",
        
        // Menu dolne i Więcej
        "docs": "Dokumenty",
        "services": "Usługi",
        "qr_code": "Kod QR",
        "more": "Więcej",
        "profile": "Profil Oficera",
        "edit_data": "Edytuj dane osobowe",
        "appearance": "Wygląd aplikacji",
        "notifications": "Powiadomienia",
        "install_pwa": "Zainstaluj aplikację (PWA)",
        "update_app": "Aktualizacja aplikacji",
        "deactivate": "Dezaktywuj aplikację",
        "about": "O aplikacji",
        "logout": "Wyloguj się",
        
        // Karta
        "card_title": "Karta Konfidenta",
        "card_nickname": "Pseudonim",
        "card_name": "Imię i nazwisko",
        "card_citizenship": "Obywatelstwo",
        "card_package": "Pakiet zaangażowania",
        "card_pesel": "Numer ewidencyjny (PESEL)"
    },
    "en": {
        // Login / Activation
        "greeting": "Good morning!",
        "sub_greeting": "Log in to the application.",
        "bio_login": "Log in with biometrics",
        "password_label": "Password",
        "login_btn": "Log in",
        "bio_switch": "Biometric login",
        "forgot_password": "Forgot password?",
        "activation_title": "System Activation",
        "activation_desc": "Enter your unique license key to link this device to the central database.",
        "activation_btn": "Verify key",
        
        // Bottom Menu and More
        "docs": "Documents",
        "services": "Services",
        "qr_code": "QR Code",
        "more": "More",
        "profile": "Officer Profile",
        "edit_data": "Edit personal data",
        "appearance": "Appearance",
        "notifications": "Notifications",
        "install_pwa": "Install App (PWA)",
        "update_app": "Update Application",
        "deactivate": "Deactivate Application",
        "about": "About Application",
        "logout": "Log out",
        
        // Card
        "card_title": "Informant ID Card",
        "card_nickname": "Nickname (Codename)",
        "card_name": "Full Name",
        "card_citizenship": "Citizenship",
        "card_package": "Engagement Package",
        "card_pesel": "ID Number (PESEL)"
    }
};

function applyLanguage() {
    const lang = localStorage.getItem('lang') || 'pl';
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dictionary[lang] && dictionary[lang][key]) {
            el.innerText = dictionary[lang][key];
        }
    });
}

document.addEventListener("DOMContentLoaded", applyLanguage);
