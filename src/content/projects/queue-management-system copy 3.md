---
title: "Real-time Queue Management System"
date: "2025-08-01"
technologies: ["Angular", "Node.js", "MongoDB", "Microservices"]
image: "/src/assets/projects/accueil.png" # Chemin vers l'image du projet

---
## 🚀 Project Overview
During my internship at the **City Hall of La Seyne-sur-Mer**, I designed and deployed a custom digital queue management system to replace an outdated manual paper-ticket process. This system modernizes the reception and civil status services by providing real-time tracking of user flow and improving internal coordination.

## 🏗️ Architecture: Microservices Approach
The application was built using a **microservices-oriented architecture** to ensure modularity and scalability. By decoupling core functionalities into independent managers, the system achieves higher reliability:

- **Auth Manager:** Handles secure login and verifies credentials against the municipal **LDAP**.
- **Ticket Manager:** A dedicated CRUD service managing the lifecycle of every queue entry.
- **Publik API Service:** An independent layer responsible for fetching and filtering external appointment data.
- **Real-time WebSocket Server:** Manages instant communication between all clients using **Socket.IO**.



[Image of Architecture of a microservices system]


## 🛠️ Technical Stack
* **Frontend:** **Angular** was used to build highly interactive dashboards for receptionists and desk agents[cite: 15, 339, 340].
* **Backend:** Developed with **Node.js** and **Express**, utilizing asynchronous operations to handle multiple requests without blocking the main event loop[cite: 15, 315, 319].
* [cite_start]**Database:** **PostgreSQL** serves as the robust storage for appointment data, user statuses, and service motifs[cite: 15, 345, 346].
* [cite_start]**Environment:** Development was managed in **Visual Studio Code**, with API testing via **Postman**[cite: 298, 299, 302, 303].

## ✨ Key Features
* [cite_start]**Automated Sync:** Real-time retrieval of daily appointments via the **Publik API**, including custom workflow filtering[cite: 121, 362, 369].
* [cite_start]**Smart Queue Logic:** An automated "absence detection" system using **Cron jobs** marks users as absent if they are more than 5 minutes late[cite: 358].
* [cite_start]**Staff Interfaces:** Dedicated columns for 9 specific desks (DR, Civil Status, etc.), allowing agents to call the next user with a single click[cite: 129, 130, 421, 423].
* [cite_start]**Public Display & Audio:** A "Kiosk mode" interface on public screens that plays an audio alert whenever a new ticket is called[cite: 213, 468, 469].
* [cite_start]**Physical Ticketing:** Integration with thermal printers to generate physical tracking tickets for users[cite: 219, 377, 380].

## 📈 Impact & Results
[cite_start]The project received unanimous approval from municipal staff and significantly improved the citizen experience[cite: 495, 504]:
* [cite_start]**Reduced Wait Times:** Optimized user circulation and eliminated "lost" users in the waiting area[cite: 155, 500, 502].
* [cite_start]**Staff Well-being:** Drastic reduction in vocal calls and manual paperwork, leading to decreased fatigue[cite: 156, 497, 499].
* [cite_start]**Digital Modernization:** Successfully transitioned a critical public service to a paperless, data-driven workflow[cite: 115, 558].