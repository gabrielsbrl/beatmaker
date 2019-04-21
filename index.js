window.addEventListener('load', () => {

    const sounds = document.querySelectorAll('.sound')
    const pads = document.querySelectorAll('.pads div');

    const visual = document.querySelector('.visual');
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];
  
    //souds configuration
    pads.forEach((pad, index) => {
        /**
         * We need to use a normal funciont, cause we need to keep
         * the dynamic context of the event, otherwise it will be 
         * the callig element, then the this will be lost
         */
        pad.addEventListener('click', function(e) {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        })
    });

    //Bubbles animation function
    function createBubbles(index) {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function() {
            /**
             * Here we nee to use function to keep the this
             * being bubble
             */
            visual.removeChild(this);
        });
    }

});