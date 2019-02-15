<template>
  <div class="mainwrap" >
    <slot name="content" :id="contentID" />
  </div>
    
</template>
<script>
import fitty from "fitty";

export default {
  name: "fitty",
  props: ["options"],
  mounted() {    
      this.$nextTick(() => {
      this.init();
      
    });
  },
  computed: {
    contentID() {
      return "fitty-" + this._uid;
    }
  },
  methods: {
    init() {
      let fittyInstance = fitty("#" + this.contentID)
      fittyInstance.fit()
    },
  }
};
</script>
<style scoped>
.mainwrap {
  position: relative;
}

.content {
  position: relative;
  overflow: hidden;
}

.svgoverlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>


