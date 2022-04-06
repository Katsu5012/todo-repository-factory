<template>
  <v-app>
    <header>
      <AppHeader />
    </header>
    <v-main>
      <v-row class="mb-6" no-gutters>
        <v-col cols="12" sm="0" md="3" lg="3" xl="3"> ssss</v-col>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
          <Nuxt />
        </v-col>
        <v-col cols="12" sm="0" md="3" lg="3" xl="3"> sss</v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import AppHeader from "~/components/orgamisms/app/AppHeader.vue";

export default defineComponent({
  components: { AppHeader },

  setup() {
    const handleClick = () => {};
  },
});
</script>
