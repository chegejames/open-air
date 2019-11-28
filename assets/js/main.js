"use strict";

const API_URL_5_MIN = '//api.luftdaten.info/static/v2/data.json';

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


function test() {
    var samples = [
        { "id": 5617052234, "sampling_rate": null, "timestamp": "2019-11-28 15:38:54", "location": { "id": 8737, "latitude": "49.576", "longitude": "10.988", "altitude": "285.6", "country": "DE", "exact_location": 0, "indoor": 0 }, "sensor": { "id": 17241, "pin": "1", "sensor_type": { "id": 14, "name": "SDS011", "manufacturer": "Nova Fitness" } }, "sensordatavalues": [{ "id": 11926312842, "value": "0.80", "value_type": "P1" }, { "id": 11926312843, "value": "0.60", "value_type": "P2" }] },
        { "id": 5617052265, "sampling_rate": null, "timestamp": "2019-11-28 15:38:55", "location": { "id": 8737, "latitude": "49.576", "longitude": "10.988", "altitude": "285.6", "country": "DE", "exact_location": 0, "indoor": 0 }, "sensor": { "id": 17242, "pin": "7", "sensor_type": { "id": 9, "name": "DHT22", "manufacturer": "various" } }, "sensordatavalues": [{ "id": 11926312914, "value": "99.90", "value_type": "humidity" }, { "id": 11926312913, "value": "10.20", "value_type": "temperature" }] },
        { "id": 5617039558, "sampling_rate": null, "timestamp": "2019-11-28 15:36:52", "location": { "id": 8739, "latitude": "-33.928", "longitude": "18.45", "altitude": "13.8", "country": "ZA", "exact_location": 0, "indoor": 0 }, "sensor": { "id": 17245, "pin": "1", "sensor_type": { "id": 14, "name": "SDS011", "manufacturer": "Nova Fitness" } }, "sensordatavalues": [{ "id": 11926285648, "value": "13.45", "value_type": "P1" }, { "id": 11926285654, "value": "5.03", "value_type": "P2" }] },
        { "id": 5617040383, "sampling_rate": null, "timestamp": "2019-11-28 15:36:56", "location": { "id": 8739, "latitude": "-33.928", "longitude": "18.45", "altitude": "13.8", "country": "ZA", "exact_location": 0, "indoor": 0 }, "sensor": { "id": 17246, "pin": "7", "sensor_type": { "id": 9, "name": "DHT22", "manufacturer": "various" } }, "sensordatavalues": [{ "id": 11926287496, "value": "94.10", "value_type": "humidity" }, { "id": 11926287442, "value": "30.50", "value_type": "temperature" }] },
    ];
    for (var s of samples) {
        console.log(parseSensorData(s));
    }
}

test()
