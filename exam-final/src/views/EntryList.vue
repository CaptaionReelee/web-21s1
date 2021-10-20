<template>
  <div class="entry-result-list">
    <div class="section">
    <p class="title is-2">Enries</p>
    <div v-for="entry in entrys" :key="entry.slug">
      <p>[{{entrySlug.slug}}]
        Personal Best(PB){{ entryRecords.pb100 }}
        Season Best(SB){{ entryRecords.sb100 }}
        <router-link :to="{name: 'EntryDetails', params: { EntrySlug: entry.slug }}">{{entry.name}}
        </router-link>
        <img :src="`/images/teams/${entry.teamSlug}.png`" width="2%" :alt="result.name" />
      </p>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Entry } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class EntryList extends Vue {
  get entrys () : Entry [] {
    return this.$store.state.entries.sort((a: Entry, b: Entry) => a.lane - b.lane)
  }
}
</script>
