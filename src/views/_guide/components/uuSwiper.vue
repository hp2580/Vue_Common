<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, A11y,  } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'

const index = ref(0)
const perView = ref(3)
const slides = ['1','2','3','4','5','6']
</script> 
<template>
  <div class="content-body">
    <section class="section">
      <!-- @slide-change="e => {index = e.activeIndex}" -->
      <Swiper
        :slides-per-view="perView"
        :slides-per-group="perView"
        :pagination="{clickable: true}"
        :modules="[Pagination, A11y]"
        @slide-change="e => {index = e.activeIndex; perView = e.params.slidesPerView}"
      >
        <SwiperSlide v-for="(slide, idx) in slides" :aria-hidden="idx != index">
          <VBtn onclick="alert('click')" :tabIndex="idx >= index && idx < index + perView ? 0 : -1">{{ `slide${idx+1}` }}</VBtn>
        </SwiperSlide>
      </Swiper>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.swiper {
  position: relative;
  height: 30rem;
  padding-bottom: 5rem;
  .swiper-wrapper {
  }
  &-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      display: block;
      width: 50%;
    }
  }
  &-pagination {
    position: absolute;
  }
}
</style>
