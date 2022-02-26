# GrooverTest

For the technical part, you can read READMEs for each part, [readme js](./js/README.md)
and [readme python](./python/README.md)

# Régressions:

> Quelle est votre approche de tests pour détecter des régressions?

Lorsqu'un test échoue, je commence par analyser si le problème ne viendrait pas d'un mauvais
lancement du test (environnement pas up, donnée manquante, ...).\
Si tout s'est lancé dans de bonne conditions, je regarde les logs, screenshots, vidéo, ... tous les
documents pour comprendre ce que le test essayait de faire, et ce qui a échoué.\
Une fois que j'ai compris ce qui s'est mal passé, je regarde dans le projet correspondant pour voir
les derniers changements qui ont été fait sur la partie fautive (`git blame` est mon ami, mais pas celui des
dev).\
Une fois le code responsable trouvé, je vais voir les dev responsables de ce changements,
soit la personne qui a fait le changement, soit la personne qui a validé la code review, puis je
vois avec eux si c'est une évolution produit, puis mise à jour des tests, ou bien un bug.

# Intégration:

> Comment abordez vous les tests d’intégration, illustrez avec certains de vos anciens projets.

Pour les tests d'intégration (je vais supposer d'API), je mets en place un environnement temporaire
branché sur une base de donnée non persistante.\
Puis je teste les endpoints comme un utilisateur final le ferai.

Dans mes anciens projets, nous avions une API pour stocker les rapports de tests, et nous avions une
étape de lancement de tests d'intégration pour vérifier que le contrat d'interface était toujours
respecté, et que la connection à la BDD se faisait toujours correctement.



# End to End

> Avez vous déja contribuer ou mis en place un environnement de tests end-to-end? si Oui, décrivez cette mise en place (architectures, outils utilisés, etc).

J'ai déjà contribué (et contribue toujours) à la mise en place d'environnements de tests. Pour les
outils utilisé, comme tout était sur eks, on a utilisé les mêmes objets, mais adaptés aux tests.\
Pour la partie exécution des tests end-to-end en eux même, on utilise du JAVA avec une surcouche à
la bibliothèque Selenium qui permet de lancer des navigateurs web et d'intéragir avec.

Pour orchéstrer les lancements et récupérer les artefacts de tests, on utilise jenkins.

Et pour la partie infrastructure, tout est hébergé sur eks.