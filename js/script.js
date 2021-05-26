$(document).ready(function () {
    $('#nav-icon2').click(function (event) {
        $('#nav-icon2,.left-block').toggleClass('open');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function () {
    $('.search-btn').click(function () {
        $('.search-input').toggleClass('appear')
    })
})


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
///////////


//toggle-password

function show_password(target) {
    var input = document.getElementById('password');
    if (input.getAttribute('type') == 'password') {
        target.classList.add('view');
        input.setAttribute('type', 'text');
    }
    else {
        target.classList.remove('view');
        input.setAttribute('type', 'password');
    }
    return false
}

function show_password2(target) {
    var input = document.getElementById('password2');
    if (input.getAttribute('type') == 'password') {
        target.classList.add('view');
        input.setAttribute('type', 'text');
    }
    else {
        target.classList.remove('view');
        input.setAttribute('type', 'password');
    }
    return false
}

function copytext(el) {
    var $tmp = $("<textarea>");
    $("body").append($tmp);
    $tmp.val($(el).text()).select();
    document.execCommand("copy");
    $tmp.remove();
}


