import { DependencyList, useEffect } from 'react'

export const useEffectAsync = (
    effect: () => Promise<void>,
    deps?: DependencyList
) => {
    useEffect(() => {
        effect()
    }, deps)
}
