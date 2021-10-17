<template>
  <div class="profile-edit">
    <div>
      <h1>{{ name }}</h1>
      {{ tagline }} <br /><br />
      <img :src="picUrl" width="30%">
    </div>
    <div>
       <div>
      <input type="text" name />
      <input type="text" tagline />
      <input type="text" picUrl />
    </div>
    </div>
  </div>
</template>

<style scoped>
.profile-edit {
 padding: 2rem;
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-gap: 1rem;
}

input {
 display: block;
 width: 50%;
 margin-top: 1rem;
}

</style>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class ProfileEdit extends Vue {
  name = 'Charles '
  tagline = 'Health; Happiness; Excellence; Cheese!'
  picUrl = 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518'
}
</script>
