"use strict";

const API_URL_5_MIN = 'https://api.sensors.africa/static/v2/data.json';


function parseSensorData(value) {
    var output = {
        id: `#${value.sensor.id}`,
        timestamp: value.timestamp,

        pin: value.sensor.pin,

        sensor_type: value.sensor.sensor_type.name,

        manufacturer: value.sensor.sensor_type.manufacturer,

        location: value.location.country,
        coord: `${value.location.latitude}, ${value.location.longitude}`,
        altitude: value.location.altitude,
        indoor: value.location.indoor ? 'Yes' : 'No',
    }

    for (var m of value.sensordatavalues) {
        output[m.value_type] = m.value;
    }

    return output;
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
