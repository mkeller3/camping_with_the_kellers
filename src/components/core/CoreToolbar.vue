<template>
  <v-toolbar flat id="toolbar">
    <v-container mx-auto py-0>
      <v-layout>
        <v-img
          :src="require('@/assets/logo.png')"
          class="mr-5"
          contain
          height="48"
          width="48"
          max-width="48"
        />
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          :href="link.href"       
          text
          tile
        >
          {{ link.text }}
        </v-btn>
        <v-spacer />
        <v-text-field
          append-icon="mdi-magnify"
          flat
          hide-details
          solo-inverted
          style="max-width: 300px"
        />
      </v-layout>
    </v-container>
  </v-toolbar>
</template>

<script>
// Utilities
// import {
//   mapGetters,
//   mapMutations
// } from 'vuex'

export default {
  name: "CoreToolbar",
  data: () => ({
    links: [
      {
        text: "Home",
        href: "/",
      },
      {
        text: "About",
        href: "/about",
      },
    ],
  }),
  //   computed: {
  //     ...mapGetters(['links'])
  //   },

  //   methods: {
  //     ...mapMutations(['toggleDrawer']),
  //     onClick (e, item) {
  //       e.stopPropagation()

  //       if (item.to || !item.href) return

  //       this.$vuetify.goTo(item.href)
  //     }
  //   }
};
</script>

<style>

#toolbar{
  background-color: #f5f5f5 !important;
  max-height: 64px;
}

</style>
