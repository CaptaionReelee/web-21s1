<template>
  <div class="page-result-details">
    <div class="section" v-if="entry">
      <p class="title is-2">{{ entry.name }}</p>
      <p>Personal Best: {{ entry.pb100}}</p>
      <p>Season Best {{ entry.sb100 }}</p>
    <img
          :src="`/images/entry/${athlete.slug}.jpg`"
          alt="athleteSlug"
        />
    </div>
    <div class="section" v-else>
      <p class="title is-2">Entry not found</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Entry } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class EntryDetails extends Vue {
  get entry (): Entry {
    return this.$store.getters.entriesBySlug[this.$route.params.slug]
  }
}
</script>
