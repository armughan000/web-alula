<template>
    <section id="hero" class="hero home">
        <div class="video-player">
            <div style="position:relative;height:100%;">
                <banner-player :vidSource="videoSrc" />
            </div>
        </div>
        <div id="video-controls">
            <button type="button" id="play-pause" class="play"><i class='fas fa-pause' style=''></i></button>
            <button type="button" id="mute" class="mute-button"><i class='fas fa-volume-mute' style=''></i></button>
        </div>
        <div class="container video-container" id="video-text">
            <div class="hero-content">
                <div class="row home-content">
                    <div class="col-lg-6 col-sm-12" data-aos="fade-right" data-aos-duration="800">
                        <!-- <div class="leftBox">
                            <p class="hero-sub">AlUla</p>
                            <h1>
                                World <span id="add_break"> </span>Archaeology<br>
                                Summit
                            </h1>
                        </div> -->
                    </div>
                    <div class="col-lg-6 col-sm-12" data-aos="fade-left" data-aos-duration="800">
                        <!-- <div class="rightBox">
                            <h5>
                                13 - 15 SEPTEMBER 2023<br>
                                ALULA, SAUDI ARABIA
                            </h5>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import { useCmsStore } from '../stores/useCmsStore';
import { computed, onMounted } from 'vue';
import Banner from './Banner.vue';

export default {
    components: {
        'banner-player': Banner,
    },
    setup() {
        const videoSrc = "https://player.vimeo.com/video/855304827?portrait=0&background=1&amp;byline=0&amp;title=0&amp;badge=0&amp;controls=0&amp;loop=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        const cmsStore = useCmsStore();

        // Use computed properties to access the API data in your template
        const aboutData = computed(() => cmsStore.cmsData);

        // Define the YouTube video ID
        const youtubeVideoId = computed(() => {
            return aboutData.value?.cms_documents[2]?.alula_videobanner[0]?.video_link;
        });

        // let youtubeVideoId ="test"
        onMounted(() => {
            console.log("Content is mounted")
        });

        return {
            aboutData,
            youtubeVideoId,
            videoSrc
        };
    },

};

</script>

<style scoped>
/* Your component-specific CSS goes here */
</style>