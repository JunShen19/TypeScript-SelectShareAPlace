import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import { fromLonLat } from "ol/proj";

const form = document.querySelector("form")!;
// const addressInput = document.getElementById("address")! as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();

  const coordinates = { lat: 23.5, lng: 120 }; // Can't fetch coordinates from Google API, use dummy ones

  document.getElementById("map")!.innerHTML = ""; // clear <p> from <div id="map">
  new Map({
    target: "map",
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    view: new View({
      center: fromLonLat([coordinates.lng, coordinates.lat]),
      zoom: 16,
    }),
  });
}

form.addEventListener("submit", searchAddressHandler);
