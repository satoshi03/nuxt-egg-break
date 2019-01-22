<template>
  <v-layout
    fill-height
    justify-center
    align-center
    >
    <v-flex xs12>
      <div class="text-xs-center">
        <span v-if="!broken" class="count">{{ count }}</span>
        <span v-if="broken" class="message">{{ message }}</span>
      </div>
      <div class="text-xs-center">
        <img :src="eggImage" @click="touch()" max-width="400px" />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      eggImage: require('~/assets/egg_0.png'),
      thresholds: [
        {
          count: 10000,
          img: require('~/assets/egg_4.png'),
          broken: true,
        },
        {
          count: 8000,
          img: require('~/assets/egg_4.png'),
          broken: false,
        },
        {
          count: 5000,
          img: require('~/assets/egg_3.png'),
          broken: false,
        },
        {
          count: 1000,
          img: require('~/assets/egg_2.png'),
          broken: false,
        },
        {
          count: 100,
          img: require('~/assets/egg_1.png'),
          broken: false,
        },
      ],
      broken: false,
      message: "割れると思うなよ",
    }
  },
  computed: mapState(['count']),
  methods: {
    ...mapActions(['incrCount']),
    touch () {
      this.incrCount()
      for (let val of this.thresholds) {
        if (this.count >= val['count']) {
          this.eggImage = val['img']
          this.broken = val['broken']
          break
        }
      }
    },
  }
}
</script>

<style>
.count {
  font-size: 60px;
}
.message {
  font-size: 50px;
}

img {
  width: 400px;
}

img:active {
  width: 395px;
}
</style>
