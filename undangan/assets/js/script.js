document.querySelector('.closeHomepage').addEventListener('click', () => {
    document.querySelector('.homepage').classList.add('hidden');
})

// countdown timer
// Set the date we're counting down to
const countDownDate = new Date("Dec 18, 2021 12:06:00").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.querySelector(".days span").innerHTML = days
    document.querySelector(".hours span").innerHTML = hours
    document.querySelector(".minutes span").innerHTML = minutes
    document.querySelector(".seconds span").innerHTML = seconds

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".days span").innerHTML = '0'
        document.querySelector(".hours span").innerHTML = '0'
        document.querySelector(".minutes span").innerHTML = '0'
        document.querySelector(".seconds span").innerHTML = '0'
    }
}, 1000);

// clicked navigation bar 
const buttonNav = document.querySelectorAll('.mainNav div')

for (var i = 0; i < buttonNav.length; i++) {
    buttonNav[i].addEventListener('click', (e) => {
        document.querySelector('.mainNav .text-warning').classList.add('text-secondary')
        document.querySelector('.mainNav .text-warning').classList.remove('text-warning')
        if (e.target.nodeName === 'I') {
            e.target.parentElement.classList.remove('text-secondary');
            e.target.parentElement.classList.add('text-warning');
            const idName = e.target.parentElement.getAttribute('data-id');
            document.querySelector('.mainpage .active').classList.add('d-none')
            document.querySelector('.mainpage .active').classList.remove('active')
            document.getElementById(idName).classList.add('active')
            document.getElementById(idName).classList.remove('d-none')
        } else {
            e.target.classList.remove('text-secondary');
            e.target.classList.add('text-warning');
            const idName = e.target.getAttribute('data-id');
            document.querySelector('.mainpage .active').classList.add('d-none')
            document.querySelector('.mainpage .active').classList.remove('active')
            document.getElementById(idName).classList.add('active')
            document.getElementById(idName).classList.remove('d-none')
        }
    })
}

// audio player
const audio_player = document.querySelector('.audio-player');

audio_player.addEventListener('click', () => {
    if (document.querySelector('.audio-player .btn').getAttribute('data-name') === 'play') {
        document.getElementById('myAudio').pause()
        document.querySelector('.audio-player .btn').classList.remove('bx-music')
        document.querySelector('.audio-player .btn').classList.add('bx-pause')
        document.querySelector('.audio-player .btn').removeAttribute('data-name')
        document.querySelector('.audio-player .btn').setAttribute('data-name', 'pause')
    } else {
        document.getElementById('myAudio').play()
        document.querySelector('.audio-player .btn').classList.remove('bx-pause')
        document.querySelector('.audio-player .btn').classList.add('bx-music')
        document.querySelector('.audio-player .btn').removeAttribute('data-name')
        document.querySelector('.audio-player .btn').setAttribute('data-name', 'play')
    }
})

// copy number

function selectText() {
    const input = document.getElementById('text-box');
    input.value = document.querySelector('.noRekening').innerHTML
    input.focus();
    input.select();
    document.execCommand("copy");
    document.querySelector('.copysuccess').classList.remove('d-none')
    setTimeout(function() {
        document.querySelector('.copysuccess').classList.add('d-none'); // Hide it after the timeout
    }, 2000);
}
