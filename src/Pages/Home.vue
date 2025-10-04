<template>
  <div>
    <landing />
    <Products />
    <Offers />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Landing from "../components/Landing.vue";
import Offers from "../components/Offers.vue";
import Products from "../components/Products.vue";

export default {
  name: "Home",
  components: {
    Landing,
    Products,
    Offers,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
