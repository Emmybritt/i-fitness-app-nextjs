import { createSlice } from "@reduxjs/toolkit";
import { UserSliceState } from "../../domain/user";

const initialState: UserSliceState = {
	user: null,
	loading: false,
};

const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {
		setUser: (state, { payload }) => {
			state.user = payload;
		},
		setLoading: (state, { payload }: { payload: boolean }) => {
			state.loading = payload;
		},
	},
	extraReducers(builder) {},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
