<template>
  <v-container>
    <v-card v-for="(game, index) in games" :key="index">
      <GamerResult :ourTeamName="ourTeamName" :game="game" />
      <v-spaceer></v-spaceer>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import GamerResult from "./GamerResult.vue";
export default defineComponent({
  components: { GamerResult },
  props: {
    ourTeamName: {
      type: String,
      required: true,
      default: "",
    },
    games: {
      type: Object,
      required: true,
      default: [],
    },
  },
  setup() {},
});
</script>
