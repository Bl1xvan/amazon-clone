import {useRef} from 'react'

export default function useMargin(top, right, bottom, left) {
    const margin = useRef(`${top}px ${right}px ${bottom}px ${left}px`)

    return margin
};
