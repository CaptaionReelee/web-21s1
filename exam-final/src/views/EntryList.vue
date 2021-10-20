<template>
  <div class="entry-result-list">
    <div class="entry">
    <p class="title is-2">Enries</p>
    <div v-for="entryRecords in entry" :key="entryRecords.slug">
      <p>{{entrySlug.slug}}
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
  get entry () : Entry [] {
    return this.$store.state.entries.sort((a: Entry, b: Entry) => a.lane - b.lane)
  }
}
</script>
