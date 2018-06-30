<template>
  <div class="home">
    <Tasks />
    <div class="newTask">
      <button @click="newTask">新規タスク</button>
    </div>
  </div>
</template>

<script>
import Tasks from "@/components/taskList.vue";

export default {
  components: {
    Tasks: Tasks
  },
  methods: {
    newTask() {
      this.$router.push({ name: "edit" });
    }
  }
};
</script>
