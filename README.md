# Open Air
> Report on South African air quality sensors using an open data project's API.

See this project's website:

- https://michaelcurrin.github.io/open-air/

## Background

This project exists because I went to a workshop in South Africa where air quality sensors were put together. These sensors contribute air quality measurement data to the [luftdaten.info](https://luftdaten.info) project. This data and those of other countries is made available through their APIs. This projects makes it easy to see the measurements of the South African (ZA) sensors by filtering by country on the client side.

This project could be expanded to allow a user choice of country using a droplist. And the date range could be changed to be say 24 hours, at the costs of data fetching and processing time.

## Links

- [opendata-stuttgart/meta](https://github.com/opendata-stuttgart/meta) repo.
- [API documentation](https://github.com/opendata-stuttgart/meta/wiki/EN-APIs) on the meta repo's Wiki. In particular, the V2 endpoint of measurements in the last 5 minutes is used for this project.
- [luftdaten.info](https://luftdaten.info) homepage. They have a link there to their map tool.
- [Map tool](https://deutschland.maps.luftdaten.info/#12/-33.9412/18.4803) with the view centered on Cape Town, South Africa.


## Local development

### Libraries

- [Jekyll](https://jekyllrb.com/) - To build the static site. No Jekyll templating or themes are used though.
- Bootstrap - To style the table (using [classes](https://getbootstrap.com/docs/4.3/content/tables/)) and give the overall page a style.
- JQuery - To handle remote JSON data.
- Mustache JS - To create a table using template and data.

### Setup

1. Clone the project from the original or a fork.
1. Install [Jekyll](https://jekyllrb.com/) globally.

### Run

1. Start the server.
    ```bash
    $ cd <PATH_TO_REPO>
    $ jekyll serve
    ```
1. Open this URL in the browser.
    - http://127.0.0.1:4000


## Setup on Github Pages

1. Use this repo or a fork on Github Pages.
2. Go to Settings.
3. Go to Github Pages section.
4. Enable website using `master` branch. The page will reload.
5. Navigate to the section again and use the URL you see.
