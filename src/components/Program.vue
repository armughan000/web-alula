<template>
    <section id="program" class="programme-cta overflow-hidden">
        <div class="container">
            <div class="row">
                <div class="col-md-6" data-aos="fade-right">
                    <div class="leftBox">
                        <figure class="overImage">
                            <img :src="PatternImage" alt="over image" />
                        </figure>
                        <h2 class="text-uppercase">{{ $t("common.programme") }}</h2>
                    </div>
                </div>

                <div class="col-md-6" data-aos="fade-left">
                    <div class="rightBox">
                        <!-- Add a download link for the PDF -->
                        <a :href="pdfUrl" class="btn btn-primary text-uppercase" target="_blank"
                            download="WAS-Programme-at-a-glance.pdf">
                            {{ $t("programme.dwnProgramme") }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import PatternImage from "@/assets/images/Pattern.png";

    export default {
        data() {
            return {
                // Initialize the data properties for your images
                PatternImage: PatternImage,
                // Define the URL to the PDF file
                pdfUrl: "@/assets/images/pdf/WAS-Programme-at-a-glance.pdf",
            };
        },
    };
</script>

<style scoped>
    /* Your component-specific CSS goes here */
</style>