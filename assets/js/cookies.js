function setCookie(cookieName, cookieValue, days)
{
  var cookieExpires = "";

  if(days) 
  {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      cookieExpires = "; expires=" + date.toUTCString();
  }

  document.cookie = cookieName + "=" + (cookieValue || "")  + cookieExpires + "; path=/";
}

function getCookie(cookieName) 
{
  var name = cookieName + "=";
  var cookieArray = document.cookie.split(';');

  for(var i = 0; i < cookieArray.length; i++) 
  {
      var c = cookieArray[i];

      while(c.charAt(0) == ' ') c = c.substring(1, c.length);
      if(c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }

  return null;
}