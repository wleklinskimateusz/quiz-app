"use client";

export function useScore() {
  const addScore = () => {
    console.log(localStorage.getItem("score"));
    const current = localStorage.getItem("score");
    if (!current) {
      localStorage.setItem("score", "1");
    } else {
      localStorage.setItem("score", `${parseInt(current) + 1}`);
    }
  };
  const resetScore = () => {
    localStorage.setItem("score", "0");
  };
  const getScore = () => {
    return parseInt(localStorage.getItem("score") || "0");
  };
  return { addScore, resetScore, getScore };
}
