<template>
  <div class="home grid">
    <vs-row align="center" justify="center">
      <vs-col align="center" w="5">
        <vs-button
          size="xl"
          relief
          block
          color="#7d33ff"
          @click="$router.push('/game/12')"
        >
          3 x 4
        </vs-button>
        <vs-button
          size="xl"
          relief
          block
          color="#7d33ff"
          @click="$router.push('/game/16')"
        >
          4 x 4
        </vs-button>
        <vs-button
          size="xl"
          relief
          block
          color="#7d33ff"
          @click="$router.push('/game/20')"
        >
          5 x 4
        </vs-button>
      </vs-col>
    </vs-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
