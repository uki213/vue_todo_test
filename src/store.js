import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    testName: "てすと",
    tasks: [
      {
        taskId: 0,
        taskName: "タスクタイトル00",
        taskText: "タスク内容00"
      },
      {
        taskId: 1,
        taskName: "タスクタイトル01",
        taskText: "タスク内容01"
      },
      {
        taskId: 2,
        taskName: "タスクタイトル02",
        taskText: "タスク内容02"
      },
      {
        taskId: 3,
        taskName: "タスクタイトル03",
        taskText: "タスク内容03"
      }
    ],
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
      this.state.tasks.some((task, index) => {
        if (task.taskId === targrtNumber) {
          taskNumber = index;
          return true;
        }
      });

      if (confirm("削除しますか？")) {
        this.state.tasks.splice(taskNumber, 1);
      }
    }
  },
  actions: {}
});
