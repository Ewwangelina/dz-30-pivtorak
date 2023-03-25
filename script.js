const smileys = [
    document.getElementById("smiley1"),
    document.getElementById("smiley2"),
    document.getElementById("smiley3"),
    document.getElementById("smiley4"),
    document.getElementById("smiley5")
];

smileys.forEach(function(smiley) {
    smiley.addEventListener("click", function() {
        let counter = this.querySelector(".counter");
        let count = parseInt(counter.textContent);
        count++;
        counter.textContent = count;
    });
});
