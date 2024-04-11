function capitalFirstWord(str: string): string {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function translateToVietnamese(str: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        
    })
}

//Get current weather and time -----------------------------------------
function updateCurrentTime(): void {
    let currentTime: Date = new Date();
    let _time: number = currentTime.getHours();
    let date: string = currentTime.toLocaleDateString('en-GB');
    let time: string = currentTime.toLocaleTimeString('en-US');

    let daysOfWeek: string[] = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    let day: string = daysOfWeek[currentTime.getDay()];

    if(_time >= 5 && _time <= 7) {
        $('.weather-box').css('background-image', `url('./images/Blood.png')`);
    } else if(_time > 7 && _time <= 17) {
        $('.weather-box').css('background-image', `url('./images/Sun.png')`);
    } else {
        $('.weather-box').css('background-image', `url('./images/Moon.png')`);
    }

    $('.date').text(day + ', ' + date);
    $('.clock').text(time);
}

function updateWeather(city: string): Promise<boolean> {
    const apiKey: string = '0292e39f8b40834fb7a306a3a3430ca4';
    // const city: string = 'Ho Chi Minh';
    const apiUrl: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    return new Promise<boolean>((resolve, reject) => {
        $.ajax({
            url: apiUrl,
            method: 'get',
            success: (data) => {
                $('.temperature').text(Math.floor(data.main.temp - 273.15) + ' °C');
                $('.weather-description').text(capitalFirstWord(data.weather[0].description));
                $('.city').text(data.name);
                console.log(data.weather)
                console.log(data.main)

                resolve(true);
            },
            error: () => { 
                console.error('Cannot get weather data'); 
                
                reject(false);
            }
        })  
    }) 
}

$(document).ready(() => {
    setInterval(updateCurrentTime, 1000);

    showContentLoading($('.weather-box'));

    $('.temperature').text('... °C');
    $('.weatherIcon').append(`<div class="mostlysunny"><div class="inner"></div></div>`);
    $('.city').text('...');

    //Get location 
    const ipUrl = 'https://ipinfo.io/json'

    $.ajax({
        url: ipUrl,
        method: 'get',
        success: (data) => {
            const city: string = data.city;

            if(updateWeather(city)) {
                hideContentLoading($('.weather-box'));
            }
        },
        error: () => {
            console.error('Cannot get location.');
        }
    })
    
})