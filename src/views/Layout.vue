<template>
    <div>
        <Header />
        <Hero />
        <About />
        <Theme />
        <Program />
        <Venue />
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Theme from "@/components/Theme.vue";
import Program from "@/components/Program.vue";
import Venue from "@/components/Venue.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Hero,
    About,
    Theme,
    Program,
    Venue,
    Footer,
  },
};

</script>

<style></style>