import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { loadStatus } from 'store/loadStatus';

export const getBlogPosts = createAsyncThunk('blog/getBlogPosts', async () => {
  try {
    const {data} = await axios.get(
      `https://api.uiwave.io/v1/public/blogPosts`,
    );

    return data;
  } catch (err) {
    console.log(`Ошибка при получении блог-постов: ${err}`);
  }
});

export const previewMorePosts = createAsyncThunk(
  'blog/previewMorePosts',
  async ({ startingIndex }) => {
    try {
      const {data} = await axios.get(
        `https://api.uiwave.io/v1/public/blogPosts?startingIndex=${startingIndex}`,
      );

      return data;
    } catch (err) {
      console.log(`Ошибка при получении блог-постов: ${err}`);
    }
  },
);

export const getMorePosts = createAsyncThunk(
  'blog/getMorePosts',
  async ({ startingIndex }) => {
    try {
      const {data} = await axios.get(
        `https://api.uiwave.io/v1/public/blogPosts?startingIndex=${startingIndex}`,
      );

      return data;
    } catch (err) {
      console.log(`Ошибка при получении блог-постов: ${err}`);
    }
  },
);

export const getArticle = createAsyncThunk(
  'blog/getArticle',
  async ({ articleId }) => {
    try {
      const {data} = await axios.get(
        `https://api.uiwave.io/v1/public/blogPosts/${articleId}`,
      );

      return data;
    } catch (err) {
      console.log(`Ошибка при получении статьи блога: ${err}`);
    }
  },
);

const initialState = {
  blogLoadStatus: 'idle',
  previewLoadStatus: 'idle',
  moreLoadStatus: 'idle',
  cards: null,
  showMoreBtn: false,

  articleLoadStatus: 'idle',
  article: null,
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getBlogPosts.pending, (state) => {
        state.blogLoadStatus = loadStatus.pending;
      })
      .addCase(getBlogPosts.fulfilled, (state, action) => {
        state.blogLoadStatus = loadStatus.fulfilled;
        state.cards = action.payload.blogPosts;
      })
      .addCase(getBlogPosts.rejected, (state) => {
        state.blogLoadStatus = loadStatus.rejected;
      });


    builder
    .addCase(previewMorePosts.pending, (state) => {
      state.previewLoadStatus = loadStatus.pending;
    })
    .addCase(previewMorePosts.fulfilled, (state,action) => {
      state.previewLoadStatus = loadStatus.fulfilled;
      
      if(action.payload.blogPosts.length) {
        state.showMoreBtn = true;
      } else {
        state.showMoreBtn = false;
      }
    })
    .addCase(previewMorePosts.rejected, (state) => {
      state.previewLoadStatus = loadStatus.rejected;
    });

    builder
      .addCase(getMorePosts.pending, (state) => {
        state.moreLoadStatus = loadStatus.pending;
      })
      .addCase(getMorePosts.fulfilled, (state,action) => {
        state.moreLoadStatus = loadStatus.fulfilled;
        state.cards = state.cards.concat(action.payload.blogPosts)
      })
      .addCase(getMorePosts.rejected, (state) => {
        state.moreLoadStatus = loadStatus.rejected;
      });

    builder
      .addCase(getArticle.pending, (state) => {
        state.articleLoadStatus = loadStatus.pending;
      })
      .addCase(getArticle.fulfilled, (state, action) => {
        state.articleLoadStatus = loadStatus.fulfilled;
        state.article = action.payload;
      })
      .addCase(getArticle.rejected, (state) => {
        state.articleLoadStatus = loadStatus.rejected;
      });
  },
});

// export const {  } = blogSlice.actions;
export const blogSel = (state) => state.blog;

export default blogSlice.reducer;
