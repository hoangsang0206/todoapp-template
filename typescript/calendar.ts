declare const FullCalendar: any;

$(document).ready(() => {
    const calendarEl: HTMLElement = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        initialDate: '2024-04-22',
        initialView: 'dayGridMonth'
    })

    calendar.render();
})