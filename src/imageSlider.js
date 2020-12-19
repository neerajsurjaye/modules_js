const imageSlider = (target) => {
    const imagesUrl = [];
    const currentImage = 0;

    const addElement = (source) => {
        imagesUrl.push(source);
    };

    const render = () => {
        const window = document.createElement('div');
        let image = document.createElement('img');
        const parent = document.getElementById(target);

        const left = document.createElement('div');
        const right = document.createElement('div');

        left.classList.add('arrow');
        right.classList.add('arrow');

        left.classList.add('arrow-left');
        right.classList.add('arrow-right');

        left.textContent = '<';
        right.textContent = '>';

        left.addEventListener("click", changeImage);
        right.addEventListener("click", changeImage);

        window.classList.add('is-window');

        image.src = imagesUrl[0];

        parent.appendChild(window);
        window.appendChild(image);
        window.appendChild(left);
        window.appendChild(right);
    };

    let changeImage = (e) => {
        let classList = e.target.classList;
        for (let i = 0; i < classList.length; i++) {
            if (classList[i] == "arrow-left") {

            }
            else if (classList[i] == "arrow-right") {

            }
        }
    }

    return { render, addElement };
};

export { imageSlider };
