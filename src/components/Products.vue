<template>
  <div class="bg-[white] py-20">
    <div class="containerr">
      <div class="flex justify-center items-center">
        <div
          class="btn1 !py-5 !px-12 !border-[var(--blue)] !border-[3px] flex flex-col gap-2 justify-center items-center relative"
        >
          <p class="text-[32px] text1 font-bold">ابرز المنتجات</p>
          <p class="text-[24px] text2 font-normal">
            تسوق ابرز المنتجات التي تناسبك
          </p>
          <img
            class="absolute bottom-[-15px] right-[-25px]"
            src="../assets/vector1.png"
            alt=""
          />
          <img
            class="absolute top-[-15px] left-[-25px]"
            src="../assets/vector4.png"
            alt=""
          />
          <img
            class="absolute bottom-[0px] right-[5px]"
            src="../assets/vector3.png"
            alt=""
          />
        </div>
      </div>
      <div class="flex justify-center items-center gap-5 mt-14">
        <div class="grid gap-5 mt-14 grid-cols-3 max-[991px]:grid-cols-2">
          <product
            v-for="(p, i) in products"
            :key="i"
            :name="p.name"
            :price="p.price"
            :category="p.category"
            :image="p.image"
            :image2="p.image2"
            :class="i === 3 ? 'hidden max-[991px]:block' : ''"
          />
        </div>
      </div>
      <div
        class="mt-20 content flex gap-[1vw] flex justify-center items-center"
      >
        <div class="flex flex-col gap-[1vw]">
          <div
            class="w-[25vw] ready text-[white] h-[20vw] bg-[var(--blue)] flex flex-col gap-[1vw] justify-center items-center text-center"
          >
            <p class="text-[2.5vw] font-bold">استعــــــــد للتميـــــز</p>
            <p class="text-[1.2vw] font-light leading-[1.3]">
              ارتقِ بأدائك مع ملابس مصممة<br />
              خصيصًا للرياضيين
            </p>
            <div class="btn1 !text-[1vw] !font-light">تسوق الآن</div>
          </div>
          <div class="w-[25vw] h-[20vw] image relative" ref="images">
            <img
              class="object-cover w-[100%] h-[100%] imagee"
              src="../assets/women.png"
              alt=""
            />
            <div
              class="absolute popup min-w-[330px] bg-[white] bottom-[20px] left-1/2 transform -translate-x-1/2 flex gap-2 p-1"
            >
              <img class="" src="../assets/bants3.png" alt="" />
              <div class="flex flex-col justify-center">
                <p class="text-[14px] text-[#0C1944B0]">ملابس نسائية</p>
                <div class="mt-3 font-bold text-[18px] text-[var(--blue)]">
                  ليجن ازرق
                </div>
                <p class="flex justify-center mt-3 gap-3">
                  <span class="text-[18px] font-bold text-[var(--red)]"
                    >500 ر.س</span
                  >
                  <span class="opacity-[.5]">بدلا من</span>
                  <span class="opacity-[.5] line-through"> 200 ر.س</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="h-[41vw] man w-[28.6vw] flex justify-center items-center image relative"
          ref="images"
        >
          <div class="relative overflow-hidden w-[400px] h-[100%]">
            <img
              src="../assets/boy.png"
              alt=""
              class="w-full h-full object-cover imagee"
            />
          </div>
          <div
            class="absolute popup min-w-[330px] bg-[white] bottom-[20px] left-1/2 transform -translate-x-1/2 flex gap-2 p-1"
          >
            <img class="" src="../assets/shoes3.png" alt="" />
            <div class="flex flex-col justify-center">
              <p class="text-[14px] text-[#0C1944B0]">احذية</p>
              <div class="mt-3 font-bold text-[18px] text-[var(--blue)]">
                حذاء رياضي
              </div>
              <p class="flex justify-center mt-3 gap-3">
                <span class="text-[18px] font-bold text-[var(--red)]"
                  >500 ر.س</span
                >
                <span class="opacity-[.5]">بدلا من</span>
                <span class="opacity-[.5] line-through"> 200 ر.س</span>
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-[1vw]">
          <div class="w-[25vw] h-[20vw] image relative" ref="images">
            <img
              class="object-cover w-[100%] h-[100%] imagee"
              src="../assets/dumbel.png"
              alt=""
            />
            <div
              class="absolute popup min-w-[330px] bg-[white] bottom-[20px] left-1/2 transform -translate-x-1/2 flex gap-2 p-1"
            >
              <img class="" src="../assets/dumbel2.png" alt="" />
              <div class="flex flex-col justify-center">
                <p class="text-[14px] text-[#0C1944B0]">ادوات رياضية</p>
                <div class="mt-3 font-bold text-[18px] text-[var(--blue)]">
                  وزن 6 كجم
                </div>
                <p class="flex justify-center mt-3 gap-3">
                  <span class="text-[18px] font-bold text-[var(--red)]"
                    >500 ر.س</span
                  >
                  <span class="opacity-[.5]">بدلا من</span>
                  <span class="opacity-[.5] line-through"> 200 ر.س</span>
                </p>
              </div>
            </div>
          </div>
          <div
            class="w-[25vw] ready text-[white] h-[20vw] bg-[var(--red)] flex flex-col gap-[1vw] justify-center items-center text-center"
          >
            <p class="text-[2.5vw] font-bold">استعــد للتحـــــــــدي</p>
            <p class="text-[1.2vw] font-light leading-[1.3]">
              ارتقِ بأدائك مع ملابس مصممة<br />
              خصيصًا للرياضيين
            </p>
            <div class="btn1 !text-[1vw] !font-light">تسوق الآن</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import Product from "./product.vue";

const images = ref([]);
const products = ref([
  {
    name: "حذاء رياضي",
    price: "500 ر.س",
    category: "احذية",
    image: new URL("../assets/shoes1.jpg", import.meta.url).href,
    image2: new URL("../assets/shoes2.jpg", import.meta.url).href,
  },
  {
    name: "بنطلون رجالي",
    price: "500 ر.س",
    category: "ملابس",
    image: new URL("../assets/bants1.jpg", import.meta.url).href,
    image2: new URL("../assets/bants2.jpg", import.meta.url).href,
  },
  {
    name: "حذاء رياضي",
    price: "500 ر.س",
    category: "احذية",
    image: new URL("../assets/shoes1.jpg", import.meta.url).href,
    image2: new URL("../assets/shoes2.jpg", import.meta.url).href,
  },
  {
    name: "حقيبة ظهر",
    price: "500 ر.س",
    category: "حقائب",
    image: new URL("../assets/bag1.jpg", import.meta.url).href,
    image2: new URL("../assets/bag2.jpg", import.meta.url).href,
  },
]);

onMounted(() => {
  images.value = document.querySelectorAll(".image .imagee");

  images.value.forEach((img) => {
    img.style.transformOrigin = "bottom center";

    img.parentElement.addEventListener("mouseenter", () => {
      gsap.to(img, {
        scale: 1.2,
        duration: 0.6,
        ease: "back.out",
      });
    });

    img.parentElement.addEventListener("mouseleave", () => {
      gsap.to(img, {
        scale: 1,
        duration: 0.6,
        ease: "back.out",
      });
    });
  });
});
</script>

<style scoped>
.image {
  overflow: hidden;
}
.image .imagee {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
}

.popup {
  transform: translateY(300px);
  transition: all 0.5s;
}
.image:hover .popup {
  transform: translateX(0);
}

@media (max-width: 991px) {
  .content {
    flex-direction: column;
  }
  .text1 {
    font-size: 20px;
  }
  .text2 {
    font-size: 15px;
  }
  .ready {
    width: 330px;
    height: 180px;
  }
  .ready p:first-of-type {
    font-size: 28px;
  }
  .ready p:last-of-type {
    font-size: 14px;
  }

  .btn1 {
    font-size: 13px;
  }
  .image {
    width: 327px;
    height: 279px;
  }
  .man {
    width: 327px;
    height: 600px;
  }

  .popup {
    transform: translateY(0);
    min-width: 241.41px;
  }
  .popup img {
    width: 80px;
    height: 80px;
  }
  .popup p {
    font-size: 10px;
  }
  .popup .font-bold {
    font-size: 13px;
  }
}
</style>
