/* 
 THE TYPING TEXT
*/
let textIndex = 0;
let i = 0;

function typingText() {
    const text = [
        "Meet Ada. ",
        "A Computer Science student with UoPeople, ",
        "A Software Developer (Backend). ",
        "Nice to meet you! "
        ];

    const typing = document.querySelector('.typing');

    let arrayIndex = text[textIndex];

    if (textIndex < text.length) {
        if (i < arrayIndex.length) {
            typing.textContent += arrayIndex[i];
            i++;
        } else {
            typing.textContent = typing.textContent.slice(0,-1);
            if(typing.textContent === "") {
                i = 0;
                textIndex++;
            }
        }
    }else {
        textIndex = 0;
    }

}
setInterval(typingText, 150);


/*
 SLIDER EFFECT SECTION
*/
let nxt = document.querySelector('.next');
let prev = document.querySelector('.prev');
let banner = document.querySelector('.banner');
let slider = document.querySelector('.banner .slider');
let thumbnail = document.querySelector('.banner .thumbnail');
let autoRun;
let run;

nxt.onclick = function(){
    showSlider('next');
}
prev.onclick = function(){
    showSlider('prev');
}

// change slide automatically
function autoSlide() {
    autoRun = setInterval(()=>{
        nxt.click();
    }, 9200);
}
autoSlide();

function showSlider(click){
    let slid = document.querySelectorAll('.banner .slider .slid');
    let thumbnailSlid = document.querySelectorAll('.banner .thumbnail .slid');

    if(click === 'next'){
        slider.appendChild(slid[0]);
        thumbnail.appendChild(thumbnailSlid[0]);
        banner.classList.add('next');
    } else {
        let lastSlid = slid.length - 1;
        slider.prepend(slid[lastSlid]);
        thumbnail.prepend(thumbnailSlid[lastSlid]);
        banner.classList.add('prev');
    }

    // change slide manually
    clearTimeout(run);
    run = setTimeout(()=>{
        banner.classList.remove('next');
        banner.classList.remove('prev');
    }, 3200);
}


/*
 SKILLS PROGRESS BAR
*/
document.addEventListener("DOMContentLoaded", function() {
const percentage = document.querySelectorAll(".percentage");
const allprogress = document.querySelectorAll(".progress");

percentage.forEach((per, i) => {
    let progressValue = parseInt(per.value, 10);
    progressWidth(allprogress[i],progressValue);
});

// change progress width
function progressWidth(progress, progressValue) {
    progress.style.width = `${progressValue}%`;
    progress.innerText = `${progressValue}%`;
}

// Display progress bar pop up. Get and loop through each buttons
document.querySelectorAll(".pop").forEach(function(button){
    // add click event to each button
    button.addEventListener("click", function(){
        // identify which popup to open using ID
        const popID = button.getAttribute("data-popup");
        document.getElementById(popID).classList.add("show");      
    });
});

// close progress bar pop up. Get and loop through each buttons
document.querySelectorAll(".poppy .close-pop").forEach(function(button){
    // add click event to each button
    button.addEventListener("click", function(){
        // identify which popup to close
        button.closest(".pop-up").classList.remove("show");
    });
});
});

/*
 VIDEO POP UP
 */
 // Get and loop through each buttons for video pop up
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".play-button").forEach(function(button) {
        button.addEventListener("click", function() {
            const popup = button.nextElementSibling;
            popup.classList.add("show");
            const video = popup.querySelector("video");
            video.play();
        });
    });

    document.querySelectorAll(".close-button").forEach(function(button) {
        button.addEventListener("click", function() {
            const popup = button.parentNode;
            popup.classList.remove("show");
            const video = popup.querySelector("video");
            video.pause();
        });
    });
});


/* 
 FLIP BOOK
 */
const nxtBtn = document.querySelector("#next");
const prvBtn = document.querySelector("#prev");
const book = document.querySelector("#book");
const pg1 = document.querySelector("#p1");
const pg2 = document.querySelector("#p2");
const pg3 = document.querySelector("#p3");
const pg4 = document.querySelector("#p4");
const pg5 = document.querySelector("#p5");

// Event Listeners
nxtBtn.addEventListener("click", flipForward);
prvBtn.addEventListener("click", flipBack);
let currentPage = 1;
let totalPaper = 5;
let maxPage = totalPaper + 1;

function openBook(){
    book.style.transform = "translateX(40%)";
    prvBtn.style.transform = "translateX(-260px)";
    nxtBtn.style.transform = "translateX(180px)";
}
function closeBook(end_pg){
    if(end_pg){
        book.style.transform = "translateX(99%)";
    }else{
        book.style.transform = "translateX(0%)";
    }
    prvBtn.style.transform = "translateX(0px)";
    nxtBtn.style.transform = "translateX(0px)";
}
function flipForward(){
    if(currentPage < maxPage){
        switch(currentPage){
            case 1:
                openBook();
                pg1.classList.add("flip");
                pg1.style.zIndex = 1;
                break;
            case 2:
                pg2.classList.add("flip");
                pg2.style.zIndex = 2;
                break;
            case 3:
                pg3.classList.add("flip");
                pg3.style.zIndex = 3;
                break;
            case 4:
                pg4.classList.add("flip");
                pg4.style.zIndex = 4;
                break;
            case 5:
                pg5.classList.add("flip");
                pg5.style.zIndex = 5;
                closeBook(true);
                break;
            default:
                throw new Error("No more pages");
        }
        currentPage++;
    }
}
function flipBack(){
    if(currentPage > 1){
        switch(currentPage){
            case 2:
                closeBook(false);
                pg1.classList.remove("flip");
                pg1.style.zIndex = 5;
                break;
            case 3:
                pg2.classList.remove("flip");
                pg2.style.zIndex = 4;
                break;
            case 4:
                pg3.classList.remove("flip");
                pg3.style.zIndex = 3;
                break;
            case 5:
                pg4.classList.remove("flip");
                pg4.style.zIndex = 2;
                break;
            case 6:
                openBook();
                pg5.classList.remove("flip");
                pg5.style.zIndex = 1;
                break;
            default:
                throw new Error("No more pages");
        }
        currentPage--;
    }
}
