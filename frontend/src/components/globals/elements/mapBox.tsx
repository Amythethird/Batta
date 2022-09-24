import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "../../../styles/style.css";

interface Coordinate {
  lat: number;
  lng: number;
}

interface Markers {
  coords: Coordinate[];
}
mapboxgl.accessToken =
  "pk.eyJ1IjoiYWN2bTAwNyIsImEiOiJjbDN2azF0ZTExczh5M2lsdHRtYmttcWsyIn0.7UCO3a_muVVS-hxFq8RrJQ";

function mapBox(props: Markers) {
  const { coords } = props;
  const mapContainer = useRef<any>();
  const map = useRef<any>();
  const [lat, setLat] = useState(7);
  const [lng, setLng] = useState(51);
  const [zoom] = useState(10);

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  }

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lat, lng],
      zoom,
    });
    coords.forEach((cord) => {
      new mapboxgl.Marker().setLngLat(cord).addTo(map.current);
    });
  });

  return (
    <section className="">
      <div ref={mapContainer} id="map-container" />
    </section>
  );
}

export default mapBox;
