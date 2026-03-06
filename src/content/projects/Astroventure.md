---
title: "Astroventure"
titleFr: "Astroventure"
date: "2023-05-16"
technologies: ["C"]
image: "/src/assets/projects/Astroventure/Astro_level2.png"
github: "https://github.com/demoven/Astroventure"
gallery: 
  - "/src/assets/projects/Astroventure/Astro_level2.png"
  - "/src/assets/projects/Astroventure/Astro_level1.png"
  - "/src/assets/projects/Astroventure/Astro_level2_1.png"
  - "/src/assets/projects/Astroventure/Astro_choice.png"
  - "/src/assets/projects/Astroventure/Astro_home.png"
  - "/src/assets/projects/Astroventure/Astro_levels.png"
demo: "https://www.youtube.com/watch?v=7vRKBEk6WEQ"
---

<div data-lang-content="en">

# 🚀 Astroventure – 2D Game Engine in C

> **Development project of a complete game engine "from scratch" in C, implementing physics, collisions, and memory management without third-party engines.**

---

## 📋 Project Overview
**Astroventure** is a retro platform game created as part of the Algorithmics module (S4) at **ISEN Toulon**.

The technical goal of this project was to master low-level concepts of graphics programming and memory management by designing a functional game without using existing engines like Unity or Unreal.

---

## 🛠️ Technical Architecture & Challenges

The project relies on an optimized Game Loop and a modular architecture.

### 1. Custom Physics Engine
Complete development of the character physics:
* **Gravity & Inertia:** Implementation of velocity vectors (`vx`, `vy`) for fluid and realistic jumping.
* **Collision System (AABB):** Axis-Aligned Bounding Box collision detection algorithm to handle interactions with the ground, platforms, and enemies.
* **Dynamic Scrolling:** A camera system that follows the player horizontally when they cross the 2/3 mark of the screen, recalculating the position of all entities (enemies, background, platforms) in real-time.

### 2. Advanced Memory Management (C)
* **Dynamic Allocation:** Use of pointers and structures (`struct Astronaute`, `struct Ennemi`) to manage game entities.
* **State Management:** Implementation of a state machine to navigate between different screens (Menu, Game, Pause, Victory) without memory leaks.
* **Optimized Rendering:** Rigorous loading and freeing of SDL2 textures and surfaces to ensure game stability.

---

## 🎮 Game Features

* **Gameplay:** Movement, jumping, patrolling enemies, and platforms.
* **Progression System:**
    * **Multiple Levels:** Increasing difficulty with new obstacles in Level 2.
    * **Save System:** Data persistence (best time, death count, rewards) via binary/text file reading and writing.
* **User Interface (HUD):** Real-time display of the timer and death counter.
* **Audio:** Management of sound effects and background music via `SDL_Mixer`.

</div>

<div data-lang-content="fr">

# 🚀 Astroventure – Moteur de jeu 2D en C

> **Projet de développement d'un moteur de jeu complet « from scratch » en C, implémentant la physique, les collisions et la gestion mémoire sans moteur tiers.**

---

## 📋 Vue d'ensemble du projet
**Astroventure** est un jeu de plateforme rétro créé dans le cadre du module d'Algorithmique (S4) à **l'ISEN Toulon**.

L'objectif technique de ce projet était de maîtriser les concepts bas niveau de la programmation graphique et de la gestion mémoire en concevant un jeu fonctionnel sans recourir à des moteurs existants comme Unity ou Unreal.

---

## 🛠️ Architecture technique & Défis

Le projet repose sur un Game Loop optimisé et une architecture modulaire.

### 1. Moteur physique personnalisé
Développement complet de la physique du personnage :
* **Gravité & Inertie :** Implémentation de vecteurs de vitesse (`vx`, `vy`) pour des sauts fluides et réalistes.
* **Système de collision (AABB) :** Algorithme de détection des collisions Axis-Aligned Bounding Box pour gérer les interactions avec le sol, les plateformes et les ennemis.
* **Scrolling dynamique :** Un système de caméra qui suit le joueur horizontalement lorsqu'il dépasse les 2/3 de l'écran, recalculant la position de toutes les entités en temps réel.

### 2. Gestion mémoire avancée (C)
* **Allocation dynamique :** Utilisation de pointeurs et de structures (`struct Astronaute`, `struct Ennemi`) pour gérer les entités du jeu.
* **Gestion des états :** Implémentation d'une machine à états pour naviguer entre les différents écrans (Menu, Jeu, Pause, Victoire) sans fuites mémoire.
* **Rendu optimisé :** Chargement et libération rigoureux des textures et surfaces SDL2 pour assurer la stabilité du jeu.

---

## 🎮 Fonctionnalités du jeu

* **Gameplay :** Déplacements, sauts, ennemis patrouilleurs et plateformes.
* **Système de progression :**
    * **Niveaux multiples :** Difficulté croissante avec de nouveaux obstacles au Niveau 2.
    * **Système de sauvegarde :** Persistance des données (meilleur temps, nombre de morts, récompenses) via lecture/écriture de fichiers binaires/texte.
* **Interface utilisateur (HUD) :** Affichage en temps réel du chronomètre et du compteur de morts.
* **Audio :** Gestion des effets sonores et de la musique de fond via `SDL_Mixer`.

</div>