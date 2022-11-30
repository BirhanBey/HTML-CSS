"use strict";
    let slide = document.getElementsByClassName("middle");
    let slaytSayisi = slide.length;
    let slaytNo = 0;
    let i = 0;

    slaytGoster(slaytNo);

    function sonrakiSlayt() {
    slaytNo++;
    slaytGoster(slaytNo);
    }

    function oncekiSlayt() {
    slaytNo--;
    slaytGoster(slaytNo);
    }

    function slaytGoster(slaytNumarasi) {
    slaytNo = slaytNumarasi;

    if (slaytNumarasi >= slaytSayisi) slaytNo = 0;

    if (slaytNumarasi < 0) slaytNo = slaytSayisi - 1;

    for (i = 0; i < slaytSayisi; i++) {
        slide[i].style.display = "none";
    }

    slide[slaytNo].style.display = "block";

    }