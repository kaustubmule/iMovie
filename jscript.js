/*Slideshow*/
let slideIndex = 0;
let arrows = document.querySelectorAll(".arrow");
let movieLists = document.querySelectorAll(".movie-list");
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000);
}

/*Arrow*/
arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
                }px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });

    console.log(Math.floor(window.innerWidth / 270));
});

/*TOGGLE*/
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
    items.forEach((item) => {
        item.classList.toggle("active");
    });
    ball.classList.toggle("active");
});

let previous = -1;
$(".icon[data-index]").click(function () {
    $(this).addClass("initialised");
    let index = $(this).attr("data-index");
    let navtab = $(this).closest("nav.tab").addClass("moving").attr("data-selected", index);
    if (previous == -1) navtab.find('.icon[data-index="2"]').addClass("initialised")
    if (previous == 1 && index == 3 || previous == 3 && index == 1) { //If going from one side to the other and middle needs to be hidden
        navtab.find('.icon[data-index="2"]').removeClass("initialised");
        setTimeout(function () { //Because apparently this is the only way it will work
            navtab.find('.icon[data-index="2"]').addClass("initialised"); //Same animation as the other so they line up
        });
    }
    previous = index;
    setTimeout(function () {
        navtab.removeClass("moving").removeClass("hidemiddle");
    }, 750);
});

if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}