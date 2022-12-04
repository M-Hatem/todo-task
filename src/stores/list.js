import { defineStore } from "pinia";

export default defineStore("list", {
  state: () => ({
    // Current List
    list: [],
  }),
});
