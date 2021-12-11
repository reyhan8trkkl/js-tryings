
const calculateCharacter = () => {

  let isim= prompt("isim girin");
  let tweet = prompt("Burasi tweettir");
  let tweetCount = tweet.length;
  let tweetLeft =150-tweetCount;

  alert(`${tweetCount} karakter yazdiniz, ${tweetLeft} karakteriniz kaldi...`)
  console.log(`${tweetCount} karakter yazdiniz, ${tweetLeft} karakteriniz kaldi...`)


}


// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);
