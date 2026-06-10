export function getSpecialRoomLabel(roomType) {
  return {
    award: "Award Room",
    challenge: "Challenge Room",
    cursed: "Cursed Room",
    rest: "Rest Room",
  }[roomType];
}

