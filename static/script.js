"use strict";
let currentIndex = 0;
const imageCount = images.length;
const thumbnails = document.getElementsByClassName("thumbnails-container")[0].getElementsByTagName("img");
const thumbnailCount = document.getElementsByClassName("thumbnails-container")[0].getElementsByTagName("img").length;
thumbnails[Math.floor(thumbnailCount / 2)].style.border = "thick solid #4e4e4e";
const setThumbnailsIndexex = (index) => {
    let output = [];
    for (let i = -Math.floor(thumbnailCount / 2); i <= Math.floor(thumbnailCount / 2); i++) {
        let currentIndex1 = currentIndex;
        currentIndex1 += i;
        if (currentIndex1 > imageCount - 1) {
            currentIndex1 -= imageCount;
        }
        if (currentIndex1 < 0) {
            currentIndex1 += imageCount;
        }
    }
    return output;
};
const indexMove = (num) => {
    currentIndex += num;
    if (currentIndex > imageCount - 1) {
        currentIndex -= imageCount;
    }
    if (currentIndex < 0) {
        currentIndex += imageCount;
    }
    return currentIndex;
};
const setMainPicture = (index) => {
    const mainPicture = document.getElementsByClassName("displayed-image")[0];
    mainPicture.style.backgroundImage = `url('static/images/${images[index]}')`;
};
const setThumbNails = (indexes) => {
    for (let i = 0; i < indexes.length; i++) {
        thumbnails[i].src = `static/thumbnails/thumb.${images[indexes[i]]}`;
    }
};
const setAll = () => {
    setMainPicture(currentIndex);
    setThumbNails(setThumbnailsIndexex(currentIndex));
};
setAll();
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
rightArrow.addEventListener("click", () => {
    indexMove(1);
    setAll();
});
leftArrow.addEventListener("click", () => {
    indexMove(-1);
    setAll();
});
for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", () => {
        indexMove(-Math.floor(thumbnailCount / 2) + i);
        setAll();
    });
}
const onKeyPress = (event) => {
    switch (event.keyCode) {
        case 37:
            indexMove(-1);
            setAll();
            break;
        case 39:
            indexMove(1);
            setAll();
            break;
    }
};
document.addEventListener('keydown', onKeyPress);
setAll();
