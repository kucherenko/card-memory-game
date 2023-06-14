<template>
  <div class="center">
    <div v-if="showDialog" class="dialog">
      <div class="dialog-header">Congratulations!</div>
      <div class="dialog-content">
        <p>You finished the game in {{timer}} seconds.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class DialogBox extends Vue {
  @Prop({ default: 0 }) timer!: number;
  @Prop({ default: false }) showDialog!: boolean;
}
</script>
