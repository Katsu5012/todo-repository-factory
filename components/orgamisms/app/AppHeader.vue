<template>
  <v-app-bar>
    <v-toolbar-title>BaseBall Blog</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
      <h4>新規登録</h4>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
      <h4>ログイン</h4>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>

    <!-- Drawar -->
    <!-- <v-navigation-drawer v-model="isVisibleDrawar" app absolute temporary> -->
    <!-- <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>John Leider</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list> -->
    <!-- </v-navigation-drawer> -->
  </v-app-bar>
</template>
<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import AppDrawar from "./AppDrawar.vue";
export default defineComponent({
  components: { AppDrawar },

  setup() {
    const isVisibleDrawar = ref(false);

    const toggleAppDrawar = () => [
      (isVisibleDrawar.value = !isVisibleDrawar.value),
    ];

    const handleClick = (event: boolean) => {
      isVisibleDrawar.value = event;
    };

    return {
      isVisibleDrawar,
      toggleAppDrawar,
      handleClick,
      items: [
        { title: "試合結果", icon: "mdi-view-dashboard" },
        { title: "個人成績", icon: "mdi-forum" },
      ],
    };
  },
});
</script>
