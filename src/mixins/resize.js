export default {
  methods: {
    resizeViz: async function() {
      await this.$nextTick();
      window.dispatchEvent(new Event("resize"));
    }
  }
};
