import { useState } from "react"
interface User {
    uid: string,
    name: string
}

const usuarioTemporal: User = {
    uid: "ABC158",
    name: "Dayamar"
}

export const Usuario = () => {
    const [user, setUser] = useState<User>()

    const login = (): void => {
        setUser(usuarioTemporal)
    }

    return (
        <div className="mt-5">
            <h3>Usuario: useState</h3>
            <button onClick={login} className="btn btn-outline-primary">Login</button>
            {!user ? <pre>No hay usuario</pre> : <pre>{ user.name }</pre>}
        </div>
    )
}