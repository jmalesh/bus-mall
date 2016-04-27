var randomImg = [];
var runningTotal = [];
var newClick = document.getElementById('show-image');

var addRight = document.getElementById('add-right');
var addCenter = document.getElementById('add-center');
var addLeft = document.getElementById('add-left');
var showImg = document.getElementById('show-image');

//Img constructor function
function Picture(imgName, filePath) {
  this.imgName = imgName;
  this.filePath = filePath;
  this.newPath = 'img/' + this.filePath + '.jpg alt="' + this.imgName + '" />';
  this.timesShown = 0;
  this.timesClicked = 0;
  //randomImg.push(this);
}

//pushing in array
randomImg.push(new Picture('bag','bag'));
randomImg.push(new Picture('banana', 'banana'));
randomImg.push(new Picture('bathroom', 'bathroom'));
randomImg.push(new Picture('boots', 'boots'));
randomImg.push(new Picture('breakfast', 'breakfast'));
randomImg.push(new Picture('bubblegum', 'bubblegum'));
randomImg.push(new Picture('chair', 'chair'));
randomImg.push(new Picture('cthulhu', 'cthulhu'));
randomImg.push(new Picture('dogDuck', 'dogDuck'));
randomImg.push(new Picture('dragon', 'dragon'));
randomImg.push(new Picture('pen', 'pen'));
randomImg.push(new Picture('petSweep', 'petSweep'));
randomImg.push(new Picture('scissors', 'scissors'));
randomImg.push(new Picture('tauntaun', 'tauntaun'));
randomImg.push(new Picture('unicorn', 'unicorn'));
randomImg.push(new Picture('usb', 'usb'));
randomImg.push(new Picture('waterCan', 'waterCan'));
randomImg.push(new Picture('wineGlass', 'wineGlass'));

//Array of random Numbers
var threeDiffNums = [];

function makeRand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkRandom () {
  for (var i = 0; i < 3; i++) {
    threeDiffNums.push(makeRand(0, 9));
  }

  while (threeDiffNums[0] === threeDiffNums[1]) {
    console.log('Duplicate Found');
    threeDiffNums[1] = makeRand(0,9);
  }

  while (threeDiffNums[2] === threeDiffNums[0] || threeDiffNums[2] === threeDiffNums[1]) {
    console.log('Duplicate Found');
    threeDiffNums[2] = makeRand(0,9);
  }
}

function displayImg() {
  showImg.innerHTML = ' ';
  //var showImg = document.getElementById('show-image');
  for (var q = 0; q < threeDiffNums.length; q++) {
    var divEl = document.createElement('div');
    divEl.innerHTML = '<img src=' + randomImg[threeDiffNums[q]].newPath;
    showImg.appendChild(divEl);
    randomImg[threeDiffNums[q]].timesShown++;
  }
}
var onlyClicks = 0;

function handleClick(event) {
  onlyClicks++;
  console.log('you done clicked on ' + event.target.alt);
  for (var q = 0; q < randomImg.length; q++) {
    if (event.target.alt === randomImg[q].imgName) {
      randomImg[q].timesClicked++;
    }
  }
  threeDiffNums = [];
  checkRandom();
  displayImg();
  if (onlyClicks === 5) {
    alert('out f clicks');
  }
}
//}

newClick.addEventListener('click', handleClick);

button2.addEventListener('click', function() {
  hidey.hidden = true;
});

button3.addEventListener('click', function() {
  hidey.hidden = false;
});

checkRandom();
displayImg();
