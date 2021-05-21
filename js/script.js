$(document).ready(function () {
    $('#nav-icon2').click(function (event) {
        $('#nav-icon2,.left-block').toggleClass('open');
        $('body').toggleClass('lock');
    });
});

//select
for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
    dropdown.addEventListener('click', function () {
        this.querySelector('.custom-select').classList.toggle('open');
    })
}
for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function () {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
    })
}
window.addEventListener('click', function (e) {
    for (const select of document.querySelectorAll('.custom-select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});

//scroll top
let mybutton = document.getElementById('myBtn');

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.sccrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block"
    }
    else {
        mybutton.style.display = "none"
    }
}

//modal

var modal = document.getElementById("form-modal");
var modalBtn = document.getElementById("modal-btn");
var closeBtn = document.getElementsByClassName("modal-close")[0];

modalBtn.onclick = function () {
    modal.style.display = "block";
}
closeBtn.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//tabs



