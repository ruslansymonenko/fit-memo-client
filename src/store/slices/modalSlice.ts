import { createSlice } from '@reduxjs/toolkit';

interface IModalSlice {
  isOpen: boolean;
}

const initialState: IModalSlice = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    openModal: (state: IModalSlice) => {
      state.isOpen = true;
    },
    closeModal: (state: IModalSlice) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
