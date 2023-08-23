<template>
    <nav class="navbar navbar-expand-lg overflow-hidden">
        <div class="container">
            <div class="language">
                <ul>
                    <li><a href="index-ar.html" class="ar">العربية</a></li>
                </ul>
            </div>

            <a class="navbar-brand d-lg-none d-block" href="index.html">
                <figure>
                    <img class="img-fluid" src="images/Logo-color.svg" alt="">
                </figure>
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <!-- <span class="navbar-toggler-icon"></span> -->
                <i class="bi bi-list"></i>
                <!-- <i class="bi bi-x-lg"></i> -->
            </button>

            <div class="collapse navbar-collapse" id="navbarScroll">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation"
                    style="border:1px solid #fff; color:#fff;">
                    <i class="bi bi-x-lg"></i>
                </button>
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll d-flex justify-content-center w-50 "
                    data-aos="fade-right" data-aos-duration="800" style="--bs-scroll-height: 100px;">
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#theme">Themes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="speakers.html">Speakers & Panelists</a>
                    </li>
                </ul>

                <a class="navbar-brand d-lg-block d-none" data-aos="fade-up" data-aos-duration="800" href="index.html">
                    <figure>
                        <img class="img-fluid" src="images/Logo-color.svg" alt="">
                    </figure>
                </a>

                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll d-flex justify-content-center w-50"
                    data-aos="fade-left" data-aos-duration="800" style="--bs-scroll-height: 100px;">
                    <li class="nav-item">
                        <a class="nav-link" href="#program">Programme</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#venue">Venue</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="faq.html">FAQs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#footer">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        // Component logic goes here
    }
</script>

<style scoped>
    /* Your component-specific CSS goes here */
</style>