import { configureStore } from '@reduxjs/toolkit'

import window from './slices/window/windowSlice'
import auth from './slices/auth/authSlice'
import nav from './slices/nav/navSlice'
import header from './slices/header/headerSlice'
import pricing from './slices/pricing/pricingSlice'
import blog from './slices/blog/blogSlice'
import feedback from './slices/feedback/feedbackSlice'
import faq from './slices/faq/faqSlice'


export const store = configureStore({
  reducer: {
    window,
    auth,
    nav,
    header,
    pricing,
    blog,
    feedback,
    faq
  },
})
