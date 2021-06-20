import React from 'react' 
import { useForm } from 'react-hook-form'

const Register = () => {
    return (
        <div class="mt-4" style={{display:'flex', justifyContent:'center'}}>
            <form>
                <div class="mb-4" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                    />
                </div>

                <div class="mb-4" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <label>Apellido</label>
                    <input
                        type="text"
                        name="apellido"
                        placeholder="Apellido"
                    />
                </div>

                <div class="mb-4" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                    />
                </div>

                <div class="mb-4" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <label>Nro. Telefono</label>
                    <input
                        type="number"
                        name="telefono"
                        placeholder="Ej. 11-12345678"
                    />
                </div>

                <div class="mb-4" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <label>Nombre Usuario</label>
                    <input
                        type="text"
                        name="usuario"
                        placeholder="usuario123"
                    />
                </div>

                <div class="mb-4" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <label>Contraseña</label>
                    <input
                        type="number"
                        name="contraseña"
                        placeholder="12345omar"
                    />
                </div>

                <div class="mb-4" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <label>Repetir contraseña</label>
                    <input
                        type="number"
                        name="recontraseña"
                        placeholder="12345omar"
                    />
                </div>

                <div className="m-3" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <button className="btn btn-primary p-3" style={{display:'flex', alignItems:'center'}}>Registrarse</button>
                </div>

            </form>
        </div>
    )
}

export default Register