<template>
  <v-app>
    <core-toolbar />
    <v-main>
      <router-view/>
    </v-main>
    <core-footer />
  </v-app>
</template>

<script>
import CoreToolbar from '@/components/core/CoreToolbar.vue';
import CoreFooter from './components/core/CoreFooter.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    CoreToolbar,
    CoreFooter
  }
};
</script>

<style>

.white-text {
  color: #fff !important;
}

</style>
