document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');
    const volumeIcon = document.getElementById('volume-icon');
    const volumeSlider = document.getElementById('volume-slider');
    const slideContainer = document.querySelector('.slidecontainer');
    const volumeDisplay = document.getElementById('volume-display');

    // Função para exibir o controle de volume ao clicar no ícone
    volumeIcon.addEventListener('click', () => {
        slideContainer.style.display = slideContainer.style.display === 'none' ? 'block' : 'none';
    });

    // Função para ajustar o volume do áudio
    volumeSlider.addEventListener('input', () => {
        audio.volume = volumeSlider.value;
        volumeDisplay.textContent = Math.round(volumeSlider.value * 100) + '%';
    });

    // Funções para controlar play e pause
    playButton.addEventListener('click', () => {
        audio.play();
        playButton.style.display = 'none';
        pauseButton.style.display = 'inline';
    });

    pauseButton.addEventListener('click', () => {
        audio.pause();
        playButton.style.display = 'inline';
        pauseButton.style.display = 'none';
    });

    // Inicializa o valor do display de volume
    volumeDisplay.textContent = '100%';
});





document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');
    const slideWidth = slides[0].getBoundingClientRect().width;
    const playPauseButtons = document.querySelectorAll('.play-pause');
    const volumeSliders = document.querySelectorAll('.volume-slider');

    // Alinha os slides lado a lado
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });

    // Função para mover para o slide alvo
    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    };

    // Clique no botão próximo
    nextButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.carousel-slide');
        const nextSlide = currentSlide.nextElementSibling;
        if (nextSlide) {
            moveToSlide(track, currentSlide, nextSlide);
        }
    });

    // Clique no botão anterior
    prevButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.carousel-slide');
        const prevSlide = currentSlide.previousElementSibling;
        if (prevSlide) {
            moveToSlide(track, currentSlide, prevSlide);
        }
    });

    // Controle de play/pause
    playPauseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const videoId = button.getAttribute('data-video');
            const video = document.getElementById(videoId);

            if (video.paused) {
                video.play();
                button.textContent = 'Stop';
            } else {
                video.pause();
                button.textContent = 'Play';
            }
        });
    });

    // Controle de volume
    volumeSliders.forEach(slider => {
        slider.addEventListener('input', () => {
            const videoId = slider.getAttribute('data-video');
            const video = document.getElementById(videoId);
            video.volume = slider.value;
        });
    });
});













const videosList = [
    {
        video: 'videos/123.mp4',
        title: 'Medicine X - Revolution X: Unleashing Chaos'
    },
    {
        video: 'videos/1234.mp4',
        title: 'Whats Up, People?- Death Note OP2 (Guitar Cover By Medicine X)'
    },
    {
        video: 'videos/lit.mp4',
        title: 'Lit - My Own Worst Enemy (Guitar Cover By Medicine X)'
    },
    {
        video: 'videos/lustra.mp4',
        title: 'Lustra - Scotty Doesn’t Know (Guitar Cover By Medicine X)'
    },
    {
        video: 'videos/projectx.mp4',
        title: 'Project X - Alternate Trailer [Fan Edit] "Revolution X: Unleashing Chaos" '
    },
    {
        video: 'videos/sum.mp4',
        title: 'Sum 41 - Over My Head (Guitar Cover By Medicine X)'
    },
    {
        video: 'videos/blink.mp4',
        title: 'Blink 182 - First Date (Guitar Cover By Medicine X)'
    },
    {
        video: 'videos/456.mp4',
        title: 'Medicine X - Behind'
    },
    {
        video: 'videos/3.mp4',
        title: 'Medicine X - Winds outside the windows'
    },
    ]
    
    const categories = [...new Set(videosList.map((item) => { return item }))]
    document.getElementById('videosList').innerHTML = categories.map((item) => {
        var { video, title } = item;
        return (
            `<div class="list active">
            <video src=${video} class="list-video"></video>
            <h3 class="list-title">${title}</h3>
            </div>`
            )
    }).join('')
    
    let videoList = document.querySelectorAll('.video-list-container .list');
    videoList.forEach(remove => { remove.classList.remove('active') });
    videoList.forEach(vid => {
        vid.onclick = () => {
            videoList.forEach(remove => { remove.classList.remove('active') });
            vid.classList.add('active');
            let src = vid.querySelector('.list-video').src;
            let title = vid.querySelector('.list-title').innerHTML;
            document.querySelector('.main-video-container .main-video').src = src;
            document.querySelector('.main-video-container .main-video').play();
            document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
        };
    });



    let burger=document.querySelector('.burger')
let nav=document.querySelector('.nav')
let navbarItem=document.querySelector('.navbar-items')

burger.addEventListener('click',()=>{
    navbarItem.classList.toggle('h-class')
    nav.classList.toggle('v-class')
})










document.addEventListener("DOMContentLoaded", function() {
    const tracks = [
        {
            audioId: "audio-9to5",
            playBtnId: "play-button-9to5",
            pauseBtnId: "pause-button-9to5",
            volumeSliderId: "volume-slider-9to5",
            volumeContainerId: "volume-container-9to5",
            volumeIconId: "volume-icon-9to5",
            volumeDisplayId: "volume-display-9to5"
        },
        {
            audioId: "another-audio",
            playBtnId: "play-button-another",
            pauseBtnId: "pause-button-another",
            volumeSliderId: "volume-slider-another",
            volumeContainerId: "volume-container-another",
            volumeIconId: "volume-icon-another",
            volumeDisplayId: "volume-display-another"
        }
        ,
        {
            audioId: "demon-audio",
            playBtnId: "play-button-demon",
            pauseBtnId: "pause-button-demon",
            volumeSliderId: "volume-slider-demon",
            volumeContainerId: "volume-container-demon",
            volumeIconId: "volume-icon-demon",
            volumeDisplayId: "volume-display-demon"
        }

        ,
        {
            audioId: "lie-audio",
            playBtnId: "play-button-lie",
            pauseBtnId: "pause-button-lie",
            volumeSliderId: "volume-slider-lie",
            volumeContainerId: "volume-container-lie",
            volumeIconId: "volume-icon-lie",
            volumeDisplayId: "volume-display-lie"
        }


        ,
        {
            audioId: "gen-audio",
            playBtnId: "play-button-gen",
            pauseBtnId: "pause-button-gen",
            volumeSliderId: "volume-slider-gen",
            volumeContainerId: "volume-container-gen",
            volumeIconId: "volume-icon-gen",
            volumeDisplayId: "volume-display-gen"
        }



        ,
        {
            audioId: "f-audio",
            playBtnId: "play-button-f",
            pauseBtnId: "pause-button-f",
            volumeSliderId: "volume-slider-f",
            volumeContainerId: "volume-container-f",
            volumeIconId: "volume-icon-f",
            volumeDisplayId: "volume-display-f"
        }




        ,
        {
            audioId: "r-audio",
            playBtnId: "play-button-r",
            pauseBtnId: "pause-button-r",
            volumeSliderId: "volume-slider-r",
            volumeContainerId: "volume-container-r",
            volumeIconId: "volume-icon-r",
            volumeDisplayId: "volume-display-r"
        }


        ,
        {
            audioId: "l-audio",
            playBtnId: "play-button-l",
            pauseBtnId: "pause-button-l",
            volumeSliderId: "volume-slider-l",
            volumeContainerId: "volume-container-l",
            volumeIconId: "volume-icon-l",
            volumeDisplayId: "volume-display-l"
        }


        ,
        {
            audioId: "q-audio",
            playBtnId: "play-button-q",
            pauseBtnId: "pause-button-q",
            volumeSliderId: "volume-slider-q",
            volumeContainerId: "volume-container-q",
            volumeIconId: "volume-icon-q",
            volumeDisplayId: "volume-display-q"
        }


        
        ,
        {
            audioId: "z-audio",
            playBtnId: "play-button-z",
            pauseBtnId: "pause-button-z",
            volumeSliderId: "volume-slider-z",
            volumeContainerId: "volume-container-z",
            volumeIconId: "volume-icon-z",
            volumeDisplayId: "volume-display-z"
        }
        // Adicione mais entradas para outras músicas aqui
        // Adicione mais entradas para as outras músicas aqui
    ];





    tracks.forEach(track => {
        const audio = document.getElementById(track.audioId);
        const playButton = document.getElementById(track.playBtnId);
        const pauseButton = document.getElementById(track.pauseBtnId);
        const volumeSlider = document.getElementById(track.volumeSliderId);
        const volumeContainer = document.getElementById(track.volumeContainerId);
        const volumeIcon = document.getElementById(track.volumeIconId);
        const volumeDisplay = document.getElementById(track.volumeDisplayId);

        playButton.addEventListener("click", function() {
            audio.play();
            playButton.style.display = "none";
            pauseButton.style.display = "inline";
        });

        pauseButton.addEventListener("click", function() {
            audio.pause();
            playButton.style.display = "inline";
            pauseButton.style.display = "none";
        });

        volumeIcon.addEventListener("click", function() {
            volumeContainer.style.display = volumeContainer.style.display === "none" ? "block" : "none";
        });

        volumeSlider.addEventListener("input", function() {
            audio.volume = volumeSlider.value;
            volumeDisplay.textContent = Math.round(volumeSlider.value * 100) + "%";
        });
    });
});





// Seleciona o modal e a imagem dentro dele
const modal = document.getElementById('imageModal');
const modalImg = modal.querySelector('img');

// Adiciona evento de clique para cada imagem da galeria
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex'; // Mostra o modal
        modalImg.src = img.src; // Define a imagem do modal como a imagem clicada
    });
});

// Fecha o modal ao clicar fora da imagem
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none'; // Oculta o modal
    }
});
