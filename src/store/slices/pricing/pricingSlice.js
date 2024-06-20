import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [
    {
      name: 'Free',
      price: '$0',
      period: 'Try for free',
      list: [
        {
          id: 1,
          text: '16 simultaneous UI experiments',
        },
        {
          id: 2,
          text: '10k API requests per month',
        },
        {
          id: 3,
          text: 'Shared processing queue',
        },
        {
          id: 4,
          text: 'Support for custom optimization metrics',
        },
      ],
      btn: {
        label: 'Get started today',
        to: '',
      },
    },
    {
      name: 'Pro',
      price: '$40',
      period: 'Per user per month',
      list: [
        {
          id: 1,
          text: '64 simultaneous UI experiments',
        },
        {
          id: 2,
          text: '50k API requests per month',
        },
        {
          id: 3,
          text: 'Priority processing queue',
        },
        {
          id: 4,
          text: 'Support for custom optimization metrics',
        },
        {
          id: 5,
          text: 'Support for user-defined optimization metric logic',
        },
        {
          id: 6,
          text: 'Analytics dashboard',
        },
        {
          id: 7,
          text: '180 day event history',
        },
      ],
      btn: {
        label: 'Get workspace plan',
        to: '',
      },
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Annual billing',
      list: [
        {
          id: 1,
          text: 'Unlimited simultaneous UI experiments',
        },
        {
          id: 2,
          text: 'Unlimited API requests',
        },
        {
          id: 3,
          text: 'Dedicated processing queue',
        },
        {
          id: 4,
          text: 'Support for custom optimization metrics',
        },
        {
          id: 5,
          text: 'Support for user-defined optimization metric logic',
        },
        {
          id: 6,
          text: 'Advanced analytics dashboard',
        },
        {
          id: 7,
          text: 'Unlimited event history',
        },
        {
          id: 8,
          text: '24/7 support',
        },
        {
          id: 9,
          text: 'Included integration',
        },
      ],
      btn: {
        label: 'Contact sales',
        to: '',
      },
    },
  ],
};

const pricingSlice = createSlice({
  name: 'pricing',
  initialState,
});

// export const {  } = pricingSlice.actions;
export const pricingSel = (state) => state.pricing;

export default pricingSlice.reducer;
