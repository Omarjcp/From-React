import React from 'react' 
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    nombre: yup.string().required('Este campo es requerido').min(3, 'deben ser mas de 2 caracteres'),
    telefono: yup.number().positive().integer().required('Este campo es requerido').min(1000000000, 'debe ser al menos 10 numeros'),
    email: yup.string().email('Ingrese un correo valido').required('Este campo es requerido'),
    usuario: yup.string().required('Este campo es requerido').min(5, 'deben ser mas de 4 caracteres'),
    apellido: yup.string().required('Este campo es requerido').min(3, 'deben ser mas de 2 caracteres'),
  });

const Register = () => {

    const {register, formState: {errors}, handleSubmit} = useForm({
        resolver: yupResolver(schema)
      });


    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div class="mt-4" style={{display:'flex', justifyContent:'center'}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-4" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <label>Nombre</label>
                    <input
                        name="nombre"
                        placeholder="Nombre"
                        {...register("nombre")}
                    />
                    <span style={{color:'red', fontSize:'.7rem'}}>{errors.nombre && errors.nombre.message}</span>
                </div>

                <div class="mb-4" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <label>Apellido</label>
                    <input
                        name="apellido"
                        placeholder="Apellido"
                        {...register("apellido")}
                    />
                    <span style={{color:'red', fontSize:'.7rem'}}>{errors.apellido && errors.apellido.message}</span>
                </div>

                <div class="mb-4" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <label>Email</label>
                    <input
                        name="email"
                        placeholder="Email"
                        {...register("email")}
                    />
                    <span style={{color:'red', fontSize:'.7rem'}}>{errors.email && errors.email.message}</span>
                </div>

                <div class="mb-4" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <label>Nro. Telefono</label>
                    <input
                        type="number"
                        name="telefono"
                        placeholder="Ej. (11)12345678, sin ()"
                        {...register("telefono")}
                    />
                    <span style={{color:'red', fontSize:'.7rem'}}>{errors.telefono && errors.telefono.message}</span>
                </div>

                <div class="mb-4" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <label>Nombre Usuario</label>
                    <input
                        name="usuario"
                        placeholder="usuario123"
                        {...register("usuario")}
                    />
                    <span style={{color:'red', fontSize:'.7rem'}}>{errors.usuario && errors.usuario.message}</span>
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
                    <button type="submit" className="btn btn-primary p-3" style={{display:'flex', alignItems:'center'}}>Registrarse</button>
                </div>

            </form>
        </div>
    )
}

export default Register