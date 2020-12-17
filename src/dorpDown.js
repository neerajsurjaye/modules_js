let dropDown = (target) => {
    let object;
    let holder;
    let nav_elements = [];


    let init = () => {
        object = document.getElementById(target);
        holder = document.createElement("div");
        holder.classList.add("drop_Down");
        object.appendChild(holder);
    };

    let add_element = (element) => {
        nav_elements.push(element);
    }

    let render = () => {

        for (let i = 0; i < nav_elements.length; i++) {
            let temp = document.createElement("div");
            temp.textContent = nav_elements[i];
            temp.classList.add("drop_down_elements");
            holder.appendChild(temp);
        }
    }

    init();
    return { add_element, nav_elements, render };
};

export { dropDown };