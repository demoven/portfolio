---
title: "Real-time Queue Management System"
date: "2025-08-01"
technologies: ["Angular", "Node.js", "MongoDB", "Microservices"]
image: "/src/assets/projects/accueil.png" # Chemin vers l'image du projet

---

## 🚀 Project Overview

During my internship at the **City Hall of La Seyne-sur-Mer**, I developed a custom digital queue management system to replace an outdated manual paper-ticket process. This system modernizes the reception and civil status services by providing real-time tracking of user flow.

## 🏗️ Architecture: Microservices Approach

The application was built using a **microservices-oriented architecture** to ensure modularity and reliability:

* **Auth Manager**: Handles secure login and verifies credentials against the municipal **LDAP**.
* **Ticket Manager**: A dedicated service managing the lifecycle and status of every queue entry.
* **Publik API Service**: An independent layer responsible for fetching and filtering external appointment data.
* **Real-time WebSocket Server**: Manages instant communication between all clients using **Socket.IO**.

## 🛠️ Technical Stack
* **Frontend**: Built with **Angular** for high-performance, interactive user interfaces.
* **Backend**: Developed with **Node.js** and **Express** using an asynchronous architecture.
* **Database**: **PostgreSQL** for structured storage of appointments and service logs.
* **Tools**: Development via **VS Code**, API testing with **Postman**, and server management with **Putty**.

## ✨ Key Features
* **Automated Sync**: Real-time retrieval of appointments via the **Publik API**.
* **Smart Logic**: Automated "absence detection" via **Cron jobs** that marks users absent after 5 minutes of delay.
* **Staff Dashboards**: Interactive interfaces for 9 specific desks to call the next user with one click.
* **Public Display**: A "Kiosk mode" interface on public screens with synchronized audio alerts.
* **Physical Ticketing**: Generation of physical tickets via local scripts and thermal printers.

## 📈 Impact & Results
1.  **Reduced Wait Times**: Optimized user circulation and better coordination between services.
2.  **Operational Efficiency**: Elimination of manual logbooks and reduced staff fatigue.
3.  **User Satisfaction**: A modernized and professional image for the City Hall's public reception.