<template>
    <footer id="footer" class="explore ">
        <a href="#hero" class="btn btn-primary text-uppercase back-to-top-btn"><i class="fa-solid fa-chevron-up"></i>
            Back to Top</a>
        <div class="container overflow-hidden">
            <div class="row">
                <div class="col-lg-7" data-aos="fade-right" data-aos-duration="500">
                    <h3>Explore</h3>

                    <div class="row">
                        <div class="col-lg-7" data-aos="fade-right" data-aos-duration="500">
                            <ul class="footer-menu">
                                <li><a href="#about">About</a></li>
                                <li><a href="#theme">Themes</a></li>
                                <li><a href="speakers.html">Speakers & Panelists</a></li>
                                <li><a href="#program">Programme</a></li>
                                <li><a href="#venue">Venue</a></li>
                                <li><a href="faq.html">FAQs</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-5 col-md-6 col-sm-12" data-aos="fade-right" data-aos-duration="500">
                            <div class="rcfa">
                                <figure>
                                    <img :src="Vision2030Icon" alt="Royal Commission for AlUla">
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 justify-content-end" data-aos="fade-left" data-aos-duration="500">
                    <h3>Contact Us</h3>

                    <ul class="footer-email">
                        <li><a href="mailto:info@worldarchaeologysummit.com">info@worldarchaeologysummit.com</a></li>
                        <li><a href="mailto:media@worldarchaeologysummit.com">media@worldarchaeologysummit.com</a></li>
                        <!-- <li><a href="mailto:registration@worldarchaeologysummit.com">registration@worldarchaeologysummit.com</a></li> -->
                    </ul>
                </div>

                <div class="col-lg-2 justify-content-end" data-aos="fade-left" data-aos-duration="500">
                    <h3>Follow Us</h3>

                    <ul class="social">
                        <!-- <li><a href="#"><img src="images/FB.png" alt="facebook"></a></li> -->
                        <li><a href="https://twitter.com/RCU_SA" target="_blank"><img :src="TwitterIcon"
                                    alt="twitter"></a></li>
                        <li><a href="https://www.linkedin.com/company/the-royal-commission-for-alula/"
                                target="_blank"><img :src="LinkedInIcon" alt="linkedin"></a></li>
                        <!-- <li><a href="#"><img src="images/Youtube.png" alt="youtube"></a></li> -->
                    </ul>
                </div>

            </div>
        </div>

        <div class="copyright overflow-hidden">
            <div class="container">
                <div class="row">
                    <div class="col-xl-2 col-lg-3 col-md-4">
                        <div class="logo-footer">
                            <a href="#">
                                <figure>
                                    <img :src="Logo" alt="">
                                </figure>
                            </a>
                        </div>
                    </div>

                    <div class="col-xl-6 col-lg-9 col-md-8">
                        <p class="text-copyright">
                            Copyright &copy; 2023 AlUla World Archaeology Summit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import Vision2030Icon from "@/assets/images/vision2030.png";
    import TwitterIcon from "@/assets/images/Twitter.png";
    import LinkedInIcon from "@/assets/images/LinkedIn.png";
    import Logo from "@/assets/images/Logo-color.png";

    export default {
        data() {
            return {
                Vision2030Icon: Vision2030Icon,
                TwitterIcon: TwitterIcon,
                LinkedInIcon: LinkedInIcon,
                Logo: Logo,
            };
        },
    };
</script>

<style scoped>
    /* Your component-specific CSS goes here */
</style>