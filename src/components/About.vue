<template>
  <section id="about" class="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 order-2 order-lg-1" id="image-about" data-aos="fade-up" data-aos-duration="800">
          <div class="leftBox">
            <div class="content text-justify">
              <figure class="overImage">
                <!-- Use :src to bind the image source to your data property -->
                <img :src="PatternImage" alt="over image" @error="fallbackImage" />
              </figure>

              <h2>ABOUT</h2>

              <p>
                The inaugural AlUla World Archaeology Summit will convene innovators from archaeology and other disciplines to
                foster cross-cultural and interdisciplinary discussions. Together, we will explore the value of understanding
                the past, of using that knowledge to inform the present, and to build a resilient future.<br /><br />

                It is a global platform promoting archaeology and cultural heritage to wider audiences, and inspiring people to
                co-create visionary, heritage-based solutions to contemporary problems across sectors.<br /><br />

                At the same time, invited experts from outside the field of archaeology and its traditional allied disciplines
                will contribute their unique perspectives and help enhance the field. By convening a diverse group of thinkers
                and doers, the Summit will enrich the archaeological community and help protect our shared heritage.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-6 order-1 order-lg-2" id="image-about" data-aos="fade-down" data-aos-duration="800">
          <div class="rightBox">
            <figure>
              <img :src="BackgroundImage" alt="bg below img"/>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PatternImage from "@/assets/images/Pattern.png";
import BackgroundImage from "@/assets/images/images-hq/bg-below-img.jpg";

export default {
  data() {
    return {
      // Initialize the data properties for your images
      PatternImage: PatternImage,
      BackgroundImage: BackgroundImage,
    };
  },
};
</script>

<style scoped>
/* Your component-specific CSS goes here */
</style>
