import Sebilj from '../assets/sebilj.webp'
import Vrbak from '../assets/vrbak.jpg'
import '../styles/onama.css'
import Sopocani from '../assets/manastirsop.jpg'
import Lejlek from '../assets/lejlek.jpg'
import Muzej from '../assets/muzej.jpg'
import Park from '../assets/park.jpg'
import React, { useState } from "react";








function Onama() {
  const [openModals, setOpenModals] = useState({}); 

  const openModal = (key) => {
    setOpenModals(prev => ({ ...prev, [key]: true }));
  };

 
  const closeModal = (key) => {
    setOpenModals(prev => ({ ...prev, [key]: false }));
  };

  return (
    <div className="width">
      <h1 className="naslovonama">Više o Novom Pazaru</h1>

      <div className="slike">
       <div className='textislika'>
        <div className="slika-kontejner" onClick={() => openModal('sebilj')}>
          <div className="slika">
            <img src={Sebilj} alt="Sebilj" />
            <div className="overlay-text">Saznaj više</div>
          </div>
        </div>
        {openModals.sebilj && (
          <div className="modal-text">
            <p>
              Sebilj u Novom Pazaru je prepoznatljiv simbol grada, inspirisan čuvenim sarajevskim Sebiljem.
               Nalazi se u centru grada, tik uz pešačku zonu i Stari grad. Ova tradicionalna osmanska česma,
                izrađena od drveta i postavljena na kamenoj bazi, predstavlja mesto okupljanja i odmaranja.
                 Sebilj ne služi samo kao izvor vode,već i kao podsetnik na bogatu kulturnu baštinu i orijentalni duh Novog Pazara.
            </p>
            <button onClick={() => closeModal('sebilj')} className='btn'>Close</button>
          </div>
          
        )}
        </div>

        <div className='textislika'>
        <div className="slika-kontejner" onClick={() => openModal('vrbak')}>
          <div className="slika">
            <img src={Vrbak} alt="Vrbak" />
            <div className="overlay-text">Saznaj više</div>
          </div>
        </div>
        {openModals.vrbak && (
          <div className="modal-text">
            <p>
              Vrbak je omiljeno izletište i šetalište Novopazaraca, smešteno uz reku Rašku.
               Poznat je po drvenim stazama, malim mostićima i kafićima koji se nalaze neposredno iznad vode.
                Ambijent Vrbaka je izuzetno prijatan – spoj prirode, vode i arhitekture u kojem se može uživati tokom cele godine.
               Leti je posebno popularno mesto za beg od gradske vreve, a zimi pruža miran i slikovit prizor.
            </p>
            <button onClick={() => closeModal('vrbak')} className='btn'>Close</button>
          </div>
        )}
        </div>
         <div className='textislika'>
        <div className="slika-kontejner" onClick={() => openModal('sopocani')}>
          <div className="slika">
            <img src={Sopocani} alt="Sopocani" />
            <div className="overlay-text">Saznaj više</div>
          </div>
        </div>
        {openModals.sopocani && (
          <div className="modal-text">
            <p>
             Manastir Sopoćani nastao je pod okriljem kralja Stefana Uroša I smešten nedaleko od izvora reke Raške. Ovaj dragulj srpske srednjovekovne države Nemanjića prostire se 17 km zapadno od Novog Pazara. Kralj Stefan Uroš I, treći sin kralja Stefana Prvovenčanog, ostavio je iza sebe monumentalno nasleđe koje nadmašuje sve prethodne srpske crkve svojom grandioznošću i lepotom.
            </p>
            <button onClick={() => closeModal('sopocani')} className='btn'>Close</button>
          </div>
        )}
        </div>
         <div className='textislika'>
        <div className="slika-kontejner" onClick={() => openModal('lejlek')}>
          <div className="slika">
            <img src={Lejlek} alt="Lejlek" />
            <div className="overlay-text">Saznaj više</div>
          </div>
        </div>
        {openModals.lejlek && (
          <div className="modal-text">
            <p>
              Lejlek džamija, poznata i kao Havale Ahmed-begova džamija, predstavlja najstariju džamiju u Sandžaku i jedan od najstarijih islamskih kulturno-istorijskih spomenika na tom području. Datira iz osmanskog perioda, a prvi pomen ove džamije potiče iz 1516. godine kada je zabeležena kao mesdžid Ahmet-begov.
            </p>
            <button onClick={() => closeModal('lejlek')} className='btn'>Close</button>
          </div>
        )}
        </div>
         <div className='textislika'>
        <div className="slika-kontejner" onClick={() => openModal('muzej')}>
          <div className="slika">
            <img src={Muzej} alt="Muzej" />
            <div className="overlay-text">Saznaj više</div>
          </div>
        </div>
        {openModals.muzej && (
          <div className="modal-text">
            <p>
             Muzej „Ras“ u Novom Pazaru osnovan je 27. juna 1952. godine kao Gradski muzej, a smešten je u centru grada, na Žitnom trgu, u staroj gradskoj kući tradicionalne arhitekture iz sredine 19. veka. Muzej je kompleksnog tipa i obuhvata oblasti arheologije, istorije, etnologije, numizmatike, orijentalistike, primenjene umetnosti i savremenog likovnog stvaralaštva. Proglašen je za instituciju od nacionalnog značaja 2013. godine.
            </p>
            <button onClick={() => closeModal('muzej')} className='btn'>Close</button>
          </div>
        )}
        </div>
         <div className='textislika'>
        <div className="slika-kontejner" onClick={() => openModal('park')}>
          <div className="slika">
            <img src={Park} alt="park" />
            <div className="overlay-text">Saznaj više</div>
          </div>
        </div>
        {openModals.park && (
          <div className="modal-text">
            <p>
             U srcu Novog Pazara prostire se Gradski park i tvrđava – mirna oaza ispod starih bedema iz 17. veka, koja je postala omiljeno mesto za šetnje, druženje i male kulturne događaje 

Park je uređen uz modernizaciju: posađeno je mnogo novih stabala, cveća i postavljen automatski sistem zalivanja za oko 13 000 m² zelenih površina, pored novih klupa i ležaljkica. Takođe, deo parka sada ima i letnju scenu, adaptiranu za koncerte i manifestacije, na kojoj se svake godine održavaju promocije, festivali i nagradne svečanosti .
            </p>
            <button onClick={() => closeModal('park')} className='btn'>Close</button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}


export default Onama