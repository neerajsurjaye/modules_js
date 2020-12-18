import { dropDown } from "./dropDown";


let box = dropDown("Index", "down");

box.add_element("HOME");
box.add_element("Contacts");
box.add_element("asdf");
box.render();


let up = dropDown("indexasdfasdf", "up");
up.add_element("home");
up.add_element("asdf");
up.add_element("olaola");
up.render();



