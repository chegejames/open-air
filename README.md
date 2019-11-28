# Open Air
> Report on South African air quality data pulled from the [luftdaten.info](https://luftdaten.info) project's APIs.

## Libraries

- Bootstrap - To style the table (using [classes](https://getbootstrap.com/docs/4.3/content/tables/)) and give the overall page a style.
- JQuery - To handle remote JSON data.
- Mustache JS - To create a table using template and data.

## Links

### Projects

- [opendata-stuttgart/meta](https://github.com/opendata-stuttgart/meta) repo.
- [API documentation](https://github.com/opendata-stuttgart/meta/wiki/EN-APIs) on the meta repo's Wiki.
- [luftdaten.info](https://luftdaten.info) homepage. They have a link there to their map tool.

### Maps

- [Map tool](https://deutschland.maps.luftdaten.info/#12/-33.9412/18.4803), with the view centered on Cape Town, South Africa.

### API tests

#### V1

- https://data.sensor.community/airrohr/v1/filter/country=ZA - measurements for last 5 minutes, filtered to South Africa only.

#### V2

- http://api.luftdaten.info/static/v2/data.json - average of all measurements per sensor of the last 5 minutes for all sensors.

## Github Pages

1. Use this repo or a fork on Github Pages.
1. Go to Settings.
1. Go to Github Pages section.
1. Enable website using `master` branch. The page will reload.
1. Navigate to the section again and find the URL.

## Local development

### Setup

Clone the project from the original or a fork.

Install [Jekyll](https://jekyllrb.com/) globally.

### Run

```bash
$ cd <PATH_TO_REPO>
$ jekyll serve
```

Open this URL in the browser.

- http://127.0.0.1:4000
