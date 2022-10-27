let currentIndex: number = 0
const imageCount = images.length
const thumbnails: HTMLCollectionOf<HTMLImageElement> = document.getElementsByClassName("thumbnails-container")[0].getElementsByTagName("img")
const thumbnailCount: number = document.getElementsByClassName("thumbnails-container")[0].getElementsByTagName("img").length
thumbnails[Math.floor(thumbnailCount / 2)].style.border = "thick solid #4e4e4e";

const setThumbnailsIndexex = (index: number): number[] => {
    let output: number[] = []
    for (let i = -Math.floor(thumbnailCount / 2); i <= Math.floor(thumbnailCount / 2); i++) {
        let currentIndex1 = currentIndex
        currentIndex1 += i
        if (currentIndex1 > imageCount - 1) {
            currentIndex1 -= imageCount
        }
        if (currentIndex1 < 0) {
            currentIndex1 += imageCount
        }
    }
    return output
}

const indexMove = (num: number): number => {
    currentIndex += num
    if (currentIndex > imageCount - 1) {
        currentIndex -= imageCount
    }
    if (currentIndex < 0) {
        currentIndex += imageCount
    }
    return currentIndex
}

const setMainPicture = (index: number): void => {
    const mainPicture: HTMLDivElement = document.getElementsByClassName("displayed-image")[0] as HTMLDivElement
    mainPicture.style.backgroundImage = `url('static/images/${images[index]}')`
}

const setThumbNails = (indexes: number[]): void => {
    for (let i = 0; i < indexes.length; i++) {
        thumbnails[i].src = `static/thumbnails/thumb.${images[indexes[i]]}`

    }
}

const setAll = () => {
    setMainPicture(currentIndex)
    setThumbNails(setThumbnailsIndexex(currentIndex))
}

setAll()

const leftArrow: HTMLDivElement = document.getElementById("leftArrow") as HTMLDivElement
const rightArrow: HTMLDivElement = document.getElementById("rightArrow") as HTMLDivElement

rightArrow.addEventListener("click", () => {
    indexMove(1)
    setAll()
})

leftArrow.addEventListener("click", () => {
    indexMove(-1)
    setAll()
})

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", () => {
        indexMove(-Math.floor(thumbnailCount / 2) + i)
        setAll()
    })
}

const onKeyPress = (event: any) => {
    switch (event.keyCode) {
        case 37:
            indexMove(-1)
            setAll()
            break;
        case 39:
            indexMove(1)
            setAll()
            break;
    }
}

document.addEventListener('keydown', onKeyPress);
setAll()