<template>
  <div class="board">
    <div class="game-board" v-show="!isGameOver">
      <div class="memory-card" :class="[card.flipped ? 'flipped' : '', card.matched ? 'matched' : '']" v-for="(card, index) in cards" :key="index" @click="flipCard(index)">
        <div class="front">
          <img :src="card.frontImage" alt="memory-card">
        </div>
        <div class="back">
          <img src="img/memory_cards/back.png" alt="memory-card">
        </div>
      </div>
    </div>
    <dialog-box :timer="timer" :show-dialog="isGameOver"></dialog-box>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { cardImages } from "@/data/cardImages";
import DialogBox from "@/components/DialogBox.vue";

interface Card {
  isFlipped: boolean;
  isMatched: boolean;
  frontImage: string;
  backImage: string;
}

const MAX_FLIPS = 2;

@Component({
  components: {
    DialogBox,
  },
})
export default class Board extends Vue {
  cards: Card[] = [];
  flippedCards: Card[] = [];
  timer = 0;
  intervalId = 0;
  isGameOver = false;
  maxFlips = MAX_FLIPS;
  size = 0;

  created() {
    this.createGameBoard();
    this.startTimer();
  }

  watch: {
    flippedCards() {
      if (this.flippedCards.length === this.maxFlips) {
        this.checkMatch();
      }
    },
  }

  checkMatch() {
    const [card1, card2] = this.flippedCards;
    if (card1.frontImage === card2.frontImage) {
      this.setCardMatched(card1);
      this.setCardMatched(card2);
      if (this.areAllCardsMatched()) {
        this.stopTimer();
        this.isGameOver = true;
      }
    } else {
      this.flipBackCards();
    }
  }

  flipCard(index: number) {
    if (this.maxFlips === 1) {
      this.flipSingleCard(index);
    } else {
      this.flipCardWithPair(index);
    }
  }

  flipSingleCard(index: number) {
    const card = this.cards[index];
    if (!card.isMatched) {
      card.isFlipped = !card.isFlipped;
      if (card.isFlipped) {
        this.flippedCards = [card];
      } else {
        this.flippedCards = [];
      }
    }
  }

  flipCardWithPair(index: number) {
    const card = this.cards[index];
    if (!card.isMatched && !card.isFlipped && this.flippedCards.length < this.maxFlips) {
      card.isFlipped = !card.isFlipped;
      this.flippedCards.push(card);
    }
  }

  flipBackCards() {
    setTimeout(() => {
      this.flippedCards.forEach((card) => {
        card.isFlipped = false;
      });
      this.flippedCards = [];
    }, 1000);
  }

  areAllCardsMatched() {
    return this.cards.every((card) => card.isMatched);
  }

  setCardMatched(card: Card) {
    card.isMatched = true;
  }

  createGameBoard() {
    this.size = parseInt(this.$route.params.size);
    const cardImagesCopy = cardImages.slice(0, this.size * this.size / 2);
    const cardPairs = cardImagesCopy.concat(cardImagesCopy);
    cardPairs.sort(() => Math.random() - 0.5);
    this.cards = cardPairs.map((card) => ({
      isFlipped: false,
      isMatched: false,
      frontImage: card.image,
      backImage: 'img/memory_cards/back.png',
    }));
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.intervalId);
  }
}
