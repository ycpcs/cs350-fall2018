
var topics = [];
var labs = [];
var assigns = [];


function Topic(title, link) {
    this.title = title;
    this.link = link;
}


function DoubleTopic(title1, link1, title2, link2) {
    this.title1 = title1;
    this.link1 = link1;
    this.title2 = title2;
    this.link2 = link2;
}


function Lab(title, link) {
    this.title = title;
    this.link = link;
}


function Assignment(title, link, date) {
    this.title = title;
    this.link = link;
    this.date = date;
}