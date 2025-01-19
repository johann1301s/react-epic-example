import { createRoot} from "@athino/react-epic";
import { reducer as publisherReducer } from "@/publisher/publisherReducer";

export const root = createRoot({
    domains: {
        publisher: publisherReducer
    }
})
