"use client";

import { useState } from "react";
import CalendarGrid from "./CalendarGrid";
import NotesPanel from "../notes/NotesPanel";

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

const monthImages = [
  "/images/jan.jpg","/images/feb.jpg","/images/mar.jpg",
  "/images/apr.jpg","/images/may.jpg","/images/jun.jpg",
  "/images/jul.jpg","/images/aug.jpg","/images/sep.jpg",
  "/images/oct.jpg","/images/nov.jpg","/images/dec.jpg",
];

export default function Calendar() {
  const today = new Date();

  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const [flip, setFlip] = useState("");

  // 🔥 Drag state
  const [dragStartY, setDragStartY] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);

  const changeMonth = (dir: number) => {
    setFlip(dir > 0 ? "flip-up" : "flip-down");

    setTimeout(() => {
      setCurrentDate(
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + dir,
          1
        )
      );
      setFlip("");
    }, 300);
  };

  // 🖱️ Mouse
  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStartY(e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStartY === null) return;
    setDragOffset(e.clientY - dragStartY);
  };

  const handleMouseUp = () => {
    if (dragStartY === null) return;

    if (dragOffset < -80) changeMonth(1);
    else if (dragOffset > 80) changeMonth(-1);

    setDragStartY(null);
    setDragOffset(0);
  };

  // 📱 Touch
  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStartY === null) return;
    setDragOffset(e.touches[0].clientY - dragStartY);
  };

  const handleTouchEnd = () => {
    if (dragOffset < -80) changeMonth(1);
    else if (dragOffset > 80) changeMonth(-1);

    setDragStartY(null);
    setDragOffset(0);
  };

  return (
    <div className="container">

      <div className="calendar-card">

        {/* Hanging */}
        <div className="string"></div>
        <div className="nail"></div>

        {/* HERO */}
        <div className="hero">
          <img src={monthImages[currentDate.getMonth()]} />
          <div className="hero-title">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </div>
        </div>

        {/* CONTENT */}
        <div className="calendar-content">

          {/* Drag Area */}
          <div
            className="flip-wrapper"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`flip-page ${flip}`}
              style={{
                transform:
                  dragStartY !== null
                    ? `rotateX(${dragOffset / 2}deg)`
                    : undefined,
              }}
            >
              <CalendarGrid currentDate={currentDate} />
              <NotesPanel currentDate={currentDate} />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}