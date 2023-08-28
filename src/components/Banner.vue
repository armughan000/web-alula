<template>
    <div>
        <iframe id="alulavid" :src="vidSource" frameborder="0" allow="autoplay;"
            style="position:absolute;top:0;left:0;width:100%;height:100%;" title="alula-video">
        </iframe>
    </div>
</template>
  
<script>
export default {
    props: {
        vidSource: String,
    },
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
  