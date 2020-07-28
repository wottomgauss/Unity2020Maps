# Unity 2020 Maps

## About
Lightweight mapping utility to display areas that the Unity2020 Analytics team believes are most likely to be receptive to our message. Volunteers may use this to zoom in to their location to see what hotspot neighborhoods exist nearby.

## Data Sources

All spatial data is from freely available sources. The most important source is [Harvard Datasource](https://dataverse.harvard.edu/) which hosts many sources of past and present voting data. Low resolution voting data is available 

## Technology Stack

Large spatial datasets must be broken up into small "tiles" and hosted on a server that delivers each tile based on a client's latitude/longitude/zoom level, which are then rendered using a browser map library. Our stack closely resembles this guide: [Using Tippecanoe, Tileserver GL , and Leaflet to serve scale-independent (and really cool looking) Raster (or vector) tiles at higher level zooms](https://medium.com/@kennethchambers/using-tippecanoe-tileserver-gl-and-leaflet-to-serve-scale-independent-and-really-cool-looking-751368d821c7)

- Tippecanoe is used to convert these large geojson files into mbtile format. Zoom level can be specified so that high-resolution layers are only displayed at high zoom, and low resolution (and faster) tiles are visible at low zoom levels.

- Tileserver-GL is used to host these tiles. It is an open-source tile server which works just as well as many expensive hosted options.

- Leaflet is an open-source library for rendering spatial data on a map. It includes methods for users to interact with spatial data dynamically.

- Base layers (including borders, roads, and place names) are currently used from [Stamen Maps](maps.stamen.com)


## Issues:

- Colors are a work in progress. Trying to balance resolution and clarity.
- Still need to buy a custom domain - open to suggestions
