const magicSquareReminder = {
  en: "As a reminder, a magic square is a matrix N * N whose numbers are distinct and between 1 and (N * N) where the sum of a line, a column or a diagonal is always equal to the same number.",
  fr: "Pour rappel, un carré magique est une matrice N * N dont les nombres sont distincts et compris entre 1 et (N * N) où la somme d'une ligne, d'une colonne ou d'une diagonale est toujours égale au même nombre.",
}

const projets = [
  {
    id: "open-source",
    title: { en: "open source projects", fr: "projets open source" },
    projects: [
      {
        id: "magic-square-generator",
        title: "magic square : generator",
        source: "https://github.com/remiboissise/magic-square-generator",
        img: "/logos/npm.svg",
        description: {
          en: [
            `This module generates a magic square of the desired size. ${magicSquareReminder.en}`,
          ],
          fr: [
            `Ce module génère un carré magique de la taille souhaitée. ${magicSquareReminder.fr}`,
          ],
        },
      },
      {
        id: "magic-square-solver-npm",
        title: "magic square : solver",
        source: "https://github.com/remiboissise/magic-square-solver",
        img: "/logos/npm.svg",
        description: {
          en: [
            `This module makes it possible to check if a matrix is a magic square or not. ${magicSquareReminder.en}`,
          ],
          fr: [
            `Ce module permet de vérifier si une matrice est un carré magique ou non. ${magicSquareReminder.fr}`,
          ],
        },
      },
      {
        id: "magic-square-solver-java",
        title: "magic square : solver",
        source: "https://github.com/remiboissise/magic-square/",
        img: "/logos/java.svg",
        description: {
          en: ["A solver to resolve the magic square."],
          fr: ["Un solveur pour résoudre un carré magique."],
        },
      },
      {
        id: "remiboissise-com",
        title: "remiboissise.com",
        source: "https://github.com/remiboissise/remiboissise.com",
        path: "https://www.remiboissise.com",
        img: "/logos/gatsby.svg",
        description: {
          en: [
            "Personal website built with Gatsby and React: bilingual, accessible and free of trackers.",
          ],
          fr: [
            "Site personnel développé avec Gatsby et React : bilingue, accessible et sans traceur.",
          ],
        },
      },
      {
        id: "tic-tac-toe",
        title: { en: "🎮 tic tac toe", fr: "🎮 morpion" },
        source: "https://github.com/remiboissise/morpion",
        path: "https://morpion.remiboissise.com",
        img: "/logos/react.svg",
        description: {
          en: [
            "Discovery of the React Framework. Creation of tic tac toe game.",
          ],
          fr: ["Découverte du Framework React. Création du jeu du Morpion."],
        },
      },
      {
        id: "snake",
        title: "🎮 snake",
        source: "https://github.com/remiboissise/snake",
        path: "https://snake.remiboissise.com",
        img: "/logos/react.svg",
        description: {
          en: ["Discovery of the React Framework. Creation of snake game."],
          fr: ["Découverte du Framework React. Création du jeu du Snake."],
        },
      },
      {
        id: "serpentron",
        title: "🎮 serpentron",
        source: "https://github.com/remiboissise/serpentron",
        path: "https://serpentron.remiboissise.com",
        img: "/logos/react.svg",
        description: {
          en: [
            "Creation of serpentron game. The goal of the game is to survive as long as possible without touching the opponent.",
          ],
          fr: [
            "Création du jeu serpentron. Le but du jeu est de survivre le plus longtemps possible sans toucher l'adversaire.",
          ],
        },
      },
      {
        id: "catmash",
        title: "🐈 catmash",
        source: "https://github.com/remiboissise/cat-mash",
        path: "https://catmash.remiboissise.com/",
        img: "/logos/react.svg",
        description: {
          en: ["A facemash-like app with cute cats."],
          fr: ["Une application semblable à Facemash, mais pour des chats."],
        },
      },
    ],
  },
  {
    id: "works",
    title: { en: "works", fr: "réalisations" },
    projects: [
      {
        id: "balizenn",
        title: "balizenn",
        path: "https://balizenn.com/",
        img: "/logos/balizenn.png",
        description: {
          en: [
            "Orientation solution inside complex buildings, totally independent of any physical material or internet connection.",
          ],
          fr: [
            "Solution d'orientation à l'intérieur de bâtiments complexes, totalement indépendante de tout matériel physique ou de toute connexion Internet.",
          ],
        },
      },
      {
        id: "obeinglish",
        title: "o'beinglish",
        path: "https://www.obeinglish.com/",
        img: "/logos/obeinglish.svg",
        logoHeight: 15,
        description: {
          en: [
            "o'bEiNGLISH is a platform for connecting trainers and students who want to learn English and/or maintain their level of English over time.",
            "Its method is based on three axes: pedagogical, motivation, continuous improvement.",
          ],
          fr: [
            "o'bEiNGLISH est une plate-forme pour connecter les formateurs et les étudiants qui souhaitent apprendre l'anglais et / ou maintenir leur niveau d'anglais au fil du temps.",
            "Sa méthode repose sur trois axes : pédagogique, motivation, amélioration continue.",
          ],
        },
      },
      {
        id: "franck-genser",
        title: "franck genser",
        img: "/logos/fg.png",
        whiteBackground: true,
        appStoreLink:
          "https://apps.apple.com/fr/app/franck-genser/id1464170441",
        playStoreLink:
          "https://play.google.com/store/apps/details?id=com.protagoras.franckgenser",
        description: {
          en: [
            "Mobile application enhancing the visitor experience for the Revelation show held in Paris in May 2019.",
          ],
          fr: [
            "Application mobile améliorant l'expérience du visiteur pour le salon Revelation, qui s'est tenu à Paris en mai 2019.",
          ],
        },
      },
    ],
  },
]

export default projets
