<template>
  <div class="uploader">
    <div class="input-group">
      <div class="custom-file">
        <input type="file"
          class="custom-file-input"
          id="image"
          accept="image/*"
          @change="chooseFile($event.target.files[0])">
        <label class="custom-file-label" for="image">
          Choose photo
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoUploader',
  props: ['chooseFile'],
};
</script>

<style scoped>
.uploader {
  padding: 10px;
}
</style>
