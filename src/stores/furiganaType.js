import { writable } from "svelte/store";

export const furiganaType = writable("romaji");

let type = "romaji"; // Default to romaji

if (
  typeof localStorage !== "undefined" &&
  localStorage.getItem("furiganaType")
) {
  type = localStorage.getItem("furiganaType");
  furiganaType.set(type);
}
