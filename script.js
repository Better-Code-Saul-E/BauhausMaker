const generateButton = document.getElementById("generate-button");

const shapes = [
    "cross",
    "triangle",
    "triangle-top-left",
    "triangle-bottom-right",
    "circle",
    "circle-top-right",
    "circle-bottom-left",
    "square",
    "hollow-square",
    "x",
    "right-chevron",
    "left-chevron",
    "diamond",
    "triangle-right",
    "l-shape"
];

const images = [
    "Images/arrows-down.png",
    "Images/arrows-left.png",
    "Images/arrows-right.png",
    "Images/arrows-touch.png",
    "Images/arrows-up.png",
    "Images/circle-quartered.png",
    "Images/circle.png",
    "Images/circles-four.png",
    "Images/circles-sixteen.png",
    "Images/half-circle.png",
    "Images/cross.png",
    "Images/halves-stacked.png",
    "Images/hollow-circle-quartered.png",
    "Images/hollow-circle.png",
    "Images/hollowed-halves.png",
    "Images/quartered-circle.png",
    "Images/lines-horizontal.png",
    "Images/lines-vertical.png",
    "Images/square.png",
    "Images/triangle.png"
];

const colors = [
    "#E83051",
    "#F0CF54",
    "#6A7EDB",
    "#CC5804",
    "#575C55",
    "#A97C73"
];

const exhibitionNumber = document.getElementById("exhibition-number");
const boxes = document.querySelectorAll("article .shape");
const poster = document.querySelector(".poster");

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function generatePoster() {
    const useImages = Math.random() > 0.5; 

    boxes.forEach((box) => {
        box.className = "shape"; 
        box.style.backgroundImage = "";

        if (useImages) {
            poster.style.backgroundColor = "#FFFFFF";
            let i = Math.floor(Math.random() * images.length);
            box.style.backgroundImage = `url(${images[i]})`;
            box.style.backgroundSize = "cover"; 
            generateButton.style.backgroundColor =  "#E83051";
        } else {
            poster.style.backgroundColor = "#E8E6D5";
            let i = Math.floor(Math.random() * shapes.length);
            let j = Math.floor(Math.random() * colors.length);
            box.classList.add(shapes[i]);
            box.style.backgroundColor = colors[j];
            generateButton.style.backgroundColor = "#6A7EDB";
        }
    });

    exhibitionNumber.textContent = getRandomNumber(1900, 2000);
}

generateButton.addEventListener("click", generatePoster);
window.addEventListener("load", generatePoster);

