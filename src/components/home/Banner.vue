<template>
  <v-card dark>
    <v-img
      class="grey lighten-2"
      height="600"
      width="100%"
      :src="'/articles/airstream.jpg'"
    >
      <v-layout
        fill-height
        align-center
        pa-3
      >
        <v-flex
          xs12
          md8
          offset-md4
        >
          <h1 class="display-3 font-weight-light white-text">
            Camping With The Kellers
          </h1>
          <div class="subheading text-uppercase pl-2 mb-4 white-text">
            Finding Beauty, One camp site at a time
          </div>
          <!-- <v-btn
            color="primary"
            depressed
            round
          >
            Subscribe
          </v-btn> -->
        </v-flex>
      </v-layout>
    </v-img>
  </v-card>
</template>

<style scoped>

.white-text {
  color: #fff !important;
}

</style>