---
title: "Pixel War"
date: "2023-02-16"
technologies: ["C"]
image: "/src/assets/projects/Pixel.png" # Chemin vers l'image du projet
github: "https://github.com/demoven/Pixel-war"
demo: "https://www.youtube.com/watch?v=fEaZCWz2wh0"

---

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