var template = getCookie("template");

if(!template) 
{
  templateOne();
} 
else if(getCookie("template") == "grey")
{
    templateTwo();
}
else if(getCookie("template") == "green")
{
    templateThree();
}
else
{
templateOne();
}

function templateOne() 
{
  setCookie("template", "purple", 30);
  document.querySelector("#defaultTemplate").setAttribute("href", "assets/css/purple_theme.css");
}

function templateTwo() 
{
  setCookie("template", "grey", 30);
  document.querySelector("#defaultTemplate").setAttribute("href", "assets/css/grey_theme.css");
}

function templateThree() 
{
  setCookie("template", "green", 30);
  document.querySelector("#defaultTemplate").setAttribute("href", "assets/css/green_theme.css");
}