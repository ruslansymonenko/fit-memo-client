import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    openAddNewElementModal: (state: IAddNewElementModalSlice) => {
      state.isOpen = true;
    },
    closeAddNewElementModal: (state: IAddNewElementModalSlice) => {
      state.isOpen = false;
    },
  },
});

export const { openAddNewElementModal, closeAddNewElementModal } = addNewElementModalSlice.actions;

export default addNewElementModalSlice.reducer;
