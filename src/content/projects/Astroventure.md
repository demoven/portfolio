---
title: "Astroventure"
date: "2023-05-16"
technologies: ["C"]
image: "/src/assets/projects/Astroventure/Astro_level2.png" # Chemin vers l'image du projet
github: "https://github.com/demoven/Astroventure"
gallery: 
  - "/src/assets/projects/Astroventure/Astro_level2.png"
  - "/src/assets/projects/Astroventure/Astro_level1.png"
  - "/src/assets/projects/Astroventure/Astro_level2_1.png"
  - "/src/assets/projects/Astroventure/Astro_choice.png"
  - "/src/assets/projects/Astroventure/Astro_home.png"
  - "/src/assets/projects/Astroventure/Astro_levels.png"
---

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