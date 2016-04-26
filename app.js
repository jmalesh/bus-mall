var randomImg = [];
var newClick = document.getElementById('show-image');

var addRight = document.getElementById('add-right');
var addCenter = document.getElementById('add-center');
var addLeft = document.getElementById('add-left');
var showImg = document.getElementById('show-image');
//Img constructor function
function Picture(imgName, filePath) {
  this.imgName = imgName;
  this.filePath = filePath;
  this.newPath = 'img/' + this.filePath + '.jpg>';
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

var tryThis;

function doMath() {
  return Math.floor(Math.random() * randomImg.length);
}

function generateThree(Picture) {
  var img1 = doMath(Picture);

  var liEl = document.createElement('li');
  liEl.innerHTML = '<img src=' + randomImg[img1].newPath;
  showImg.appendChild(liEl);

  var img2 = doMath(Picture);

  while (img1 === img2) {
    img2 = doMath(Picture);
  }

  var liEl2 = document.createElement('li');
  liEl2.innerHTML = '<img src=' + randomImg[img2].newPath;
  showImg.appendChild(liEl2);

  var img3 = doMath(Picture);

  while (img3 === img1 || img3 === img2) {
    img3 = doMath(Picture);
  }

  var liEl3 = document.createElement('li');
  liEl3.innerHTML = '<img src=' + randomImg[img3].newPath;
  showImg.appendChild(liEl3);

  function increaseTimesClicked () {
    Picture.timesClick += 1;
  }
}

function handleClick(event) {
  console.log(event);
  event.preventDefault();

  newClick.addEventListener('click',increaseTimesClicked);

  for (i = 0; i < 25; i++) {
    generateThree(Picture);
  }
}

generateThree();
