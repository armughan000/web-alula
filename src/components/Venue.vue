<template>
    <section id="venue" class="venue overflow-hidden">
        <div class="container">
            <div class="row">
                <div class="col-xl-12" data-aos="fade-right" data-aos-duration="500">
                    <figure class="overImage">
                        <img :src="PatternImage" alt="">
                    </figure>
                    <h2 class="text-uppercase mb-5">Venue</h2>
                </div>

                <div class="col-xl-4" data-aos="fade-right" data-aos-duration="500">
                    <h5 class="text-uppercase mb-5">AlUla Maraya</h5>

                    <div class="icoBox">
                        <div class="ico">
                            <figure>
                                <img :src="LocationIcon" alt="">
                            </figure>
                        </div>
                        <div class="listBox">
                            <h6 class="font-white">Maraya, Ashar Valley, AlUla, Saudi Arabia</h6>
                            <a href="https://goo.gl/maps/cbEypYNMFo4FVW2B7" target="blank"
                                class="btn btn-secondary text-uppercase">Get Directions</a>
                        </div>
                    </div>

                    <div class="icoBox">
                        <div class="ico">
                            <figure>
                                <img :src="DateIcon" alt="">
                            </figure>
                        </div>
                        <div class="listBox">
                            <h6 class="font-white">13-15 September 2023</h6>
                            <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230913%2F20230916&details=&location=Alua%20Maraya&text=World%20Archaeology%20Summit"
                                target="_blank" class="btn btn-secondary text-uppercase">Add to Calendar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import PatternImage from "@/assets/images/Pattern.png";
    import LocationIcon from "@/assets/images/Location-Icon-w.png";
    import DateIcon from "@/assets/images/Date-Icon-w.png";

    export default {
        // Use imported images
        data() {
            return {
                PatternImage: PatternImage,
                LocationIcon: LocationIcon,
                DateIcon: DateIcon,
            };
        },
    };
</script>

<style scoped>
    /* Your component-specific CSS goes here */
</style>
