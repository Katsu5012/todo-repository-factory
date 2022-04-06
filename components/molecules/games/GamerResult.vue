<template>
  <div>
    <v-card>
      {{ ourTeamName }}
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-bookmark</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    ourTeamName: {
      type: String,
      required: true,
      default: "",
    },
    game: {
      type: Object,
      required: true,
      default: {},
    },
  },
  setup() {},
});
</script>