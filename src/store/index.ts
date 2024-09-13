import { configureStore } from '@reduxjs/toolkit';

import sidebarSlice from '@/store/slices/sidebarSlice';
import modalSlice from '@/store/slices/modalSlice';

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    modal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
