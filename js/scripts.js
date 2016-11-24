var link = document.querySelector(".recommended a");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".btn-close");

var form = popup.querySelector("form");

var arrival = popup.querySelector("[name=data1]");
var back = popup.querySelector("[name=data2]");
var adults = popup.querySelector("[name=adults]");
var kids = popup.querySelector("[name=kids]");

var storage = localStorage.getItem(".reccomended a");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");

    if (storage) {
        data1.value = storage;
        data2.focus();
    } else {
        data1.focus();
    }
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
        }
        data1.focus();
        popup.classList.remove("modal-error");
    }
});

form.addEventListener("submit", function(event) {
    if (!data1.value || !data2.value) {
        event.preventDefault();
        popup.classList.add("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        console.log("Введите предполагаемую дату");
    } else {
        localStorage.setItem("data1", data1.value);
    }
});

form.addEventListener("submit", function(event) {
    if (!adults.value || !kids.value) {
        event.preventDefault();
        console.log("Введите предполагаемое количество");
        popup.classList.add("modal-error");
        popup.offsetWidth = popup.offsetWidth;
    } else {
        localStorage.setItem("adults", adults.value);
    }
});
