//Establishing globals
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

function doMath() {
  return Math.floor(Math.random() * randomImg.length);
}

function generateThree() {
  var img1 = doMath();

  var divEl = document.createElement('div');
  divEl.innerHTML = '<img src=' + randomImg[img1].newPath;
  showImg.appendChild(divEl);

  var img2 = doMath(Picture);

  while (img1 === img2) {
    img2 = doMath();
  }

  var divEl2 = document.createElement('div');
  divEl2.innerHTML = '<img src=' + randomImg[img2].newPath;
  showImg.appendChild(divEl2);

  var img3 = doMath();

  while (img3 === img1 || img3 === img2) {
    img3 = doMath();
  }

  var divEl3 = document.createElement('div');
  divEl3.innerHTML = '<img src=' + randomImg[img3].newPath;
  showImg.appendChild(divEl3);

  // function increaseTimesClicked () {
  //   Picture.timesClick += 1;
  // }
}

function handleClick(event) {
  console.log('you done clicked on ' + event.target.alt);
  this.timesClicked = +1;
  showImg.innerHTML = ' ';
  generateThree();
}

newClick.addEventListener('click', handleClick);

generateThree();
handleClick();
