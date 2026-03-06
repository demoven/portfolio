---
title: "Pixel War"
titleFr: "Pixel War"
date: "2023-02-16"
technologies: ["C"]
image: "/src/assets/projects/Pixel.png"
github: "https://github.com/demoven/Pixel-war"
demo: "https://www.youtube.com/watch?v=fEaZCWz2wh0"
---

<div data-lang-content="en">

# Pixel War 🎨

**Pixel War** is a collaborative real-time pixel art application inspired by the r/place phenomenon. Developed as a technical challenge for a Network Programming module, it allows multiple users to connect simultaneously to a central server to draw on a shared digital canvas.

---

## 🚀 Overview

The project demonstrates low-level systems programming and the implementation of a robust client-server architecture. It handles real-time data synchronization, ensuring that every pixel placed by a user is instantly visible to all other connected participants.

---

## 🛠️ Tech Stack

* **Language:** C (Standard C99)
* **Networking:** TCP/IP Sockets for reliable communication
* **I/O Multiplexing:** `poll()` system call to manage multiple concurrent client connections on the server side
* **Graphics:** SDL2 & SDL2_ttf for the client-side rendering engine
* **Testing:** CUnit for unit testing and ensuring protocol stability

---

## 🏗️ System Architecture

The application is split into two main components:

### Server-Side
* **State Management:** Maintains the master pixel matrix and user data structures.
* **Command Interpretation:** Processes incoming packets from clients to validate and execute pixel placements.
* **Flow Control:** Implements a rate-limiting system (pixels per minute) to prevent spam and ensure fair participation.

### Client-Side
* **Real-time Rendering:** Uses SDL2 to display the shared canvas and UI elements.
* **Input Handling:** Converts user mouse clicks into network packets following a custom protocol.
* **Synchronization:** Continuously listens for server updates to keep the local view synchronized with the global state.

---

## ⚙️ Key Features

* **Customizable Canvas:** The server can be launched with various dimensions (e.g., 50x25, 80x40).
* **Scalable Concurrency:** Engineered to handle dozens of simultaneous connections using non-blocking I/O.
* **Automated Testing:** High reliability achieved through rigorous testing of core logic with CUnit.

</div>

<div data-lang-content="fr">

# Pixel War 🎨

**Pixel War** est une application collaborative de pixel art en temps réel inspirée du phénomène r/place. Développée comme défi technique pour un module de Programmation Réseau, elle permet à plusieurs utilisateurs de se connecter simultanément à un serveur central pour dessiner sur un canvas numérique partagé.

---

## 🚀 Vue d'ensemble

Le projet illustre la programmation système bas niveau et l'implémentation d'une architecture client-serveur robuste. Il gère la synchronisation des données en temps réel, garantissant que chaque pixel placé par un utilisateur est instantanément visible pour tous les autres participants connectés.

---

## 🛠️ Stack technique

* **Langage :** C (Standard C99)
* **Réseau :** Sockets TCP/IP pour une communication fiable
* **Multiplexage I/O :** Appel système `poll()` pour gérer plusieurs connexions client concurrentes côté serveur
* **Graphiques :** SDL2 & SDL2_ttf pour le moteur de rendu côté client
* **Tests :** CUnit pour les tests unitaires et la stabilité du protocole

---

## 🏗️ Architecture du système

L'application est divisée en deux composants principaux :

### Côté Serveur
* **Gestion d'état :** Maintient la matrice de pixels principale et les structures de données utilisateurs.
* **Interprétation des commandes :** Traite les paquets entrants des clients pour valider et exécuter les placements de pixels.
* **Contrôle de flux :** Implémente un système de limitation de débit (pixels par minute) pour éviter le spam et assurer une participation équitable.

### Côté Client
* **Rendu temps réel :** Utilise SDL2 pour afficher le canvas partagé et les éléments d'interface.
* **Gestion des entrées :** Convertit les clics souris en paquets réseau selon un protocole personnalisé.
* **Synchronisation :** Écoute en continu les mises à jour du serveur pour maintenir la vue locale synchronisée avec l'état global.

---

## ⚙️ Fonctionnalités clés

* **Canvas personnalisable :** Le serveur peut être lancé avec différentes dimensions (ex. 50x25, 80x40).
* **Concurrence scalable :** Conçu pour gérer des dizaines de connexions simultanées avec des E/S non bloquantes.
* **Tests automatisés :** Haute fiabilité grâce à des tests rigoureux de la logique centrale avec CUnit.

</div>