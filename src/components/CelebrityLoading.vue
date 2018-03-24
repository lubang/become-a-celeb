<template>
  <div class="loading">
    <div class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
        style="width: 75%">
      </div>
    </div>
    <div class="text-center mt-4">
      당신이 셀럽인지 확인 중입니다.
    </div>
  </div>
</template>

<script>
export default {
  name: 'CelebrityLoading',
};
</script>

<style scoped>
.loading {
  position: absolute;
  top: 80vh;
  left: 0px;
  width: 100%;
  padding: 20px;
  z-index: 3;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
