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

var tryThis;                                              //this var never gets used

function doMath() {
  return Math.floor(Math.random() * randomImg.length);
}

function generateThree(Picture) {   //the parameter Picture doesn't make sense. Picture is your constructor function, which shouldn't be used as a function parameter
                                    //also you don't pass any value as an argument when you call generateThree on line 88, so Picture has no value right now
  var img1 = doMath(Picture);       //doMath doesn't take any arguments, so you can't call it with 'Picture'

  var liEl = document.createElement('li');    //strongly recommend you switch these li's to divs so you don't get the li dots in your DOM
  liEl.innerHTML = '<img src=' + randomImg[img1].newPath;
  showImg.appendChild(liEl);

  var img2 = doMath(Picture);             //this logic is all good. proper checking for non-duplicate images

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

  function increaseTimesClicked () {  //this function is stuck inside the generateThree function. it should be moved out to global space.
    Picture.timesClick += 1;  //Picture still has no value here. Also the timesClick property doesn't exist in your constructor, so you can't increment it.
  }
}

function handleClick(event) {
  console.log(event);
  event.preventDefault();   //not necessary for a click event

  newClick.addEventListener('click',increaseTimesClicked);  //this should happen outside the handleClick function. otherwise it'll never happen

  for (i = 0; i < 25; i++) {    //this won't work because 'i' would reset to zero each time handleClick runs, so you would never get to 25. try making a global totalClicks variable to track that
    generateThree(Picture);
  }
}

generateThree();
