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

<template>
  <v-container class="con4"> 
        <v-row class="mb-1 mt-1">
          <v-col>
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
                    運勢：{{luck.result}}<br>
                    メッセージ：{{luck.message}}<br>
                    ラッキーカラー：{{luck.color}}<br>
                    ラッキーアイテム：{{luck.item}}<br>
                    風水：{{luck.direction}}
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
          </v-col>
        </v-row>
       
     </v-container>
</template>