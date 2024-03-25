/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { CustomButton } from "../Button";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Toast from "../toast";
import BumbyTextAnim from "../about-text";

const contactData = [
    {
        title: "correo electronico",
        info: "reyesObet@proton.me",
        path: "mailto:reyesObet@proton.me"
    },
    {
        title: "facebook",
        info: "Obet Reyes",
        path: "https://www.facebook.com/profile.php?id=61554012882608"
    },
    {
        title: "substack",
        info: "@obetreyes",
        path: "https://obetreyes.substack.com/"
    },
];

const Contact = () => {
    const [alert, setAlert] = useState('');
    const control = useAnimation();
    const [ref, inView] = useInView();
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });


    const handleChange = (e:any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, y: 0, transition: { duration: 0.8 }
        },
    };

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    const handleSendMessage = async (event:any) => {
        event.preventDefault();

        if (!formData.email || !formData.subject || !formData.message) {
            setAlert('Please fill in all fields.');
            setTimeout(() => {
                setAlert('');
            }, 3000);
            return;
        }


       
        setFormData({ email: '', subject: '', message: '' });

        setTimeout(() => {
            setAlert('');
        }, 3000);
    }

    return (
        <div className="w-full bg-white p-8 ">

<section className="mt-5 max-w-4xl mx-auto md:px-8 pb-28" id="contact">
            <div className="text-primary-text text-center pb-10">
<BumbyTextAnim text="Contacto" className="text-4xl font-bold" />
<p className="text-slate-900">tratare de responder lo antes posible</p>
</div>

            <div className="flex items-stretch justify-center" ref={ref}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={control}
                    className="grid md:grid-cols-2 px-5 md:px-0">
                    <div className="pr-6">
                        <p className="mt-3 mb-12 text-base text-secondary-text text-center md:text-left">
                        No dudes en comunicarte para consultas sobre proyectos, oportunidades de colaboración o cualquier otra pregunta que puedas tener.
                        </p>

                        <ul className="mb-6 md:mb-0">
                            {contactData.map((item, idx) =>
                                <Link to={item.path} key={idx}>
                                    <li className="flex">
                                    

                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-primary-text">
                                                {item.title}
                                            </h3>
                                            <p className="text-secondary-text">
                                                {item.info}
                                            </p>
                                        </div>
                                    </li>
                                </Link>
                            )}
                        </ul>
                        <div className="flex items-center">
                            <Toast message={alert} />
                        </div>
                    </div>

                    <form className="space-y-8" noValidate>
                        {/* Input Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-base font-medium text-secondary-text">
                                Correo Electronico
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="shadow-sm bg-third border border-third text-primary-text text-base rounded-lg focus:ring-primary-500 block w-full p-2.5 border-slate-300 placeholder-secondary-text focus:outline-none focus:right-2 focus:border-secondary" 
                                required
                                value={formData.email}
                                onChange={handleChange} />
                        </div>

                        {/* Subject Input */}
                        <div>
                            <label
                                htmlFor="subject"
                                className="block mb-2 text-base font-medium text-secondary-text"
                            >
                                Asunto a tratar
                            </label>

                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="block p-3 w-full text-base text-primary-text bg-third rounded-lg border border-slate-400 border-third shadow-sm placeholder-secondary-text focus:outline-none focus:right-2 focus:border-secondary"
                                
                                required
                                value={formData.subject}
                                onChange={handleChange} />
                        </div>

                        {/* Message Input */}
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-base font-medium text-secondary-text"
                            >
                               mensaje
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                className="block p-2.5 w-full text-base text-primary-text bg-third rounded-lg shadow-sm border border-slate-400 border-third placeholder-secondary-text focus:outline-none focus:right-2 focus:border-secondary"
                                
                                value={formData.message}
                                onChange={handleChange}
                                required >
                            </textarea>
                        </div>

                        <CustomButton
                            label={'Enviar Mensaje'}
                            onClick={() => handleSendMessage}
                        />
                    </form>
                </motion.div>
            </div>
        </section>
        </div>

    )
}


export default Contact