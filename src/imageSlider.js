let imageSlider = (target) => {
    let images = [];

    let add_element = (source) => {
        let frame = document.createElement("div");
        frame.classList.add("is-frame");
        let image = document.createElement("img");
        image.src = source;
        frame.appendChild(image);
        images.push(frame);
    }


    let render = () => {
        let window = document.createElement("div");
        let stretch = document.createElement("div");
        let parent = document.getElementById(target);

        let left = document.createElement("div");
        let right = document.createElement("div");

        left.classList.add("arrow");
        right.classList.add("arrow");

        left.classList.add("arrow-left");
        right.classList.add("arrow-right");

        left.textContent = "<";
        right.textContent = ">";

        for (let i = 0; i < images.length; i++) {
            window.appendChild(images[i]);
        }

        window.classList.add("is-window");
        stretch.classList.add("is-str");



        parent.appendChild(stretch);
        stretch.appendChild(window);

        window.appendChild(left);
        window.appendChild(right);

    }

    return { render, add_element };
}

export { imageSlider };