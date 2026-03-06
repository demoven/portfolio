---
title: "Real-time Queue Management System (Internship)"
titleFr: "Système de Gestion de File d'Attente en Temps Réel (Stage)"
date: "2025-08-01"
technologies: ["Angular", "Node.js", "Microservices", "PostgresSQL"]
image: "/src/assets/projects/Seyne.jpg"
---

<div data-lang-content="en">

## 🚀 Project Overview

During my internship at the **City Hall of La Seyne-sur-Mer**, I developed a custom digital queue management system to replace an outdated manual paper-ticket process. This system modernizes the reception and civil status services by providing real-time tracking of user flow.

---

## 🏗️ Architecture: Microservices Approach

The application was built using a **microservices-oriented architecture** to ensure modularity and reliability:

* **Auth Manager**: Handles secure login and verifies credentials against the municipal **LDAP**.
* **Ticket Manager**: A dedicated service managing the lifecycle and status of every queue entry.
* **Publik API Service**: An independent layer responsible for fetching and filtering external appointment data.
* **Real-time WebSocket Server**: Manages instant communication between all clients using **Socket.IO**.

---

## 🛠️ Technical Stack
* **Frontend**: Built with **Angular** for high-performance, interactive user interfaces.
* **Backend**: Developed with **Node.js** and **Express** using an asynchronous architecture.
* **Database**: **PostgreSQL** for structured storage of appointments and service logs.
* **Tools**: Development via **VS Code**, API testing with **Postman**, and server management with **Putty**.

---

## ✨ Key Features
* **Automated Sync**: Real-time retrieval of appointments via the **Publik API**.
* **Smart Logic**: Automated "absence detection" via **Cron jobs** that marks users absent after 5 minutes of delay.
* **Staff Dashboards**: Interactive interfaces for 9 specific desks to call the next user with one click.
* **Public Display**: A "Kiosk mode" interface on public screens with synchronized audio alerts.
* **Physical Ticketing**: Generation of physical tickets via local scripts and thermal printers.

---

## 📈 Impact & Results
1.  **Reduced Wait Times**: Optimized user circulation and better coordination between services.
2.  **Operational Efficiency**: Elimination of manual logbooks and reduced staff fatigue.
3.  **User Satisfaction**: A modernized and professional image for the City Hall's public reception.

</div>

<div data-lang-content="fr">

## 🚀 Présentation du projet

Durant mon stage à la **Mairie de La Seyne-sur-Mer**, j'ai développé un système de gestion de file d'attente numérique personnalisé pour remplacer un processus manuel obsolète par tickets papier. Ce système modernise les services d'accueil et d'état civil en permettant le suivi en temps réel du flux des usagers.

---

## 🏗️ Architecture : Approche Microservices

L'application a été construite selon une **architecture orientée microservices** pour assurer modularité et fiabilité :

* **Auth Manager** : Gère la connexion sécurisée et vérifie les identifiants via le **LDAP** municipal.
* **Ticket Manager** : Service dédié gérant le cycle de vie et l'état de chaque entrée en file.
* **Service API Publik** : Couche indépendante responsable de la récupération et du filtrage des données de rendez-vous externes.
* **Serveur WebSocket temps réel** : Gère la communication instantanée entre tous les clients via **Socket.IO**.

---

## 🛠️ Stack technique
* **Frontend** : Développé avec **Angular** pour des interfaces utilisateur interactives et performantes.
* **Backend** : Construit avec **Node.js** et **Express** selon une architecture asynchrone.
* **Base de données** : **PostgreSQL** pour le stockage structuré des rendez-vous et journaux de service.
* **Outils** : Développement via **VS Code**, tests API avec **Postman**, gestion serveur avec **Putty**.

---

## ✨ Fonctionnalités clés
* **Synchronisation automatique** : Récupération en temps réel des rendez-vous via l'**API Publik**.
* **Logique intelligente** : Détection automatique des absences via des **tâches Cron** qui marquent les usagers absents après 5 minutes de retard.
* **Tableaux de bord agents** : Interfaces interactives pour 9 guichets spécifiques permettant d'appeler l'usager suivant en un clic.
* **Affichage public** : Interface « Mode Kiosque » sur les écrans publics avec alertes sonores synchronisées.
* **Billetterie physique** : Génération de tickets physiques via des scripts locaux et des imprimantes thermiques.

---

## 📈 Impact & Résultats
1.  **Réduction des temps d'attente** : Optimisation de la circulation des usagers et meilleure coordination entre services.
2.  **Efficacité opérationnelle** : Suppression des registres manuels et réduction de la fatigue du personnel.
3.  **Satisfaction des usagers** : Une image modernisée et professionnelle pour l'accueil public de la mairie.

</div>