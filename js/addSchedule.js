export function addScheduleItem(date) {
    var scheduleList = document.getElementById("scheduleList");
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = "schedule/" + date + ".html";
    a.textContent = formatDate(date);
    li.appendChild(a);
    scheduleList.appendChild(li);
}

function formatDate(date) {
    var month = parseInt(date.substring(0, 2), 10);
    var day = parseInt(date.substring(2, 4), 10);
    
    return month + "월 " + day + "일";
}
