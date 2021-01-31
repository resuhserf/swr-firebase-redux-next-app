import { ThunkDispatch } from '@reduxjs/toolkit'
import { AnyAction } from 'redux'
import { Lang } from './lang'

export type UseAppDispatch<T> = ThunkDispatch<T, null, AnyAction>
// Below types are for use with slices
export interface Str_Payload {
  payload: string
}
export interface Num_Payload {
  payload: number
}
export interface Bool_Payload {
  payload: boolean
}
export interface Str_Num_Bool_Payload {
  payload: string | number | boolean
}
// Best avoid the unknown object type
// Declare a more explicit type any time possible
export interface Unk_Obj_Payload {
  payload: Record<string, unknown>
}
export interface Lang_Payload {
  payload: Lang
}
