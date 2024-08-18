import React, { forwardRef } from 'react'

const Mission = forwardRef((props, ref) => {
  return (
    <div className='mt-10 dark:text-white text-black font-display' ref={ref}>
      <h1 className='font-bold text-3xl text-center mb-4'>
      Unsere Mission
      </h1>
      <p className='text-center'>
        IB-Secure hat es sich zur Aufgabe gemacht, die Eigentumsrechte an persönlichen Daten zu den rechtmäßigen Besitzern zurückzubringen - nämlich Ihnen. Mit unserer Plattform haben Sie die volle Kontrolle darüber, wer Zugriff auf Ihre Daten hat und wofür diese genutzt werden dürfen.
      <br/>
        In der heutigen digitalen Welt sind persönliche Daten von unschätzbarem Wert. Unternehmen wie Google, Amazon und Facebook nutzen die Daten ihrer Nutzer als eine der wichtigsten Einnahmequellen. Diese Daten, die Sie täglich durch Ihre Online-Aktivitäten erzeugen, werden gesammelt, analysiert und oft ohne Ihr Wissen oder Ihre Zustimmung verkauft. Doch wie wird der Preis für diese Daten festgelegt, und warum ist das so problematisch?
        Der Wert Ihrer Daten
      <br/>
        Der Preis für persönliche Daten setzt sich aus verschiedenen Faktoren zusammen, darunter Ihre demografischen Merkmale, Ihr Verhalten im Internet und Ihre Kaufgewohnheiten. Je genauer und umfassender die Daten sind, desto wertvoller sind sie für Unternehmen. Sie nutzen diese Informationen, um gezielte Werbung zu schalten, Produkte zu empfehlen oder sogar Ihre Vorlieben und Interessen zu beeinflussen. In dieser Datenökonomie sind es jedoch oft die großen Akteure, die den Löwenanteil der Gewinne einstreichen, während die eigentlichen Eigentümer der Daten - die Nutzer - leer ausgehen.
        Wie IB-Secure funktioniert
      <br/>
        IB-Secure bietet Ihnen einen persönlichen Freigabebereich, über den Sie selbst entscheiden können, wem Sie den Zugriff auf Ihre Daten erlauben. Dieser Bereich ist durch eine Kombination aus Blockchain-Technologie und sieben hochentwickelten Verschlüsselungsalgorithmen gesichert. Das bedeutet, dass niemand ohne Ihre ausdrückliche Zustimmung auf Ihre Daten zugreifen kann. Jeder Zugriff auf Ihre Daten wird transparent und unveränderbar in der Blockchain dokumentiert, sodass Sie immer genau wissen, wer was mit Ihren Daten macht.
      <br/>
        Durch die Nutzung von IB-Secure geben Sie die Kontrolle über Ihre Daten nicht an Dritte ab. Stattdessen behalten Sie das Eigentum und entscheiden selbst, wie und wann Ihre Daten verwendet werden dürfen. Damit setzen wir ein starkes Zeichen für den Schutz der Privatsphäre und die Wiederherstellung der Eigentumsrechte in der digitalen Welt.
      <br/>
        IB-Secure steht für eine Zukunft, in der Ihre Daten Ihnen gehören und nicht den großen Tech-Konzernen. Sie verdienen es, von den wertvollen Informationen, die Sie jeden Tag generieren, zu profitieren – und nicht nur als Produkt behandelt zu werden. Mit IB-Secure setzen wir diese Vision in die Tat um.
      </p>
    </div>
  )
})

export default Mission