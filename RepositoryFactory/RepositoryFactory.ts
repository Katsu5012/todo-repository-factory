import TaskRepository from "../repository/task.repository";

const repositories = {
  tasks: TaskRepository,
};

export const $repository = {
  get: (name: keyof typeof repositories) => repositories[name],
};
