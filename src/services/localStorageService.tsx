import Color from "../interfaces/Color";

const localStorageService = {
  setColor: (newColor: Color) => {
    try {
      const existingColors = localStorageService.getColors();
      const updatedColors = [...existingColors, newColor];

      localStorage.setItem("SavedColors", JSON.stringify(updatedColors));
    } catch (error) {
      console.error("Error setting item in local storage:", error);
    }
  },

  getColors: () => {
    try {
      const items = localStorage.getItem("SavedColors");

      return items ? JSON.parse(items) : [];
    } catch (error) {
      console.error("Error getting item from local storage:", error);
      return [];
    }
  },

  deleteColor: (index: number) => {
    const updatedColors = localStorageService.getColors();
    updatedColors.splice(index, 1);

    localStorage.setItem("SavedColors", JSON.stringify(updatedColors));
  },
};

export default localStorageService;
