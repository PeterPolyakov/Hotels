<template>
  <div class="wrapper">
    <div class="contain">
      <div
        id="carouselExampleControls"
        class="slider carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <slot></slot>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="4000">
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
            <router-link :to="{ name: 'Hotel details', params: { id: 1 } }">
              <img
                src="@/assets/h-kramatorsk.jpg"
                class="d-block w-100"
                alt="h-kramatorsk"
              />
            </router-link>
          </div>
          <div class="carousel-item" data-bs-interval="4000">
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
            <router-link :to="{ name: 'Hotel details', params: { id: 2 } }"
              ><img src="@/assets/h-gut.jpg" class="d-block w-100" alt="h-gut"
            /></router-link>
          </div>
          <div class="carousel-item" data-bs-interval="4000">
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
            <router-link :to="{ name: 'Hotel details', params: { id: 2 } }"
              ><img
                src="@/assets/h-aisty.jpg"
                class="d-block w-100"
                alt="h-aisty"
            /></router-link>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sliderComp",
};
</script>

<style scoped>
img {
  height: 80vh;
}
</style>