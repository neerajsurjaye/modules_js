import { dropDown } from "./dropDown";
import { imageSlider } from "./imageSlider";

let box = dropDown("Index", "down");

box.add_element("HOME");
box.add_element("Contacts");
box.add_element("asdf");
box.render();

let image = imageSlider("scroll");
image.addElement("https://webdesignerwall.com/wp-content/uploads/2017/01/transforms.jpg");
image.addElement("https://webdesignerwall.com/wp-content/uploads/2017/01/transforms.jpg");
image.render();

