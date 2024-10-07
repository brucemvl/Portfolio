import booki from "../assets/images/booki.png"; import bluel from "../assets/images/sophie-bluel.png"; import nina from "../assets/images/nina.png"; import kasa from "../assets/images/kasa.png"; import monvieuxgrimoire from "../assets/images/monvieuxgrimoire.png"; import qwenta from "../assets/images/qwenta.png"; import onze from "../assets/images/11sur10.png"; import htmlcss from "../assets/logos/htmlcss.png"; import javascript from "../assets/logos/javascript.png"; import react from "../assets/logos/react.png"; import sass from "../assets/logos/sass.png"; import mongodb from "../assets/logos/mongodb.png"; import nodejs from "../assets/logos/nodejs.png"; import notion from "../assets/logos/notion.png"; import seo from "../assets/logos/seo.png"; import express from "../assets/logos/express.png"; import github from "../assets/logos/github.png"; import figma from "../assets/logos/figma.png"
import bookidesktop from "../assets/images/booki/bookidesktop.webp"; import bookitablette from "../assets/images/booki/bookitablette.webp"; import bookimobile1 from "../assets/images/booki/bookimobile1.png"; import bookimobile2 from "../assets/images/booki/bookimobile2.png"; import bluel1 from "../assets/images/bluel/bluel1.webp"; import bluel2 from "../assets/images/bluel/bluel2.webp"; import bluel3 from "../assets/images/bluel/bluel3.webp"; import bluel4 from "../assets/images/bluel/bluel4.webp"; import bluel5 from "../assets/images/bluel/bluel5.webp"; import nina1 from "../assets/images/nina/nina1.webp"; import nina2 from "../assets/images/nina/nina2.webp"; import nina3 from "../assets/images/nina/nina3.webp"; import nina4 from "../assets/images/nina/nina4.webp"; import nina5 from "../assets/images/nina/nina5.webp"
import kasa1 from "../assets/images/kasa/kasa1.webp"; import kasa2 from "../assets/images/kasa/kasa2.webp"; import kasa3 from "../assets/images/kasa/kasa3.webp"; import kasa4 from "../assets/images/kasa/kasa4.webp"; import qwenta1 from "../assets/images/menumaker/qwenta1.webp"; import qwenta2 from "../assets/images/menumaker/qwenta2.webp"; import qwenta3 from "../assets/images/menumaker/qwenta3.webp"; import qwenta4 from "../assets/images/menumaker/qwenta4.webp"; import qwenta5 from "../assets/images/menumaker/qwenta5.webp"; import qwenta6 from "../assets/images/menumaker/qwenta6.webp"; import qwenta7 from "../assets/images/menumaker/qwenta7.webp"; import onze1 from "../assets/images/onze/onze1.webp"; import onze2 from "../assets/images/onze/onze2.webp"; import onze3 from "../assets/images/onze/onze3.webp"

export const projets =
    [
        {
            "id": "1",
            "title": "Booki",
            "cover": booki,
            "pictures": [
                bookidesktop,
                bookitablette,
                bookimobile1,
                bookimobile2
            ],
            "description": "Création de la page d'accueil d'une agence de voyage en utilisant HTML et CSS et en integrant une interface responsive",
            "technologies": [
                {
                    "nom": "HTML & CSS",
                    "logo": htmlcss
                }

            ],
            "github": "https://github.com/brucemvl/Projet2.git",
            "objectifs": [
                "Implémenter une interface responsive avec HTML et CSS",
                "Intégrer du contenu conformément à une maquette avec HTML et CSS",
                "Versionner son projet avec Git et Github",
                "Installer un environnement de développement front-end"
            ]
        },
        {
            "id": "2",
            "title": "Portfolio architecte Sophie Bluel",
            "cover": bluel,
            "pictures": [
                bluel1,
                bluel2,
                bluel3,
                bluel4,
                bluel5
            ],
            "description": "créer une page web dynamique pour le site internet d'une architecte d'intérieur en utilisant JavaScript et en communiquant avec une API",
            "technologies": [
                {
                    "nom": "HTML & CSS",
                    "logo": htmlcss
                },
                {
                    "nom": "Javascript",
                    "logo": javascript
                }

            ],
            "github": "https://github.com/brucemvl/Projet3.git",
            "objectifs": [
                "Gérer les événements utilisateurs avec JavaScript",
                "Manipuler les éléments du DOM avec JavaScript",
                "Récupérer les données utilisateurs dans le JavaScript via des formulaires"
            ]
        },
        {
            "id": "3",
            "title": "Photographe Nina Carducci",
            "cover": nina,
            "pictures": [
                nina1,
                nina2,
                nina3,
                nina4,
                nina5
            ],
            "description": "Optimiser le référencement d'un site, en ameliorant ses performances et son accesibilité",
            "technologies": [
                {
                    "nom": "HTML & CSS",
                    "logo": htmlcss
                },
                {
                    "nom": "Javascript",
                    "logo": javascript
                },
                {
                    "nom": "Optimisation SEO",
                    "logo": seo
                }

            ],
            "github": "https://github.com/brucemvl/Projet4.git",
            "objectifs": [
                "Optimiser les performances d’un site web",
                "Débugger un site web grâce aux Chrome DevTools",
                "Rédiger un cahier de recette pour tester un site"
            ]
        },
        {
            "id": "4",
            "title": "Kasa",
            "cover": kasa,
            "pictures": [
                kasa1,
                kasa2,
                kasa3,
                kasa4
            ],
            "description": "Implémenter le front-end d’une application de location d'appartements en utilisant React et React Router pour créer une expérience utilisateur moderne et réactive",
            "technologies": [
                {
                    "nom": "React",
                    "logo": react
                },
                {
                    "nom": "Sass",
                    "logo": sass
                }


            ],
            "github": "https://github.com/brucemvl/Projet5.git",
            "objectifs": [
                "Initialiser une application avec Create React App",
                "Configurer la navigation entre les pages de l'application avec React Router",
                "Développer des éléments de l'interface d'un site web grâce à des composants React",
                "Mettre en œuvre des animations CSS",
                "Développer une interface web avec Sass"
            ]
        },
        {
            "id": "5",
            "title": "Mon vieux grimoire",
            "cover": monvieuxgrimoire,
            "pictures": [

            ],
            "description": "Développer le back-end d'un site de notation de livres",
            "technologies": [
                {
                    "nom": "MongoDb",
                    "logo": mongodb
                },
                {
                    "nom": "NodeJS",
                    "logo": nodejs
                }


            ],
            "github": "https://github.com/brucemvl/Projet6.git",
            "objectifs": [
                "Implémenter un modèle logique de données conformément à la réglementation",
                "Mettre en œuvre des opérations CRUD de manière sécurisée",
                "Stocker des données de manière sécurisée"
            ]
        },
        {
            "id": "6",
            "title": "Menu maker by Qwenta",
            "cover": qwenta,
            "pictures": [
                qwenta1,
                qwenta2,
                qwenta3,
                qwenta4,
                qwenta5,
                qwenta6,
                qwenta7

            ],
            "description": "Organiser la gestion de projet du developpement d'un site web",
            "technologies": [
                {
                    "nom": "Notion",
                    "logo": notion
                }


            ],
            "github": "https://github.com/brucemvl/Projet7.git",
            "objectifs": [
                "Découper une fonctionnalité en tâches pour préparer le développement",
                "Mettre en place une méthode de veille technologique",
                "Présenter la solution technique",
                "Rédiger les spécifications techniques d'un projet web à partir de besoins fonctionnels",
                "Suivre le déroulement du projet grâce à un outil de gestion de projet"
            ]
        },
        {
            "id": "7",
            "title": "11 sur 10",
            "cover": onze,
            "pictures": [
                onze1,
                onze2,
                onze3

            ],
            "description": "Projet personnel développé en utilisant React dans lequel j'affiche des données footbalistiques (classements, resultats, statistiques...) récupérées via une API",
            "technologies": [
                {
                    "nom": "React",
                    "logo": react
                },
                {
                    "nom": "Sass",
                    "logo": sass
                }


            ],
            "github": "https://github.com/brucemvl/Appli-Foot.git",
            "objectifs": [
                "Configurer la navigation entre les pages de l'application avec React-router",
                "Récuperer et exploiter des données via une API",
                "Utilisation de composants réutilisables",
                "Implementer une interface responsive"
            ]
        }

    ]

    export const frontend = [
        
            {
                "nom": "HTML & CSS",
                "logo": htmlcss
            },
            {
                "nom": "Javascript",
                "logo": javascript

            },
            {
                "nom": "React",
                "logo": react
            },
            {
                "nom": "Sass",
                "logo": sass
            }        
    ]

    export const backend = [
        {
            "nom": "MongoDB",
                "logo": mongodb
        },
        {
            "nom": "NodeJS",
                "logo": nodejs
        },
        {
            "nom": "express",
                "logo": express
        }
    ]

    export const outils = [
        {
            "nom": "Github",
            "logo": github
        },
        {
            "nom": "Figma",
            "logo": figma
        },
        {
        "nom": "Notion",
            "logo": notion
        },
        {
            "nom": "Optimisation SEO",
            "logo": seo
        }
    ]