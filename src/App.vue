<template>
  <div class="w-full h-full">
    <section class="top text-stone-50 flex flex-col items-center justify-center">
      <div class="w-full flex align-middle justify-start px-4 py-2">
        <span class=" text-stone-50 font-semibold text-2xl">Brand</span>
      </div>
      <h3 class="font-extrabold text-3xl lg:text-8xl leading-normal pt-14 mb-10">
        Global Top 10
      </h3>
      <p class="font-light text-md lg:text-lg leading-normal">
        Example Top 10 slider carousel page.
      </p>
    </section>
    <section class="slider pt-52 pb-96">
      <div class="mx-auto  text-stone-50 flex flex-col items-center justify-center">
        <div class="w-full">
          <div class="relative max-w-full mx-auto py-1 md:py-3 lg:px-8 flex flex-row align-middle items-stretch slider-container"
          @mouseover="loop = false" @mouseout="loop = true"
          @touchstart="loop = false" @touchend="loop = true"
          v-if="list!==null">
            <button class="flex flex-col-reverse md:flex-row grow items-stretch justify-between text-center text-stone-50 one-slide
            transition-all ease-out duration-300"
            :class="{'active': item.active === true, 'lg:w-6 lg:hover:w-32': item.active !== true}"
            :style="`z-index: ${list.length-i};box-shadow: 5px 5px 40px black;`"
            @click="activate(i)"
            v-for=" (item, i) in list "
            :key="i">
              <div class="relative md:w-32 lg:w-64 bg-black pb-1 md:pb-3 lg:pb-6"
                :class="{'block':item.active === true, 'hidden':item.active !== true}">
                <div class="justify-center w-full mt-4 font-extrabold leading-none font-sans text-stone-600
                slider-index hidden md:flex">
                  {{ i+1 }}
                </div>
                <div class="absolute bottom-0 z-40 w-full h-full md:h-auto px-3 lg:px-6 md:bottom-3 lg:bottom-6"
                :class="{'block': item.active === true, 'hidden': item.active !== true}">
                  <span class="leading-tight font-600 text-xs md:text-sm lg:text-base xl:text-xl">
                    Watched for <b>{{ item.views }}</b> million hours this week.
                  </span>
                  <p>
                    <a class="text-red-600 text-xs sm:text-sm md:text-base lg:text-xl underline"
                    :href="item.url" target="_blank">
                      Watch now
                    </a>
                  </p>
                </div>
              </div>
              <div class="group relative grow bg-cover bg-no-repeat bg-center movie-thumb overflow-hidden"
                :class="{'active': item.active === true }"
                :style="getBackground(item)">
                <div class="h-full md:pb-3 lg:pb-6"
                :class="{'backdrop-brightness-50 group-hover:backdrop-brightness-75': item.active !== true}"
                style="width:calc(100% + 1px)">
                  <div class="absolute top-1.5 right-1 text-right w-full opacity-90 lg:opacity-60 text-white lg:font-bold
                  text-xs  lg:text-base drop-shadow-md shadow-stone-950 leading-none"
                  :class="{'hidden': item.active === true }">
                    {{ i+1 }}
                  </div>
                  <div class="absolute bottom-0 left-0 w-full pt-4 pb-2 overflow-hidden pointer-events-none
                  opacity-0 group-hover:opacity-100 drop-shadow-md
                  min-w-min"
                  style="background-image: linear-gradient(transparent 0px, rgba(0, 0, 0, 0.5) 100%);">
                    <div class="mx-auto text-xs tracking-wider text-center uppercase font-600 hidden lg:block">
                      {{ item.title }}  
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},
  data() {
    return {
      load: true,
      active: 0,
      list: null,
      time: null,
      loop: true,
    };
  },
  created() {
    axios({
      method: "GET",
      url: "/example.json",
    })
      .then((response) => {
        // console.log('response', response);
        this.list = response.data.videos;
        this.activate(0);
        this.rotate();
      })
      .catch((error) => {
        console.log("error", error);
      })
      .then(() => {
        this.load = false;
      });
  },
  methods: {
    activate(j) {
      for (let i=0; i<this.list.length; i+=1) {
        this.list[i].active = (i === j)? true: false;
      }
      this.active = j;
    },
    nextSlide() {
      if (this.loop === true) {
        this.activate((this.active + 1) % this.list.length);
      }
    },
    async rotate() {
      // eslint-disable-next-line no-constant-condition
      while( true ) {
        await this.sleep(8000);
        this.nextSlide();
      }
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    getBackground(item) {
      if (window.innerWidth > 500) {
        return `background-image: url('${item.thumbs['1920x1080']}');`;
      } else {
        return `background-image: url('${item.portrait_thumbs['720x1080']}');`;
      }
    }
  }
}
</script>