<template>
  <div class="photo-viewer">
    <img v-if="imageData != null"
      class="img-fluid img-fuild--max-height"
      :src="imageData"
      @click="click" />
    <div class="p-4" v-else>
      <img class="img-fluid" src="../assets/intro.jpg" />
      <p class="mt-3">become a <mark>celebrity</mark>.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoViewer',
  props: {
    imageData: String,
    click: {
      type: Function,
      default: () => {
      },
    },
  },
};
</script>

<style scoped>
.photo-viewer {
  text-align: center;
  color: gray;
}
.img-fuild--max-height {
  max-height: 65vh;
}
</style>
