import { TPublisherActions } from "./publisherActions";
import { state } from "./publisherState";

export const reducer = state.createReducer<TPublisherActions>({

    setValue({state, payload}) {
        state.value = payload.value
    },

    increaseValue({state, payload}) {
        state.value = payload.value
    }

})
