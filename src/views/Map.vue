<template>
  <v-container fluid>
    <v-row class="h-100">
      <v-col cols="8" id="map" class="mx-0 px-0"> </v-col>
      <v-col cols="4" class="article">
        <h1>{{ article.title }}</h1>
        <p>Written By: {{ article.author }}</p>
        <p v-if="article.formatted_start_date">
          {{ article.formatted_start_date }} -
          {{ article.formatted_end_date }}
        </p>
        <v-divider />
        <div v-html="article.text"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { marked } from "marked";
import axios from "axios";
import moment from "moment";

export default {
  name: "Map",
  data: () => ({
    article: {
      title: undefined,
      text: undefined,
    },
  }),
  mounted() {
    const article_req = axios.get(
      `/data/articles_markdown/${this.$route.params.id}.md`
    );
    article_req.then((res) => {
      this.article.text = marked(res.data);
    });
    const articles_req = axios.get(`/data/articles.json`);
    articles_req.then((res) => {
      let articleDetails = res.data.find(
        (article) => article.href === this.$route.params.id
      );
      for (let prop in articleDetails) {
        this.article[prop] = articleDetails[prop];
      }
      if (this.article.start_date) {
        const start_date = moment(this.article.start_date);
        this.article.formatted_start_date = start_date.format("MMMM Do, YYYY");
      }
      if (this.article.end_date) {
        const end_date = moment(this.article.end_date);
        this.article.formatted_end_date = end_date.format("MMMM Do, YYYY");
      }

      mapboxgl.accessToken =
        "pk.eyJ1IjoibWtlbGxlcjMiLCJhIjoieFdYUUg5TSJ9.qzhP1v5f1elHrnTV4YpkiA";
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/satellite-streets-v11", // style URL
        center: [this.article.coordinates[0], this.article.coordinates[1]], // starting position [lng, lat]
        zoom: 13, // starting zoom
      });

      map.on("load", () => {
        map.addControl(new mapboxgl.NavigationControl(), "top-left");

        new mapboxgl.Marker()
          .setLngLat([this.article.coordinates[0], this.article.coordinates[1]])
          .addTo(map);

        map.addSource("mapbox-dem", {
          type: "raster-dem",
          url: "mapbox://mapbox.mapbox-terrain-dem-v1",
          tileSize: 512,
          maxzoom: 14,
        });
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });

        // add a sky layer that will show when the map is highly pitched
        map.addLayer({
          id: "sky",
          type: "sky",
          paint: {
            "sky-type": "atmosphere",
            "sky-atmosphere-sun": [0.0, 0.0],
            "sky-atmosphere-sun-intensity": 15,
          },
        });
      });
    });
  },
};
</script>

<style>
#map {
  width: 100%;
  height: 93vh;
}

.article {
  height: 93vh;
  overflow: auto;
}
</style>