<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import HelloFortune from './components/HelloFortune.vue'
  import axios from 'axios'

  import { useFortuneStore } from '@/stores/result'
  const luck = useFortuneStore()

  function getFortune() {
      luck.getFortune();      // storeのactionsを呼び出して更新
  }

  function reset() {
      luck.reset();      // storeのactionsを呼び出してリセット
  }

  import { ref } from 'vue'
  const selected = ref('') // 初期値は空でもOK

  // ドロワーの開閉状態
  const drawer = ref(false)

  async function insertFortune() {
        try {
            const param = {
              luck: luck.result,
              message: luck.message,
              color: luck.color,
              item: luck.item,
              direction: luck.direction,
              score: luck.score,
              sumscore: luck.sumscore,
            };

          const res =await axios.post('https://m3h-kozaki-containerapp.icybeach-0d08925f.japaneast.azurecontainerapps.io/api/INSERT', param);
          console.log(res.data);

          } catch (error) {
        console.error('情報の登録に失敗しました', error);
        console.error(res.data);
      }
  }


</script>

<template>
  <v-app>

    <!-- ナビゲーションドロワー -->
    <v-navigation-drawer v-model="drawer" temporary>
    <v-app-bar-nav-icon @click="drawer = !drawer" />占いアプリ
      <v-list>
        <v-list-item title="ホーム" />
        <v-list-item title="設定" />
        <v-list-item title="おすすめサイト" />
        <v-list-item title="ランキング" />
        <v-list-item title="履歴" />
      </v-list>
    </v-navigation-drawer>

    <!-- アプリケーションバー -->
    <v-app-bar color="primary">
      <!-- ハンバーガーメニューアイコン -->
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-toolbar-title>占いアプリ</v-toolbar-title>
      <template v-slot:append>
        <v-btn><v-icon>mdi-magnify</v-icon></v-btn>

        <!-- <v-btn to='/intro'>リンク集</v-btn> -->

        <v-btn><v-icon>mdi-home</v-icon></v-btn>
        <v-btn><v-icon>mdi-star-outline</v-icon></v-btn>
        <v-btn><v-icon>mdi-lock-outline</v-icon></v-btn>
        <v-icon>mdi-settings</v-icon>
        
        </template>

    </v-app-bar>


    <v-main>
      <v-container>
        <v-row dense class="custom-row">
          <v-col>
              <header>
                <div class="wrapper"">
                  <HelloFortune msg="☆あなたの運勢占います☆"/><br>
                </div>
              </header>

            </v-col>
          </v-row>

          <v-row class="text-h6" justify="center">
            <v-col>
                <v-btn
                  class="mb-10 mt-5" size="normal"
                  @click="getFortune" color="secondary">
                  <v-icon color="black" size="30" icon="mdi-crystal-ball" class="mr-1"></v-icon>
                  今の運勢を表示
                </v-btn>
            </v-col>

            <v-col>
                <v-btn
                  class="mb-10 mt-5" size="normal"
                  @click="insertFortune" color="secondary">
                  <v-icon color="black" size="30" icon="mdi-database-plus" class="mr-1"></v-icon>
                  履歴登録
                </v-btn>
            </v-col>
            
            <v-col>
            <!-- リセットボタン -->
              <v-btn color="secondary" @click="reset"><v-icon>mdi-format-paint</v-icon>入力内容＆スコアリセット</v-btn>
            </v-col>
          </v-row>
          <v-col>
            <nav>
                <RouterLink to="/"><v-icon>mdi-view-module</v-icon>表形式で表示</RouterLink>
                <RouterLink to="/card"><v-icon>mdi-script</v-icon>カード形式で表示</RouterLink>
                <RouterLink to="/tab"><v-icon>mdi-animation</v-icon>タブ形式で表示</RouterLink>
                <RouterLink to="/link"><v-icon>mdi-minecraft</v-icon>成果物＆参考リンク</RouterLink>
                <RouterLink to="/rireki"><v-icon>mdi-snowman</v-icon>履歴</RouterLink>
                <RouterLink to="/quiz"><v-icon>mdi-help</v-icon>クイズ</RouterLink>
            </nav>
          </v-col>
          
              <RouterView />

        <!--境界線 -->
       <v-divider thickness="2" color="black" opacity=".2"></v-divider>

        <v-row>
          <v-col>
           <nav>
            <p class="text-subtitle-1 font-weight-bold text-center">
            <v-icon>mdi-pokeball</v-icon>スコア：{{ luck.score }}点</p>
            <p class="text-subtitle-1 font-weight-bold text-center">
              <v-icon>mdi-trophy-outline</v-icon>合計スコア：{{ luck.sumscore }}点</p>
            <p class="text-subtitle-1 font-weight-bold text-center">
              <v-icon>mdi-av-timer</v-icon>日付：{{ luck.today }}
            </p>
           </nav>

          </v-col>
        </v-row>

        <v-row>
          <v-col cols="3.5">
            <h3 class="section-title">お問い合わせ</h3>
            <p><v-icon>mdi-email-outline</v-icon>メールアドレス（必須）</p>
            <!-- <input>要素を追加してください -->
            <input>
            
            <p>お問い合わせ内容（必須）</p>
            <!-- <textarea>要素を追加してください -->
            <textarea></textarea>
            
            <p>※必須項目は必ずご入力ください</p>
            <!-- <input>要素を追加してください -->
            <input class="contact-submit" type="submit" value="送信" />
          
            <v-radio-group v-model="selected" label="アプリの感想を選択下さい。">
              <v-radio label="良かった" value="red"></v-radio>
              <v-radio label="普通" value="blue"></v-radio>
              <v-radio label="良くなかった" value="green"></v-radio>
            </v-radio-group>

          </v-col>
          <v-col cols="4.5">
            <img height=330 width=330 src="https://i.gyazo.com/c21399a4090721a55000dd81c0626885.png">
            <h2>ありがとうございました</h2>
          </v-col>

          <v-col cols="4">
             <img height=330 width=320  src="https://i.gyazo.com/d9500a5e7a9e9c9358d792185fdb8361.jpg">
          </v-col>
        </v-row>


        <!--境界線 -->
        <v-divider thickness="2" color="black" opacity=".2" variant="double"></v-divider>

    　</v-container>
  　</v-main>

    <v-footer color="primary" app>
      <v-app-bar-title>Good Luck!</v-app-bar-title>
      
      <v-btn color="primary" icon="mdi-home"></v-btn>
      <v-btn color="primary" icon="mdi-file"></v-btn>
      <v-btn color="primary" icon="mdi-google"></v-btn>

    </v-footer>

　</v-app>
</template>

<style scoped>
.custom-row {
  margin-top: 4px;   /* 上余白 */
  margin-bottom: 4px; /* 下余白 */
}


header .wrapper  {
  line-height: 1.5;
  opacity:0.8;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  border-bottom:2px solid #dee7ec;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

nav p {
  display: inline-block;
  padding: 0 1rem;
  margin-bottom:1rem;
  border-left: 1px solid var(--color-border);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 0rem;
  }
}

.footer-time{
  float:right;
}

export default {
  data: () => ({
    radio1: '',
    radio2: '',
  }),
}

</style>
