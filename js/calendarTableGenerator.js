

function generateCalendar(totalDays, daysPerWeek) {
    document.write("<table>\n");

    for (var i=0; i < totalDays; i++) {
        document.write("<tr>");
        document.write("<td>" + dateString(i) + "</td>");
        document.write("<td>" + topic(i) + "</td>");
        document.write("<td>" + lab(i) + "</td>");
        document.write("<td>" + assignment(i) + "</td>");
        document.write("</tr>");

    }

    document.write("</table>");
}
