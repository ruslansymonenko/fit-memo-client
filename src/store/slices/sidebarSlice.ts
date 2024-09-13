import { createSlice } from '@reduxjs/toolkit';

interface ISidebarSlice {
  isOpen: boolean;
}

const initialState: ISidebarSlice = {
  isOpen: true,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleIsSidebarOpen: (state: ISidebarSlice) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleIsSidebarOpen } = sidebarSlice.actions;

export default sidebarSlice.reducer;
