



// d1 = startDate (first Monday), assumes classes start on a Tuesday
// d2 = endDate
// d3 = finalExamDay
function generateDates(d1, d2, d3, o1, o2, o3) {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

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

window.dates = generateDates( firstMonday, lastDay, finalExamDay, offset1, offset2, offset3 );


// //////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////


// Call the 'ds' (date_string) method to get a date string for course day #i
// function ds(i) {
//     document.write(String(window.dates[i]));
// }

function dateString(i) {
    return String(window.dates[i]);
}


// //////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////
