import React, { useState, useEffect } from 'react';
import "./contactform.css"
import {useForm} from "react-hook-form"
import {sendMail} from './helper/mailform'
import location from "../../public/media/icons/location.png"
import telephone from "../../public/media/icons/telephone.png"
import mail from "../../public/media/icons/email.png"

const ContactForm = () => {

//   var filterLoc = require(location).default; 

  const { register, formState: {errors}, handleSubmit} = useForm();

  const [values, setValues]=useState({
    nombre:"",
    email:"",
    msj:"",
    status:false
  })
  const {nombre, email, msj, status}=values;

  const onSubmit = (data) => {
    console.log(data)
    const nombre = data.nombre
    const email = data.email
    const msj = data.msj
    sendMail({nombre, email, msj}).then(data=>{
        if(data.err){
            console.log("err", data.err)
        }else{
            console.log("Success", data)
            setValues({...values,status:true})
        }
    }).catch(console.log("error sending the mail"))
  }

  return (
    <div className="contact-container">
        {/* <h1>Pongamosnos en contacto!</h1> */}

        <div className='contact-list'>
            <h3>--Envíame un mensaje!</h3> 
            <p><img src={location} alt="loc" width="15px" />Alfredo Lorenzo Palacios 457</p>
            <p><img src={telephone} alt="tel" width="15px" />1162767256</p>
            <p><img src={mail} alt="email" width="15px" />ph.evelyndenise@gmail.com</p>
        </div>

        <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
            <h1>Trabajemos juntos!</h1>
            <div className="contactCells">
                <p>Nombre*</p>
                <input type="text" {...register('nombre', {required:true, maxLength:20})}/>
                {errors.nombre?.type === 'required' && <p>El campo Nombre es obligatorio</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo Nombre debe tener menos de 20 caracteres</p>}
            </div>

            <div className="contactCells">
                <p>Telefono*</p>
                <input type="text" {...register('telefono', {required:true, maxLength:20})}/>
                {errors.nombre?.type === 'required' && <p>El campo Nombre es obligatorio</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo Nombre debe tener menos de 20 caracteres</p>}
            </div>

            <div className="contactCells">
                <p>Email*</p>
                <input type="text" {...register('email', {required:true, maxLength:40, 
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i})}/>
                {errors.email?.type === 'pattern' && <p>El formato de email es incorrecto</p>}    
            </div>

            <div className="contactCells">
                <p for="msj">Mensaje*</p>
                <textarea id="msj" name="msj" rows="4" cols="50" {...register('msj', {required:true})}/>
                {errors.msj?.type === 'required' && <p>El campo Mensaje es obligatorio</p>}
            </div>

            <input id="button" type="submit" value="Enviar"/>

        </form>

    </div>
  )
}

export default ContactForm