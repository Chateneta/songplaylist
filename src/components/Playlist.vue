<template>
  <v-list shaped>
    <v-list-item-group v-model='findex' color="red" dark >
      <v-list-item v-for="(music,i) in musics" :key="i" @click="$emit('changeindex',i)" class="text-start">
        <v-list-item-icon>
          <v-icon>mdi-play-circle</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title >{{music.name}}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-action-text >{{music.duration}}</v-list-item-action-text>
        </v-list-item-action>
      </v-list-item>
    </v-list-item-group>
    </v-list>
</template>

<script>
export default {
  name:"Playlist",
  props:{
    musics:Array,
    index:Number,
  },
  methods:{
   
  },
  computed:{
    findex(){
      return this.index
    }
  },
}
</script>

<style>

</style>