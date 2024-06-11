let $ = document
let loader = $.querySelector(".loader")
window.addEventListener("load", function () {
    loader.className += ' hidden'
})
// header codes
let siteTitle = $.querySelector("h1")
let titleColors = ["#039BE5", "#3F51B5", "#9C27B0", "#F44336", "#E91E63", "#E64A19", "#CDDC39"]
let randomNumber = 0
setInterval(() => {
    randomNumber = Math.floor(Math.random() * 7)
    siteTitle.style.color = titleColors[randomNumber]
}, 1000);
let barsBtn = $.querySelector(".barsbtn")
let mobileSectionBox = $.querySelector(".mobile-list-section")
let flagBars = true
barsBtn.addEventListener("click", function () {
    if (flagBars) {
        flagBars = false
        barsBtn.classList.replace("fa-bars", "fa-xmark")
        mobileSectionBox.classList.add("mobile-list-section-open")
    } else {
        flagBars = true
        barsBtn.classList.replace("fa-xmark", "fa-bars")
        mobileSectionBox.classList.remove("mobile-list-section-open")

    }
})
let protectElem = $.getElementById("protect")
let protectDownElem = $.getElementById("protectDown")
let plusIconprotect = $.getElementById("plusIconProtect")
let gameElem = $.getElementById("game")
let gameDownElem = $.getElementById("gameDown")
let plusIconGame = $.getElementById("plusIconGame")
let eatingElem = $.getElementById("eating")
let eatingDownElem = $.getElementById("eatingDown")
let plusIconEating = $.getElementById("plusIconEating")
let bathroomElem = $.getElementById("bathroom")
let bathroomDownElem = $.getElementById("bathroomDown")
let plusIconBathroom = $.getElementById("plusIconBathroom")
let clothElem = $.getElementById("cloth")
let clothDownElem = $.getElementById("clothDown")
let plusIconcloth = $.getElementById("plusIconcloth")
let downMenuFlag = true
protectElem.addEventListener("click", function () {
    if (downMenuFlag) {
        protectDownElem.classList.add("show-down-ul-mobile")
        downMenuFlag = false
        plusIconprotect.classList.replace("fa-plus", "fa-xmark")
    } else {
        protectDownElem.classList.remove("show-down-ul-mobile")
        plusIconprotect.classList.replace("fa-xmark", "fa-plus")
        downMenuFlag = true
    }
})
gameElem.addEventListener("click", function () {
    if (downMenuFlag) {
        gameDownElem.classList.add("show-down-ul-mobile")
        downMenuFlag = false
        plusIconGame.classList.replace("fa-plus", "fa-xmark")
    } else {
        gameDownElem.classList.remove("show-down-ul-mobile")
        plusIconGame.classList.replace("fa-xmark", "fa-plus")
        downMenuFlag = true
    }
})
eatingElem.addEventListener("click", function () {
    if (downMenuFlag) {
        eatingDownElem.classList.add("show-down-ul-mobile")
        downMenuFlag = false
        plusIconEating.classList.replace("fa-plus", "fa-xmark")
    } else {
        eatingDownElem.classList.remove("show-down-ul-mobile")
        plusIconEating.classList.replace("fa-xmark", "fa-plus")
        downMenuFlag = true
    }
})
bathroomElem.addEventListener("click", function () {
    if (downMenuFlag) {
        bathroomDownElem.classList.add("show-down-ul-mobile")
        downMenuFlag = false
        plusIconBathroom.classList.replace("fa-plus", "fa-xmark")
    } else {
        bathroomDownElem.classList.remove("show-down-ul-mobile")
        plusIconBathroom.classList.replace("fa-xmark", "fa-plus")
        downMenuFlag = true
    }
})
clothElem.addEventListener("click", function () {
    if (downMenuFlag) {
        clothDownElem.classList.add("show-down-ul-mobile")
        downMenuFlag = false
        plusIconcloth.classList.replace("fa-plus", "fa-xmark")
    } else {
        clothDownElem.classList.remove("show-down-ul-mobile")
        plusIconcloth.classList.replace("fa-xmark", "fa-plus")
        downMenuFlag = true
    }
})
// header gallery script codes storage
let imageLinkElem = $.querySelector(".image-link")
let imageSlider = $.querySelector(".header-image")
let imageMainBox = $.querySelector(".image-box")
let imageMainBoxWidth = imageMainBox.offsetWidth
if (imageMainBoxWidth < 760) {
    function small() {
        let headerImageStorageSmaller = [
            { image_src: "https://sismoonimaryam.com/wp-content/uploads/2024/04/clothing_mobile1.jpg", image_link: "#" },
            { image_src: "https://sismoonimaryam.com/wp-content/uploads/2024/04/room_mobile1.jpg", image_link: "#" },
            { image_src: "https://sismoonimaryam.com/wp-content/uploads/2024/02/20240225_205904.jpg", image_link: "#" }
        ]
        let randomeNumberImageSlider = 0
        setInterval(() => {
            randomeNumberImageSlider = Math.floor(Math.random() * 3)
            imageSlider.src = headerImageStorageSmaller[randomeNumberImageSlider].image_src
            imageLinkElem.href = headerImageStorageSmaller[randomeNumberImageSlider].image_link
        }, 2000);
    }
    small()
} else {
    function big() {

        let headerImageStorage = [
            { image_src: "https://sismoonimaryam.com/wp-content/uploads/2024/03/20240229_233733-1920x690.jpg", image_link: "#" },
            { image_src: "https://sismoonimaryam.com/wp-content/uploads/2024/04/room_desk1-scaled-1920x690.jpg", image_link: "#" },
            { image_src: "https://sismoonimaryam.com/wp-content/uploads/2024/04/clothing_desk1-scaled-1920x690.jpg", image_link: "#" }
        ]
        let randomeNumberImageSlider = 0
        setInterval(() => {
            randomeNumberImageSlider = Math.floor(Math.random() * 3)
            imageSlider.src = headerImageStorage[randomeNumberImageSlider].image_src
            imageLinkElem.href = headerImageStorage[randomeNumberImageSlider].image_link
        }, 2000);
    }
    big()
}