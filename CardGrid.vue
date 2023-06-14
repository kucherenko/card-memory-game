<!-- Add logic to make card grid functional -->
<template>
  ...
</template>

<script>
export default {
  data() {
    return {
      cards: [],
      flippedCards: [],
      matchedCards: [],
    };
  },
  methods: {
    flipCard(card) {
      ...
    },
    checkForMatch() {
      ...
    },
    loadCards() {
      ...
    },
    shuffleArray(array) {
      ...
    },
  },
  mounted() {
    this.loadCards();
  },
};
