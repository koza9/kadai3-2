<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { ref } from 'vue'
const selected = ref('') // 初期値は空でもOK

    const question = ref("星座の最古の起源は、紀元前3000年前の〇〇文明？");
    const answer = ref("メソポタミア");
    const userAnswer = ref("");
    const result = ref("");
    const wrongCount = ref(0);

    function checkAnswer() {
      if (userAnswer.value === answer.value) {
        result.value = "✅ 正解！";
        wrongCount.value = 0;
      } else {
        result.value = "❌ 不正解…";
        wrongCount.value++;
      }
    }

</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <h2>クイズ</h2>
        <p class="question">問題: {{ question }}</p><br>

        <input v-model="userAnswer" placeholder="答えを入力してください" class="input-box" />
        <button @click="checkAnswer" class="btn">解答する</button>

        <p v-if="result" class="result" >
          {{ result }}
        </p>

    </v-container>
  　</v-main>
  </v-app>
</template>