<template>
  <div>
    <div v-if="editMode"><Registration /></div>
    <div v-else><Editor /></div>
  </div>
</template>

<script>
import taskEdit from "@/components/taskEdit.vue";
import taskNew from "@/components/taskNew.vue";

export default {
  components: {
    Editor: taskEdit,
    Registration: taskNew
  },
  computed: {
    editMode() {
      let paramId = !(this.$route.params.id !== undefined);
      return paramId;
    }
  }
};
</script>
