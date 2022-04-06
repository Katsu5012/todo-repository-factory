<template>
  <v-container>
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      src="https://picsum.photos/id/11/500/300"
    ></v-img>
    <!-- 試合結果 直近５試合 -->
    <GameResults :ourTeamName="dummyMyTeamName" :games="dummyGames" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import GameResults from "../components/molecules/games/GameResults.vue";
export default defineComponent({
  components: { GameResults },

  setup() {
    const dummyMyTeamName = "Hello";

    const dummyGames = [
      {
        enemyTeamName: "bbb",
        myTeamScore: 1,
        enemyTeamScore: 3,
        ourFirstBatting: false,
        result: "lose",
        date: "2022-01-03",
      },
      {
        enemyTeamName: "ccc",
        myTeamScore: 7,
        enemyTeamScore: 3,
        ourFirstBatting: false,
        result: "win",
        date: "2022-01-03",
      },
      {
        enemyTeamName: "ddd",
        myTeamScore: 10,
        enemyTeamScore: 8,
        ourFirstBatting: false,
        result: "lose",
        date: "2022-01-03",
      },
      {
        enemyTeamName: "eeee",
        myTeamScore: 0,
        enemyTeamScore: 3,
        ourFirstBatting: false,
        result: "lose",
        date: "2022-01-03",
      },
      {
        enemyTeamName: "fff",
        myTeamScore: 1,
        enemyTeamScore: 1,
        ourFirstBatting: false,
        result: "draw",
        date: "2022-01-03",
      },
    ];

    return {
      dummyMyTeamName,
      dummyGames,
    };
  },
});
</script>
