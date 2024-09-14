import { configureStore } from '@reduxjs/toolkit';

import sidebarSlice from '@/store/slices/sidebarSlice';
import addNewElementModal from '@/store/slices/addNewElementModalSlice';
import deleteCheckModalSlice from '@/store/slices/deleteCheckModalSlice';

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    addNewElementModal: addNewElementModal,
    deleteCheckModal: deleteCheckModalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
