import { useEffect, useRef, useState } from "react"

interface TimeArg {
    milisegundos: number,
    segundos?: number
    //segundos es opcional por el ?
}

export const Timer = ( {milisegundos}: TimeArg) => {

    const [segundos, setSegundos] = useState(0)
    const ref = useRef<NodeJS.Timeout>()

    useEffect(() => {
        ref.current && clearInterval( ref.current )
        ref.current = setInterval(() => setSegundos(s => s + 1), milisegundos)
    }, [milisegundos])

    return (
        <>
            <h4>Timer: <small>{segundos}</small></h4>
        </>
    )
}