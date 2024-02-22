export function addScheduleItem(date, text) {
    var scheduleList = document.getElementById("scheduleList");
    var div = document.createElement("div"); // div 요소를 생성합니다.
    div.classList.add("schedule"); // CSS 스타일을 적용하기 위해 클래스를 추가합니다.

    var link = document.createElement("a"); // 링크 요소를 생성합니다.
    link.href = "views/schedule/" + date + ".html"; // 링크의 href를 설정합니다.
    link.textContent = formatDate(date) + " " + text; // 링크의 텍스트 내용을 설정합니다.

    div.appendChild(link); // 링크를 div에 추가합니다.
    scheduleList.appendChild(div); // 스케줄 목록에 추가합니다.

    // 스케줄을 클릭했을 때의 동작을 정의합니다.
    div.addEventListener('click', function() {
        // div를 클릭했을 때에도 링크가 작동하도록 합니다.
        link.click();
    });
}


function formatDate(date) {
    var month = parseInt(date.substring(0, 2), 10);
    var day = parseInt(date.substring(2, 4), 10);
    
    return month + "월 " + day + "일";
}
