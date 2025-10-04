<template>
  <div class="text-[white] py-5 bg-[var(--blue)]">
    <div class="containerr flex justify-between items-center">
      <div class="right flex items-center justify-center gap-10 z-16">
        <img class="w-[70px] h-[50px] logo" src="../assets/logo.png" alt="" />
        <p class="font-normal textt text-[18px] cursor-pointer">الرئيسية</p>
        <p class="font-normal textt text-[18px] cursor-pointer">الأقسام</p>
        <p class="font-normal textt text-[18px] cursor-pointer">
          جميع المنتجات
        </p>
        <p class="font-normal textt text-[18px] cursor-pointer">التخفيضات</p>
      </div>
      <div class="left flex justify-center items-center gap-4">
        <div
          class="w-[40px] h-[40px] bg-[white] rounded-[50%] flex justify-center items-center cursor-pointer"
        >
          <svg
            width="20px"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path
              d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
            />
          </svg>
        </div>
        <div
          class="w-[40px] h-[40px] bg-[white] rounded-[50%] flex justify-center items-center cursor-pointer"
        >
          <svg
            width="20px"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path
              d="M240 192C240 147.8 275.8 112 320 112C364.2 112 400 147.8 400 192C400 236.2 364.2 272 320 272C275.8 272 240 236.2 240 192zM448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320C390.7 320 448 262.7 448 192zM144 544C144 473.3 201.3 416 272 416L368 416C438.7 416 496 473.3 496 544L496 552C496 565.3 506.7 576 520 576C533.3 576 544 565.3 544 552L544 544C544 446.8 465.2 368 368 368L272 368C174.8 368 96 446.8 96 544L96 552C96 565.3 106.7 576 120 576C133.3 576 144 565.3 144 552L144 544z"
            />
          </svg>
        </div>
        <div
          class="w-[40px] h-[40px] bg-[white] rounded-[50%] flex justify-center items-center cursor-pointer"
        >
          <svg
            width="20px"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path
              d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z"
            />
          </svg>
        </div>
        <div
          class="w-[40px] h-[40px] bg-[var(--red)] rounded-[50%] flex justify-center items-center cursor-pointer relative"
        >
          <svg
            width="20px"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path
              d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z"
            />
          </svg>
          <div
            class="w-[14px] h-[14px] bg-[white] rounded-[50%] absolute top-[0px] right-[0px] text-[10px] flex justify-center items-center text-[var(--red)] font-medium"
          >
            0
          </div>
        </div>
      </div>
      <div class="flex gap-1 hidden">
        <div class="flex flex-col gap-1">
          <div class="w-[10px] h-[10px] bg-[white] rounded-[2px]"></div>
          <div class="w-[10px] h-[10px] bg-[white] rounded-[2px]"></div>
        </div>
        <div class="flex flex-col gap-1">
          <div class="w-[10px] h-[10px] bg-[white] rounded-[2px]"></div>
          <div class="w-[10px] h-[10px] bg-[white] rounded-[2px]"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media (max-width: 991px) {
  .textt,
  .left {
    display: none;
  }
  .hidden {
    display: flex !important;
  }
  .logo {
    width: 45px;
    height: 35px;
  }
}
</style>
