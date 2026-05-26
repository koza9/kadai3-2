<template>
  <v-app-bar
    app
    tite
    elevate-on-scroll
    color="white"
  >
    <v-toolbar-title>
      <nuxt-link
        to="/"
        class="text-body-2 text-decoration-none text--primary font-weight-bold"
      >
        {{ appName }}
      </nuxt-link>
    </v-toolbar-title>

    <v-spacer />

    <ui-search-form />
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AppToolbarAppBarComponent extends Vue {
  appName: string = this.$config.appName
}
</script>