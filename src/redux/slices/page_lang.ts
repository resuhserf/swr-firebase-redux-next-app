import { createSlice } from '@reduxjs/toolkit'
import { Lang } from '@typings/lang'
import { Lang_Payload } from '@typings/redux'

const page_langSlice = createSlice<
  Lang,
  {
    update_page_lang: (_: Lang, action: Lang_Payload) => Lang
    reset_page_lang: () => Lang
  },
  'page_lang'
>({
  name: 'page_lang',
  initialState: 'en',
  reducers: {
    update_page_lang: (_, action: Lang_Payload) => action.payload,
    reset_page_lang: () => 'en',
  },
})

const { actions, reducer } = page_langSlice
export const { update_page_lang, reset_page_lang } = actions
export { reducer as page_lang }
