import { configureStore } from '@reduxjs/toolkit';

import sidebarSlice from '@/store/slices/sidebarSlice';
import addNewElementModal from '@/store/slices/modals/addNewElementModalSlice';
import deleteCheckModalSlice from '@/store/slices/modals/deleteCheckModalSlice';
import updateElementModalSlice from '@/store/slices/modals/updateElementModalSlice';

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    addNewElementModal: addNewElementModal,
    deleteCheckModal: deleteCheckModalSlice,
    updateElementModal: updateElementModalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
