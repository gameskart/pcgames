
let dropDown = document.querySelector(".dropdown-menu");
let dropMenu2 = document.querySelector(".menu-2");
let dropMenu3 = document.querySelector(".menu-3");
let stopMenu = document.querySelector(".stop-menu");
let dropdownItem = document.querySelector(".dropdown-item");
let navbarDropdown2 = document.getElementById("navbarDropdown2");
let navbarToggler = document.querySelector(".navbar-toggler");
let navbarCollapse = document.querySelector(".navbar-collapse");

// id of dropdown menu
let dropdownMenu = document.getElementById("navbarDropdown1");
let items = document.getElementById("item");
// console.log(items );  

function dropMenuFuncAdd1() {
    if (dropDown.classList.value !== "displayShow1") {
        dropDown.classList.add("displayShow1");
    }
}

function dropMenuFuncRemove1() {
    if (dropDown.classList.value === "displayShow1") {
        dropDown.classList.remove("displayShow1");
    }
    dropDown.classList.remove("displayShow1");
}

function dropMenuFuncAdd2() {
    if (dropMenu2.classList.value !== "displayShow2") {
        dropMenu2.classList.add("displayShow2");
    }
}

function dropMenuFuncRemove2() {
    if (dropMenu2.classList.value === "displayShow2") {
        dropMenu2.classList.remove("displayShow2");
    }
    dropMenu2.classList.remove("displayShow2");
}
function dropMenuFuncAdd3() {
    if (dropMenu3.classList.value !== "displayShow3") {
        dropMenu3.classList.add("displayShow3");
    }
}

function dropMenuFuncRemove3() {
    if (dropMenu3.classList.value === "displayShow3") {
        dropMenu3.classList.remove("displayShow3");
    }
    dropMenu3.classList.remove("displayShow3");
    // dropMenu3.classList.add("remove-menu");
}


function stopMainMenu() {
    if (dropDown.classList.value !== "stop-menu1") {
        dropDown.classList.add("stop-menu1");
    }
    if (dropMenu2.classList.value !== "stop-menu2") {
        dropMenu2.classList.add("stop-menu2");
    }
    if (dropMenu3.classList.value !== "stop-menu3") {
        dropMenu3.classList.add("stop-menu3");
    }
}

// function scrollOfHomeScreenBlur() {
//     if (navbarToggler.classList.value !== "collapsed") {
//         navbarToggler.classList.add("collapsed");
//     }
//     else if (navbarCollapse.classList.value === "show") {
//         navbarCollapse.classList.remove("show");
//     }
//     navbarCollapse.classList.remove("show");
// }


function paddingAllItems() {
    document.getElementById("margin-carousel").style.marginTop = "auto";
    document.getElementById("margin-carousel").style.position = "relative";
    let marginCarousel = document.getElementById("margin-carousel");
    marginCarousel.style.top = "auto";
}

// hamburger icon
$(document).ready(function () {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
        $(this).toggleClass('open');
    });
});

dropdownMenu.addEventListener("mouseover", (e) => {
    items.addEventListener("click", (e) => {
        e.preventDefault()
    });
});