import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './part1.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className="background-image">
      <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
        <div className="flap"></div>
        <div className="body"></div>
        {isOpen && (
          <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
            <div className="letter-content">
            <br/><br/><br/>
              puttina roju shubakanshalu priyanka 😘🫂,<br/>
              naku unna okkagani oka happiness enti antey i should be very special by wishing uhh🥹, ala ney e 3 bday's wish chesa anukuntunna🤔, 
              ipudu 4th bday ki e letter. letter ey endhuku ani anukovachu it has a reason, "nuv oka roju adigav areyy oka letter ivvu ra naku🥹" ani malla nuve annav "intlo chustey problem avthadhi vodhu le😩" ani so ni kosam i have created a digital one🧠✍🏻 
              <br/><br/>

              manam e 3yrs lo navvukunnam😂, godava paddam👊🏻, thittukunnam🗣️ anni, kani avi anni saripettadaniki e letterlu kuda saripodhu 
              so i given a small recap - <br/>

              1ˢᵗ time manam meet ayinapudu obviously neku baga gurthu untadhi endhuku antey nek recent ganey nen gurthu chesa 😜<br/>2ᶮᵈ time - rushikonda degara meet ayyi restaurent👨‍🍳 ki vellam tharuvatha kilasagiri⛰️ baganey gurthu undey untadhiii<br/>3ʳᵈ time - marchipoyavu kadha ?? nijam cheppu ,  nen kuda marchipoyaa hehe😅😁 ,idi ela aytey marichipoyamo mana hard days ni kuda alaney marchipodham😶 
              avi kuda oka part ey oppukunta😅 kani "Anup" ani anaganey nek avi gurthu rakudadhu🥹<br/><br/>

              life chala different priyanka, manam chala face chesam😔 inka aypoledhu ipude start ayindhi , repu aney roju ela untadhoo nak tlidhu 
              adhi manchi👍🏻 avvani chedu👎🏻 avvani every point📍 nitho undathaniki try chestha, kadhu kadhu edharam kalisi try chedham🤝🏻 nak tlsu nuv chala strong anii💪🏻<br/><br/>

              priya nen andharila fake promises🐍 avi nak cheyadam radhu, na degra neku samudhram🌊 antha, aakasam🌥️ antha prema undi ani abadhalu cheppanu, 
              unnna glassudu🥛 antha ayna nek paniki vachey prema❤️‍🩹 ayyi undali ani korukunta anadhuke godava👊🏻 padatha, tharuvatha ninnun ila anna ani badha😔 padatha, 
              kani nuv antey naku istam leka kadhu🥺, kani chala chala miss avtha priya🥹, na dhursthilo miss avvadam antey ento cheppana, msg box📩 lo oka msg💬 -
              ah okka msg nidey🫵🏻, adhi nen chusina🐵 chudakapoyina🙈 undali ani korukunta nuv irritate🤪 cheyadam kuda adhi oka kind of happiness, adey 
              ah msg nak rakapotey ah day chala uncomfortable😣 edho la chala badha ga aypotha☹️ ,sarle ipudu bday🎂 roju avi anni endhuku <br/><br/>

              ninnu evadu priya andham🤩😍 ga levu anndu vadini vadi specs🤓 thuduchukomanu, nak kanna kadhu le😅 kani okkkk baguntav😚, mariii vizag beach🌊 la kakpoyina bheemili beach🏖️ la untav,
              kani ni vompulu🍑 shapulu👙 abhooo mari nen cheppalenu nak siggu👉🏻👈🏻🙈, kani kodhiga lavu🐷 ayyinattu unntav - "eyyy raa ayyna baguntadhi maa priya🥵, model ra model💃" <br/><br/>

              nen chala selfish🤳🐟 priya, ninnu ekkuvaga love❣️ cheyadam lo selfish, nitho nen ey ekkuva time⏳ spend cheyali ani selfish, ala ney neku nen mostly loveable person🤵 ga undali ani malla malla selfish, nadhi love kadhu selfish love haha😅🤣.  prathi roju☀️ prathi rathiri🌒 prathi nela inka samvasram ila selfish ganey love chesthu ney unta, nuv antey nak antha istam priyaa🫶🏻💗, 
              nen nek easy ga dhorikesa anii antuney unta🗣️ kani ah mata venuka unko mata undi priya😢 nak entho adhrustam undi kabatti nuv dhorikav🫵🏻🥹.<br/><br/>

              nuv aduguthu untav - "best memories📝 chepu manavi manavi👩🏻‍❤️‍👨🏻 ani", nitho best👌🏻 enti worest👎🏻 enti priyaa every moment📸 is most valuable moment✨💫, sare nuv adigav kabatti chepthunna -
              manam coaching📚 ki ellinapudu every dayy🌞 kalisevallam chala enjoy🕺💃🪩 chesa endhuku antey nak nithoo chala luxarious💸 ga undali ani em undadhu - roju chala simple👫🏻 ga bayataki elli, snacks🍿 em ayyna ala thintu kudhiritey beach🏖️ ki elli ala matladukuntu👩🏻‍❤️‍💋‍👨🏻 unndali ani untadhi.
              andhuke priya nak ah coaching📚 days nachuthaii🫶🏻. alaney papam na kosam evo evo chedham anukuntav😅🥲 kani anni fail👎🏻 avthai parledhu le its okay, ala ani ipudu cheyadam aapeyaka🤌🏻 - ni failure ayyna nadhi ayyna kalisi👫🏻 face chedham priyaa.
              <br/><br/>
              inka chala cheppali🥹 ani undi, migathavi manam epudu itey nen anukunna daily life cycle🔄 lo ki manam velipothamo apudu cheptha, antha varuku ninnu pathi kshanam⏳ marchipokunda premisthu❤️‍🔥 untuney unta.<br/><br/>

              ni gurinchi e rathiri✨🌓 antha alohisthu ni🫀<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Anup
              <br />
              <br />
                           
              <img src="https://github.com/AnupsaiBavireddy/page-background/blob/main/sign.jpg?raw=true" alt="Signature" className="sign" />
            </div>
          </div>
        )}
        <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
      </div>
    </div>
  );
};

export default LoveLetter;
