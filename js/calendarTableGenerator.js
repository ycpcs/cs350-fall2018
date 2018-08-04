

function generateCalendar(totalDays, daysPerWeek) {
    document.write("<table>");
    document.write("<thead><tr><th>Date</th><th>Topic</th><th>Labs</th><th>Assignment</th></tr></thead>");

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
