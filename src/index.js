import { dropDown } from "./dorpDown";


let box = dropDown("down");

box.add_element("HOME");
box.add_element("Contacts");
box.add_element("asdf");
box.render();


let up = dropDown("up");
up.add_element("home");
up.add_element("asdf");
up.add_element("olaola");
up.render();
