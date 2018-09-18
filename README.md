

## Restaurant Reviews App

A static webpage was converted to a mobile-ready web app. Accessibility was also a focus of this project in addition to responsive design. A service worker was implemented for offline use.

### Specification

Udacity provided starter code that purposely lacked responsive and accessibility elements. It was the students job to enhance usability as well as implement these features.

### Getting started.

After forking the repo and cloning the project.

1.  Start up a simple python HTTP server in the project folder to serve up the site files on your local computer.

Use the `python -V` in a terminal to determine what version of python you have.

If you have Python 2.x type:
`python -m SimpleHTTPServer 8000`

 If you have Python 3.x type: `python3 -m http.server 8000`.
 This did not work for me, by the way.
 You can type `python -m http.server 8000` instead if you also have trouble.

 Note also that you can use a port other than 8000 if it is already in use.

 Navigate to [website](https://www.python.org/) if you don't have Python to download and install the software.

2. Once you got the server running, visit the site: `http://localhost:8000`.

*Pro tip: When running a server in the terminal you can open another terminal window so you can still commit changes. Also changes might not take so you will have to open up dev tools, go to the network panel right click on one of the items and clear the browser cache. Then refresh the page.*

## Leaflet.js and Mapbox:

<strong>Due to terms and condition etc. concerns I have removed my API keys. You will need to follow these instructions to get your own and paste them where you see `<your MAPBOX API KEY HERE>` in main.js and restaurant_info.js</strong>

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.
