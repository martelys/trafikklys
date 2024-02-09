let redlight;
let orangelight;
let greenlight;

function main() {
    redlight = document.getElementById("redlight")
    orangelight = document.getElementById("orangelight")
    greenlight = document.getElementById("greenlight")
    skru_på_kun_en(redlight)
}

function skru_av_lys(lys) {
    lys.classList.add("av")
}

function skru_på_lys(lys) {
    lys.classList.remove("av")
}

function skru_på_kun_en(lys) {
    if (lys == redlight) {
        skru_på_lys(redlight)
        skru_av_lys(orangelight)
        skru_av_lys(greenlight)
    }
    else if (lys == orangelight) {
        skru_av_lys(redlight)
        skru_på_lys(orangelight)
        skru_av_lys(greenlight)
    }
    else if (lys == greenlight) {
        skru_av_lys(redlight)
        skru_av_lys(orangelight)
        skru_på_lys(greenlight)
    }
}