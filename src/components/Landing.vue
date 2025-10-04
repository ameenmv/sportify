<template>
  <div class="h-[100vh] bg-[black] relative overflow-hidden">
    <Header class="relative z-16 header" />
    <Navbar />

    <!-- الخلفيات -->
    <div
      class="absolute w-[35vw] h-[80vh] bg-[var(--red)] right-[-40px] top-[-200px] z-15"
    ></div>
    <div
      class="absolute w-[22vw] h-[65vh] bg-[var(--red)] left-[-40px] bottom-[-200px] z-15"
    ></div>

    <div
      class="flex content pb-40 justify-right items-center gap-2 h-[100%] text-[white] relative px-16 bg-[var(--blue)]"
    >
      <!-- imgbg -->
      <img
        src="../assets/bg.png"
        class="w-[100%] h-[100%] absolute top-0 left-0 opacity-[18%] object-cover"
        alt=""
      />

      <!-- arkam  -->
      <div class="flex flex-col gap-8 z-20">
        <p
          v-for="(img, i) in images"
          :key="i"
          @click="goToSlide(i)"
          :class="[
            'text-[22px] font-normal cursor-pointer transition-all duration-300',
            i === currentIndex ? 'opacity-100' : 'opacity-60',
          ]"
        >
          0{{ i + 1 }}
        </p>
      </div>

      <!--  الصور -->
      <div
        class="slider-container w-[50vw] h-[70vh] mr-10 overflow-hidden relative z-20"
      >
        <div class="w-full h-full relative">
          <div
            v-for="(img, i) in images"
            :key="i"
            class="absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out"
            :style="slideStyle(i)"
          >
            <img
              :src="img.src"
              alt="slider image"
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <!-- النصوص -->
      <div
        class="relative main-text w-[40%] mr-5 z-20 overflow-hidden min-h-[420px] flex flex-col justify-center items-center"
      >
        <div
          v-for="(text, i) in texts"
          :key="i"
          class="absolute text-container w-full transition-all duration-1000 ease-in-out"
          :style="textStyle(i)"
        >
          <!-- النص الكبير -->
          <p
            class="text-[4.7vw] text1 font-bold leading-[1.2] mb-8"
            v-html="text.title"
          ></p>

         
          <div class="text-bottom">
            <p
              class="text-[1.67vw] text2 font-normal leading-[1.4] mb-6"
              v-html="text.desc"
            ></p>
            <div class="btn1">تسوق الآن</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Navbar from "./Navbar.vue";

export default {
  components: { Navbar, Header },
  data() {
    return {
      currentIndex: 0,
      prevIndex: null,
      images: [
        { src: new URL("../assets/img1.jpg", import.meta.url).href },
        { src: new URL("../assets/img2.jpg", import.meta.url).href },
        { src: new URL("../assets/img3.jpg", import.meta.url).href },
      ],
      texts: [
        {
          title: "الراحــــة والأناقــــــة<br/>في كل حركــــــة",
          desc: "كل ما تحتاجه لتحقيق أهدافك<br/>الرياضية في مكان واحد",
        },
        {
          title: "استثمر في <br/>نفسك",
          desc: "أدوات رياضية تناسب كل<br/>المستويات",
        },
        {
          title: "التدريب يبـــــدأ<br/> هنا",
          desc: "ملابس رياضية تدفعك<br/>لتحقيق أهدافك",
        },
      ],
    };
  },
  methods: {
    goToSlide(i) {
      if (i === this.currentIndex) return;
      this.prevIndex = this.currentIndex;
      this.currentIndex = i;
    },
    slideStyle(i) {
      if (i === this.currentIndex) {
        return { transform: "translateX(0%)", zIndex: 2, opacity: 1 };
      }
      if (i === this.prevIndex) {
        return { transform: "translateX(-100%)", zIndex: 1, opacity: 1 };
      }
      return { transform: "translateX(-100%)", opacity: 1 };
    },
    textStyle(i) {
      if (i === this.currentIndex) {
        return { transform: "translateY(0%)", opacity: 1, zIndex: 2 };
      }
      if (i === this.prevIndex) {
        return {
          transform: "translateY(100%)",
          opacity: 0,
          zIndex: 1,
          transition: "transform 1s ease-in-out, opacity 0s 0.9s",
        };
      }
      return { transform: "translateY(100%)", opacity: 0, zIndex: 0 };
    },
  },
};
</script>

<style lang="scss" scoped>
.slider-container {
  position: relative;
}

@media (max-width: 991px) {
  .header {
    display: none;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 11fr; 
    grid-template-rows: auto auto; 
    gap: 1rem;
  }

  .slider-container {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    height: 66vh;
    width: 60vw;
  }

  .main-text {
    grid-column: 1 / 3; 
    grid-row: 2 / 3;
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    transform: translateY(-50px);
    .text1 {
      font-size: 26px;
    }
    .text2 {
      font-size: 16px;
    }
  }

  .text-bottom {
    margin-top: 1rem;
  }
}
</style>
