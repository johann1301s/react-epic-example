import { sleep } from "@/common/lib/sleep";
import { root } from "@/common/state/root";

export const effects = root.createEffects()

effects.addEffect({
    domain: 'publisher',
    action: 'setValue',
    type: 'takeLatest',
    handler: async (ctx) => {
        await sleep(2000)
        ctx.actions.publisher.increaseValue({
            value: ctx.action.payload.value + 1
        })
    }
})
