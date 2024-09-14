import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUpdateElementModalSlice {
  isOpen: boolean;
  elementId: number | null;
}

const initialState: IUpdateElementModalSlice = {
  isOpen: false,
  elementId: null,
};

const updateElementModalSlice = createSlice({
  name: 'updateElement',
  initialState,
  reducers: {
    openUpdateElementModal: (state: IUpdateElementModalSlice, action: PayloadAction<number>) => {
      state.isOpen = true;
      state.elementId = action.payload;
    },
    closeUpdateElementModal: (state: IUpdateElementModalSlice) => {
      state.isOpen = false;
      state.elementId = null;
    },
  },
});

export const { openUpdateElementModal, closeUpdateElementModal } = updateElementModalSlice.actions;

export default updateElementModalSlice.reducer;
