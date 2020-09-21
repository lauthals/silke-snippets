# Ziel
Wenn die Seite ganz nach oben gescrollt ist, soll das Seitenlogo sehr groß und zentral im Header dargestellt werden. Sobald der Nutzer scrollt, soll es sich in einem sticky header auf die linke seite neben die Navigartion schieben und auf gewöhnliche Größe verkleinern. In vorliegender Variante soll dieses Verhalten nur auf der Startseite realisiert werden. Dies wird durch die HTML-Klasse `home` im `body`-Element gesteuert.

# Voraussetzungen
* [Plugin *Insert Headers and Footers*](https://wordpress.org/plugins/insert-headers-and-footers/) zum einfügen von benutzerdefiniertem Javascript
* [Theme *Twenty Twenty*](https://de.wordpress.org/themes/twentytwenty/) für den Sticky Header. Bei anderen Sticky-Header-Lösungen wird vorliegender Code vermutlich nicht mehr ohne Weiteres funktionieren. 

# Javascript
Das Javascript ist unter *Einstellungen/Insert Headers and Footers* im Footer einzufügen. Dieses speichert zum einen die aktuelle Scroll-Position im `data-scroll`-Attribut des `html`-Elements um darauf im CSS zuzugreifen und ändert das `src`-Attribut im `img` des Logos, da sich dies nicht über CSS lösen lässt.

# CSS
Das CSS steuert das genaue Erscheinungsbild des angepassten Headers und fixt ein paar Layout-Issues, die durch das neue Verhalten auftreten.
