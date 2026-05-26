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
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-row class="text-h6" justify="center">
        <table id="table" width=100% align=center border="1">
          <thead class="bg-blue-lighten-4">
           <tr>
             <th width="300"><v-icon>mdi-snapchat</v-icon>運勢<v-icon>mdi-anchor</v-icon></th>
             <th width="400"><v-icon>mdi-owl</v-icon>メッセージ<v-icon>mdi-pig</v-icon></th>
             <th width="600"><v-icon>mdi-gift</v-icon>ラッキーカラー<v-icon>mdi-image-filter-vintage</v-icon></th>
             <th width="600"><v-icon>mdi-sword</v-icon>ラッキーアイテム<v-icon>mdi-gavel</v-icon></th>
             <th width="300"><v-icon>mdi-language-python</v-icon>風水<v-icon>mdi-traffic-light</v-icon></th>
           </tr>
          </thead>
          <tbody class="light-blue-lighten-4" height=30px>
             <tr>
               <th>{{luck.result}}</th>
               <th>{{luck.message}}</th>
               <th>{{luck.color}}</th>
               <th>{{luck.item}}</th>
               <th>{{luck.direction}}</th>
             </tr>
          </tbody>
        </table><br>
        </v-row>
        

    </v-col>
   </v-row>
  </v-container>
</template>