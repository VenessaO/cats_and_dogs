function toggleVoteContainer(){
  var voteContainer = document.getElementById("vote-container");

  if(voteContainer.style.display === ""){
    voteContainer.style.display = "block";
  }
}

function increaseLikes(element){
  var likes = element.innerText;
  likes = parseInt(likes);
  likes += 1;
  element.innerText = likes;

  var scores = document.getElementsByClassName("score");
  var score = scores[0];
  score.style.color = "red";
}

var catsImages = ["cat1.jpg", "cat2.jpg", "cat3.jpg"];
var dogsImages = ["dogs1.jpg", "dogs2.jpg", "dogs3.jpg"];

function changeImage(element) {
  console.log(element.id);

var animals = [];

  if(element.id === "cats-carousel"){
    animals = catsImages;
  } else{
    animals = dogsImages;
  }


var animals = [];

if(element.id === "cats-carousel"){
  animals = catsImages;
} else{
  animals = dogsImages;
}

var carousel = document.getElementById(element.id);
var image = carousel.getElementsByTagName('img')[0];
var imageUrl = image.getAttribute('src');
var imageIndex = animals.indexOf(imageUrl);

if(imageIndex === animals.length - 1){
  imageIndex = 0;
} else {
  imageIndex += 1;
}

imageURL = animals[imageIndex];

image.src = imageURL;

}
