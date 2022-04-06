<template>
  <div>
    <div class="text-center">
      <v-btn
        color="red lighten-2"
        dark
        @click.prevent="handleModalVisibleButtonClick"
      >
        新規作成
      </v-btn>
      <v-dialog v-model="isVisibleDialog" width="500">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2"> 新規作成 </v-card-title>

          <v-card-text>
            <v-form>
              <v-text-field
                v-model="title"
                :counter="20"
                label="件名"
                required
              ></v-text-field>

              <v-textarea
                :value="content"
                :counter="200"
                label="内容"
                required
                no-resize
              ></v-textarea>

              <v-date-picker
                v-model="date"
                :valid-hours="[0, 3, 4, 5, 8, 16, 20]"
                is24hr
              />

              <v-select
                v-model="id"
                label="*カテゴリ名"
                :items="categories"
                item-text="categoryName"
                item-value="id"
                required
              >
              </v-select>
              <v-checkbox
                v-model="checkbox"
                label="期日前にメールを再通知する"
              ></v-checkbox>
              <v-row> v-date </v-row>
            </v-form>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="handleModalVisibleButtonClick">
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-spacer> </v-spacer>
    <v-card
      v-for="todo in todos"
      :key="`todo-${todo.id}`"
      class="mx-auto"
      max-width="600"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            title {{ todo.id }}
          </v-list-item-title>

          <v-list-item-content>{{ todo.title }}</v-list-item-content>

          <v-list-item-subtitle class="text-right text-h6">
            Created by:{{ todo.user.username }}
            <v-spacer />
          </v-list-item-subtitle>
          <v-card-actions>
            <v-btn v-if="!todo.completed" depressed color="primary"
              >完了にする</v-btn
            >
            　<v-btn v-if="todo.completed" depressed color="error"
              >未完了にする</v-btn
            >
            <v-btn depressed color="error">削除</v-btn>
          </v-card-actions>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-spacer />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
} from "@nuxtjs/composition-api";
import axios from "axios";
/** Type */
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  addres: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      ing: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPharase: string;
    bs: string;
  };
}

interface Task {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  user: User;
}

interface IStates {
  tasks: Task[];
  users: User[];
  todos: Todo[];
}

export default defineComponent({
  setup() {
    /** Data */
    const categories = reactive([
      { categoryName: "カテゴリ1", id: 1 },
      { categoryName: "カテゴリ2", id: 2 },
      { categoryName: "カテゴリ3", id: 3 },
      { categoryName: "カテゴリ4", id: 4 },
    ]);
    const states = reactive<IStates>({
      tasks: [],
      users: [],
      todos: [],
    });
    const isVisibleDialog = ref(false);
    let date = new Date();
    // date.setMinutes(0, 0, 0);

    /** Methods */
    const fetchPosts = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          states.tasks = response.data;
        });
    };

    const fetchUsers = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          states.users = response.data;
        });
    };

    const transformToTodos = () => {
      const todos = states.tasks.map(transformToTodo);
      states.todos = todos;
    };

    const transformToTodo = (task: Task): Todo => {
      const user = states.users.find((user) => {
        return task.userId === user.id;
      });

      if (!user) throw new Error("not found User");

      const { id, title, completed } = task;

      return {
        id,
        title,
        completed,
        user,
      };
    };

    const handleModalVisibleButtonClick = () => {
      isVisibleDialog.value = !isVisibleDialog.value;
    };

    /** Created */
    (async () => {
      await fetchPosts();
      await fetchUsers();
      transformToTodos();
    })();

    return {
      ...toRefs(states),
      isVisibleDialog,
      date,
      handleModalVisibleButtonClick,
    };
  },
});
</script>