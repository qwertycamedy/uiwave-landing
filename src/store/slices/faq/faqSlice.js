import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { loadStatus } from 'store/loadStatus';

export const postProblem = createAsyncThunk(
  'faq/postProblem',
  async ({ csrfToken, bodyParams }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrfToken,
        },
      };

      const { data } = await axios.post(
        `https://api.uiwave.io/v1/public/submitQuestion`,
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
  email: '',
  problem: '',

  faqLoadStatus: 'idle',

  list: [
    {
      id: 1,
      title: 'What is UIWave?',
      text: 'UIWave is a UI experimentation and A/B testing service. It helps you create experiments for UIs and test them on your users. Instead of changing your UI and hoping for the best, you can use UIWave to test your changes and see how they affect your users first. You can do that by allocating a percentage of your users to the experiment and then comparing the results of the experiment to the results of the control group.',
    },
    {
      id: 2,
      title: 'What platforms does UIWave support?',
      text: 'You can create experiments for any UI, including websites, mobile apps, and desktop apps as long as they are connected to the internet. You can also create experiments for UIs that are not connected to the internet, but you will need to manually collect the data from the experiment.',
    },
    {
      id: 3,
      title: 'How do I get started?',
      text: 'You can start by creating an account and then creating an experiment. After the experiment is created, you can follow the instructions on how to integrate it into your UI.',
    },
    {
      id: 4,
      title: 'Will UIWave slow down my UI?',
      text: 'No, UIWave is designed to be as lightweight as possible. For mission-critical UIs or UIs that are shown immediately after the user opens the app, you can integrate a UIWave plugin for your platform. This way you spare the roundtrip to the UIWave servers and the experiment routing is done on your own servers. Please note that this feature is only available for paid plans.',
    },
  ],
  curItem: null,
};

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {
    setFirst: (state, action) => {
      state.first = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setProblem: (state, action) => {
      state.problem = action.payload;
    },
    setCurItem: (state, action) => {
      state.curItem = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(postProblem.pending, (state) => {
        state.faqLoadStatus = loadStatus.pending;
      })
      .addCase(postProblem.fulfilled, (state, action) => {
        state.faqLoadStatus = loadStatus.fulfilled;
        state.first = '';
        state.email = '';
        state.problem = '';

        if (action.payload === true) {
          alert('Your question has bee successfully submitted.');
        } else {
          alert('Error sending question. Please try again later.');
        }
      })
      .addCase(postProblem.rejected, (state) => {
        state.faqLoadStatus = loadStatus.rejected;
      });
  },
});

export const { setFirst, setEmail, setProblem, setCurItem } = faqSlice.actions;
export const faqSel = (state) => state.faq;

export default faqSlice.reducer;
