import {useRef} from 'react'

export default function usePadding(top, right, bottom, left) {
    const padding = useRef(`${top}px ${right}px ${bottom}px ${left}px`)

    return padding
};