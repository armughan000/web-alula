<template>
    <section id="hero" class="hero home">
        <div class="video-player">
            <div style="position:relative;height:100%;">
                <iframe id="alulavid"
                    src="https://player.vimeo.com/video/855304827?portrait=0&amp;byline=0&amp;title=0&amp;badge=0&amp;controls=0&amp;loop=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameborder="0" allow="autoplay;" style="position:absolute;top:0;left:0;width:100%;height:100%;"
                    title="alula-video"></iframe>
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
                        <div class="leftBox">
                            <p class="hero-sub">AlUla</p>
                            <h1>
                                World <span id="add_break"> </span>Archaeology<br>
                                Summit
                            </h1>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12" data-aos="fade-left" data-aos-duration="800">
                        <div class="rightBox">
                            <h5>
                                13 - 15 SEPTEMBER 2023<br>
                                ALULA, SAUDI ARABIA
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        mounted() {
            // Load the Vimeo player script dynamically
            const script = document.createElement("script");
            script.src = "https://player.vimeo.com/api/player.js";
            document.head.appendChild(script);

            // Initialize the Vimeo player once the script has loaded
            script.onload = () => {
                var iframe = document.getElementById('alulavid');
                var player = new Vimeo.Player(iframe);
                player.setVolume(0);
                player.play();
                var playing = true;
            };
        },
    };
</script>

<style scoped>
    /* Your component-specific CSS goes here */
</style>