# TimeScape

# 📅 Interactive Wall Calendar

An interactive and visually rich **wall calendar component** built using **Next.js (React)**. This project simulates a real-world calendar experience with gesture-based interactions, aesthetic UI, and persistent notes.

---

## 🚀 Features

### 📆 Date Range Selection

* Click to select start and end dates
* Hover preview for range selection
* Highlighted selected range

### 🎞️ Gesture-Based Page Flip

* Drag up/down to flip between months
* Smooth 3D animation mimicking a real wall calendar
* Works on both **desktop (mouse)** and **mobile (touch)**

### 📝 Integrated Notes System

* Notes are stored **per month**
* Automatically persists using `localStorage`
* Switching months updates notes dynamically

### 🎨 Aesthetic UI Design

* Soft pastel wall background
* Realistic **wall-mounted calendar** with:

  * Hanging string
  * Visible screw/nail
  * Paper-like card with depth and shadows
* Monthly images for visual appeal

### 🎄 Holiday Indicators

* Highlights special dates like:

  * Christmas 🎄
  * New Year 🎉
  * Valentine's Day ❤️

### 📱 Fully Responsive

* Works across:

  * Desktop 💻
  * Tablet 📱
  * Mobile 📱
* Touch gestures supported for flipping

---

## 🧠 Design Approach

This project was designed to simulate a **real-world wall calendar** rather than a basic grid UI.

Key design decisions:

* **Gesture-based flipping** to mimic physical page interaction
* **Monthly notes** instead of per-date notes to match real calendar usage
* Strong visual separation between **wall (background)** and **calendar (foreground)**
* Use of shadows, layering, and gradients for depth

---

## 🛠️ Tech Stack

* **Next.js (App Router)**
* **React**
* **TypeScript**
* **CSS (custom styling, no UI libraries)**

---

## 📂 Project Structure

```
src/
├── app/
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── calendar/
│   │   ├── Calendar.tsx
│   │   └── CalendarGrid.tsx
│   │
│   └── notes/
│       └── NotesPanel.tsx
│
├── hooks/
│   └── useDateRange.ts
│
├── utils/
│   └── dateUtils.ts
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/jahnavigaddala/calendar-app.git
cd calendar-app
```

### 2. Install dependencies

```
npm install
```

### 3. Run the development server

```
npm run dev
```

### 4. Open in browser

```
http://localhost:3000
```

---

## 📸 Demo

Include your demo video link here (Google Drive / Loom / YouTube)

---

## 🧪 Key Functionalities to Try

* Select a date range
* Drag up/down to flip months
* Add notes for a month → switch → return
* Resize screen to test responsiveness

---

## 💡 Future Improvements

* Attach notes to specific date ranges
* Add holiday API integration
* Add animations like page curl effect
* Dark mode support

---

## 👤 Author

Gaddala Jahnavi

---

## 📌 Final Note

This project goes beyond basic requirements by focusing on **user experience, interaction design, and visual realism**, aiming to replicate a physical wall calendar in a digital format.
