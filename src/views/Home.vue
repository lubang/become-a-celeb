<template>
  <div class="container">
    <div class="mt-3"
      v-if="!isVerified">
      <PhotoUploader :chooseFile="chooseFile" />
      <p class="text-center">미리보기 화면을 클릭하면 셀럽 여부를 확인합니다.</p>
    </div>
    <PhotoViewer
      v-if="!isVerified"
      :imageData="previewData"
      :click="verifyCelebrity" />
    <CelebrityResult
      v-else
      :imageData="previewData"
      :initialize="initialize"
    />
    <CelebrityLoading v-show="isProgress" />
  </div>
</template>

<script>
import PhotoUploader from '@/components/PhotoUploader.vue';
import PhotoViewer from '@/components/PhotoViewer.vue';
import CelebrityLoading from '@/components/CelebrityLoading.vue';
import CelebrityResult from '@/components/CelebrityResult.vue';

export default {
  name: 'home',
  components: {
    PhotoUploader,
    PhotoViewer,
    CelebrityLoading,
    CelebrityResult,
  },
  methods: {
    initialize() {
      this.file = null;
      this.previewData = null;
      this.isProgress = false;
      this.isVerified = false;
    },
    chooseFile(file) {
      this.initialize();
      this.file = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewData = e.target.result;
      };
      reader.readAsDataURL(this.file);
    },
    verifyCelebrity() {
      this.isProgress = true;
      setTimeout(() => {
        this.isProgress = false;
        this.isVerified = true;
      }, 2000);
    },
  },
  data() {
    return {
      file: null,
      previewData: null,
      isProgress: false,
      isVerified: false,
    };
  },
};
</script>
