import {HtmlContent} from '~/components/product-details/fragments/HtmlContent';
import {SymbolList} from '~/components/product-details/fragments/SymbolList';
import {Table} from '~/components/product-details/fragments/Table';

export const ProductShippingDelivery = () => {
  return (
    <section>
      <HtmlContent headline="Lieferung per Paketdienst">
        Der Versand kann über Paketdienstleister oder eine Spedition erfolgen.
        Paketfähige Artikel liefern wir mit DPD oder UPS. Eine Lieferung an
        Postfach-Adressen, Postfilialen oder Packstationen ist derzeit leider
        nicht möglich.
      </HtmlContent>
      <HtmlContent headline="Lieferung per Spedition">
        Bitte beachten Sie, dass die Zufahrtsmöglichkeit mit einem LKW, ggf.
        auch mit einem Sattel- oder Hängerzug (40 t, Länge bis 20 m, Mindesthöhe
        4 m) befahrbar ist. Es müssen Halte- und Entlademöglichkeiten vorhanden
        sein, sowie eine Rangierfläche von etwa 5 bis 8 m eingerechnet werden.
        Gegebenenfalls entscheidet der jeweilige Fahrzeugführer, ob die
        Anlieferung aus Gründen der Sicherheit und Risikovermeidung erfolgen
        kann oder nicht. Hierbei sind die gesetzlichen Vorschriften der
        Straßenverkehrs-Ordnung (StVO) zu beachten. Ist dies nicht der Fall oder
        Sie sind sich dahingehend unsicher, wenden Sie sich bitte vor der
        Bestellung an unser Kontakt-Center, hier haben Sie die Möglichkeit uns
        per Kontaktformular zu erreichen. Die Übergabe der Ware bei einer
        Lieferung durch eine Spedition erfolgt frei Bordsteinkante. Bei
        Anlieferung muss der Empfänger oder eine von ihm beauftragte Person
        anwesend sein, die den Erhalt der Ware ebenfalls auf dem Lieferschein
        bestätigen kann. Die Entladung selber muss auf einem befahrbaren,
        befestigten Untergrund direkt neben dem Fahrzeug möglich sein. Für die
        Zulässigkeit und Sicherung des Standortes bei Entladung, insbesondere
        bei öffentlichen Wegen, ist der Endkunde zuständig.
      </HtmlContent>
      <SymbolList
        headline="Unsere Versanddienstleister"
        symbolUrls={[
          'https://res.cloudinary.com/baywa-ag-p/image/upload/d_missing_article.jpg/q_auto:good/c_scale,h_40,f_auto/DemoContent/ups.jpg',
          'https://res.cloudinary.com/baywa-ag-p/image/upload/d_missing_article.jpg/q_auto:good/c_scale,h_40,f_auto/DemoContent/dpd.jpg',
          'https://res.cloudinary.com/baywa-ag-p/image/upload/d_missing_article.jpg/q_auto:good/c_scale,h_40,f_auto/DemoContent/schaeflein.jpg',
        ]}
      />
      <Table
        headline="Versandkosten"
        subline="Bitte beachten Sie unsere Sonderberechnung der Versandkosten im Warenkorb. Folgende Frachten (bei 19% MwSt) können
      erhoben werden"
        entries={[
          ['0 - 24 kg', '7,95 €'],
          ['25 - 50 kg', '9,95 €'],
          ['51 - 100 kg', '19,49 €'],
          ['101 - 150 kg', '34,95 €'],
          ['151 - 200 kg', '56,95 €'],
          ['201 - 300 kg', '79,95 €'],
          ['301 - 400 kg', '88,95 €'],
          ['401 - 500 kg', '95,95 €'],
          ['501 - 750 kg', '105,95 €'],
          ['751 - 1000 kg', '119,49 €'],
          ['1001 - 1250 kg', '136,49 €'],
          ['1251 - 1500 kg', '154,95 €'],
          ['1501 - 1750 kg', '174,49 €'],
          ['1751 - 2000 kg', '189,95 €'],
          ['2001 - 2500 kg', '210,49 €'],
          ['2501 - 3000 kg', '234,95 €'],
          ['3001 - 4000 kg', '282,95 €'],
          ['4001 - 5000 kg', '359,95 €'],
          ['5001 - 7500 kg', '455,95 €'],
          ['7501 - 10000 kg', '533,95 €'],
          ['10001 - 15000 kg', '545,95 €'],
          ['15001 - 20000 kg', '577,95 €'],
          ['20001 - 25000 kg', '690,95 €'],
        ]}
      />
      <Table
        subline="Für Express-Versand werden folgende Frachten (bei 19% MwSt.) erhoben:"
        entries={[
          ['0-50 kg', '10,00 €'],
          ['ab 50,1 kg', '39,90 €'],
        ]}
      />
    </section>
  );
};