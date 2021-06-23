import React from 'react' 
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../Validaciones/validaciones';
import { SpanError, Button, Div } from './styled';


const Register = () => {

    const {register, formState: {errors}, handleSubmit} = useForm({
        resolver: yupResolver(schema)
      });


    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="mt-4" style={{display:'flex', justifyContent:'center'}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Div>
                    <label>Nombre</label>
                    <input
                        name="nombre"
                        placeholder="Nombre"
                        {...register("nombre")}
                    />
                    <SpanError>{errors.nombre && errors.nombre.message}</SpanError>
                </Div>

                <Div>
                    <label>Apellido</label>
                    <input
                        name="apellido"
                        placeholder="Apellido"
                        {...register("apellido")}
                    />
                    <SpanError>{errors.apellido && errors.apellido.message}</SpanError>
                </Div>

                <Div>
                    <label>Email</label>
                    <input
                        name="email"
                        placeholder="Email"
                        {...register("email")}
                    />
                    <SpanError>{errors.email && errors.email.message}</SpanError>
                </Div>

                <Div>
                    <label>Nro. Telefono</label>
                    <input
                        name="telefono"
                        placeholder="Ej. (11)12345678, sin ()"
                        {...register("telefono")}
                    />
                    <SpanError>{errors.telefono && errors.telefono.message}</SpanError>
                </Div>

                <Div>
                    <label>Nombre Usuario</label>
                    <input
                        name="usuario"
                        placeholder="usuario123"
                        {...register("usuario")}
                    />
                    <SpanError>{errors.usuario && errors.usuario.message}</SpanError>
                </Div>

                <Div>
                    <label>Contraseña</label>
                    <input
                        type='password'
                        name="contraseña"
                        placeholder="12345omar"
                        {...register("contraseña")}
                    />
                    <SpanError>{errors.contraseña && errors.contraseña.message}</SpanError>
                </Div>

                <Div>
                    <label>Repetir contraseña</label>
                    <input
                        type='password'
                        name="recontraseña"
                        placeholder="12345omar"
                        {...register("recontraseña")}
                    />
                    <SpanError>{errors.recontraseña && errors.recontraseña.message}</SpanError>
                </Div>

                <div className="m-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button
                        type='submit'
                        primary={
                            errors.nombre ||
                            errors.apellido ||
                            errors.email ||
                            errors.telefono ||
                            errors.usuario ||
                            errors.contraseña ||
                            errors.recontraseña
                        }>
                        Registrarse
                    </Button>
                </div>

            </form>
        </div>
    )
}

export default Register