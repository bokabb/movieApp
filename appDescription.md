## Movies App

__Struktura Foldera__

## Aplikacija se sastoji od CMS-a i od FrontEnd javnog prikaza ##
    Uključuje:
- html - index.html, cms.html (na tim stranicama nalaze se divovi u koje učitavamo forme ili druge stranice)
- css - css fajlove (layout.css i app.css)
- img - slike
- js – javascript  fajlove koje koristi aplikacija (app.js, commonFunction.js, frontend.js i demoData.js)


__OPIS__

__CMS (Content Manager System) OPIS__

- U CMS-u možemo unositi nove podatke, kao i menjati i brisati postojeće podatke 
(filmovi, žanrovi, glumci, godina, vreme trajanja filma, opis)
- CMS koristi app.js kao glavni fajl koji nam omogućava rad sa podacima koje koristi aplikacija
- Pored app.js, CMS koristi i fajl commonFunction.js,  gde se nalaze pomoćne funkcije koje koristi aplikacija

CMS stranica - cms.html (stranica na kojoj se nalaze divovi u koje učitavamo forme);

__App.js__

- Prilikom učitavanja stranice poziva se funkcija koja proverava da li je korisnik logovan,
    ako nije, poziva se funkcija koja prikazuje login formu;
- Nakon prikaza login forme,  dodaje se događaj (event) "click" za login dugme,
    - kad se klikne poziva se funkcija checkUser() koja proverava unete podatke u formi
- Funkcija checkUser() proverava podatke tako što poredi podatke iz forme sa podacima
 iz localStorage-a,
-	ako postoji korisničko ime, proverava da li je i password jednak passwordu unetom u formu, 
-	ako prođe i proveru password-a, poziva se funkcija koja postavlja vrednost za ključ "loggedUser" u localStorage-u,
-	 nakon toga stranica se reload-uje (tj.refresh-uje);
- funkcija initApp() - u slučaju da je korisnik logovan, ona se poziva 
- initApp()- pre svega dodaje događaj klik ("clik") na stavke u nav (navigacionom) meniju,
- svaka stavka u nav meniju ima custom data-form atribut, tako da kad se klikne na stavku,
    inicijalizuje se konstruktor AppManager i pozivaju se njegove metode getFormFromObject() i displayForm()

__getFormFromObject()__ - metoda prolazi kroz niz sa formama i postavlja traženu formu u konstruktoru
                          (kada pozivamo metodu šaljemo joj kao parametar naziv forme);
 __displayForm()__ - metoda preuzima postavljenu formu (objekat) iz konstruktora, prolazi kroz nju i 
                      poziva funkciju koja kreira tag u zavisnosti od prosleđenih parametara, 
                      kada se forma učita u div na stranici cms.html, dodaje događaj na dugme iz forme za unos
                     (poziva se funkcija addFormData());

__addFormData()__ - funkcija prolazi kroz tagove forme i dok prolazi kroz njih kreira objekat,
                                          za ključ postavlja id taga, a za vrednost value od taga

__displayTableData()__  - funkcija prikazuje tabelarno podatke iz localStorage-a, ima jedan parametar storageKey;
                        - dok prolazi kroz podatke kreira tabelu, 
                        - pored podataka dodajemo i checkbox polja sa klasom
                        - dok kreiramo tabelu u petlji postavljamo i checkbox polja kao i dugme za brisanje podataka
                        - dodajemo klik događaj na dugme za brisanje podataka, poziva se funkcija deleteDataObject()

__deleteDataObject()__  - funkcija prolazi kroz sva checkbox polja u tabeli, 
                        - ako su štiklirana, poredi njihov value (što je u stvari ID) sa id-em iz localStorage-a,
                        - ako nađe radi splice i postavlja novi niz u localStorage-a
                        - tabela se prikazuje u div-u ("appResults") na stranici cms.html
