const imageSlider = (target) => {
    const imagesUrl = [];
    let currentImage = 0;
    let changeImg = 0;
    let interval;

    const addElement = (source) => {
        imagesUrl.push(source);
    };

    let curtain;
    let image;

    const render = () => {
        const window = document.createElement('div');
        image = document.createElement('img');
        const parent = document.getElementById(target);
        curtain = document.createElement('div');
        curtain.classList.add('curtain');

        const left = document.createElement('div');
        const right = document.createElement('div');

        left.classList.add('arrow');
        right.classList.add('arrow');

        left.classList.add('arrow-left');
        right.classList.add('arrow-right');

        left.textContent = '<';
        right.textContent = '>';

        left.addEventListener('click', changeImage);
        right.addEventListener('click', changeImage);

        window.classList.add('is-window');

        image.src = imagesUrl[currentImage];

        curtain.addEventListener("animationend", () => {
            curtain.classList.remove("play-anim");
            if (changeImg == 0) {

                renderImage();

                curtain.classList.add("end-anim");
            } else {
                changeImg = 0;
            }
        });

        parent.appendChild(window);
        window.appendChild(image);
        window.appendChild(curtain);
        window.appendChild(left);
        window.appendChild(right);
    };

    let changeImage = (e) => {

        if (e == null) {

            currentImage += 1;
            if (currentImage >= imagesUrl.length) {
                currentImage = 0;
            }
        }

        else {
            const { classList } = e.target;
            if (classList.contains('arrow-left')) {
                currentImage -= 1;
                if (currentImage < 0) {
                    currentImage = imagesUrl.length - 1;
                }
            } else if (classList.contains('arrow-right')) {
                currentImage += 1;
                if (currentImage >= imagesUrl.length) {
                    currentImage = 0;
                }
            }
            clearInterval(interval);
            call();
        }

        curtain.classList.remove("end-anim");
        curtain.classList.add("play-anim");

    };

    let call = () => {

        interval = setInterval(() => {
            changeImage(null);
        }, 5000);
    };
    call();

    const renderImage = () => {
        image.src = imagesUrl[currentImage];
        changeImg = 1;

    };

    return { render, addElement };
};

export { imageSlider };
