<template>
  <div class="product">
    <div class="w-[22vw] img-container h-[22vw] relative overflow-hidden">
      <img class="z-5 relative img1" :src="image" alt="" />
      <img
        class="w-[457px] h-[457px] img2 absolute top-0 left-0"
        :src="image2"
        alt=""
      />
      <div
        class="z-5 w-[56px] h-[56px] heart bg-[#989DAE] rounded-[50%] flex justify-center items-center cursor-pointer absolute top-[10px] right-[10px]"
      >
        <svg
          width="24px"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path
            d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z"
          />
        </svg>
      </div>
      <div
        class="cart px-2! gap-3 py-5 text-[20px] w-[50%] flex justify-center z-67 !bg-[var(--blue)] !border-none !text-[white] absolute bottom-[0px] right-[0px]"
      >
        <svg
          width="24px"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path
            d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z"
          />
        </svg>
        اضافة للسلة
      </div>
      <div
        class="eye px-2! py-5 gap-3 w-[50%] text-[20px] flex justify-center z-67 !bg-[var(--red)] !border-none !text-[white] absolute bottom-[0px] left-[0px]"
      >
        <svg
          width="24px"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path
            d="M320 144C254.8 144 201.2 173.6 160.1 211.7C121.6 247.5 95 290 81.4 320C95 350 121.6 392.5 160.1 428.3C201.2 466.4 254.8 496 320 496C385.2 496 438.8 466.4 479.9 428.3C518.4 392.5 545 350 558.6 320C545 290 518.4 247.5 479.9 211.7C438.8 173.6 385.2 144 320 144zM127.4 176.6C174.5 132.8 239.2 96 320 96C400.8 96 465.5 132.8 512.6 176.6C559.4 220.1 590.7 272 605.6 307.7C608.9 315.6 608.9 324.4 605.6 332.3C590.7 368 559.4 420 512.6 463.4C465.5 507.1 400.8 544 320 544C239.2 544 174.5 507.2 127.4 463.4C80.6 419.9 49.3 368 34.4 332.3C31.1 324.4 31.1 315.6 34.4 307.7C49.3 272 80.6 220 127.4 176.6zM320 400C364.2 400 400 364.2 400 320C400 290.4 383.9 264.5 360 250.7C358.6 310.4 310.4 358.6 250.7 360C264.5 383.9 290.4 400 320 400zM240.4 311.6C242.9 311.9 245.4 312 248 312C283.3 312 312 283.3 312 248C312 245.4 311.8 242.9 311.6 240.4C274.2 244.3 244.4 274.1 240.5 311.5zM286 196.6C296.8 193.6 308.2 192.1 319.9 192.1C328.7 192.1 337.4 193 345.7 194.7C346 194.8 346.2 194.8 346.5 194.9C404.4 207.1 447.9 258.6 447.9 320.1C447.9 390.8 390.6 448.1 319.9 448.1C258.3 448.1 206.9 404.6 194.7 346.7C192.9 338.1 191.9 329.2 191.9 320.1C191.9 309.1 193.3 298.3 195.9 288.1C196.1 287.4 196.2 286.8 196.4 286.2C208.3 242.8 242.5 208.6 285.9 196.7z"
          />
        </svg>
        عرض المنتج
      </div>
    </div>

    <div
      class="flex title justify-between mt-3 pb-6 border-b border-[rgb(12, 26, 69,0.150)] border-opacity-20"
    >
      <p class="text-[24px] font-bold text-[var(--blue)]">{{ name }}</p>
      <p class="text-[24px] font-bold text-[var(--red)]">{{ price }}</p>
    </div>
    <div class="flex rating justify-between pt-6">
      <p class="text-[24px] category text-[var(--blue)]">{{ category }}</p>
      <div class="flex stars">
        <svg
          width="16px"
          fill="#FFC62A"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path
            d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z"
          />
        </svg>
        <svg
          width="16px"
          fill="#FFC62A"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path
            d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z"
          />
        </svg>
        <svg
          width="16px"
          fill="#FFC62A"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path
            d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z"
          />
        </svg>
        <svg
          width="16px"
          fill="#FFC62A"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path
            d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z"
          />
        </svg>
        <svg
          width="16px"
          fill="#FFC62A"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path
            d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    image2: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
.img2 {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: transform 0.5s, opacity 0.5s;
}

.img1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s, opacity 0.5s;
}

.product:hover .img2 {
  opacity: 1;
  transform: scale(1.2);
}

.product:hover .img1 {
  opacity: 0;
  transform: scale(1.2);
}

.heart {
  transform: translateY(-100px);
  transition: 0.5s;
}
.product:hover .heart {
  transform: translateY(0);
}

.cart,
.eye {
  transform: translateY(100px);
  transition: 0.5s;
}
.product:hover .cart {
  transform: translateY(0);
}

.product:hover .eye {
  transform: translateY(0);
  transition-delay: 0.4s;
}

@media (max-width: 991px) {
  .cart,
  .eye {
    position: static !important;
    transform: translate(0) !important;
    width: 100% !important;
    margin-top: 5px;
    font-size: 12px;
  }

  .cart svg,
  .eye svg {
    width: 16px;
  }

  .img-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 160px;
    min-height: 160px;
    width: 100%;
    height: auto;
    padding-bottom: 10px;
  }

  .img1,
  .img2 {
    width: 220px;
    height: 220px;
  }

  .heart {
    width: 30px;
    height: 30px;
    right: 10px;
    top: 10px;
    position: absolute;
    transform: translateY(0) !important;
    svg {
      width: 15px;
    }
  }

  .title {
    padding-bottom: 10px;
  }
  .rating {
    padding-top: 10px;
  }
  .title p,
  .category {
    font-size: 14px !important;
  }
  .stars svg {
    width: 10px;
  }
}
</style>
