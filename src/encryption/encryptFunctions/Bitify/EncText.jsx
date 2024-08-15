import React from 'react'

/**
 * BITIFY TEXT
 * @param {STRING} STRING
 * @returns STRING
 */
const EncText = (String) => {
  return String.replaceAll("&",'017xAA').replaceAll('.','017xAB').replaceAll('!','017xAC').replaceAll('"','017xAD').replaceAll('^','017xAE').replaceAll('°','017xAF').replaceAll('<','017xBA').replaceAll('>','017xBB').replaceAll('|','017xBC').replaceAll(',','017xBD').replaceAll(';','017xBE').replaceAll(':','017xBF').replaceAll('-','017xCA').replaceAll('_','017xCB').replaceAll('#','017xCC').replaceAll("'",'017xCD').replaceAll('+','017xCE').replaceAll('~','017xCF').replaceAll('*','017xDA').replaceAll('´','017xDB').replaceAll('`','017xDC').replaceAll('\\','017xDD').replaceAll('ß','017xDE').replaceAll('?','017xDF').replaceAll('}','017xEA').replaceAll('=','017xEB').replaceAll(']','017xEC').replaceAll(')','017xED').replaceAll('[','017xEE').replaceAll('(','017xEF').replaceAll('{','017xFA').replaceAll('/','017xFB').replaceAll('%','017xFC').replaceAll('$','017xFD').replaceAll('§','017xFE').replaceAll('²','017xFF').replaceAll('³','0x11xFA').replaceAll('ä','0x11xFB').replaceAll('Ä','0x11xFC').replaceAll('ü','0x11xFD').replaceAll('Ü','0x11xFE').replaceAll('ö','0x11xFF').replaceAll('Ö','0x11xAA').replaceAll('ñ','0x11xAB').replaceAll('á','0x11xAC').replaceAll('Á','0x11xAD').replaceAll('í','0x11xAE').replaceAll('Í','0x11xAF').replaceAll('é','0x11xBA').replaceAll('É','0x11xBB').replaceAll('ú','0x11xBC').replaceAll('Ú','0x11xBD').replaceAll('ó','0x11xBE').replaceAll('Ó','0x11xBF').replaceAll('ê','0x11xCA').replaceAll('Ê','0x11xCB').replaceAll('à','0x11xCC').replaceAll('À','0x11xCD').replaceAll('ì','0x11xCE').replaceAll('Ì','0x11xCF').replaceAll('è','0x11xDA').replaceAll('È','0x11xDB').replaceAll('ù','0x11xDC').replaceAll('Ù','0x11xDD').replaceAll('ò','0x11xDE').replaceAll('Ò','0x11xDF').replaceAll('ç','0x11xEA').replaceAll('â','0x11xEB').replaceAll('î','0x11xEC').replaceAll('â','0x11xED').replaceAll('û','0x11xEF').replaceAll('ô','0x110xAA').replaceAll('ï','0x110xAB').replaceAll('æ','0x110xAC').replaceAll('ð','0x110xAD').replaceAll('ý','0x110xAE').replaceAll('║','0x110xBA').replaceAll('Â','0x110xBB').replaceAll('Î','0x110xBC').replaceAll('Â','0x110xBD').replaceAll('Û','0x110xBE').replaceAll('Ô','0x110xBF').replaceAll('œ','0x110xCA').replaceAll('ë','0x110xCB').replaceAll('♪','0x110xCC').replaceAll('Õ','0x110xCD').replaceAll('õ','0x110xCE').replaceAll('·','0x110xCF').replaceAll('@','0x110xDA').replaceAll(' ','0x110xDB').replaceAll('≠','0x110xDC').replaceAll('≤','0x110xDD').replaceAll('≥','0x110xDE').replaceAll('ä','0x110xDF').replaceAll('O','0x110NxDF').replaceAll('Q','0x11M0xDF').replaceAll('YwM','0x11P3xWF').replaceAll('EMD','0x15Y2xXF').replaceAll('jAxN3hBR','0x0A0xWA').replaceAll('MDE3eE','0x0A0xQI').replaceAll('R','xQ').replaceAll('DAxN3h','bxT');  
}

export default EncText;