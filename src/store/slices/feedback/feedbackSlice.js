import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { loadStatus } from 'store/loadStatus';

export const postFeedback = createAsyncThunk(
  'feedback/postFeedback',
  async ({ bodyParams }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `https://api.uiwave.io/v1/public/sendMessage`,
        bodyParams,
        config,
      );

      return data;
    } catch (err) {
      console.log(`Ошибка при отправке фидбэка: ${err}`);
    }
  },
);

const initialState = {
  first: '',
  last: '',
  company: '',
  email: '',
  message: '',

  feedbackLoadStatus: 'idle',
};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    setFirst: (state, action) => {
      state.first = action.payload;
    },
    setLast: (state, action) => {
      state.last = action.payload;
    },
    setCompany: (state, action) => {
      state.company = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(postFeedback.pending, (state) => {
        state.feedbackLoadStatus = loadStatus.pending;
      })
      .addCase(postFeedback.fulfilled, (state, action) => {
        state.feedbackLoadStatus = loadStatus.fulfilled;
        state.first = '';
        state.last = '';
        state.company = '';
        state.email = '';
        state.message = '';

        if (action.payload === true) {
          alert(
            'Your message has been sent. We will contact you as soon as possible.',
          );
        } else {
          alert('An error has occurred');
        }
      })
      .addCase(postFeedback.rejected, (state) => {
        state.feedbackLoadStatus = loadStatus.rejected;
      });
  },
});

export const { setCompany, setEmail, setFirst, setLast, setMessage } =
  feedbackSlice.actions;
export const feedbackSel = (state) => state.feedback;

export default feedbackSlice.reducer;
