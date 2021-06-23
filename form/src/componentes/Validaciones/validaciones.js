import * as yup from "yup";

const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const usernameRegex = /^[a-z0-9_-]{6,16}$/
const passwordRegex = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/

export const schema = yup.object().shape({
    nombre: yup.string().required('Este campo es requerido').min(3, 'deben ser mas de 2 caracteres'),
    telefono: yup.string().required("Este campo es requerido")
    .matches(phoneRegex, "El numero de telefono debe ser de al menos 8 digitos"),
    email: yup.string().email('Ingrese un correo valido').required('Este campo es requerido'),
    usuario: yup.string().required('Este campo es requerido').matches(usernameRegex,
        "El nombre de usuario no es valido."),
    apellido: yup.string().required('Este campo es requerido').min(3, 'deben ser mas de 2 caracteres'),
    contraseña: yup.string().required("Este campo es requerido")
                .matches(passwordRegex,
                "La contraseña debe contener al menos 8 dígitos, una letra mayúscula, un numero y un caracter especial."),
    recontraseña: yup.string().required("Confime su contraseña")
                    .oneOf([yup.ref('contraseña'), null], "La contraseña no coincide.")

  });


  
export const validacionLogin = (input) => {
    let error = {}

    if(!input.username) {
        error.username = 'Este campo es requerido'
    }else if(!usernameRegex.test(input.username)) {
        error.username = "Correo no valido"
    }

    if(!input.password) {
        error.password = 'Este campo es requerido'
    } else if(!passwordRegex.test(input.password)){
        error.password = "Password no valido"
    }

    return error
}