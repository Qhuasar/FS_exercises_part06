import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    changeNotification(state, action) {
      return action.payload
    },
    removeNotification(state, action) {
      return (state = "")
    },
  },
})

export const { changeNotification, removeNotification } =
  notificationSlice.actions
export default notificationSlice.reducer

export const setNotification =
  (message, time = 5) =>
  (dispatch) => {
    dispatch(changeNotification(message))
    setTimeout(() => dispatch(removeNotification()), time * 1000)
  }
