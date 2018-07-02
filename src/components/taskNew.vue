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
      this.$store.commit("taskPush", {
        taskId: Date.now(),
        taskName: this.task.taskName,
        taskText: this.task.taskText
      });

      this.$store.commit("saveStrage");
      this.task = {
        taskId: "",
        taskName: "",
        taskText: ""
      };
    },
    returnHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
