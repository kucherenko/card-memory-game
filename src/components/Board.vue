<template>
  <div class="center grid">
    <vs-row offset="1" v-for="row,index in size/4" :key="index">
      <vs-col w="3" v-for="col in 4" :key="row+col">
        <vs-card @click="pick">
          <template #img>
            <img src="https://vuesax.com/foto5.png" alt="">
          </template>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  @Prop() private size!: number;

  array: any[];

  mounted() {
    this.array = [
      ...Array(Number(this.size)).keys()
    ].concat(
      ...Array(Number(this.size)).keys()
    ).sort(() => 0.5 - Math.random());
  }

  pick() {
    console.log(this.array);
  }
}
</script>
