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

              <h2 v-html="aboutData?.cms_documents[0]?.alula_aboutcontent[0]?.title"></h2>

              <p v-html="aboutData?.cms_documents[0]?.alula_aboutcontent[0]?.content"></p>
            </div>
          </div>
        </div>

        <div class="col-lg-6 order-1 order-lg-2" id="image-about" data-aos="fade-down" data-aos-duration="800">
          <div class="rightBox">
            <figure>
              <img :src="BackgroundImage" alt="bg below img" />
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
import { computed } from 'vue';
import { useCmsStore } from "../stores/useCmsStore";

export default {
  data() {
    return {
      // Initialize the data properties for your images
      PatternImage: PatternImage,
      BackgroundImage: BackgroundImage,
    };
  },
  setup() {
    const cmsStore = useCmsStore();
    //Fetch your API data here and update the Pinia store
    fetch('https://techibits.com/clients/alula/content/currentsite/en-us/all/home/')
      .then((response) => response.json())
      .then((data) => {
        const cmsStore = useCmsStore();
        cmsStore.setApiData(data);
      })
      .catch((error) => {
        console.error('Error fetching API data:', error);
      });

    // Use computed properties to access the API data in your template
    const aboutData = computed(() => cmsStore.cmsData);
    
    return {
      aboutData,
    };
  },

};
</script>

<style scoped>
/* Your component-specific CSS goes here */
</style>
