import React from 'react';
import { Link } from 'react-router-dom';
import Grid from './Grid';
const footerAboutLinks = [
    {
        display: "Quienes Somos",
        path: "/about"
    },
    {
        display: "Responsabilidad Social",
        path: "/about"
    }
]
const footerCustomerLinks = [
    {
        display: "Contactanos",
        path: "/about"
    },
    {
        display: "Forma de pago",
        path: "/about"
    },
    {
        display: "Puntos de venta",
        path: "/about"
    }
]
const footerCustomerClient = [
    {
        display: "Términos y condiciones",
        path: "/about"
    },
    {
        display: "Como cuidamos tu privacidad",
        path: "/about"
    }
]
const RedesSociales = [
    {
        display: "Facebook",
        path: "/about"
    },
    {
        display: "Instagram",
        path: "/about"
    },
    {
        display: "TikTok",
        path: "/about"
    },
    {
        display: "Twitter",
        path: "/about"
    }
]
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                            SERVICIO AL CLIENTE
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerClient.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            SOBRE NOSOTROS
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Podemos ayudarte
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Redes Sociales
                        </div>
                        <div className="footer__content">
                            {
                                RedesSociales.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
