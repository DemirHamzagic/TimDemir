import React from 'react';
import '../styles/Pocetna.css';
function Pocetna() {
    return (
        <div>
            <div>
                <h1 className="Naslov">Welcome to Novi Pazar</h1>
                <img
                    className="Novi-Pazar-Vrbak"
                    src="https://www.serbia.travel/wp-content/uploads/2024/11/1920x650-Novi-pazar-autor-Shutterstock.jpg"
                ></img>
            </div>

            <div className="Novi-Pazar-Text">
                <h1>Dobrodošli u Novi Pazar – grad gde Istok susreće Zapad!</h1>
                <h3 className="Uvod">
                    Ušetajte kroz kaldrmisane sokake osmanske čaršije, okusite
                    autentične specijalitete, osetite duh tradicije i<br></br>
                    gostoprimstva koji se pamti. Novi Pazar vas poziva da
                    otkrijete spoj istorije, kulture i savremenog ritma života –
                    na mestu gde vreme stoji samo da biste uživali.
                </h3>
            </div>

            <div className="Div-Roditelj">
                <div className="Div-Hrana">
                    <h3>Ukusi Novog Pazara – tradicija na tanjiru!</h3>
                    <p className="paragraf">
                        Miris sveže pečenih mantija, topla lepinja iz furune,
                        sočna pita ispod sača i domaći jogurt koji sve
                        zaokružuje... U Novom Pazaru, hrana nije samo obrok – to
                        je doživljaj, nasleđe i ljubav pretočena u svaki
                        zalogaj. Dođi gladan – otići ćeš zaljubljen!
                    </p>
                    <img
                        className="Slika-Mantija"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZPYTfv9HG_CFGpC2nJU4DqKYHRL2_Vqk8yr_AjbIOV05yaPtMNpjF1JxaKcHSRRvfkik&usqp=CAU"
                    ></img>
                </div>

                <div className="Div-Tvrdjave">
                    <h3>Tvrđave Novog Pazara – svedoci vekova!</h3>
                    <p className="paragraf">
                        Izdižu se iznad grada kao tihi čuvari prošlosti – kamene
                        tvrđave Novog Pazara pričaju priče o sultanima,
                        trgovcima i vojnim pohodima. Prošetajte zidinama Stare
                        novopazarske tvrđave, uživajte u pogledu koji oduzima
                        dah i osetite duh vremena kada se istorija klesala u
                        kamenu. Svaka pukotina ima svoju priču – dođite da je
                        čujete.
                    </p>
                    <img
                        className="Slika-Tvrdjava"
                        src="https://www.ekapija.com/thumbs169/kula_motrilja_novi_pazar_1_210425_tw1024.jpg"
                    ></img>
                </div>

                <div className="Div-Kultura">
                    <h3>Čaršija Novog Pazara – duh starog zanata</h3>
                    <p className="paragraf">
                        Ako tražiš nešto jedinstveno, prošetaš čaršijom. Miris
                        kože, zvuk čekića starog sarača, šarenilo tepiha i
                        rukotvorina... Novi Pazar je mesto gde se zanat prenosi
                        s kolena na koleno, a svaka rukom izrađena stvar nosi
                        dušu majstora. Autentičan suvenir? Ovde ga praviš – ne
                        kupuješ.
                    </p>
                    <img
                        className="Slika-Zanata"
                        src="https://i0.wp.com/sandzaklive.rs/wp-content/uploads/2023/01/ZANAT.jpg?resize=754%2C470&ssl=1"
                    ></img>
                </div>
            </div>
        </div>
    );
}

export default Pocetna;
