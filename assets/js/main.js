const API_URL_5_MIN = '//api.luftdaten.info/static/v2/data.json'

function parseSensorData(value) {
    return {
        id: `#${value.sensor.id}`,
    };
}

function getData(url, countryCode) {
    return $.getJSON(url)
        .then(result => result.filter(value => value.location.country === countryCode).map(parseSensorData));
}

function render(countryCode) {
    if (typeof countryCode === 'undefined') {
        throw new Error('Country code must be set');
    }
    document.getElementById('location').innerHTML = countryCode;

    document.getElementById('target-output').innerHTML = 'Loading...';

    getData(API_URL_5_MIN, countryCode)
        .then(data => {
            var content = {
                "sensors": data
            }
            var template = $("#sensors-table").html();
            var html = Mustache.to_html(template, content);
            $('#target-output').html(html);
        });
}
