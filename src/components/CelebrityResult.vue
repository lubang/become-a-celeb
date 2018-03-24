<template>
  <div class="result">
    <PhotoViewer :imageData="imageData" />
    <div class="card-body">
      <h5 class="card-title">축하합니다! 당신은 셀럽입니다.</h5>
      <p class="card-text"><mark>아이린</mark>과 <mark>90%</mark> 닮으셨네요.</p>
      <div class="container-fluid">
        <div class="row">
          <div class="col-6 p-1">
            <a href="http://www.facebook.com/sharer/sharer.php?u=https://celebrity.lulab.net"
              target="_blank"
              class="btn btn-outline-secondary btn-block">
              쉘되 페북 공유하기
            </a>
          </div>
          <div class="col-6 p-1">
            <button type="button"
              class="btn btn-outline-primary btn-block"
              @click="initialize">다시하기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoViewer from '@/components/PhotoViewer.vue';

export default {
  name: 'CelebrityResult',
  components: {
    PhotoViewer,
  },
  props: ['imageData', 'initialize'],
};
</script>

<style scoped>

</style>
