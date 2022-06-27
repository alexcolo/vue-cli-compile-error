export default {
  methods: {
    getCurrentMainPath(currentRoutePath) {
      //If I have only parent path just get it
      if (currentRoutePath.split("/").length - 1 === 1) {
        return currentRoutePath.slice(1);
        //otherwise I have parent and child path, so I have to get only the parent
      } else {
        const stringEndPos = currentRoutePath.split("/", 2).join("/").length;
        return currentRoutePath.slice(1, stringEndPos);
      }
    }
  }
};
