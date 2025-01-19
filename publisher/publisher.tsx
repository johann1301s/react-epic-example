import {useActions} from "@/common/state/consumer";

export const Publisher = () => {
    const {data, actions} = useActions(({publisher}) => publisher)

    return (
        <div>
            VALUE: {data.value}
            <button onClick={() => actions.publisher.setValue({ value: data.value + 1 })}>
                INCREMENT
            </button>
        </div>
    )
}
