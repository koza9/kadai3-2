import { defineStore } from 'pinia'
import { computed } from 'vue'
import axios from 'axios'

export const useFortuneStore = defineStore('result', {
  state: () => ({
      result: '',
      score:0,
      message: '',
      color: '',
      item: '',
      direction: '',
      today: '',
      sumscore: 0
  }),

   getters: {
        totalScore: (state) => state.sumscore + state.score
  },

  actions: {
    async getFortune() {

        try {
          const res =await axios.get('https://narrow-moth-43.deno.dev/omikuji?name=onamae')
          
          this.result=res.data.result
          this.score=res.data.score
          this.message=res.data.message
          this.color=res.data.lucky.color
          this.item=res.data.lucky.item
          this.direction=res.data.lucky.direction
          this.today=res.data.jst_today

          this.sumscore= this.totalScore
          console.log(res)
          console.log(this.sumscore)

          } catch (error) {
        console.error('情報の取得に失敗しました', error)

      }

    }
    ,
    
    reset() {
      this.$reset()
    }

  }
 }
)