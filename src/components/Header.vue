<template>
  <div class="py-4 bg-[white]">
    <div class="flex justify-center items-center gap-3">
      <div class="numbers flex justif-center items-center gap-1">
        <div class="number">
          <div class="vector"></div>
          <div class="vector vector-r"></div>
          <div class="line"></div>
          <div class="bg-top"></div>
          <p>5</p>
        </div>
        <div class="number">
          <div class="vector"></div>
          <div class="vector vector-r"></div>
          <div class="line"></div>
          <div class="bg-top"></div>
          <p>0</p>
        </div>
        <div class="flex flex-col gap-2">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="number">
          <div class="vector"></div>
          <div class="vector vector-r"></div>
          <div class="line"></div>
          <div class="bg-top"></div>
          <p>6</p>
        </div>
        <div class="number">
          <div class="vector"></div>
          <div class="vector vector-r"></div>
          <div class="line"></div>
          <div class="bg-top"></div>
          <p>1</p>
        </div>
        <div class="flex flex-col gap-2">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="number">
          <div class="vector"></div>
          <div class="vector vector-r"></div>
          <div class="line"></div>
          <div class="bg-top"></div>
          <p>2</p>
        </div>
        <div class="number">
          <div class="vector"></div>
          <div class="vector vector-r"></div>
          <div class="line"></div>
          <div class="bg-top"></div>
          <p>3</p>
        </div>
      </div>
      <p class="text-[var(--blue)]">خصم 20% على جميع المنتجات</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.number {
  border: 1px solid var(--blue);
  border-radius: 2px;
  width: 25px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: var(--blue);
  position: relative;
  p {
    transform: scale(1.8);
    z-index: 2;
  }
  .vector {
    z-index: 3;
    border: 0.6px solid #24346a;
    width: 1.4px;
    height: 5px;
    position: absolute;
    left: -0.6px;
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(
      0deg,
      #cccccc -7.25%,
      #b7b7b6 -5.51%,
      #9c9a98 -2.69%,
      #888682 0.1%,
      #7c7975 2.79%,
      #787571 5.29%,
      #94908c 23.46%,
      #b5b0ab 47.26%,
      #b5b0ab 89.77%,
      #b1aca7 94.41%,
      #a5a09c 99.12%,
      #908d88 103.86%,
      #787571 108.03%
    );
  }
  .vector-r {
    right: -0.6px;
  }

  .line {
    z-index: 2;
    position: absolute;
    height: 1px !important;
    width: 100%;
    left: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
    background: var(--blue);
  }
  .bg-top {
    position: absolute;
    width: 100%;
    height: 50%;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0.2;
    background: linear-gradient(
      180deg,
      #ffffff 0%,
      #fbfaf9 60%,
      #efece8 100%,
      #e8e3de 100%
    );
  }
}
.dot {
  width: 3px;
  height: 3px;
  border-radius: 1px;
  background: linear-gradient(0deg, #0d1a46 23.23%, #44599c 78.35%);
}
</style>
