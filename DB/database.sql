-- Big Gym SQL Dump
-- Zerbinati Francesco
-- version 4.0.10.7
-- Generato il: Mag 26, 2015 alle 19:25
-- Versione del server: 5.6.23-log
-- Versione PHP: 5.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `uzerbinx_gym`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `categorie`
--

CREATE TABLE IF NOT EXISTS `categorie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `descrizione` text COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=5 ;

--
-- Dump dei dati per la tabella `categorie`
--

INSERT INTO `categorie` (`id`, `nome`, `descrizione`) VALUES
(1, 'Fitness', 'Il Fitness è un insieme di esercizi lo scopo dei quali è migliorare la salute del corpo. Il Fitness può includere molte discipline diverse, ognuna delle quali, secondo i bisogni delle singole persone, sarà orientata al raggiungimento di obiettivi specifici.'),
(2, 'Arti Marziali', 'Arti marziali e altri tipi di combattimento sono praticati in molti paesi del mondo, principalmente in forma di esercizio, mirata alla perfezione fisica e spirituale, che aiuta a trovare la pace interiore e l’armonia.'),
(3, 'Corpo e Mente', 'Si svolgono attività fisiche che sono state pensate per migliorare l’equilibrio psicofisico, per rivitalizzare il corpo e favorire un corretto flusso energetico attraverso la respirazione e la ricerca della consapevolezza corporea. '),
(4, 'Corsi per bambini', 'Tutti i corsi per bambini sono tenuti da istruttori qualificati. Abbiamo corsi di nuoto, di calcio, di pallavolo e pallacanestro. I genitori possono assistere alle lezioni, non c''è obbligo di cuffia per i corsi acquatici.');

-- --------------------------------------------------------

--
-- Struttura della tabella `corsi`
--

CREATE TABLE IF NOT EXISTS `corsi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `descrizione` text COLLATE latin1_general_ci NOT NULL,
  `categoria` int(11) NOT NULL,
  `livello` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `istruttore` int(11) NOT NULL,
  `sala` varchar(10) COLLATE latin1_general_ci NOT NULL,
  `immagine` varchar(100) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=4 ;

--
-- Dump dei dati per la tabella `corsi`
--

INSERT INTO `corsi` (`id`, `nome`, `descrizione`, `categoria`, `livello`, `istruttore`, `sala`, `immagine`) VALUES
(1, 'Yoga', 'Lo Yoga è una disciplina rivolta a migliorare il benessere psico-fisico e ad armonizzare il sistema energetico.\r\n\r\nLa lezione comprende la pratica delle posizioni (Asana) combinata ad esercizi di respirazione e di rilassamento profondo (Yoga Nidra).\r\nLe varie posizioni (Asana) mirano a disintossicare, tonificare e rendere più flessibile il corpo. Una pratica costante accresce l’energia vitale e permette di raggiungere uno stato di armonia corpo-mente.\r\n\r\nIl corso è rivolto a chiunque voglia migliorare la qualita’ della propria vita ritrovando un proprio ottimale  equilibrio fisico e mentale.', 3, 'Base', 1, '3', 's1.jpg'),
(2, 'Pilates', 'Il Pilates é un efficace sistema di allenamento che consente di raggiungere in maniera dolce una maggiore consapevolezza del proprio corpo, aiuta ad acquisire grazia e fluidità nei movimenti e a migliorare la propria forma fisica.\r\nVa a tonificare i muscoli dorsali e addominali in maniera efficace,consente di modellare tutto il corpo,attivare la muscolatura profonda,assumere una postura corretta e prevenire i dolori e le contrazioni muscolari alla schiena.\r\n\r\nOgni sessione di allenamento inizia con una fase dedicata alla respirazione,seguita poi da una sequenza di esercizi base, alcuni a corpo libero altri da eseguire con piccoli attrezzi.I movimenti  sono molto semplici lenti fluidi e coordinati, accompagnati da una melodia dolce cadenzata da un ritmo rilassato.\r\nLa lezione termina sempre con una fase piacevole di rilassamento,al fine di raggiungere ciascuno il proprio benessere psico-fisico.\r\nLa durata della lezione è di 60 minuti.', 1, 'Medio', 3, '2', 's2.jpg'),
(3, 'Capoeira', 'La Capoeira è un’arte marziale brasiliana che include molti elementi di acrobazia e necessariamente è accompagnata da musica tradizionale. E’ una lotta tra ballerini, una danza di gladiatori. E’ duello di compagni. E’ giocare, è ballare, è gareggiare. Simbiosi di forza e ritmo, poesia e agilità\r\n\r\nE’ un’arte completa, che comporta l’apprendimento sia della tecnica di lotta, di fondamenti di acrobatica, di strumenti musicali caratteristici (berimbau, pandeiro, atabaque, agogò) ed una base della lingua portoghese. Permette di rafforzare la muscolatura, sviluppa coordinamento e senso del ritmo.\r\n\r\nLa Capoeira di oggi è un’arte che combina la plastica e la bellezza della danza, musica, ritmo e acrobazie spettacolari.\r\n\r\nLa Capoeira ha la sua filosofia: non è solo un’arte marziale nella sua forma pura, è uno dei modi per evitare il conflitto, essere più intelligente, più veloce e più agile. Tutto insieme si trasforma in un arte incredibile e insolita che non ha analogie e che si chiama capoeira.', 2, 'Avanzato', 2, '1', 's3.jpg');

-- --------------------------------------------------------

--
-- Struttura della tabella `corsi_istruttori`
--

CREATE TABLE IF NOT EXISTS `corsi_istruttori` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `corso` int(11) NOT NULL,
  `istruttore` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=4 ;

--
-- Dump dei dati per la tabella `corsi_istruttori`
--

INSERT INTO `corsi_istruttori` (`id`, `corso`, `istruttore`) VALUES
(1, 1, 1),
(2, 2, 3),
(3, 3, 2);

-- --------------------------------------------------------

--
-- Struttura della tabella `info_palestra`
--

CREATE TABLE IF NOT EXISTS `info_palestra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `indirizzo` text COLLATE latin1_general_ci NOT NULL,
  `home1` text COLLATE latin1_general_ci NOT NULL,
  `home2` text COLLATE latin1_general_ci NOT NULL,
  `promo` text COLLATE latin1_general_ci NOT NULL,
  `partner` text COLLATE latin1_general_ci NOT NULL,
  `informazioni` text COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=2 ;

--
-- Dump dei dati per la tabella `info_palestra`
--

INSERT INTO `info_palestra` (`id`, `indirizzo`, `home1`, `home2`, `promo`, `partner`, `informazioni`) VALUES
(1, '<p class="address"><i class="fa fa-map-marker"></i>&nbsp;&nbsp;Via Camillo Golgi 14, 20133 Milano</p><p class="address"><i class="fa fa-phone"></i>&nbsp;&nbsp;(+39) 02 12345678</p><p class="address"><i class="fa fa-envelope-o"></i>&nbsp;&nbsp;info [at] big-gym.com</p>', '<p>Crediamo che il fitness debba essere accessibile a chiunque, per questo i nostri abbonamenti hanno prezzi ridottissimi e con possibilità di scegliere la durata.\r\n<br>Scopri subito tutte le nostre offerte!</p>', '<p>Questa palestra è giusta per me? <br>La risposta è semplice ed è certo che si! <br>Siamo gli unici ad offrire una così ampia varietà di corsi, dal risveglio muscolare alle arti marziali!</p>', '<h4 class="m_3">Invita un amico</h4>\r\n<p>Hai degli amici che si allenano? <br> Se inviti un amico e si iscrive alla palestra ti regaleremo un sessione personale gratuita.</p>\r\n<p>Puoi anche visitare la sezione testimonials cliccando qui sotto: naviga tra le recensioni dei nostri clienti, scrivine una e condividila sui social networks!</p>', '<p> Dimentica i kit da palestra entry level e basso costo. <br> Nella nostra palestra forniamo sempre gli attrezzi migliori, top di gamma, che ti aiuteranno a raggiungere i tuoi obbiettivi facilmente ed efficacemente.</p>', '<p>Se vuoi puoi contattarci anche direttamente al telefono o via mail. I nostri orari di apertura sono generalmente dalle 8:00 di mattina alle 23:30 di sera.<br>Puoi anche venirci a trovare, sei sempre il benvenuto!</p>\r\n');

-- --------------------------------------------------------

--
-- Struttura della tabella `istruttori`
--

CREATE TABLE IF NOT EXISTS `istruttori` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(10) COLLATE latin1_general_ci NOT NULL,
  `specialita` varchar(10) COLLATE latin1_general_ci NOT NULL,
  `intro` text COLLATE latin1_general_ci NOT NULL,
  `descrizione` text COLLATE latin1_general_ci NOT NULL,
  `img_small` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `img` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `awards_html` text COLLATE latin1_general_ci NOT NULL,
  `qualifiche_html` text COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=4 ;

--
-- Dump dei dati per la tabella `istruttori`
--

INSERT INTO `istruttori` (`id`, `nome`, `specialita`, `intro`, `descrizione`, `img_small`, `img`, `awards_html`, `qualifiche_html`) VALUES
(1, 'Francesco', 'Yoga', '<h4>Corsi</h4><p>Istruttore Yoga Assistente Pilates</p><h4>Ruoli</h4><p>Responsabile Sala pesi</p>', 'Ha cominciato ad insegnare presso il Laboratorio di Yoga di Biella nel 1998 fino al 2006. Inoltre ha collaborato con il comune di Mongrando, con la Federazione Europea Yamabushi di Gaglianico, con la Polisportiva del C.O.N. I. Olympia''s di Biella, con l''associazione "Le Maree" di Biella. Conduce corsi dal 2003 con UPB Educa (Università Popolare Biellese), dove ha insegnato nelle sedi dei comuni di Biella, Mosso, Cossato, Mezzana, Verrone, Occhieppo Inferiore, tenendo corsi anche per bambini, terza età e gestanti. Fa parte dell''Organismo Consultivo Didattico di UPB come responsabile dell''Area Tematica Salute e Benessere.', 'about_img3.jpg', 'francesco.jpg', '<li>Presidente responsabile della Federazione in Italia</li><li>Vincitore premio Best Yoga 2014</li>', '<li>Licenza di Istruttore Yoga 2014</li>'),
(2, 'Angelo', 'Capoeira', '<h4>Corsi</h4><p>Istruttore Capoeira Assistente Zumba</p><h4>Ruoli</h4><p>Responsabile Sala danza</p>', 'Effettua corsi continuativi e stage di Capoeira in diverse palestre della città, in tutta Italia ed all''estero, con particolare attenzione alla Capoeira Regional che  rispetta,  dando  continuazione all''idealismo del suo creatore "Mestre Bimba"  e del proprio Maestro "Mestre Cunha", insegnando la Capoeira Accademica e preparando tecnici di vari livelli,  formando Istruttori e Maestri.', 'about_img7.jpg', 'angelo.jpg', '<li>Cintura rossa Brasile</li><li>Presidente responsabile della Federazione in Italia</li>', '<li>Effettua corsi continuativi e stage di Capoeira in diverse palestre della città.</li><li>Ha preparato tecnici di vari livelli,  formando Istruttori e Maestri.</li>'),
(3, 'Maria', 'Pilates', '<h4>Corsi</h4><p>Istruttore Pilates Assistente AquaZumba</p><h4>Ruoli</h4><p>Responsabile Piscina</p>', 'Nelle mie lezioni sia con gli allievi esperti sia con i principianti riesco ad ottenere ugualmente un allenamento altamente energico ma nello stesso tempo molto divertente. \r\n\r\nI miei studenti imparano a lavorare con le posture corrette. \r\n\r\nAdoro insegnare corsi Zumba. \r\n\r\nIl motivo è semplice: ogni corso è come una festa!', 'about_img2.jpg', 'maria.jpg', '<li>Premio Zumba Fitness+ 2013</li>', '<li>Licenza di Istruttore Aquazumba® 2012</li><li>Licenza di Istruttore Zumba®Fitness 2011</li>');

-- --------------------------------------------------------

--
-- Struttura della tabella `orari_corso`
--

CREATE TABLE IF NOT EXISTS `orari_corso` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `corso` int(11) NOT NULL,
  `giorno` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `orario` varchar(100) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=7 ;

--
-- Dump dei dati per la tabella `orari_corso`
--

INSERT INTO `orari_corso` (`id`, `corso`, `giorno`, `orario`) VALUES
(1, 1, 'Lunedi', '18:00 - 20:00'),
(2, 1, 'Mercoledi', '16:00 - 18:00'),
(3, 1, 'Venerdi', '20:00 - 22:00'),
(4, 2, 'Martedi', '20:00 - 22:00'),
(5, 3, 'Giovedi', '18:00 - 20:00'),
(6, 3, 'Venerdi', '16:00 - 18:00');

-- --------------------------------------------------------

--
-- Struttura della tabella `speciali_corso`
--

CREATE TABLE IF NOT EXISTS `speciali_corso` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `corso` int(11) NOT NULL,
  `testo` varchar(100) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=4 ;

--
-- Dump dei dati per la tabella `speciali_corso`
--

INSERT INTO `speciali_corso` (`id`, `corso`, `testo`) VALUES
(1, 2, 'Richiesto certificato medico'),
(2, 1, 'Munirsi di tappetino'),
(3, 3, 'Certificato medico non richiesto');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
