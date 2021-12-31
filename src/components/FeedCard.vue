<template>
  <v-flex
    xs12
    :class="classes"
  >
    <v-card
      :height="value.prominent ? 450 : 350"
      color="grey lighten-1"
      dark
      :href="value.href"
      
    >
      <v-img
        :src="require(`@/assets/articles/${value.hero}`)"
        height="100%"
        gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
      >
        <v-layout
          fill-height
          wrap
          text-xs-right
          ma-0
        >
          <v-flex xs12>
            <v-chip
              label
              class="mx-0 mb-2 text-uppercase"
              color="grey darken-3"
              text-color="white"
              small
              @click.stop=""
            >
              {{ value.location }}
            </v-chip>
            <h3 class="title font-weight-bold mb-2 white-text">
              {{ value.title }}
            </h3>
            <p class="mb-2 white-text">
              {{ value.blurb }}
            </p>
            <div class="caption white-text">
              {{ value.author }}
              <br>
              <div v-if="value.formatted_start_date">
                {{value.formatted_start_date}} - {{value.formatted_end_date}}
              </div>
            </div>
          </v-flex>
          <v-flex align-self-end>
            <v-chip
              class="text-uppercase ma-0"
              color="primary"
              small
              link
              :href="value.href"
            >
              Read More
            </v-chip>
          </v-flex>
        </v-layout>
      </v-img>
    </v-card>
  </v-flex>
</template>

<script>
import moment from 'moment';
  export default {
    props: {
      size: {
        type: Number,
        required: true
      },
      value: {
        type: Object,
        default: () => ({})
      }
    },

    computed: {
      classes () {
        return {
          'md6': this.size === 2,
          'md4': this.size === 3
        }
      }
    },
    mounted(){
      if(this.value.start_date){
        const start_date = moment(this.value.start_date);      
        this.value.formatted_start_date = start_date.format("MMMM Do, YYYY");
      }
      if(this.value.end_date){
        const end_date = moment(this.value.end_date);    
        this.value.formatted_end_date = end_date.format("MMMM Do, YYYY");
      }
    }
  }
</script>

<style>
.v-image__image {
  transition: .3s linear;
}

.white-text {
  color: #fff !important;
}
</style>
