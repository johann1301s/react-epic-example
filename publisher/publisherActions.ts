import { DefineActions } from "@athino/react-epic";

export type TPublisherActions = DefineActions<{

    setValue: {
        payload: {
            value: number
        }
    }

    increaseValue: {
        payload: {
            value: number
        }
    }

}>
