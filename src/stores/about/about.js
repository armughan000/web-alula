import { defineStore } from "pinia";

export const useAboutStore = defineStore({
  id: "about",
  state: () => ({
    data: [],
  }),
  getters: {
    getData: (state) => {
      return [...state.data]; // Return a copy of the data
    },
  },
  actions: {
    initializeData() {
      // Try to load data from local storage
      const storedData = localStorage.getItem("aboutData");
      console.log("Loading data from local storage",storedData);
      if (storedData) {
        this.data = JSON.parse(storedData);
      }
    },
    
    setData(data) {
      this.data = data;
      console.log("this.data",this.data);

      // Save data to local storage
      localStorage.setItem("aboutData", JSON.stringify(data));
    },
  },
});
