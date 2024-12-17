// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import example from './app/exampleSlice'


export const store = configureStore({
  reducer: {
    example

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
