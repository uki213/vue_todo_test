<template>
  <div>new task
    <div>
      <div>TITLE: <input v-model="task.taskName"></div>
      <div>TEXT: <textarea v-model="task.taskText"></textarea></div>

      <button @click="send" class="btn">登録</button>
      <button @click="returnHome" >戻る</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      default: {
        taskId: "",
        taskName: "",
        taskText: ""
      },
      task: {
        taskId: "",
        taskName: "",
        taskText: ""
      }
    };
  },
  computed: {},
  methods: {
    send() {
      let sendTask = Object.assign(this.task);
      sendTask.taskId = Date.now();
      this.$store.commit("taskPush", sendTask);
      this.task = this.default;
    },
    returnHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
