var language = (navigator.browserLanguage != undefined)? navigator.browserLanguage : navigator.language;

language = language.substring(0, 2);
pathname = window.location.pathname;

if (language != "pt") && (pathname == '') {
    window.location.href = window.location.hostname + '/en';
} else if (language == "pt")  && (pathname != ''){
    window.location.href = window.location.hostname;
}
