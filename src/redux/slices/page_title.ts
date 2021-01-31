import { createSlice } from '@reduxjs/toolkit'
import { Str_Payload } from '@typings/redux'

const page_titleSlice = createSlice({
  name: 'page_title',
  initialState: '',
  reducers: {
    update_page_title: (_, action: Str_Payload) => action.payload,
    reset_page_title: () => '',
  },
})

const { actions, reducer } = page_titleSlice
export const { update_page_title, reset_page_title } = actions
export { reducer as page_title }
