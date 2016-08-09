function lang_change(lang) {

    var lang_symbol = "./"+lang+"/";
    if (lang == "en")
        lang_symbol = "../";
    var sPath = window.location.pathname;
    var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
    window.location = lang_symbol + sPage;
} 