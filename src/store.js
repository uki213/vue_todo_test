import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    testName: "てすと",
    tasks: [],
    editor: {
      editId: 0,
      defaultTitle: "",
      defaultText: ""
    }
  },
  mutations: {
    taskUpdate(state, taskDetail) {
      state.tasks[taskDetail.number] = taskDetail.taskObj;
    },
    taskDelete(state, targrtNumber) {
      let taskNumber;
      state.tasks.some((task, index) => {
        if (task.taskId === targrtNumber) {
          taskNumber = index;
          return true;
        }
      });

      if (confirm("削除しますか？")) {
        state.tasks.splice(taskNumber, 1);
      }
    },
    taskPush(state, task) {
      state.tasks.push(task);
    },
    saveStrage(state) {
      localStorage.setItem("todo_tasks", JSON.stringify(state.tasks));
    },
    loadStrage(state) {
      let tasks = JSON.parse(localStorage.getItem("todo_tasks"));

      if (!tasks) {
        tasks = [
          {
            taskId: 0,
            taskName: "例：タスクタイトル",
            taskText: "例：タスク本文"
          }
        ];
      }

      state.tasks = tasks;
    }
  }
});
