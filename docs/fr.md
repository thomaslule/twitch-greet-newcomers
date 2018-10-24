[English]( {{ '/' | absolute_url }} ) - **Français**

Glissez ce bouton dans votre barre de favoris, cliquez dessus depuis votre page twitch :

<p class="bookmarklet-button"><a href="{% include greet-newcomers.bookmarklet %}" title="Glissez-moi dans votre barre de favoris">Greet Newcomers</a></p>

Cela vous permettra de repérer les nouveaux arrivants en ajoutant un émoji 👋 sur leur premier message.

![example screenshot]({{ '/assets/screenshot.png' | absolute_url }})

Vous pouvez aussi créer le marque-page manuellement en copiant ce code dans le champ URL :

```
{% include greet-newcomers.bookmarklet %}
```

> Oula, qu'est-ce que ça fait tout ce code ? 😨

Ce code ajoute une routine à la page web qui marque les nouveaux viewers dans le chat. Il oublie tout quand l'onglet est fermé ou rafraichi. Aucune donnée n'est collectée. Le résultat n'est visible que par vous.

Vous pouvez lire le code formatté [ici](https://github.com/thomaslule/twitch-greet-newcomers/blob/master/greet-newcomers.js).

Le code est transmis par [jsDelivr](https://www.jsdelivr.com/).
