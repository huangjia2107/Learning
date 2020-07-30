const main = document.getElementById("main");
const movieSelect = document.getElementById("moveSelect");
const seatCount = document.getElementById("count");
const seatPrice = document.getElementById("price");

let moviePrice = movieSelect.value;
updateSelectedCount();

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".seatRow .seat.selected");
    var selectedCount = selectedSeats.length;

    seatCount.innerText = selectedCount;
    seatPrice.innerText = selectedCount * moviePrice;
}

movieSelect.addEventListener("change", e => {
    moviePrice = e.target.value;
    updateSelectedCount();
});

main.addEventListener("click", e => {
    if (e.target.classList.contains("seat")
        && !e.target.classList.contains("occupied")) {

        e.target.classList.toggle("selected");
        updateSelectedCount();
    }
});

