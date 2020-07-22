let input = document.getElementById("search");
let searchDiv = document.getElementById("searchBorder");

input.addEventListener("focus", (d) => {
    searchDiv.style.outline = "3px solid #0065b3";
    searchDiv.style.outlineOffset = "-1px";
});

input.addEventListener("blur", (d) => {
    searchDiv.style.outline = "none";
});
