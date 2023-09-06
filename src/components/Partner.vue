<template>
  <section id="partner" class="theme speakers overflow-hidden">

    <div class="container-fluid">

        <div class="theme-content" style="background-color: #fff;justify-content: center; padding-top: 85px;">

            <div class="titleDv">

                <figure class="overImage" style="text-align: center;">

                    <img :src="PatternImage" alt="over image">

                </figure>

                <h2>PARTNERS</h2>

            </div>



        </div>

        

        <div class="theme-card speaker-box">

            <div class="container">

                <div class="row mb-5" style="justify-content: center;">

                    <div class="col-lg-4">

                        <div class="partnerLogoBox mb-4">

                            <figure style="display: flex; align-items: center; justify-content: center; height: 120px; margin: 0px; padding: 20px 20px; border: solid 0px #d7d7d7;">

                                <img :src="imageP1" alt="">

                            </figure>

                        </div>

                    </div>



                    <div class="col-lg-4">

                        <div class="partnerLogoBox mb-4">

                            <figure style="display: flex; align-items: center; justify-content: center; height: 120px; margin: 0px; padding: 20px 20px; border: solid 0px #d7d7d7;">

                                <img :src="imageP2" alt="" style="height: 57px;">

                            </figure>

                        </div>

                    </div>



                    <div class="col-lg-4">

                        <div class="partnerLogoBox mb-4">

                            <figure style="display: flex; align-items: center; justify-content: center; height: 120px; margin: 0px; padding: 20px 20px; border: solid 0px #d7d7d7;">

                                <img :src="imageP3" alt="" style="height: 89px;">

                            </figure>

                        </div>

                    </div>

                    <div class="col-lg-4">

                        <div class="partnerLogoBox mb-4">

                            <figure style="display: flex; align-items: center; justify-content: center; height: 160px; margin: 0px; padding: 20px 20px; border: solid 0px #d7d7d7;">

                                <img :src="imageP4" alt="">

                            </figure>

                        </div>

                    </div>

                    <div class="col-lg-4">

                        <div class="partnerLogoBox mb-4">

                            <figure style="display: flex; align-items: center; justify-content: center; height: 173px; margin: 0px; padding: 20px 20px; border: solid 0px #d7d7d7;">

                                <img :src="imageP5" alt="">

                            </figure>

                        </div>

                    </div>


                </div>



            </div>

        </div>

    </div>

</section>
</template>

<script>

import PatternImage from "@/assets/images/Pattern.png";
import imageP1 from "@/assets/images/p-img1.jpg";
import imageP2 from "@/assets/images/p-img01.png";
import imageP3 from "@/assets/images/p-img02.jpg";
import imageP4 from "@/assets/images/p-img4.jpg";
import imageP5 from "@/assets/images/p-img5.jpg";
import { computed } from 'vue';
import { useCmsStore } from "../stores/useCmsStore";

export default {
  data() {
    return {
      // Initialize the data properties for your images
      PatternImage: PatternImage,
      imageP1: imageP1,
      imageP2: imageP2,
      imageP3: imageP3,
      imageP4: imageP4,
      imageP5: imageP5,
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
