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
    openDeleteCheckModal: (state: IDeleteCheckModalSlice, action: PayloadAction<number>) => {
      state.isOpen = true;
      state.elementId = action.payload;
    },
    closeDeleteCheckModal: (state: IDeleteCheckModalSlice) => {
      state.isOpen = false;
      state.elementId = null;
    },
  },
});

export const { openDeleteCheckModal, closeDeleteCheckModal } = deleteCheckModal.actions;

export default deleteCheckModal.reducer;
