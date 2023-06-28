import { createAction, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'
import { User, UsersState } from '../../interfaces/user.interface'

// Define the initial state using that type
const initialState: UsersState = {
  usersData: [],
}

export const usersSlice = createSlice({
  name: 'users',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      try {
        state.usersData = action.payload;
      } catch (error) {
        state.usersData = [];
      }
    },
  },
})

export const { setUsers } = usersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUsers = (state: RootState) => state.users.usersData

export default usersSlice.reducer