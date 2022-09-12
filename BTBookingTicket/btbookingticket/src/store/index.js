import { combineReducers, createStore } from "redux"
import { BookingTicket } from "./reducers/BookingTicket"

const rootReducers = combineReducers({
    BookingTicket,
})


export const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());