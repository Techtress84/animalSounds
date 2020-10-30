        
 
const numberOfAnimalButtons = document.querySelectorAll('.btn').length;

for (let i = 0; i<numberOfAnimalButtons; i++) {
    

document.querySelectorAll('.btn')[i].addEventListener('click', function () {
    let buttonInnerHTML = this.innerHTML;
    
    
    
    switch (buttonInnerHTML) {
        case '<img src="/images/dog.png" alt=""><br>Dog':
            var dog = new Audio('sounds/animals_dogs_x2_barking_small_002.mp3');
            dog.play();
            $(".dog").fadeOut(100).fadeIn(100);
         break;
        case '<img src="/images/cat.png" alt=""><br> Cat':
            var cat = new Audio('sounds/Blastwave_FX_CatMeow_SFXB.203.mp3');
            cat.play();
            $(".cat").fadeOut(100).fadeIn(100);
            break;
        case '<img src="/images/duck.png" alt=""><br> Duck':
            var duck = new Audio('sounds/animal_bird_duck_quack_001.mp3');
            duck.play();
            $(".duck").fadeOut(100).fadeIn(100);
            break;
        case '<img src="/images/cow.png" alt=""><br> Cow':
            var cow = new Audio('sounds/animal_bull_scottish_highland_moo_001.mp3');
            cow.play();
            $(".cow").fadeOut(100).fadeIn(100);
            break;
        case '<img src="/images/elephant.png" alt=""><br>Elephant':
            var elephant = new Audio('sounds/elephant9.mp3');
            elephant.play();
            $(".elephant").fadeOut(100).fadeIn(100);
            break;
        case '<img src="/images/horse.png" alt=""><br> Horse':
            var horse = new Audio('sounds/audio_hero_s-horse-whinny.mp3');
            horse.play();
            $(".horse").fadeOut(100).fadeIn(100);
            break;
        case '<img src="/images/turkey.png" alt=""><br>Turkey':
            var turkey = new Audio('sounds/aaj_0044_Turkey_01.mp3');
            turkey.play();
            $(".turkey").fadeOut(100).fadeIn(100);
            break;
        case '<img src="/images/lion.png" alt=""><br>Lion':
            var lion = new Audio('sounds/lioncub2.mp3');
            lion.play();
            $(".lion").fadeOut(100).fadeIn(100);
            break;
                            
       default:
            break;
    }
})}

