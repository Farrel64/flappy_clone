Breaking-Walls
==============

COMMANDE GIT

Toutes les lignes de commande sont à faire dans le dossier Breaking-Walls

Creer une branche :
==============

"git branch test"

Ceci créer une branche appellé test qui est une copie de la branche master (branche principale).
Une fois la branche créée toutes les futures modifications seront faite sur cette branche pour éviter de défoncer la branche Master et anéantir le projet ;)


Voir sur quelle branche on est :
==============

"git branch"

Switcher entre branch :
==============

"git check out test"

Si on est sur la Master on ira sur la branche test

Enregistrer sur le github : (commit toujours avant de push)
==============

/n git add .
/n git commit -am "entrer le commentaire du pourquoi je fais ça"
/n git pull
/n git push origin test

Ceci sont les commandes complètes pour enregistrer sur la branche test.

"git add ."

Permet de récuperer tout les fichiers modifier dans le dossier et de les ajouter dans le commit.
Un commit est une sauvegarde, on peut faire plusieur commit à la suite sans pusher

"git commit -am "..." "

Permet de créer le commit avec sa description

"git pull"

Permet de mettre à jour les fichiers si par exemple d'autres personnes on pusher entre temps.

" git push origin test"

envoie le ou les commit sur la branche test


Cloner
==============

pour cloner la master : git clone "http..."

