import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { IStore } from '../../store/store'
import { get } from '../../http/httpMethods'
import { urlCars } from '../../constants/apiURLs'
import { AxiosResponse } from 'axios'
import { ICar, IHome } from './iHome'

const name = 'home'

const initialState: IHome = {
  cars: [],
  selectedCar: {} as ICar,
}

export const fetchCars = createAsyncThunk(
  `${name}/fetchCars`,
  async (query: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    const url = query ? urlCars + '?title_like=' + query : urlCars
    try {
      return await get<ICar[]>(url)
    } catch (err: any) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response)
    }
  }
)

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    setSelectedCar: (state: IHome, action: PayloadAction<ICar>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.selectedCar = action.payload
    },
  },
  extraReducers: {
    [fetchCars.pending.toString()]: (state, action) => {
      state.cars = []
    },
    [fetchCars.fulfilled.toString()]: (
      state,
      action: PayloadAction<AxiosResponse<ICar[]>>
    ) => {
      state.cars = action.payload.data
    },
    [fetchCars.rejected.toString()]: (state, action) => {
      state.cars = []
    },
  },
})

export const { setSelectedCar } = slice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.home)`
export const selectHome = (state: IStore) => state.home

export default slice.reducer
