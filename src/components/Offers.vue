<template>
  <div class="py-20 bg-[var(--white)] relative">
    <!-- bg1 -->
    <img src="../assets/bg1.png" class="absolute left-0 top-0" alt="" />
    <!-- bg2 -->
    <img src="../assets/bg2.png" class="absolute right-0 bottom-0" alt="" />

    <div class="containerr z-5 relative">
      <!-- header -->
      <div class="w-[100%] flex justify-center items-center">
        <div
          class="btn1 !py-5 !px-12 !border-[var(--blue)] !border-[3px] flex flex-col gap-2 justify-center items-center relative"
        >
          <p class="text-[32px] text1 font-bold">العروض</p>
          <p class="text-[24px] text2 font-normal">
            تسوق ابرز المنتجات التي تناسبك
          </p>
          <img
            class="absolute bottom-[-15px] right-[-25px]"
            src="../assets/vector 1.png"
            alt=""
          />
          <img
            class="absolute top-[-15px] left-[-25px]"
            src="../assets/vector 4.png"
            alt=""
          />
          <img
            class="absolute bottom-[0px] right-[5px]"
            src="../assets/vector 3.png"
            alt=""
          />
        </div>
      </div>

      <!-- offers -->
      <div
        class="flex offers justify-start items-start gap-4 mt-20 overflow-x-hidden no-scrollbar"
      >
        <div
          class="flex flex-col offer-item cursor-pointer"
          v-for="(offer, index) in offers"
          :key="index"
          @click="handleClick(index)"
        >
          <img
            class="w-[700px] img1 min-w-[700px] h-[340px] object-cover shrink-0"
            :src="offer.image"
            alt=""
          />
          <div
            class="flex flex-col items-center content gap-3 mt-[-270px] h-[450px] justify-end"
          >
            <div class="relative">
              <img class="max-w-[400px] z-4 img2" :src="offer.image2" alt="" />
              <img
                class="absolute bottom-[0px] left-[0px] z-[-1]"
                src="../assets/underoffer.png"
                alt=""
              />
            </div>
            <div class="text-[24px] name font-bold">{{ offer.name }}</div>
            <div class="text-[24px] font-bold text-[var(--red)] price">
              59 ر.س
              <span class="mr-3 text-[#B9B9B9] font-normal line-through">
                70 ر.س
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  data() {
    return {
      currentIndex: 2,
      offers: [
        {
          name: "حقيبة يد سوداء ",
          image: new URL("../assets/offer41.png", import.meta.url).href,
          image2: new URL("../assets/offer42.png", import.meta.url).href,
        },
        {
          name: "ويي بروتين ",
          image: new URL("../assets/offer31.png", import.meta.url).href,
          image2: new URL("../assets/offer32.png", import.meta.url).href,
        },
        {
          name: "حذاء رياضي",
          image: new URL("../assets/offer1.png", import.meta.url).href,
          image2: new URL("../assets/offer12.png", import.meta.url).href,
        },
        {
          name: "زجاجة ستانلي كروس",
          image: new URL("../assets/offer21.png", import.meta.url).href,
          image2: new URL("../assets/offer22.png", import.meta.url).href,
        },
      ],
    };
  },
  methods: {
    handleClick(index) {
      if (index === this.currentIndex) return;
      this.centerCard(index);
    },
    centerCard(index) {
      const container = document.querySelector(".offers");
      const items = container.querySelectorAll(".offer-item");
      if (!items.length) return;

      const direction = index > this.currentIndex ? 1 : -1;
      this.currentIndex = index;

      items.forEach((item, i) => {
        const img2 = item.querySelector(".img2");
        if (i !== index) {
          gsap.set(img2, { x: 0, clearProps: "all" });
          img2.style.display = "none";
        }
      });

      const currentItem = items[index];
      const img2 = currentItem.querySelector(".img2");
      img2.style.display = "block";

      const targetScroll =
        currentItem.offsetLeft -
        (container.clientWidth - currentItem.clientWidth) / 2;

      gsap.set(img2, { x: window.innerWidth * direction });

      gsap.to([container, img2], {
        duration: 0.6,
        ease: "power2.out",
        scrollLeft: targetScroll,
        x: 0,
      });
    },
  },

  mounted() {
    this.centerCard(this.currentIndex);
  },
};
</script>

<style lang="scss" scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.offers {
  transition: 0.5s;
  padding-left: calc((100% - 700px) / 2);
  padding-right: calc((100% - 700px) / 2);

  .offer-item:first-child {
    margin-left: calc((100% - 700px) / 2);
  }
  .offer-item:last-child {
    margin-right: calc((100% - 700px) / 2);
  }
}

.offers img {
  -webkit-user-drag: none;
  user-select: none;
}

@media (max-width: 991px) {
  .text1 {
    font-size: 20px;
  }
  .text2 {
    font-size: 15px;
  }

  .img1 {
    min-width: 500px;
  }
  .img2 {
    width: 250px;
  }

  .content {
    margin-top: -350px;
  }
  .name {
    font-size: 18px;
  }
  .price {
    font-size: 16px;
  }

  .offers {
    padding-left: calc((100% - 500px) / 2);
    padding-right: calc((100% - 500px) / 2);

    .offer-item:first-child {
      margin-left: calc((100% - 500px) / 2);
    }
    .offer-item:last-child {
      margin-right: calc((100% - 500px) / 2);
    }
  }
}

@media (max-width: 767px) {
  .img1 {
    min-width: 280px;
  }

  .offers {
    padding-left: calc((100% - 280px) / 2);
    padding-right: calc((100% - 280px) / 2);

    .offer-item:first-child {
      margin-left: calc((100% - 280px) / 2);
    }
    .offer-item:last-child {
      margin-right: calc((100% - 280px) / 2);
    }
  }
}
</style>
