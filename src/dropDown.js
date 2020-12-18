let dropDown = (name, target) => {
    let object;
    let holder;
    let display = 0;


    let nav_elements = [];


    let init = () => {
        object = document.getElementById(target);
        holder = document.createElement("div");
        holder.textContent = name;
        holder.classList.add("drop-down");
        object.appendChild(holder);
    };

    let add_element = (element) => {
        nav_elements.push(element);
    }

    let render = () => {
        let curtain = document.createElement("div");
        holder.appendChild(curtain);
        curtain.classList.add("drop-down-curtain");


        for (let i = 0; i < nav_elements.length; i++) {
            let temp = document.createElement("div");
            temp.textContent = nav_elements[i];
            temp.classList.add("drop-down-elements");
            curtain.appendChild(temp);
        }

        holder.addEventListener("click", () => {

            if (display == 0) {
                //curtain.style.display = "flex";
                console.log("ran");
                curtain.classList.remove("remove");
                curtain.classList.add("anim");
                display = 1;
            }
            else if (display == 1) {
                //curtain.style.display = "none";
                curtain.classList.remove("anim");
                curtain.classList.add("remove");
                display = 0;
            }
        });
    }

    init();
    return { add_element, nav_elements, render };
};

export { dropDown };