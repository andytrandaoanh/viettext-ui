function convertChar(inputChar){
    const TONE_DELIMITER =  "#TONE#";
    switch(inputChar) {
      
        case 65:
          return "A1"      
        case 68:
          return "D1"      
        case 69:
          return "E1"      
        case 79:
          return "O1"      
        case 85:
            return "U1"      
        case 97:
          return "a1"
        case 100:
            return "d1"
        case 101:
          return "e1"
        case 111:
            return "o1"
        case 117:
          return "u1"
        case 193:
            return "A1" + TONE_DELIMITER + "5"
        case 194:
            return "A3"  
        case 202:
            return "E2"  
        case 212:
            return "O2"  
        case 221:
              return "Y"  + TONE_DELIMITER + "5"
        case 224:
            return "a1" + TONE_DELIMITER + "2"
        case 225:
          return "a1" + TONE_DELIMITER + "5"
        case 226:
            return "a3"
        case 227:
          return "a1" + TONE_DELIMITER + "4"
        case 232:
            return "e1" + TONE_DELIMITER + "2"
        case 233:
          return "e1" + TONE_DELIMITER + "5"
        case 234:
            return "e2"
        case 236:
          return "i" + TONE_DELIMITER + "2"
        case 237:
            return "i" + TONE_DELIMITER + "5"
        case 242:
          return "o1" + TONE_DELIMITER + "2"
        case 243:
            return "o1" + TONE_DELIMITER + "5"
        case 244:
          return "o2"
        case 245:
            return "o1" + TONE_DELIMITER + "4"
        case 249:
          return "u1" + TONE_DELIMITER + "2"
        case 250:
            return "u1" + TONE_DELIMITER + "5"
        case 253:
          return "y" + TONE_DELIMITER + "5"
        case 258:
            return "A2" 
       case 259:
            return "a2" 
        case 272:
          return "D2" 
        case 273:
            return "d2"
        case 297:
          return "i" + TONE_DELIMITER + "4"
        case 361:
            return "u1" + TONE_DELIMITER + "4"
        case 416:
          return "O3" 
        case 417:
          return "o3" 
        case 431:
            return "U2"
        case 432:
            return "u2"
        case 7841:
          return "a1" + TONE_DELIMITER + "6"
        case 7843:
            return "a1" + TONE_DELIMITER + "3"
        case 7845:
          return "a3" + TONE_DELIMITER + "5"
        case 7847:
            return "a3" + TONE_DELIMITER + "2"
        case 7849:
          return "a3" + TONE_DELIMITER + "3"
        case 7851:
            return "a3" + TONE_DELIMITER + "4"
        case 7853:
          return "a3" + TONE_DELIMITER + "6"
        case 7855:
            return "a2" + TONE_DELIMITER + "5"    
        case 7857:
            return "a2" + TONE_DELIMITER + "2"
        case 7859:
          return "a2" + TONE_DELIMITER + "3"
        case 7861:
            return "a2" + TONE_DELIMITER + "4"
        case 7863:
          return "a2" + TONE_DELIMITER + "6"
        case 7865:
            return "e1" + TONE_DELIMITER + "6"
        case 7867:
          return "e1" + TONE_DELIMITER + "3"
        case 7869:
            return "e1" + TONE_DELIMITER + "4"
        case 7871:
          return "e2" + TONE_DELIMITER + "5"
        case 7873:
            return "e2" + TONE_DELIMITER + "2"
        case 7875:
          return "e2" + TONE_DELIMITER + "3"
        case 7877:
            return "e2" + TONE_DELIMITER + "4"
        case 7879:
          return "e2" + TONE_DELIMITER + "6"
        case 7881:
            return "i" + TONE_DELIMITER + "3"
        case 7883:
          return "i" + TONE_DELIMITER + "6"
        case 7885:
            return "o1" + TONE_DELIMITER + "6"
        case 7887:
          return "o1" + TONE_DELIMITER + "3"
        case 7889:
            return "o2" + TONE_DELIMITER + "5"
        case 7891:
          return "o2" + TONE_DELIMITER + "2"
        case 7893:
            return  "o2" + TONE_DELIMITER + "3"
        case 7895:
          return "o2" + TONE_DELIMITER + "4"
        case 7897:
            return "o2" + TONE_DELIMITER + "6"
        case 7899:
          return "o3" + TONE_DELIMITER + "5"
        case 7901:
            return "o3" + TONE_DELIMITER + "2"
        case 7903:
          return "o3" + TONE_DELIMITER + "3"
        case 7905:
            return "o3" + TONE_DELIMITER + "4"
        case 7907:
          return "o3" + TONE_DELIMITER + "6"
        case 7909:
            return "u1" + TONE_DELIMITER + "6"
        case 7911:
          return "u1" + TONE_DELIMITER + "3"
        case 7913:
            return "u2" + TONE_DELIMITER + "5"
         case 7915:
          return "u2" + TONE_DELIMITER + "2"
        case 7917:
            return "u2" + TONE_DELIMITER + "3"
        case 7919:
          return  "u2" + TONE_DELIMITER + "4"
        case 7921:
            return "u2" + TONE_DELIMITER + "6"
        case 7923:
          return "y" + TONE_DELIMITER + "2"
        case 7925:
            return "y" + TONE_DELIMITER + "6"
        case 7926:
              return "Y" + TONE_DELIMITER + "3"
        case 7927:
          return  "y" + TONE_DELIMITER + "3"
        case 7929:
            return "y" + TONE_DELIMITER + "4"
               
        default:
            return String.fromCharCode(inputChar);
            //return String(inputChar);
      } 
}

function convertWord(inputWord){
    let output = "";
    let chars = "";
    let tone = "1";
    const DELIM =  "#TONE#";

    for (let i = 0; i < inputWord.length; i++) {
        const charAndTone = convertChar(inputWord.charCodeAt(i));
        const compound = charAndTone.split(DELIM);
        if (compound.length === 2) {
            chars += compound[0];
            tone = compound[1];
        }

        else chars += compound[0];

    }
    
    output = chars + "_" + tone;
    return output;
    
}


export function convertSortCode(inputText){

    const words = inputText.split(" ");
    let output = "";
    for (let i=0; i < words.length; i++) {
        if (i === 0) output = convertWord(words[i]);
        else output += " " + convertWord(words[i]);
    }

    return output;

    
}