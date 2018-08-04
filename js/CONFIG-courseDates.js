
// firstMonday defines the Monday that starts the first week
// of classes.  There usually are no classes on this Monday.
var firstMonday = new Date("8/27/2018 4:00:00");
var lastDay = new Date("12/11/2018 4:00:00");

var inClassFinal = true;  // true if final exam is on last day of class; false if final exam is during exam week
var finalExamDay = new Date("12/14/2018 4:00:00");  // not used if final is on last day of class


// the offset values specify the number of days away from Monday that
// a course runs. Setting offset1 to '1' means that the first class of
// the week runs on Monday+1 (i.e. Tuesday). An offset of 3 means
// Monday+3 (i.e. Thursday).  An offset of -1 is an unused offset.
// For a course that runs twice per week, offset3 is unused.
var offset1 = 1;   // days from Monday when course runs
var offset2 = 3;   // days from Monday when course runs (twice per week)
var offset3 = -1;  // days from Monday when course runs (thrice per week)