<template>
  <div class="home">
    <Tasks />
  </div>
</template>

<script>
import Tasks from "@/components/taskList.vue";

export default {
  components: {
    Tasks
  }
};
// // @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "home",
//   components: {
//     HelloWorld
//   }
// };
</script>
