import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { loadStatus } from 'store/loadStatus';

export const getCSRF = createAsyncThunk('auth/getCSRF', async () => {
  try {
    const { data } = await axios.get(
      `https://api.uiwave.io/v1/auth/csrf-token`,
    );

    console.log(data);
    return data;
  } catch (err) {
    console.log(`Authentication error: ${err}`);
  }
});

const initialState = {
  authLoadStatus: 'idle',
  isSign: false,
  csrf: null,

  loginLink: 'https://app.uiwave.io/login',
  registerLink: 'https://app.uiwave.io/register',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsSign: (state, action) => {
      state.isSign = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCSRF.pending, (state) => {
        state.authLoadStatus = loadStatus.pending;
      })
      .addCase(getCSRF.fulfilled, (state, action) => {
        const csrf = action.payload.csrfToken;
        state.authLoadStatus = loadStatus.fulfilled;

        if (csrf) {
          state.csrf = csrf;

          localStorage.setItem('csrf-token', csrf);
        }
      })
      .addCase(getCSRF.rejected, (state) => {
        state.authLoadStatus = loadStatus.rejected;
      });
  },
});

export const { setIsSign } = authSlice.actions;
export const authSel = (state) => state.auth;

export default authSlice.reducer;
