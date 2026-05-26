<script setup>
import { computed } from 'vue'
import { useFortuneStore } from '@/stores/result'

const luck = useFortuneStore()

function getFortune() {
    luck.getFortune();      // storeのactionsを呼び出して更新
}

function reset() {
    luck.reset();      // storeのactionsを呼び出してリセット
}
</script>

<script>
export default {
  data: () => ({
    tab: null,
  }),
}
</script>

<template>
  <v-container class="pa-2">
    <v-tabs v-model="tab" color="blue-darken-4" bg-color="lime-lighten-4">
      <v-tab value="1">リスト形式</v-tab>
      <v-tab value="2">表形式</v-tab>
      <v-tab value="3">カード形式</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="1">
        <v-sheet color="red" height="300" tile>
          <h1 class="text-white">リスト形式</h1>

          <v-row class="mb-3 mt-3" align="center" justify="left">運勢：{{ luck.result }}</v-row>
          <v-row class="mb-3 mt-3" align="center" justify="left">メッセージ：{{ luck.message }}</v-row>
          <v-row class="mb-3 mt-3" align="center" justify="left">ラッキーカラー：{{ luck.color }}</v-row>
          <v-row class="mb-3 mt-3" align="center" justify="left">ラッキーアイテム：{{ luck.item }}</v-row>
          <v-row class="mb-3 mt-3" align="center" justify="left">風水：{{ luck.direction }}</v-row>
        </v-sheet>
      </v-window-item>

      <v-window-item value="2">
        <v-sheet color="blue" height="300" tile>
          <h1 class="text-white">表形式</h1>
          <table id="table" align=center border="1">
            <thead>
            <tr>
              <th>運勢</th>
              <th>メッセージ</th>
              <th>ラッキーカラー</th>
              <th>ラッキーアイテム</th>
              <th>風水</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <th>{{ luck.result }} </th>
                <th>{{ luck.message }}</th>
                <th>{{ luck.color }}</th>
                <th>{{ luck.item }}</th>
                <th>{{ luck.direction }}</th>
              </tr>
            </tbody>
          </table>
        </v-sheet>
      </v-window-item>

      <v-window-item value="3">
        <v-sheet color="green" height="300" tile>
          <h1 class="text-white">カード形式</h1>
          <v-card variant="elevated" elevation="5" color="indigo-darken-4" rounded="xl">
          <div class="d-flex justify-center">
            <v-card color="indigo-darken-4"
              class="w-5" variant="flat">
              <template v-slot:prepend>
                <v-icon icon="mdi-book-open-variant" color="blue-lighten-3"></v-icon>
              </template>
              <template v-slot:title>今日の運勢</template>
              <template v-slot:subtitle>結果はボタンを押してからのお楽しみ </template>
              <v-card-text>
                運勢：{{ luck.result }}<br>
                メッセージ：{{ luck.message }}<br>
                ラッキーカラー：{{ luck.color }}<br>
                ラッキーアイテム：{{ luck.item }}<br>
                風水：{{ luck.direction }}
              </v-card-text>
              <v-card-actions>
                <v-btn>
                  <v-icon icon="mdi-flag-outline" color="white" class="me-2"></v-icon>good
                </v-btn>
                <v-btn>
                  <v-icon icon="mdi-flag-variant" color="red-darken-4" class="me-2"></v-icon> bad
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-img src="https://i.gyazo.com/d9500a5e7a9e9c9358d792185fdb8361.jpg" class="me-4"></v-img>
          </div>
        </v-card>
        </v-sheet>
      </v-window-item>
    </v-window>

  </v-container>
</template>