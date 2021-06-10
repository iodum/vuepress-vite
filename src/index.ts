/* eslint-disable */
import * as components from "./components/index"

export default {
    install: (instance: any) => {
        for (let componentKey in components) {
            // @ts-ignore
            instance.use((components)[componentKey])
        }
    }
}
