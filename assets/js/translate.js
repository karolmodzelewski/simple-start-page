var language = getCookie("language");

if(!language) 
{
  setCookie("language", "english", 30);
  translate("english");
} 
else 
{
  translate(language);
}

function eng() 
{
  setCookie("language", "english", 30);
  translate("english");
}

function pl() 
{
  setCookie("language", "polish", 30);
  translate("polish");
}

function translate(language) 
{
  Object.keys(translations[language]).forEach(function(key) {
    document.querySelector("#" + key).innerText = translations[language][key];
  });
}