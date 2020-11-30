<template>
  <v-container >
      <v-card class="mx-auto" max-width="344" >
        <v-img :src="musics[index].img" height="200px" ></v-img> 
        <div class="text-center">
          <v-card-title class="justify-center">{{musics[index].name}}</v-card-title>
          <v-card-subtitle>{{musics[index].art}}</v-card-subtitle>
          <v-card-actions class="justify-center">
            <v-container>
              <v-row>
                <v-slider min="0" max="100" color="red darken-4" v-model="currentTimePercent" dense readonly hide-details>
                  <template v-slot:prepend>
                    <span>{{displayTime}}</span>
                  </template>
                  <template v-slot:append>
                    <span>{{duration}}</span>
                  </template>
                </v-slider>
              </v-row>
              <v-row class="justify-center">
                  <audio ref="audio" :src="musics[index].audio" @timeupdate="update" />
                  <v-btn icon color="red darken-4" @click="previous">
                    <v-icon>{{ 'mdi-skip-previous-circle' }}</v-icon>
                  </v-btn>
                  <v-btn icon color="red darken-4" @click="playPause">
                    <v-icon>{{state ?'mdi-pause-circle' :'mdi-play-circle'}}</v-icon>
                  </v-btn>
                  <v-btn icon color="red darken-4"  @click="next">
                    <v-icon>{{ 'mdi-skip-next-circle' }}</v-icon>
                  </v-btn>
              </v-row>
            </v-container>
          </v-card-actions>
        </div>
      </v-card>
      <Playlist :musics='musics' :index='index' @changeindex='changeindex'/>
      <v-bottom-navigation horizontal cancelable=false dark>
        <v-container>
          <v-slider v-model="volume" step="10" ticks color='white'  prepend-icon="mdi-volume-high">
          </v-slider>
        </v-container>
      </v-bottom-navigation>
  </v-container>
</template>

<script>
import Playlist from './Playlist';
export default {
  name: "Play",

  props: {
  },

  components: {
    Playlist,
  },
  
  data: function () {
    return {
      musics:[
        {
          name:'Shot In The Dark',
          art:'AC/DC',
          img:require("@/assets/image/shot.jpg"),
          audio: require('@/assets/mp3/AC_DC - Shot In The Dark.mp3'),
        },
        {
          name:'Hells Bells',
          art:'AC/DC',
          img:require("@/assets/image/hells.jpg"),
          audio:require('@/assets/mp3/AC_DC - Hells Bells.mp3'),
        
        },
        {
          name:'Let There Be Rock',
          art:'AC/DC',
          img:require("@/assets/image/rock.jpg"),
          audio:require('@/assets/mp3/AC_DC - Let There Be Rock.mp3'),

        }, 
      ],
      displayTime:'0:00',
      currentTime:null,
      currentTimePercent:0,
      duration:null,
      index:0,
      state:false,
      volume:50,
    };
  },

  methods: {
    playPause(){
      if(this.state){
        this.$refs.audio.pause()
      }
      else{
        this.$refs.audio.play()
      }
      this.state=!this.state
    },

    previous(){
      if(this.index==0){
        this.index = this.musics.length-1
      }
      else{
        this.index = this.index-1
      }
      this.state=!this.state
    },

    next(){
      if(this.index==this.musics.length-1){
       this.index = 0
      }
      else{
        this.index = this.index+1
      }
      this.state=!this.state
    },

    update(){
      this.currentTime = this.$refs.audio.currentTime
    },
    changeindex(i) {
      this.index=i
    }
  },

  computed: {    
    

  },

  watch: {
    currentTime(val) {
      var seconds = Math.floor(val % 60)
      if (seconds < 10) {
        seconds = "0" + seconds
      }
      var minutes = Math.floor(val / 60)
      this.currentTimePercent = Math.floor((this.currentTime /this.$refs.audio.duration)*100)
      this.displayTime=minutes + ":" + seconds
    },
    volume(val){
      this.$refs.audio.volume=val/100
    }
  },
  mounted(){
    this.$refs["audio"].onloadedmetadata= ()=>{
      this.$refs.audio.volume=0.5
      let val = this.$refs.audio.duration
      var seconds = Math.floor(val % 60)
      if (seconds < 10) {
        seconds = "0" + seconds
      }
      var minutes = Math.floor(val / 60)
      this.duration=minutes + ":" + seconds
    }
  },
};
</script>
