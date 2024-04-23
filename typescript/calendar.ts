const currentTime: Date = new Date();
const date: string = currentTime.toLocaleDateString('en-GB');

const daysOfWeek_VN: string[] = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
const daysOfWeek_EN: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months_VN: string[] = ['Tháng 1', 'Tháng 2', 'Tháng 3','Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
const months_EN: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Dêcmber'];

let day: string = daysOfWeek_VN[currentTime.getDay()];

$('.current-day').text(day + ', ' + date);

const lastDateOfMonth = new Date(currentTime.getFullYear(), currentTime.getMonth() + 1, 0).getDate();
let count: number = 0;
let calendarEmelemts: string = "";

$('.c-main').remove();

for(let i: number = 1; i <= lastDateOfMonth; i++) {
    if(count === 0) {
        calendarEmelemts += '<tr class="c-main">';
    } else if(count === 7) {
        calendarEmelemts += '</tr>';
        count = 0;
    }

    count++;
    calendarEmelemts += `<td>${i}</td>`;
}

$('.calendar-main').append(calendarEmelemts);