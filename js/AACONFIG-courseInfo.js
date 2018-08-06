
var PREPOPULATE = false;

var courseInfo = {
    courseName: "CS350: Data Structures",
    classDays: ["Tue", "Thur"],


    // The following is true if final exam is on the LAST day of class;
    // false if final exam is during exam week."
    inClassFinalExam: true,
    // The following is for the college-scheduled final exam.
    // It is not used if final is on last day of class"
    finalExamDates: [
        new FinalExamDay("101", new Date("12/15/2018 10:15:00")),
        new FinalExamDay("102", new Date("12/13/2018 12:45:00"))
    ],


    classPeriods: [
        {
            topic: new Topic( "Intro to C++", "lectures/intro_to_C++.html" ),
            lab: new Lab("Lab 1: Histogram in C++", "labs/lab01.html")
        },
        {
            topic: new DoubleTopic( "Stacks", "lectures/Stacks_lecture.pdf", "Queues", "lectures/Queues_lecture.pdf" ),
            lab: new Lab("Lab 2: Postfix expression evaluator", "labs/lab02.html"),
            assign: new Assignment("Integer Array Stack", "assign/assign01.html", 11)
        },
        {
            topic: new Topic( "C++ Templates", "lectures/C++_templates.html" ),
            lab: new Lab("Lab 3: Value semantics in C++", "labs/lab03.html")
        },
        {
            topic: new Topic( "Linked Lists", "lectures/LinkedList_lecture.pdf" ),
            lab: new Lab("Lab 4: Benchmarking vector and list", "labs/lab04.html")
        },
        {
            topic: new Topic( "Doubly Linked Lists", "lectures/DoublyLinkedList_lecture.pdf" ),
            lab: new Lab("Lab 5: Linked list implementation", "labs/lab05.html"),
            assign: new Assignment("Doubly Linked List", "assign/assign02.html", 6)
        },
        {
            topic: new Topic( "Skip Lists", "lectures/Skip_Lists.pdf" )
        },
        {
            topic: new Topic( "Skip Lists (Cont.)", "" ),
            assign: new Assignment("SkipList", "assign/assign03.html", 8)
        },
        {
            topic: new Topic( "Review for Exam #1", "" )
        },
        {
            topic: new Topic( "** Exam #1", "" )
        },
        {
            topic: new DoubleTopic( "Trees", "lectures/Trees_lecture.pdf", "Tree Traversal", "lectures/Tree_Traversal_lecture.pdf" ),
            lab: new Lab("Lab 6: Binary tree traversal algorithms", "labs/lab06.html"),
            assign: new Assignment("RandomArt", "assign/assign04.html", 11)
        },
        {
            topic: new Topic( "Binary Search Trees, Find", "lectures/Binary_Search_Trees.pdf" )
        },
        {
            topic: new Topic( "Binary Search Trees, Insert/Remove", "lectures/Binary_Search_Trees.pdf" )
        },
        {
            topic: new Topic( "AVL Trees", "lectures/AVL_Trees.pdf" ),
            assign: new Assignment("BST", "assign/assign05.html", 17)
        },
        {
            topic: new Topic( "AVL Trees (Cont.)", "" )
        },
        {
            topic: new Topic( "Red-Black Trees", "lectures/Red-Black_Trees.pdf" )
        },
        {
            topic: new Topic( "Red-Black Trees (Cont.)", "" )
        },
        {
            topic: new Topic( "Review for Exam #2", "" )
        },
        {
            topic: new Topic( "** Exam #2", "" )
        },
        {
            topic: new Topic( "AA-Trees, Insert", "lectures/AA-tree_lecture.pdf" ),
            assign: new Assignment("AATree", "assign/assign06.html", 12)
        },
        {
            topic: new Topic( "AA-Trees, Delete", "lectures/AA-tree_lecture.pdf" )
        },
        {
            topic: new Topic( "B-Trees", "lectures/B-Trees.pdf" )
        },
        {
            topic: new Topic( "Review for Exam #3", "" )
        },
        {
            topic: new Topic( "** Exam #3", "" )
        },
        {
            topic: new Topic( "Binary Heaps", "lectures/Heaps.pdf" ),
            assign: new Assignment("Binary Heap", "assign/assign07.html", 9)
        },
        {
            topic: new Topic( "Binary Heaps (Cont.)", "" )
        },
        {
            topic: new Topic( "Hash Tables", "lectures/Hash_Tables.pdf" ),
            assign: new Assignment("Hash Table", "assign/assign08.html", 11)
        },
        {
            topic: new Topic( "Hash Tables (Cont.)", "" )
        },
        {
            topic: new DoubleTopic( "Graphs", "lectures/Graphs.pdf", "Dijkstra's Algorithm", "lectures/Dijkstras_Algorithm.pdf" )
        },
        {
            topic: new Topic( "** Final Exam", "" )
        }
    ]
};
