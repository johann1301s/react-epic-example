import { createState } from "@athino/react-epic";

type TPublisherState = {
    value: number
}

export const state = createState<TPublisherState>({
    value: 0
})
