import { createSlice } from "@reduxjs/toolkit";

export const topMenuSlice = createSlice({
  name: "menu",
  initialState: {
    menu: ["Inicio", "Femeinino", "Hombre", "Juvenil", "Mas Vendidos"],
  },
  reducers: {
    topMenu: (state, action) => {
      state.menu = [state, action.payload];
    },
  },
});

export const { topMenu } = topMenuSlice.actions;
export default topMenuSlice.reducer;
