---
title: "GarageWeek - Safetrix"
date: "2024-06-20"
technologies: ["Node.js", "Python"]
image: "/src/assets/projects/Safetrix/Safetrix_Poster.png" # 
gallery: 
  - "/src/assets/projects/Safetrix/Safetrix_Poster.png"
  - "/src/assets/projects/Safetrix/Safetrix1.png"
  - "/src/assets/projects/Safetrix/Safetrix2.png"
  - "/src/assets/projects/Safetrix/Safetrix3.png"
  - "/src/assets/projects/Safetrix/Safetrix4.png"
  - "/src/assets/projects/Safetrix/Safetrix5.png"
  - "/src/assets/projects/Safetrix/Safetrix6.png"
---

# 🏆 Safetrix – Connected Safety for Waste Management

**Winner of the "Garage Week" 2024 at ISEN Toulon.**

### Project Overview
Safetrix is an IoT solution designed to enhance worker safety in hazardous industrial environments. The project was developed during **Garage Week 2024**, an intensive **2-week innovation sprint** mandatory for all 3rd-year engineering students at ISEN Toulon, in partnership with **Veolia**.

Our team secured **1st place out of 20 teams** (approx. 115 students) by delivering a fully functional prototype that prevents accidents in waste sorting centers.

### 🛠 Technical Architecture & Prototype
We went beyond the concept phase to build a physical, working ecosystem comprising three main layers:

* **The Wearable (Receiver):**
    * Designed and **3D printed** a custom wristband enclosure.
    * Integrated an **Arduino** microcontroller with an **LCD screen** to display alerts (vibration + text).
    * Receives real-time safety instructions via Bluetooth.

* **The Infrastructure (Transmitters):**
    * Deployed **Raspberry Pi Zero** units acting as Bluetooth beacons.
    * Each Pi represents a specific "safety zone" and broadcasts the unique instructions relevant to that area (e.g., "Wear Hard Hat").

* **The Software (Control):**
    * Developed a **Python application** to manage the system.
    * Allows the site manager to configure each zone and update the specific safety messages transmitted by the Raspberry Pis to the wristbands.

### 🥇 Key Achievements
* **Rank:** **1st Place** (Winning Team).
* **Performance:** Successfully demonstrated a live working prototype to the jury.
* **Client:** **Veolia** (Waste Management & Utility Services).

### 👨‍💼 My Role: Project Manager
As the **Project Manager** of the winning team, I led the development from the initial brief to the final technical demo. My responsibilities included:
* **Agile Management:** Coordinating the hardware (Arduino/3D Print) and software (Python/Raspberry Pi) teams to ensure integration within the 2-week deadline.
* **Product Strategy:** Aligning the technical features with Veolia's industrial safety requirements.
* **Final Defense:** Leading the presentation and demonstration before a professional jury, highlighting our functional prototype's ability to reduce man-machine collision risks.