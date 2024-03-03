function fetchMealInfo(date, elementId) {
    var url = new URL("https://open.neis.go.kr/hub/mealServiceDietInfo")

    var params = {
        KEY: '7a8edb3d57f14ce5b301917d8922f9bb',
        Type: 'json',
        pIndex: 1,
        pSize: 10,
        ATPT_OFCDC_SC_CODE: 'C10', // 부산광역시교육청 코드
        SD_SCHUL_CODE: '7150597', // 대진전자통신고등학교 코드
        MLSV_YMD: date,
    }

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    fetch(url, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(json => {
        var resultEl = document.getElementById(elementId);
        var mealInfo = json.mealServiceDietInfo[1].row[0];
        resultEl.innerHTML = `
            <p>급식일자: ${mealInfo.MLSV_YMD}</p>
            <p>급식: ${mealInfo.DDISH_NM.replace(/<br\/>/g, ', ')}</p>
        `;
    })
    .catch(err => {
        var resultEl = document.getElementById(elementId);
        resultEl.innerHTML = `<p>급식 정보가 없습니다.</p>`;
    });

}

var today = new Date();
var tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

var todayYear = today.getFullYear();
var todayMonth = (today.getMonth() + 1).toString().padStart(2, '0');
var todayDay = today.getDate().toString().padStart(2, '0');
var todayStr = todayYear + todayMonth + todayDay;

var tomorrowYear = tomorrow.getFullYear();
var tomorrowMonth = (tomorrow.getMonth() + 1).toString().padStart(2, '0');
var tomorrowDay = tomorrow.getDate().toString().padStart(2, '0');
var tomorrowStr = tomorrowYear + tomorrowMonth + tomorrowDay;

console.log(todayStr);
console.log(tomorrowStr);



fetchMealInfo(todayStr, 'resultToday');
fetchMealInfo(tomorrowStr, 'resultTomorrow');