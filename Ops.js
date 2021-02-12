function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



// For enlarging and shrinking gifs
function onClick() {
    console.log(this.event.target);
    const img = this.event.target;
    img.style.transform = "scale(1.75)";
    img.style.transition = "transform 0.25s ease";
}

function ondbClick(){
    const img = this.event.target;
    img.style.float='inside';
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";
}

// Go to page top
var mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFn()};

function scrollFn() {
    if ( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}