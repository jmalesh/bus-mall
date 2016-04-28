var randomImg = [];
var runningTotal = [];
var labelMyImages = [];
var timesOnScreen = [];
var timesBeenClicked = [];
var newClick = document.getElementById('show-image');
var onlyClicks = 0;
//var chartDrawn = false;

var addRight = document.getElementById('add-right');
var addCenter = document.getElementById('add-center');
var addLeft = document.getElementById('add-left');
var showImg = document.getElementById('show-image');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var myChart = document.getElementById('my-chart');
var myChart3 = document.getElementById('my-chart3');

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
    threeDiffNums.push(makeRand(0, 17));
  }

  while (threeDiffNums[0] === threeDiffNums[1]) {
    console.log('Duplicate Found');
    threeDiffNums[1] = makeRand(0,17);
  }

  while (threeDiffNums[2] === threeDiffNums[0] || threeDiffNums[2] === threeDiffNums[1]) {
    console.log('Duplicate Found');
    threeDiffNums[2] = makeRand(0,17);
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

function gatherChartData() {
  for (z = 0; z < randomImg.length; z++) {
    labelMyImages.push(randomImg[z].imgName);
    timesOnScreen.push(randomImg[z].timesShown);
    timesBeenClicked.push(randomImg[z].timesClicked);
  }
}

var data = {
  labels: labelMyImages,
  datasets: [
    {
      label: 'Times Shown',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: timesOnScreen,
      yAxisID: 'y-axis-0',
    },
    {
      label: 'Times Selected',
      backgroundColor: 'rgba(54,162,235,0.2)',
      borderColor: 'rgba(54,162,235,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(54,162,235,0.4)',
      hoverBorderColor: 'rgba(54,162,235,1)',
      data: timesBeenClicked,
    }
  ]
};

function drawChart() {
  gatherChartData();
  var ctx = document.getElementById('my-chart3');
  console.log(labelMyImages, ctx);
  var resultsChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    //options: options
  });
  //myChart3.appendChild(ctx);
  //chartDrawn = true;
}

// function hideChart() {
//   document.getElementById('my-chart3').hidden = true;
// }

function handleClick(event) {
  onlyClicks++;
  console.log('you done clicked on ' + event.target.alt);
  for (var q = 0; q < randomImg.length; q++) {
    if (event.target.alt === randomImg[q].imgName) {
      randomImg[q].timesClicked++;
      localStorage.setItem('photoData', JSON.stringify(randomImg));
    }
  }
  threeDiffNums = [];
  checkRandom();
  displayImg();
  if (onlyClicks === 25) {
    document.getElementById('button2').style.visibility = 'visible';
    document.getElementById('button3').style.visibility = 'visible';
    showImg.style.visibility = 'hidden';
    showImg.style.display = 'none';
  }
};

function handleButton3(event) {
  console.log('you done clicked on the button');
  document.getElementById('button2').style.visibility = 'hidden';
  document.getElementById('button3').style.visibility = 'hidden';
  showImg.style.visibility = 'visible';
  onlyClicks = 15;
}

function handleButton2(event) {
  console.log('you are good');
  drawChart();
}

(function checkLocal() {
  if (localStorage.photoData) {
    console.log('Local storage exists');
    var parsedPhotoData = JSON.parse(localStorage.photoData);
    randomImg = parsedPhotoData;
    gatherChartData();
  } else {
    console.log('Local storage doesnt exist');
  }
}());

newClick.addEventListener('click', handleClick);
button3.addEventListener('click', handleButton3);
button2.addEventListener('click', handleButton2);

document.getElementById('button2').style.visibility = 'hidden';
document.getElementById('button3').style.visibility = 'hidden';

checkRandom();
displayImg();
