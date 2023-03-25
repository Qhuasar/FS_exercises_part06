import { createContext, useReducer } from "react"

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NOTIF":
      return action.payload.notification
    case "REMOVE_NOTIF":
      return ""
    default:
      return state
  }
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
  const [notif, notifDispatch] = useReducer(notificationReducer, "")
  return (
    <NotificationContext.Provider value={[notif, notifDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext
