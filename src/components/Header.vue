<template>
  <nav class="navbar navbar-expand-lg overflow-hidden">
    <div class="container">
      <div class="language">
        <ul>
          <li class="nav-item">
            <select @change="switchLanguage">
              <option
                v-for="sLocale in supportedLocales"
                :key="`locale-${sLocale}`"
                :value="sLocale"
                :selected="locale === sLocale"
              >
                {{ t(`locale.${sLocale}`) }}
              </option>
            </select>
          </li>
        </ul>
      </div>

      <a class="navbar-brand d-lg-none d-block" href="index.html">
        <figure>
          <img :src="Logo" alt="" class="img-fluid" />
        </figure>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <!-- <span class="navbar-toggler-icon"></span> -->
        <i class="bi bi-list"></i>
        <!-- <i class="bi bi-x-lg"></i> -->
      </button>

      <div class="collapse navbar-collapse" id="navbarScroll">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style="border: 1px solid #fff; color: #fff"
        >
          <i class="bi bi-x-lg"></i>
        </button>
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll d-flex justify-content-center w-50"
          data-aos="fade-right"
          data-aos-duration="800"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <a class="nav-link" href="#about">{{ $t("common.about") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#theme">{{ $t("common.themes") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="speakers.html">{{
              $t("common.speaker")
            }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#program">{{ $t("common.programme") }}</a>
          </li>
        </ul>

        <a
          class="navbar-brand d-lg-block d-none"
          data-aos="fade-up"
          data-aos-duration="800"
          href="index.html"
        >
          <figure>
            <img :src="Logo" alt="" class="img-fluid" />
          </figure>
        </a>

        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll d-flex justify-content-center w-50"
          data-aos="fade-left"
          data-aos-duration="800"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <a class="nav-link" href="#partner">{{ $t("common.partners") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#venue">{{ $t("common.venue") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="faq.html">{{ $t("common.faq") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#footer">{{ $t("common.contact") }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "@/assets/images/Logo-color.png";

import { useI18n } from "vue-i18n";
import Tr from "../i18n/translation.js";

export default {
  data() {
    return {
      Logo: Logo,
    };
  },
  setup() {
    const { t, locale } = useI18n();
    const supportedLocales = Tr.supportedLocales;

    const switchLanguage = async (event) => {
      const newLocale = event.target.value;
      await Tr.switchLanguage(newLocale);

      // Determine the direction based on the selected locale
      const isRtl = ["ar"].includes(newLocale);
      document.querySelector("html").setAttribute("dir", isRtl ? "rtl" : "ltr");
    };

    return { t, locale, supportedLocales, switchLanguage };
  },
};
</script>

<style scoped>
/* Your component-specific CSS goes here */
</style>
