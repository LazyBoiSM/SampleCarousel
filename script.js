const photosArray = [
    {
        id : 0,
        source: "https://bit.ly/3KJn0Ab"
    },
    {
        id : 1,
        source: "https://bit.ly/3KH9Q6I"
    },
    {
        id : 2,
        source: "https://bit.ly/3Rqggea"
    },
    {
        id : 3,
        source: "https://bit.ly/45vSd3u"
    },
    {
        id : 4,
        source: "https://bit.ly/4b1AulE"
    },
    {
        id : 5,
        source: "https://bit.ly/3xjt2V4"
    }
]

const indicatorDiv = document.querySelector(".indicator");
const previousButton = document.querySelector(".previousButton");
const nextButton = document.querySelector(".nextButton");

for (let i = 0; i < photosArray.length; i++) {
    const item = `<div class="item" id="${i}"> </div>`;
    indicatorDiv.innerHTML += item;
}

const previousPhotoDiv = document.querySelector(".previousPhoto");
const mainPhotoDiv = document.querySelector(".mainPhoto");
const nextPhotoDiv = document.querySelector(".nextPhoto");

let currentShowingId = -1;
let nextShowingId;
let previousShowingId;


const photoChangeFunction = () => {
    if(currentShowingId === photosArray.length) {
        currentShowingId = 0;
    }
    if(currentShowingId === -1) {
        currentShowingId = photosArray.length-1;
    }
    const removeClass = document.getElementsByClassName("currentItem")[0];
    if(removeClass !== undefined) {
        if(removeClass.classList.contains("currentItem")) {
            removeClass.classList.remove("currentItem");
        }
    }
    const currentItem = document.getElementById(`${currentShowingId}`);
    currentItem.classList.add("currentItem");
    
    
    mainPhotoDiv.src = photosArray[currentShowingId].source;


    nextShowingId = currentShowingId + 1;
    previousShowingId = currentShowingId - 1;
    if(previousShowingId === -1) {
        previousShowingId = (photosArray.length-1);
    }
    if(nextShowingId === photosArray.length) {
        nextShowingId = 0;
    }
    nextPhotoDiv.src = photosArray[nextShowingId].source;
    previousPhotoDiv.src = photosArray[previousShowingId].source;
}

setInterval(() => {
    currentShowingId += 1;
    photoChangeFunction();
}, 5000);

previousButton.addEventListener("click", () => {
    currentShowingId -= 1;
    photoChangeFunction();
})

nextButton.addEventListener("click", () => {
    currentShowingId += 1;
    photoChangeFunction();
})