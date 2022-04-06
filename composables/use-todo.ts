import { reactive } from "@vue/composition-api";
import { $repository } from "../RepositoryFactory/RepositoryFactory";

/** Types */
export interface Task {
  id: number;
  title: string;
  content: string;
  deadlineDay: string;
  deadlineTime: string;
  created_at: Date;
  updated_at: Date;
}

interface IState {
  taskList: Task[];
  task: Task;
  page: number;
}

/** Composable */
export function UserToDos() {
  const repositoryPost = $repository.get("tasks");

  /** Data */
  const state = reactive<IState>({
    // 一覧表示用タスク
    taskList: [],
    // モーダル表示用task
    // 初期状態をどうするか検討する
    task: {
      id: 0,
      title: "",
      content: "",
      deadlineDay: "",
      deadlineTime: "",
      created_at: new Date(),
      updated_at: new Date(),
    },
    page: 1,
  });

  const inputs = reactive({
    title: "",
    content: "",
    deadlineDay: "",
    deadlineTime: "",
  });

  /** Methods */
  const postTask = () => {
    const { title, content, deadlineDay, deadlineTime } = inputs;

    repositoryPost
      .addTask({ title, content, deadlineDay, deadlineTime })
      .then((task) => {
        state.taskList.unshift(task);
      });
  };

  const patchTask = () => {
    const { id } = state.task;
    const { title, content, deadlineDay, deadlineTime } = inputs;

    repositoryPost.patchTask({ id, title, content, deadlineDay, deadlineTime });
  };
}
