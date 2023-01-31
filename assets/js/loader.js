let time;

function functionTime() {
    time = setTimeout(showPage, 1500);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("divBottom").style.display = "block";
}