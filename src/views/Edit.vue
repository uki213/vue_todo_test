<template>
  <div>
    <div v-if="editMode"><Registration /></div>
    <duv v-else><Editor /></duv>
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
