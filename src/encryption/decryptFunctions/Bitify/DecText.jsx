import React from 'react'

/**
 * DEBITIFY TEXT
 * @param {STRING} STRING  
 * @returns STRING
 */
const DecText = (String) => {
  return String.replaceAll('017xAA','&').replaceAll('017xAB','.').replaceAll('017xAC','!').replaceAll('017xAD','"').replaceAll('017xAE','^').replaceAll('017xAF','°').replaceAll('017xBA','<').replaceAll('017xBB','>').replaceAll('017xBC','|').replaceAll('017xBD',',').replaceAll('017xBE',';').replaceAll('017xBF',':').replaceAll('017xCA','-').replaceAll('017xCB','_').replaceAll('017xCC','#').replaceAll('017xCD',"'").replaceAll('017xCE','+').replaceAll('017xCF','~').replaceAll('017xDA','*').replaceAll('017xDB','´').replaceAll('017xDC','`').replaceAll('017xDD','\\').replaceAll('017xDE','ß').replaceAll('017xDF','?').replaceAll('017xEA','}').replaceAll('017xEB','=').replaceAll('017xEC',']').replaceAll('017xED',')').replaceAll('017xEE','[').replaceAll('017xEF','(').replaceAll('017xFA','{').replaceAll('017xFB','/').replaceAll('017xFC','%').replaceAll('017xFD','$').replaceAll('017xFE','§').replaceAll('017xFF','²').replaceAll('0x11xFA','³').replaceAll('0x11xFB','ä').replaceAll('0x11xFC','Ä').replaceAll('0x11xFD','ü').replaceAll('0x11xFE','Ü').replaceAll('0x11xFF','ö').replaceAll('0x11xAA','Ö').replaceAll('0x11xAB','ñ').replaceAll('0x11xAC','á').replaceAll('0x11xAD','Á').replaceAll('0x11xAE','í').replaceAll('0x11xAF','Í').replaceAll('0x11xBA','é').replaceAll('0x11xBB','É').replaceAll('0x11xBC','ú').replaceAll('0x11xBD','Ú').replaceAll('0x11xBE','ó').replaceAll('0x11xBF','Ó').replaceAll('0x11xCA','ê').replaceAll('0x11xCB','Ê').replaceAll('0x11xCC','à').replaceAll('0x11xCD','À').replaceAll('0x11xCE','ì').replaceAll('0x11xCF','Ì').replaceAll('0x11xDA','è').replaceAll('0x11xDB','È').replaceAll('0x11xDC','ù').replaceAll('0x11xDD','Ù').replaceAll('0x11xDE','ò').replaceAll('0x11xDF','Ò').replaceAll('0x11xEA','ç').replaceAll('0x11xEB','â').replaceAll('0x11xEC','î').replaceAll('0x11xED','â').replaceAll('0x11xEF','û').replaceAll('0x110xAA','ô').replaceAll('0x110xAB','ï').replaceAll('0x110xAC','æ').replaceAll('0x110xAD','ð').replaceAll('0x110xAE','ý').replaceAll('0x110xBA','║').replaceAll('0x110xBB','Â').replaceAll('0x110xBC','Î').replaceAll('0x110xBD','Â').replaceAll('0x110xBE','Û').replaceAll('0x110xBF','Ô').replaceAll('0x110xCA','œ').replaceAll('0x110xCB','ë').replaceAll('0x110xCC','♪').replaceAll('0x110xCD','Õ').replaceAll('0x110xCE','õ').replaceAll('0x110xCF','·').replaceAll('0x110xDA','@').replaceAll('0x110xDB',' ').replaceAll('0x110xDC','≠').replaceAll('0x110xDD','≤').replaceAll('0x110xDE','≥').replaceAll('0x110xDF','ä').replaceAll('0x110NxDF','O').replaceAll('0x11M0xDF','Q').replaceAll('0x11P3xWF','YwM').replaceAll('0x15Y2xXF','EMD').replaceAll('0x0A0xWA','jAxN3hBR').replaceAll('0x0A0xQI','MDE3eE').replaceAll('xQ','R').replaceAll('bxT','DAxN3h');
}

export default DecText