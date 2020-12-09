var btnTranslate = document.querySelector("#btn");
var txtInput = document.querySelector("#txtInput")
var output = document.querySelector("#output");
var url = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) 
{
  return url + "?" + "text=" + text
}

function errorHandler(error)
{
  console.log("Error occured", error);
  alert("Something wrong with server! \nTry again later!!")
}

function clickHandler()
{
  fetch(getTranslationURL(txtInput.value))
    .then(response => response.json())
    .then(json => {output.innerText = json.contents.translated})
    .catch(errorHandler)
}

btnTranslate.addEventListener("click",clickHandler);