import { page_lang } from '@actions/page_lang'
import { page_title } from '@actions/page_title'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  page_title,
  page_lang,
})
export type AppState = ReturnType<typeof rootReducer>
