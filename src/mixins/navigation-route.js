export default {
  methods: {
    goToDashboard(path) {
      //Avoiding navigation duplicated (navigation to same path)
      if (this.currentMainPath !== path) this.$router.push(path);
    }
  }
};
