<template>
  <div class="center">
      <Board :size="$route.params.size"></Board>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Board from "@/components/Board.vue"; // @ is an alias to /src

@Component({
  components: {
    Board,
  },
})
export default class Home extends Vue {}
</script>
