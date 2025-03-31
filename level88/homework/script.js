const sportsClub = {
    clubName: "Dynamo Tbilisi",
    sportType: "Football",
    foundedYear: 1925,
    achievements: {
      leagueTitles: 18,
      cupTitles: 13,
      internationalTitles: 1
    }
  };
  
  console.log("Property List:");
  console.log(Object.keys(sportsClub));
  
  console.log("\nValue List:");
  console.log(Object.values(sportsClub));
  
  console.log("\nDoes the sportsClub object have a sponsors property?");
  console.log("sponsors" in sportsClub ? "Yes" : "No");
  
  const additionalInfo = { stadiumCapacity: 55000 };
  const updatedSportsClub = { ...sportsClub, ...additionalInfo };
  
  console.log("\nUpdated sports club object:");
  console.log(updatedSportsClub);
  
  Object.freeze(updatedSportsClub);
  
  console.log("\nTrying to modify the frozen object:");
  try {
    updatedSportsClub.clubName = "Updated Name";
  } catch (error) {
    console.log("Error: Cannot modify the object, it is frozen.");
  }
  
  console.log("\nIs the sports club object frozen?", Object.isFrozen(updatedSportsClub));
  