window.cipher = {
  encode: (offset,descReceta) => {
    let upperCasedReceta = descReceta.toUpperCase();
    let neword='';
    let alfa='abcdefghijklmnopqrstuvwxyz'.toLocaleUpperCase();
    //console.log(offset,upperCasedReceta);
    for(let i=0 ; i<upperCasedReceta.length; i++){
      const letteriter=upperCasedReceta[i];
      let posicionAlpha = alfa.indexOf(letteriter);
      let posActual=(posicionAlpha+offset)%26;
      const newletra=alfa[posActual];
      console.log(newletra);
      
      if(letteriter===' '){
        neword+=letteriter;
        //console.log(neword);
        continue;
      }
    }
  },
  decode: (offset,descReceta) => {
    let textCifrado=descReceta.toUpperCase();
    let neword='';
    let alfa='abcdefghijklmnopqrstuvwxyz'.toLocaleUpperCase();
    for (let i = 0; i < textCifrado.length; i++) {
      const textIter = textCifrado[i];
      let posicAlpha = alfa.indexOf(textIter);
      let positNew=(posicAlpha-offset)%26;
      const newletra=alfa[positNew];
      console.log(newletra);
      
  }

    
  }
}