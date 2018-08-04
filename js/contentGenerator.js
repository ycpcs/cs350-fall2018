

function topic(i) {
    var str = "";
    if (topics[i] instanceof Topic) {
        // not all topics link to material, for those that don't link, don't create a link
        if (topics[i].link === "") {
            str = topics[i].title;
        } else {
            str = "<a href=\"" + topics[i].link + "\">" + topics[i].title + "</a>";
        }
    } else if (topics[i] instanceof DoubleTopic) {
        str = "<a href=\"" + topics[i].link1 + "\">" + topics[i].title1 + "</a>";
        str += " / ";
        str += "<a href=\"" + topics[i].link2 + "\">" + topics[i].title2 + "</a>";
    }
    return str;
}



function lab(i) {
    var str = "";
    if (labs[i] instanceof Lab) {
        str = "<a href=\"" + labs[i].link + "\">" + labs[i].title + "</a>";
    }
    return str;
}



function assignment(i) {
    var str = "";
    if (assigns[i] instanceof Assignment) {
        str = "<a href=\"" + assigns[i].link + "\">" + assigns[i].title + "</a>";
    }
    return str;
}