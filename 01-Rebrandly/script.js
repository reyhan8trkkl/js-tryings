// Information to reach API
const apiKey = '892d3efc31584e258798a12eb7029425';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
//const responseField = document.querySelector('#responseField');

const shortenUrl=()=>{
    const urlToShorten = inputField.value;
    const data = JSON.stringify({destination: urlToShorten});
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.onreadystatechange = () => {
        if( xhr.readyState === XMLHttpRequest.DONE){
            renderResponse (xhr.response);
            
        }
    } 
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-type", "application/json")
    xhr.setRequestHeader("apikey", apiKey);
    xhr.send(data);
    console.log(xhr);
} 

// shortenButton.onclick=(e)=>{
//     displayShortUrl()
// }
shortenButton.addEventListener("click", displayShortUrl);
