// 새로운 스케쥴 항목을 추가하는 함수
export function addScheduleItem(date) {
    var scheduleList = document.getElementById("scheduleList");
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = "schedule/" + date + ".html";
    a.textContent = formatDate(date);
    li.appendChild(a);
    scheduleList.appendChild(li);
}

// 날짜를 MM월 DD일 형식으로 변환하는 함수
function formatDate(date) {
    var month = date.substring(0, 2);
    var day = date.substring(2, 4);
    return month + "월 " + day + "일";
}
