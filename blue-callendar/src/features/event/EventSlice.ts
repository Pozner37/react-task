import {createSlice} from '@reduxjs/toolkit';
import eventReader from "./EventReader";

export const eventSlice = createSlice({
    name: 'events',
    initialState: {
        Events: eventReader.getEvents()
    },
    reducers: {
        // decrement: state => {
        //     state.value -= 1;
        // },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload;
        // },
    },
});

export const {} = eventSlice.actions;
//
// // The function below is called a thunk and allows us to perform async logic. It
// // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// // will call the thunk with the `dispatch` function as the first argument. Async
// // code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//     setTimeout(() => {
//         dispatch(incrementByAmount(amount));
//     }, 1000);
// };
//
// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state) => state.event.value)`
// export const selectCount = state => state.event.value;

export default eventSlice.reducer;
