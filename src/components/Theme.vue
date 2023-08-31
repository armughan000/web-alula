<template>
    <section class="theme overflow-hidden">
        <div class="padder"></div>
        <div class="theme-content">
            <div class="leftDvdr" data-aos="fade-right" data-aos-duration="500" id="theme">
                <img :src="arrowLeftImage" alt="over image" />
            </div>

            <div class="titleDv" data-aos="fade-up" data-aos-duration="500">
                <h2>{{$t("common.themes")}}</h2>
            </div>

            <div class="rightDvdr" data-aos="fade-left" data-aos-duration="500">
                <img :src="arrowRightImage" alt="over image" />
            </div>
        </div>
        <div class="padder"></div>


        <div class="theme-card">
            <div class="row">
                <div class="col-xl-3 col-md-6" data-aos="fade-right" data-aos-offset="300"
                    data-aos-easing="ease-in-sine" data-aos-duration="500">
                    <div class="card ">
                        <img :src="themeImage1" class="card-img" alt="...">
                        <div class="card-img-overlay">
                            <h5 class="card-title">{{ $t("theme.num1") }}</h5>
                            <h6 class="card-text text-uppercase mb-4">{{ $t('theme.identity') }}</h6>

                            <p>{{ $t("theme.exploring_the_intricate") }}</p>

                            <!--<a href="#" class="btn btn-primary text-uppercase">Read more</a>-->
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6" data-aos="fade-right" data-aos-offset="400"
                    data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <div class="card ">
                        <img :src="themeImage2" class="card-img" alt="...">
                        <div class="card-img-overlay">
                            <h5 class="card-title">{{ $t("theme.num2") }}</h5>
                            <h6 class="card-text text-uppercase mb-4">{{ $t("theme.ruinscape") }}</h6>

                            <p>{{ $t("theme.explore_archaeological") }}</p>

                            <!--<a href="#" class="btn btn-primary text-uppercase">Read more</a>-->
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6" data-aos="fade-right" data-aos-offset="500"
                    data-aos-easing="ease-in-sine" data-aos-duration="700">
                    <div class="card ">
                        <img :src="themeImage3" class="card-img" alt="...">
                        <div class="card-img-overlay">
                            <h5 class="card-title">{{ $t("theme.num3") }}</h5>
                            <h6 class="card-text text-uppercase mb-4">{{ $t("theme.resilience") }}</h6>

                            <p>{{ $t("theme.explore_wisdom") }}</p>

                            <!--<a href="#" class="btn btn-primary text-uppercase">Read more</a>-->
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6" data-aos="fade-right" data-aos-offset="600"
                    data-aos-easing="ease-in-sine" data-aos-duration="800">
                    <div class="card ">
                        <img :src="themeImage4" class="card-img" alt="...">
                        <div class="card-img-overlay">
                            <h5 class="card-title">{{ $t("theme.num4") }}</h5>
                            <h6 class="card-text text-uppercase mb-4">{{ $t("theme.accessibility") }}</h6>

                            <p>{{ $t("theme.explore_past") }}</p>

                            <!--<a href="#" class="btn btn-primary text-uppercase">Read more</a>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import arrowLeftImage from "@/assets/images/arrow-bg-left.png";
    import arrowRightImage from "@/assets/images/arrow-bg-right.png";
    import themeImage1 from "@/assets/images/images-hq/themes-01.jpg";
    import themeImage2 from "@/assets/images/images-hq/themes-02.jpg";
    import themeImage3 from "@/assets/images/images-hq/themes-03.jpg";
    import themeImage4 from "@/assets/images/images-hq/themes-04.jpg";

    export default {
        data() {
            return {
                arrowLeftImage: arrowLeftImage,
                arrowRightImage: arrowRightImage,
                themeImage1: themeImage1,
                themeImage2: themeImage2,
                themeImage3: themeImage3,
                themeImage4: themeImage4,
            };
        }
    }
</script>

<style scoped>
    /* Your component-specific CSS goes here */
</style>