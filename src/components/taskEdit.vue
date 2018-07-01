<template>
  <div>test editor
    <div v-if="getTask">
      <div>ID: {{ getTask.taskId }}</div>
      <div>TITLE: <input v-model="getTask.taskName"></div>
      <div>TEXT: <textarea v-model="getTask.taskText"></textarea></div>

      <button @click="send" class="btn">登録</button>
      <button @click="returnHome" >戻る</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getNumber() {
      const id = this.$route.params.id;
      let n;

      this.$store.state.tasks.some((task, index) => {
        if (task.taskId === id) {
          n = index;
          return true;
        }
      });

      return n;
    },
    getTask() {
      return this.$store.state.tasks[this.getNumber];
    }
  },
  methods: {
    send() {
      this.$store.commit("taskUpdate", {
        number: this.getTask,
        taskObj: this.getNumber
      });
      this.$store.commit("saveStrage");
      this.returnHome();
    },
    returnHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
