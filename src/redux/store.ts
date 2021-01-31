import { configureStore } from '@reduxjs/toolkit'
import { UseAppDispatch } from '@typings/redux'
import { useDispatch } from 'react-redux'
import { rootReducer } from './reducer'

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = <T>(): UseAppDispatch<T> => useDispatch<AppDispatch>()
