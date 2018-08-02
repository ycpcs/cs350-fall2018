// firstMonday defines the Monday that starts the first week 
// of classes.  There usually are no classes on this Monday.
var firstMonday = new Date("8/27/2018 12:00:00");
var lastDay = new Date("12/11/2018 12:00:00");

// the offset values specify the number of days away from Monday that 
// a course runs. Setting offset1 to '1' means that the first class of 
// the week runs on Monday+1 (i.e. Tuesday). An offset of 3 means
// Monday+3 (i.e. Thursday).  An offset of -1 is an unused offset.
// For a course that runs twice per week, offset3 is unused.
var offset1 = 1;   // days from Monday when course runs
var offset2 = 3;   // days from Monday when course runs (twice per week)
var offset3 = -1;  // days from Monday when course runs (thrice per week)

var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];


function getDates(d1, d2, o1, o2, o3) {
    var oneDay = 24*3600*1000;
    var oneWeek = 7*oneDay;

    var startDate = d1*1 + o1*oneDay;
    var endDate = d2*1;
    var dates=[];

    for (var class1=startDate, class2=(d1*1 + o2*oneDay), class3=(d1*1 + o3*oneDay)  ; (class1 < endDate); class1+=oneWeek, class2+=oneWeek, class3+=oneWeek) {
        if ((o1 !== -1) && (class1 < endDate)) {
            d = new Date(class1);
            dates.push( days[d.getDay()] + ", " + d.getMonth() + " " + d.getDate() );
        }

        if ((o2 !== -1) && (class2 < endDate)) {
            d = new Date(class2);
            dates.push( days[d.getDay()] + ", " + d.getMonth() + " " + d.getDate() );
        }

        if ((o3 !== -1) && (class3 < endDate)) {
            d = new Date(class3);
            dates.push( days[d.getDay()] + ", " + d.getMonth() + " " + d.getDate() );
        }
    }
    return dates;
}

// get the string for the date
// getting just the first date in the example below
// String(getDates( firstMonday, lastDay, offset1, offset2, offset3 )[0]);
window.dates = getDates( firstMonday, lastDay, offset1, offset2, offset3 );