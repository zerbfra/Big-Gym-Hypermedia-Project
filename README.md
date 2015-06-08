#Hypermedia Applications: Technology Part
###Zerbinati Francesco - 817415

This is the repository for my project of the Hypermedia Applications (web and multimedia) course, academic year 2014/15.

_Used frameworks_

* jQuery 2.1.4
* BootStrap 3.3.4
* FontAwesome 4.3.0

_Theme_

* I used an old HTML/CSS theme that wasn't really responsive and I needed to adapt it to properly work.
* I made some changes to the CSS
* I added several new classes to the CSS
* The layout was revisited in order to adopt an header/main/footer approach

_Logic/MVC Pattern_

* All the data are queried on a remote database via PHP scripts (contained in WEBSITE/php folder)
* jQuery handles all the links and display in the main section the content based on the passed parameters, the link structure is /#page&param
* The links are handled by pageManager.js 
* All the external JSON calls are made via axajCalls.js
* The menu behaviours are managed via nav.js

_PhoneGap Build_

The PhoneGap Build is available [here](https://build.phonegap.com/apps/1475653/share) 

###Homepage

* Aggiunti link a corsi migliori, con relative immagini
* Rimossi testimonials a favore di una div per più partner
* Aggiunto un box per eventuali promozioni

###Corsi

* Rivista la modalità di interazione: ora previsto un submenu invece di una pagina con selettori

###Elenco categorie

* Aggiunta una breve descrizione per ogni categoria, rimangono comunque i link alla descrizione e ai corsi

###Iscrizioni

* Realizzata, anche se non richiesta, la pagina riguardante le informazioni sui prezzi

###Istruttori

* Come richiesto, realizzata solo la pagina degli istruttori in ordine alfabetico
* Nell'implementazione compaiono, per ogni istruttore, sia i corsi che i ruoli

###Pagina istruttore

* Modificata l'impaginazione
* Feed twitter del mio account personale (@zerbfra)


###Contatti

* Rivista l'impaginazione
* Dove siamo e Contattaci sono ora in un unica pagina
* Il form è funzionante e invia una mail al mio indirizzo personale
* Le informazioni sulla location sono visibili in tutte le pagine in quanto contenute nel footer

##Note

Sono stati rimossi i link "Index" in quanto causavano ridondanza al sito: in particolare, avendo innestato alcuni link nel menu principale, e avendo mantenuto i link guided tours nella pagina dell'istruttore,
è come se i link "Index" per tornare alla pagina precedente siano ora Landmarks.

Mi sembrava ridontante includere un link identico a quello dell'header all'interno della pagina.