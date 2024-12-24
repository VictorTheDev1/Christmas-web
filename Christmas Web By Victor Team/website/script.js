  // Extract the username from the query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('name');

  // Set the username dynamically
  if (username) {
    document.getElementById('username').textContent = username;
  } else {
    document.getElementById('username').textContent = "Guest";
  }



  // Array of greeting screens
const cards = [
  {
      image: '/images/ch2.jpg',
      greeting: '',
      text1: 'Wishes You',
      text2: 'A',
      text3: 'Blessed Christmas',
      additionalText: ''
  },
  {
      image: '/images/ch3.jpg',
      greeting: '',
      text1: '',
      text2: '',
      text3: '',
      additionalText: 'Wishing you a Christmas filled with warmth, joy, and cherished moments with your loved ones. May the magic of the season bring happiness to your home, peace to your heart, and laughter to your days. Here\'s to a wonderful holiday and a bright New Year ahead!'
  },
  {
      image: '/images/ch4.jpg',
      greeting: '',
      text1: 'May Your',
      text2: 'Holidays Be',
      text3: 'Merry & Bright',
      additionalText: '',
      isLast: true // Mark this as the last slide
  }
];

let currentIndex = 0;

// Function to change the card content
function nextCard() {
  currentIndex = (currentIndex + 1) % cards.length; // Loop back when reaching the end
  
  const currentCard = cards[currentIndex];
  
  document.getElementById('bgImage').src = currentCard.image;
  document.getElementById('greeting').style.display = currentCard.greeting ? 'block' : 'none';
  document.getElementById('username').innerText = currentCard.greeting;
  document.getElementById('mainText1').innerText = currentCard.text1;
  document.getElementById('mainText2').innerText = currentCard.text2;
  document.getElementById('mainText3').innerText = currentCard.text3;
  document.getElementById('additionalText').innerText = currentCard.additionalText;

  const nextBtn = document.querySelector('.next-btn');
  if (currentCard.isLast) {
      nextBtn.innerText = 'Make Yours';
      nextBtn.onclick = makeYours;
  } else {
      nextBtn.innerText = 'Next';
      nextBtn.onclick = nextCard;
  }
}

// Action for "Make Yours" button
// Action for "Make Yours" button
function makeYours() {
  window.location.href = '/index.html';
}


