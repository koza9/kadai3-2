<script setup>
import { computed } from 'vue'
import axios from 'axios'
import { ref } from 'vue'

const dataList = ref([]);

async function selectFortune() {
        try {
          const res =await axios.get('https://m3h-kozaki-containerapp.icybeach-0d08925f.japaneast.azurecontainerapps.io/api/SELECT')
          
          console.log(res.data);
          dataList.value = res.data.List;

          } catch (error) {
        console.error('履歴の取得に失敗しました', error);
        console.error(res.data);
      }
      return{
        dataList,selectFortune
      }
    }

    async function deleteFortune() {
        try {
          const res =await axios.post('https://m3h-kozaki-containerapp.icybeach-0d08925f.japaneast.azurecontainerapps.io/api/DELETE')
          
          console.log('履歴の削除に成功しました', res.data);

          } catch (error) {
        console.error('履歴の削除に失敗しました', error);
      }
    }

    async function updateFortune() {
        try {
          const res =await axios.post('https://m3h-kozaki-containerapp.icybeach-0d08925f.japaneast.azurecontainerapps.io/api/UPDATE')
          
          console.log('点数評価に成功しました', res.data);

          } catch (error) {
        console.error('点数評価に失敗しました', error);
      }
    }

        async function eResetFortune() {
        try {
          const res =await axios.post('https://m3h-kozaki-containerapp.icybeach-0d08925f.japaneast.azurecontainerapps.io/api/ERESET')
          
          console.log('評価リセットに成功しました', res.data);

          } catch (error) {
        console.error('評価リセットに失敗しました', error);
      }
    }

</script>

<template>
    <v-container class="con4"> 
        <v-row>
            <v-btn
                class="mb-10 mt-5" size="normal"
                @click="selectFortune" color="secondary">
                <v-icon color="black" size="30" icon="mdi-download" class="mr-1"></v-icon>
                履歴を取得
            </v-btn>

            <v-btn
                class="mb-10 mt-5" size="normal"
                @click="deleteFortune" color="secondary">
                <v-icon>mdi-delete</v-icon>
                履歴を削除
            </v-btn>

            <v-btn
                class="mb-10 mt-5" size="normal"
                @click="updateFortune" color="secondary">
                <v-icon color="black" size="30" icon="mdi-trophy-award" class="mr-1"></v-icon>
                点数評価
            </v-btn>

            <v-btn
                class="mb-10 mt-5" size="normal"
                @click="eResetFortune" color="secondary">
                <v-icon>mdi-undo-variant</v-icon>
                評価リセット
            </v-btn>

        </v-row><br>

        <v-row justify="center">
            <v-col cols="1" class="my-bold">
            運勢
            </v-col>
            <v-col cols="3" class="my-bold">
            メッセージ
            </v-col>
            <v-col cols="2" class="my-bold">
            ラッキーカラー
            </v-col>
            <v-col cols="2" class="my-bold">
            ラッキーアイテム
            </v-col>
            <v-col cols="1" class="my-bold">
            風水
            </v-col>
            <v-col cols="1" class="my-bold">
            点数
            </v-col>
            <v-col cols="1" class="my-bold">
            合計点
            </v-col>
            <v-col cols="1" class="my-bold">
            評価
            </v-col>
         </v-row>

        <v-row v-for="(data, index) in dataList":key="index" class="mb-2" justify="center">
            <v-col cols="1">
                {{ data.luck }} 
            </v-col>
            <v-col cols="3">
                {{ data.message}}
            </v-col>
            <v-col cols="2">
                 {{ data.color }} 
            </v-col>
            <v-col cols="2">
                 {{ data.item }}
            </v-col>
            <v-col cols="1">
                {{ data.direction }} 
            </v-col>
            <v-col cols="1">
                {{ data.score }} 
            </v-col>
            <v-col cols="1">
                {{ data.sumscore }}
            </v-col>
            <v-col cols="1">
                {{ data.evaluation }}
            </v-col>
        </v-row>
          
    </v-container>
</template>

<style scoped>
.my-bold {
  font-weight: bold;
}
</style>