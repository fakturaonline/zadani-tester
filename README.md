# Další test scénáře 

## Stránka - Detail kontaktu

  * TS01: editace kontaktu - zahodit změny
      změna hodnoty ve formuláři -> zahodit změny
      kontrola zobrazení původních hodnot

  * TS02: editace kontaktu - změna země
      změna hodnoty na zemi s dalším územním členěním 
      kontrola zobrazení inputu kraj, výběr hodnoty 
      kontrola změny telefonní předvolby v závislosti na dané zemi

  * TS03: Přehled transakcí
      kontrola zobrazení pro různá časová období 
      **?
      (pokud označím fakturu jako zaplacenou a nastavím u ní datum zaplacení minulý měsíc/včera…, má se pak zobrazit v přehledu transakcí pokud zvolím option “Minulý měsíc/včera”? -> nezobrazuje se - BUG/FEATURA?)
  
  * TS04: Zaplacené/nezaplacené faktury - zobrazení
      kontrola switche “Jen zaplacené faktury”
      pro situaci, kdy má uživatel jak zaplacené, tak nezaplacené faktury
      pro situaci, kdy má uživatel pouze nezaplacené faktury

  * TS05: Zaplacení faktury
      označit fakturu jako zaplacenou
        kontrola obsahu tooltipu
        změna data vystavení faktury a kontrola změny data na tooltipu
        kontrola v sekci “Přehled transakcí” -> správné propsání hodnot počet faktur a cena
        kontrola grafu -> správné zobrazení hodnot na hoover
      označit fakturu jako nezaplacenou
        kontrola v sekci “Přehled transakcí” -> správné propsání hodnot počet faktur a cena
        kontrola grafu -> správné zobrazení hodnot na hoover

  * TS06: Hromadné akce
      žádná označená faktura
        hromadné akce nejsou dostupné
      označení jedné čí více faktur
        hromadné akce -> kontrola správného chování pro jednotlivé akce (v tabulce, v přehledu transakcí)

  * TS07: Akce pro jednotlivé faktury
      odeslání faktury
      stažení faktury
      duplikace
      editace
      smazání


  * TS08: Zobrazení sloupců
      přidání sloupců -> kontrola zobrazení v tabulce
      kontrola povinných sloupců 

## Stránka - Seznam kontaků

  * TS09: Smazat kontakt
      kontrola zobrazení flash message
      kontrola faktury propojené s kontaktem
      **?
      (co se má stát, když dojde ke smazání kontaktu:
      má se odstranit link na daný kontakt? 
      současné chování - na link se dá klinout a pak se uživateli zobrazí stránka 401 - nemělo by se tam zobrazovat spíš kontakt byl smazán/nenalezen?
      nicméně, když danou fakturu zduplikuji, tak se kontakt opět vytvoří a z nové faktury je dostupný, z té původní stále 401 - i když jsou úplně identické) 
      v přehledu faktur daného kontaktu se pak zobrazuje pouze 1 faktura



