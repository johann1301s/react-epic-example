import { root } from "./root";

const consumer = root.createConsumer({
    effects: [

    ]
})

export const useActions = consumer.createHook()
export const Provider = consumer.createProvider()
