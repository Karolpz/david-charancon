import React, { useState, useRef } from 'react'
import Field, { FIELD_TYPES } from '../../components/Field'
import emailjs from "emailjs-com"
import Button from '../../components/Button'
import { Turnstile } from '@marsidev/react-turnstile'

const Form = () => {
    const [messageStatus, setMessageStatus] = useState('')
    const [formData, setFormData] = useState({
        prenom: '',
        nom: '',
        email: '',
        message: ''
    })
    const [captchaToken, setCaptchaToken] = useState(null)
    const formReset = useRef()
    const captchaRef = useRef()


    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!captchaToken) {
            setMessageStatus("Merci de valider le captcha avant d’envoyer.")
            return
        }

        const dataToSend = {
            ...formData,
        }

        emailjs.init('KUgA4JMsoQ82S_jn-')

        emailjs.send('service_carolo', 'template_7q7eo65', dataToSend).then(
            () => {
                setMessageStatus('Message envoyé avec succès !')
                formReset.current.reset()
                setCaptchaToken(null)
                if (captchaRef.current) {
                    captchaRef.current.reset()
                }
            },
            (error) => {
                setMessageStatus("Échec lors de l’envoi.")
                console.log('Erreur : ', error)
            }
        )
    }

    return (
        <section className='form'>
            <h2 className='form__title'>ME CONTA<span>CTER</span></h2>
            <p className='form__subtitle'>Une idée, un projet, ou juste envie de discuter ? Écris-moi, je réponds toujours avec plaisir.</p>
            <form className='form__content' onSubmit={handleSubmit} method="POST" ref={formReset}>
                <div className="row">
                    <div className="col">
                        <Field
                            type={FIELD_TYPES.INPUT}
                            inputType='text'
                            label='nom'
                            textlabel='Nom'
                            id='nom'
                            name='nom'
                            onChange={handleChange}
                        />
                        <Field
                            type={FIELD_TYPES.INPUT}
                            inputType='text'
                            label='prenom'
                            textlabel='Prénom'
                            id='prenom'
                            name='prenom'
                            onChange={handleChange}
                        />
                        <Field
                            type={FIELD_TYPES.INPUT}
                            inputType='email'
                            label='email'
                            textlabel='E-mail'
                            id='email'
                            name='email'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col">
                        <Field
                            type={FIELD_TYPES.TEXTAREA}
                            label='message'
                            textlabel='Message'
                            id='message'
                            name='message'
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <Turnstile
                    siteKey='0x4AAAAAAB0Ojte1ssVTcVWR'
                    onSuccess={setCaptchaToken}
                    className='form__content--captcha' />

                <p className='form__content--message'>{messageStatus}</p>
                <Button
                    text="Envoyer"
                    type="submit"
                    className="form__content--submit"
                />
            </form>
        </section>
    )
}

export default Form