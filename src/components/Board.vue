<template>
  <div class="center grid">
    <vs-row offset="1" v-for="(row, index) in size / 4" :key="index">
      <vs-col w="3" v-for="col in 4" :key="row + col">
        <vs-card @click="pick">
          <template #img>
            <img v-if="!hidden" :src="items[row*4+col]
            ? `https://picsum.photos/id/${items[row*4+col]}/200/300`
            : 'https://vuesax.com/foto5.png'" alt="" />
          </template>
          <template #default>
            <img v-if="hidden" src="https://vuesax.com/foto5.png" alt="" />
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

  private items: any[] = [];
  private hidden: boolean = true;
  private prevIndex: null | number = null;

  mounted() {
    this.items = [...Array(Number(this.size)).keys()]
      .concat(...Array(Number(this.size)).keys())
      .sort(() => 0.5 - Math.random());
  }

  pick(index: number) {
    this.hidden = false;
    if (this.prevIndex === null) {
      this.prevIndex = index;
    } else {
      if (this.items[this.prevIndex] === this.items[index]) {
        console.log('match'); // for testing
        this.prevIndex = null;
        if (this.checkIfDone()) {
          console.log('success'); // for testing
          // show success message here
        }
      } else {
        console.log('not match'); // for testing
        const prevIndex = this.prevIndex;
        this.prevIndex = null;
        setTimeout(() => {
          this.$set(this.items, prevIndex, null);
          this.$set(this.items, index, null);
          this.hidden = true;
        }, 1000);
      }
    }
  }

  checkIfDone() {
    return this.items.every((item) => item === null);
  }
}
</script>
