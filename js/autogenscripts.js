// firstMonday defines the Monday that starts the first week 
// of classes.  There usually are no classes on this Monday.
var firstMonday = new Date("8/27/2018 4:00:00");
var lastDay = new Date("12/11/2018 4:00:00");

var inClassFinal = true;  // true if final exam is on last day of class; false if final exam is during exam week
var finalExamDay = new Date("12/14/2018 4:00:00");  // not used if final is on last day of classes

// the offset values specify the number of days away from Monday that 
// a course runs. Setting offset1 to '1' means that the first class of 
// the week runs on Monday+1 (i.e. Tuesday). An offset of 3 means
// Monday+3 (i.e. Thursday).  An offset of -1 is an unused offset.
// For a course that runs twice per week, offset3 is unused.
var offset1 = 1;   // days from Monday when course runs
var offset2 = 3;   // days from Monday when course runs (twice per week)
var offset3 = -1;  // days from Monday when course runs (thrice per week)

// // //////////////////////////////////////////////////////////////////////////////////////////////
// // List of Topics
// // //////////////////////////////////////////////////////////////////////////////////////////////
var topics = [];
topics[0]=new Topic(  "Intro to C++", "lectures/intro_to_C++.html");
topics[1]=new Topic(  "Stacks & Queues", "lectures/xx.pdf"); //  & [Queues](lectures/Queues_lecture.pdf)";  // MAKE LECTURE CONTAIN BOTH STACKS AND QUEUES
topics[2]=new Topic(  "C++ Templates", "lectures/C++_templates.html");
topics[3]=new Topic(  "Linked Lists", "lectures/LinkedList_lecture.pdf");
topics[4]=new Topic(  "Doubly Linked Lists", "lectures/DoublyLinkedList_lecture.pdf");
topics[5]=new Topic(  "Skip Lists", "lectures/Skip_Lists.pdf");
topics[6]=new Topic(  "Skip Lists (Cont.)", "");
topics[7]=new Topic(  "Review for Exam #1", "");
topics[8]=new Topic(  "**Exam #1**", "");
topics[9]=new Topic(  "Trees & Tree Traversal", "lectures/Trees_lecture.pdf"); // & [Tree Traversal", "lectures/Tree_Traversal_lecture.pdf");  // MAKE LECTURE CONTAIN BOTH
topics[10]=new Topic(  "Binary Search Trees, Find", "lectures/Binary_Search_Trees.pdf");
topics[11]=new Topic(  "Binary Search Trees, Insert/Remove", "lectures/Binary_Search_Trees.pdf");
topics[12]=new Topic(  "AVL Trees", "lectures/AVL_Trees.pdf");
topics[13]=new Topic(  "AVL Trees (Cont.)", "");
topics[14]=new Topic(  "**NO CLASS - Fall Break**", "");
topics[15]=new Topic(  "Red-Black Trees", "lectures/Red-Black_Trees.pdf");
topics[16]=new Topic(  "Red-Black Trees (Cont.)", "");
topics[17]=new Topic(  "Review for Exam #2", "");
topics[18]=new Topic(  "**Exam #2**", "");
topics[19]=new Topic(  "AA-Trees, Insert", "lectures/AA-tree_lecture.pdf");
topics[20]=new Topic(  "AA-Trees, Delete", "lectures/AA-tree_lecture.pdf");
topics[21]=new Topic(  "B-Trees", "lectures/B-Trees.pdf");
topics[22]=new Topic(  "Review for Exam #3", "");
topics[23]=new Topic(  "**Exam #3**", "");
topics[24]=new Topic(  "Binary Heaps", "lectures/Heaps.pdf");
topics[25]=new Topic(  "**NO CLASS - Thanksgiving Break**", "");
topics[26]=new Topic(  "Binary Heaps (Cont.)", "");
topics[27]=new Topic(  "Hash Tables", "lectures/Hash_Tables.pdf");
topics[28]=new Topic(  "Hash Tables (Cont.)", "");
topics[29]=new Topic(  "Graphs & Dijkstra's Algorithm", "lectures/Graphs.pdf"); // & [Dijkstra's Algorithm](lectures/Dijkstras_Algorithm.pdf");   // MAKE LECTURE CONTAIN BOTH
topics[30]=new Topic(  "**Final Exam**", "");
// // //////////////////////////////////////////////////////////////////////////////////////////////
//
// // //////////////////////////////////////////////////////////////////////////////////////////////
// // List of Labs
// // //////////////////////////////////////////////////////////////////////////////////////////////
// labs[0] = "[Lab 1: Histogram in C++](labs/lab01.html)";
// labs[1] = "[Lab 2: Postfix expression evaluator](labs/lab02.html)";
// labs[2] = "[Lab 3: Value semantics in C++](labs/lab03.html)";
// labs[3] = "[Lab 4: Benchmarking vector and list](labs/lab04.html)";
// labs[4] = "[Lab 5: Linked list implementation](labs/lab05.html)";
// labs[5] = "";
// labs[6] = "";
// labs[7] = "";
// labs[8] = "";
// labs[9] = "[Lab 6: Binary tree traversal algorithms](labs/lab06.html)";
// labs[10] = "";
// labs[11] = "";
// labs[12] = "";
// labs[13] = "";
// labs[14] = "";
// labs[15] = "";
// labs[16] = "";
// labs[17] = "";
// labs[18] = "";
// labs[19] = "";
// labs[20] = "";
// labs[21] = "";
// labs[22] = "";
// labs[23] = "";
// labs[24] = "";
// labs[25] = "";
// labs[26] = "";
// labs[27] = "";
// labs[28] = "";
// labs[29] = "";
// labs[30] = "";
// // //////////////////////////////////////////////////////////////////////////////////////////////
//
// // //////////////////////////////////////////////////////////////////////////////////////////////
// // List of Assignments
// // //////////////////////////////////////////////////////////////////////////////////////////////
// assigns[0] = "";
// assigns[1] = "[Integer Array Stack (Due Sep 11  by 11:59 PM)](assign/assign01.html)";
// assigns[2] = "";
// assigns[3] = "";
// assigns[4] = "[Doubly Linked List (Due Sep 18 by 11:59 PM)](assign/assign02.html)";
// assigns[5] = "";
// assigns[6] = "[SkipList (Due Sep 27 by 11:59 PM)](assign/assign03.html)";
// assigns[7] = "";
// assigns[8] = "";
// assigns[9] = "[RandomArt (Due Oct 9 by 11:59 PM)](assign/assign04.html)";
// assigns[10] = "";
// assigns[11] = "";
// assigns[12] = "[BST (Due Oct 27 by 11:59 PM)](assign/assign05.html)";
// assigns[13] = "";
// assigns[14] = "";
// assigns[15] = "";
// assigns[16] = "";
// assigns[17] = "";
// assigns[18] = "";
// assigns[19] = "[AATree (Due Nov 14 by 11:59 PM)](assign/assign06.html)";
// assigns[20] = "";
// assigns[21] = "";
// assigns[22] = "";
// assigns[23] = "";
// assigns[24] = "[Binary Heap (Due Dec 4 by 11:59 PM)](assign/assign07.html)";
// assigns[25] = "";
// assigns[26] = "";
// assigns[27] = "[Hash Table (Due Dec 11 by 11:59 PM)](assign/assign08.html)";
// assigns[28] = "";
// assigns[29] = "";
// assigns[30] = "";
// // //////////////////////////////////////////////////////////////////////////////////////////////
// // //////////////////////////////////////////////////////////////////////////////////////////////


var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// d1 = startDate (first Monday)
// d2 = endDate
// d3 = finalExamDay
function getDates(d1, d2, d3, o1, o2, o3) {
    var oneDay = 24*3600*1000;
    var oneWeek = 7*oneDay;

    var startDate = d1*1 + o1*oneDay;
    var endDate = d2*1;
    var dates=[];

    for (var class1=startDate, class2=(d1*1 + o2*oneDay), class3=(d1*1 + o3*oneDay)  ; (class1 < endDate); class1+=oneWeek, class2+=oneWeek, class3+=oneWeek) {
        if ((o1 !== -1) && (class1 < endDate)) {
            d = new Date(class1);
            dates.push( days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate() );
        }

        if ((o2 !== -1) && (class2 < endDate)) {
            d = new Date(class2);
            dates.push( days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate() );
        }

        if ((o3 !== -1) && (class3 < endDate)) {
            d = new Date(class3);
            dates.push( days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate() );
        }
    }

    if (!inClassFinal) {
        // include the final exam
        dates.push(days[d3.getDay()] + ", " + months[d3.getMonth()] + " " + d3.getDate());
    }
    return dates;
}

window.dates = getDates( firstMonday, lastDay, finalExamDay, offset1, offset2, offset3 );



function Topic(title, link) {
    this.title = title;
    this.link = link;
}

// //////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////


function ds(i) {
    document.write(String(window.dates[i]));
}


function t(i) {
    document.write("<a href=\"" + topics[i].link + "\">" + topics[i].title + "</a>");
}


// //////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////

