<template>
  <div id="taskList">
    <ul>
      <li v-for="task in Tasks" :key="task.taskId">
        <dl>
          <dt>{{ task.taskId }}:{{ task.taskName }}</dt>
          <dd>
            {{ task.taskText }}
          </dd>
        </dl>
        <div class="btns">
          <div class="btn" @click="taskDelete(task.taskId)">タスク削除</div>
          <div class="btn" @click="taskEdit(task.taskId)">タスク編集</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    Tasks() {
      this.$store.commit("loadStrage");

      return this.$store.state.tasks;
    }
  },
  methods: {
    taskDelete(deleteId) {
      this.$store.commit("taskDelete", deleteId);
      this.$store.commit("saveStrage");
    },
    taskEdit(ID) {
      this.$router.push({
        name: "edit",
        params: {
          id: ID
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  li {
    border: 1px solid #ccc;
    margin-bottom: 10px;
    .btns {
      padding: 10px;
      display: flex;
      flex-direction: row-reverse;
      .btn {
        font-size: 12px;
        padding: 5px;
        border: 1px solid #ccc;
        background: #eee;
        text-align: center;
        margin-right: 10px;
      }
    }
  }
}
</style>
