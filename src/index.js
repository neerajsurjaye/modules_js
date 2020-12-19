import { dropDown } from "./dropDown";
import { imageSlider } from "./imageSlider";

let box = dropDown("Index", "down");

box.add_element("HOME");
box.add_element("Contacts");
box.add_element("asdf");
box.render();

let image = imageSlider("scroll");
image.addElement("./img/a.jpg");
image.addElement("./img/iandex.jpg");
image.addElement("./img/inddex.jpg");
image.addElement("./img/index.jpg");
image.render();



