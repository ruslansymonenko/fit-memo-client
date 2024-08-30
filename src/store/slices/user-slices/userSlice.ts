import { IUser } from '@/types/data-types/user.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';

interface IUserSlice {
  user: IUser | null;
}

const initialState: IUserSlice = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: IUserSlice, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    removeUser: (state: IUserSlice) => {
      state.user = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const checkIsAuth = (state: RootState): boolean => Boolean(state.user.user);

export default userSlice.reducer;
