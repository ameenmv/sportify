<template>
  <div class="h-[100vh] bg-[black] relative overflow-hidden">
    <Header class="relative z-10" />
    <Navbar />

    <div
      class="absolute w-[35vw] h-[80vh] bg-[var(--red)] right-[-40px] top-[-200px] z-0"
    ></div>
    <div
      class="absolute w-[22vw] h-[65vh] bg-[var(--red)] left-[-40px] bottom-[-200px] z-0"
    ></div>
    <div
      class="flex pb-50 flex justify-right items-center gap-2 h-[100%] text-[white] relative px-16 z-77"
    >
      <div class="flex flex-col gap-8">
        <p class="text-[22px] font-normal cursor-pointer">01</p>
        <p class="text-[22px] font-normal cursor-pointer">02</p>
        <p class="text-[22px] font-normal cursor-pointer">03</p>
      </div>
      <img
        class="w-[50vw] h-[61vh] mr-10 object-cover"
        src="../assets/img1.jpg"
        alt=""
      />
      <div class="flex flex-col gap-12">
        <p class="text-[4.7vw] w-[1000px] font-bold translate-x-[150px]">
          <span class="mb-5"> الراحــــة والأناقــــــة</span>
          <br class="h-[20px]" />في كل حركــــــة
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Navbar from "./Navbar.vue";

export default {
  components: {
    Navbar,
    Header,
  },
};
</script>

<style lang="scss" scoped></style>
