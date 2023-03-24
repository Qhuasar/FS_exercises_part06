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
