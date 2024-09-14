import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IDeleteCheckModalSlice {
  isOpen: boolean;
  elementId: number | null;
}

const initialState: IDeleteCheckModalSlice = {
  isOpen: false,
  elementId: null,
};

const deleteCheckModal = createSlice({
  name: 'deleteCheck',
  initialState,
  reducers: {
    openModal: (state: IDeleteCheckModalSlice, action: PayloadAction<number>) => {
      state.isOpen = true;
      state.elementId = action.payload;
    },
    closeModal: (state: IDeleteCheckModalSlice) => {
      state.isOpen = false;
      state.elementId = null;
    },
  },
});

export const { openModal, closeModal } = deleteCheckModal.actions;

export default deleteCheckModal.reducer;
