import React from "react"

import { HiOutlineUserAdd } from "react-icons/hi";

export default function Hero() {
    return (
        <div className="container hero">
            <div className="hero-content">
                <h1>Smart Way 
                to Help you Succeed.</h1>
                <p>We offer top-tier banking products and services, from personal to business solutions. Our success is tied to yours, ensuring a unique banking experience. 
                </p>
                <div className="hero-button">Open account</div>
                <div className="page-toggle">
                    <div className="v-1"></div>
                    <div className="v-2"></div>
                </div>
            </div>
            <div className="card">
                <div className="indiv-card">
                    <div className="avatar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M24.6668 26H19.3335" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 28.6667V23.3333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.2135 14.4933C16.0801 14.48 15.9201 14.48 15.7735 14.4933C12.6001 14.3867 10.0801 11.7867 10.0801 8.58666C10.0668 5.31999 12.7201 2.66666 15.9868 2.66666C19.2535 2.66666 21.9068 5.31999 21.9068 8.58666C21.9068 11.7867 19.3735 14.3867 16.2135 14.4933Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.9867 29.08C13.5601 29.08 11.1467 28.4667 9.30672 27.24C6.08005 25.08 6.08005 21.56 9.30672 19.4133C12.9734 16.96 18.9867 16.96 22.6534 19.4133" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p className="card-title" style={{fontSize: "1.05rem", fontWeight: "600"}}>Open an account.</p>
                    <p style={{fontSize: "0.88rem"}}>Open an account and open your world to more.</p>
                </div>
                <div className="indiv-card">
                    <div className="avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <path d="M3.33333 16.8133H26" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M26 13.7067V23.24C25.96 27.04 24.92 28 20.96 28H8.37337C4.3467 28 3.33333 27 3.33333 23.0267V13.7067C3.33333 10.1067 4.17333 8.94667 7.33333 8.76C7.65333 8.74667 8.00003 8.73334 8.37337 8.73334H20.96C24.9866 8.73334 26 9.73334 26 13.7067Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M30 8.97333V18.2933C30 21.8933 29.16 23.0533 26 23.24V13.7067C26 9.73333 24.9866 8.73333 20.96 8.73333H8.37337C8.00003 8.73333 7.65333 8.74667 7.33333 8.76C7.37333 4.96 8.41337 4 12.3734 4H24.96C28.9866 4 30 5 30 8.97333Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.66666 23.7467H9.95995" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.8133 23.7467H17.4" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    
                    </svg>
                    </div>
                    <p className="card-title" style={{fontSize: "1.05rem", fontWeight: "600"}}>Card Request Form</p>
                    <p style={{fontSize: "0.88rem"}}>Cards you can use anywhere for all your financial ...</p>
                </div>
                <div className="indiv-card">
                    <div className="avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <path d="M24.3867 18.0667C23.8267 18.6133 23.5067 19.4 23.5867 20.24C23.7067 21.68 25.0267 22.7333 26.4667 22.7333H29V24.32C29 27.08 26.7467 29.3333 23.9867 29.3333H10.52C11.6267 28.36 12.3334 26.9333 12.3334 25.3333C12.3334 22.3867 9.9467 20 7.00004 20C5.7467 20 4.5867 20.44 3.6667 21.1734V15.3467C3.6667 12.5867 5.92003 10.3333 8.68003 10.3333H23.9867C26.7467 10.3333 29 12.5867 29 15.3467V17.2667H26.3067C25.56 17.2667 24.88 17.56 24.3867 18.0667Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.6667 15.3467V10.4534C3.6667 8.8667 4.64003 7.45331 6.12003 6.89331L16.7067 2.89331C18.36 2.27997 20.1334 3.49335 20.1334 5.26668V10.3333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M30.4118 18.6269V21.3736C30.4118 22.107 29.8251 22.7069 29.0784 22.7336H26.4651C25.0251 22.7336 23.7051 21.6802 23.5851 20.2402C23.5051 19.4002 23.8251 18.6136 24.3851 18.0669C24.8784 17.5602 25.5584 17.2669 26.3051 17.2669H29.0784C29.8251 17.2936 30.4118 17.8935 30.4118 18.6269Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.6667 16H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.3334 25.3333C12.3334 26.9333 11.6267 28.36 10.52 29.3333C9.57337 30.16 8.3467 30.6667 7.00004 30.6667C4.05337 30.6667 1.6667 28.28 1.6667 25.3333C1.6667 23.6533 2.44004 22.1467 3.6667 21.1733C4.5867 20.44 5.7467 20 7.00004 20C9.9467 20 12.3334 22.3867 12.3334 25.3333Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.33337 23.6667V25.6667L5.6667 26.6667" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                    <p className="card-title" style={{fontSize: "1.05rem", fontWeight: "600"}}>Quick Loans</p>
                    <p style={{fontSize: "0.88rem"}}>Need Quick cash for Quick fixes? See how we can help.</p>
                </div>
            </div>
           
        </div>
    )
}