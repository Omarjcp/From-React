import React, { useState } from 'react' 
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import styled from 'styled-components'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
    nombre: yup.string().required('Este campo es requerido').min(3, 'deben ser mas de 2 caracteres'),
    telefono: yup.string().required("Este campo es requerido")
    .matches(phoneRegExp, "El numero de telefono debe ser de al menos 8 digitos"),
    email: yup.string().email('Ingrese un correo valido').required('Este campo es requerido'),
    usuario: yup.string().required('Este campo es requerido').min(5, 'deben ser mas de 4 caracteres'),
    apellido: yup.string().required('Este campo es requerido').min(3, 'deben ser mas de 2 caracteres'),
    contraseña: yup.string().required("Este campo es requerido")
                .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "La contraseña debe contener al menos 8 dígitos, una letra mayúscula, un numero y un caracter especial."),
    recontraseña: yup.string().required("Confime su contraseña")
                    .oneOf([yup.ref('contraseña'), null], "La contraseña no coincide.")

  });


  const SpanError = styled.span`
    color: red;
    font-size: .7rem;
  `

const Button = styled.button`
    background: #a7a7a7;
    color:#7e7e7e;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #c9c9c9;
    border-radius: 3px;

    background: ${props => props.primary || "blue"};
    color: ${props => props.primary || "white"};
    border: ${props => props.primary || "2px solid #00032e"};

`;

const Div = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin-bottom: .5rem;
`


const Register = () => {

    

    const {register, formState: {errors}, handleSubmit, getValues} = useForm({
        resolver: yupResolver(schema)
      });

    const handleOnChange = (e) => {
        const inputNombre = getValues("nombre")
        console.log(inputNombre)
    }

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
                        onChange={handleOnChange}
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