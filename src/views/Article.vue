<template>
  <v-container fluid class="px-0 mx-0 mt-0 pt-0">
    <v-img
      class="grey lighten-2"
      height="600"
      width="100%"
      :src="`/articles/${article.hero}`"
      gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
    >
      <v-layout fill-height align-center pa-3>
        <v-flex xs12 md8 offset-md4>
          <h1 class="display-3 font-weight-light white-text">
            {{ article.title }}
          </h1>
          <div class="subheading text-uppercase pl-2 mb-4 white-text">
            {{ article.blurb }}
          </div>
          <div class="caption white-text">
              {{ article.author }}
              <br />
              <div v-if="article.formatted_start_date">
                {{ article.formatted_start_date }} -
                {{ article.formatted_end_date }}
              </div>
          </div>
        </v-flex>
      </v-layout>
    </v-img>
    <v-row class="mt-0 pt-0">
      <v-container class="article-text mt-0 pt-0">
        <div v-html="article.text" class="mt-10 mx-5"></div>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import { marked } from "marked";
import axios from "axios";
import moment from "moment";

export default {
  name: "Article",
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
      document.title = `${this.article.title} | Camping With The Keller's`
      if (this.article.start_date) {
        const start_date = moment(this.article.start_date);
        this.article.formatted_start_date = start_date.format("MMMM Do, YYYY");
      }
      if (this.article.end_date) {
        const end_date = moment(this.article.end_date);
        this.article.formatted_end_date = end_date.format("MMMM Do, YYYY");
      }
    });
  },
};
</script>

<style>

.article-text{
  background-color: rgb(248, 244, 244);
  box-shadow: 0 30px 50px 0 rgba(1,1,1,.15);
}
</style>