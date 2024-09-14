import { createSlice } from '@reduxjs/toolkit';

interface IAddNewElementModalSlice {
  isOpen: boolean;
}

const initialState: IAddNewElementModalSlice = {
  isOpen: false,
};

const addNewElementModalSlice = createSlice({
  name: 'addNewElement',
  initialState,
  reducers: {
    openModal: (state: IAddNewElementModalSlice) => {
      state.isOpen = true;
    },
    closeModal: (state: IAddNewElementModalSlice) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = addNewElementModalSlice.actions;

export default addNewElementModalSlice.reducer;
