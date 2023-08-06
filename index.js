var total = document.getElementById("total");

const selectPair = (pair) => {
    var t1 = document.getElementById("1T").innerText;
    var t2 = document.getElementById("2T").innerText;
    var t3 = document.getElementById("3T").innerText;
    if (pair === 1) {
        total.innerHTML = t1;
        document.getElementById("box1").classList.add("selected");
        document.getElementById("box2").classList.remove("selected");
        document.getElementById("box3").classList.remove("selected");

    }
    else if (pair === 2) {
        total.innerHTML = t2;
        document.getElementById("box1").classList.remove("selected");
        document.getElementById("box2").classList.add("selected");
        document.getElementById("box3").classList.remove("selected");
    }
    else if (pair === 3) {
        total.innerHTML = t3;
        document.getElementById("box1").classList.remove("selected");
        document.getElementById("box2").classList.remove("selected");
        document.getElementById("box3").classList.add("selected");
    }
    else {
        total.innerHTML = 0;
    }
}

