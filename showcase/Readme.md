Il modello è costruito da due STRUCT principali: components e bodyElements.

Il file "model.js" disegna il modello con due distinte DRAW(): una volta richiamata per disegnare la STRUCT rappresentante i componenti (DRAW(components)) ed una volta richiamata per disegnare il corpo del modello (DRAW(bodyElements)).

Il file "model (scmodel).js" contiene il modello in un'unica variabile scmodel (così come indicato) e lo disegna con l'esecuzione di  DRAW(scmodel), scmodel è una struct che unisce le due precedenti (scmodel = STRUCT([bodyElements,components])). Il tempo impiegato per la generazione del modello è però molto superiore a quello necessario con il file precedente.

Il risultato finale, per i due file, è assolutamente identico, infatti l'unica differenza riguarda l'unione o meno delle due strutture principali in un'unica STRUCT.