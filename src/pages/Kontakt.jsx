import React from 'react';
import '../styles/kontakt.css';

const Contact = () => {
    return (
        <div className="kontakt-stranica">
            <div className="kontakt-kontejner">
                <div className="kontakt-informacije">
                    <h2>Kontakt informacije:</h2>
                    <p>Slobodno nas kontaktirajte putem obrasca ili koristeći podatke ispod.</p>
                    <ul>
                        <li><strong>📍 Adresa:</strong> Ulica Neka 123, Novi Pazar, 36300</li>
                        <li><strong>📞 Telefon:</strong> +381 64 123 4567</li>
                        <li><strong>✉️ Email:</strong> nekiemail@gmail.com</li>
                        <li><strong>🕒 Radno vreme:</strong> Ponedeljak - Petak, 08:00 - 16:00</li>
                    </ul>
                </div>

                <form className="kontakt-form">
                    <h2>Posaljite nam poruku:</h2>
                    <label>
                        Vase ime:
                        <input type="text" placeholder="Ime Prezime" />
                    </label>
                    <label>
                        Email:
                        <input type="email" placeholder="vasemail@gmail.com" />
                    </label>
                    <label>
                        Vasa poruka:
                        <textarea placeholder="Vasa poruka" rows="4" ></textarea>
                    </label>
                    <button type="submit">Posalji</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
