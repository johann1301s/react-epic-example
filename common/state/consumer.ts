import { effects as publisherEffects } from "@/publisher/publisherEffects";
import { root } from "./root";

const consumer = root.createConsumer({
    effects: [
        ...publisherEffects.getEffects()
    ]
})

export const useActions = consumer.createHook()
export const Provider = consumer.createProvider()
