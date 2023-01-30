function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return "This one is on me!" 
  }
   if (2500 > feet && feet > 2000) {
    return "I will gladly take your thirty bucks."
  }
   if (feet > 2500) {
    return "No can do."
  }
   else if ( 40 > feet && feet < 2000)
    return "That will be twenty bucks."
}

function ternaryCheckCity(city) {
  const city = "NYC"
  return city ? "Ok, sounds good." : "No go."  
}

function switchOnCharmFromTip(tip) {
  switch(tip) {
    case "generous":
      return 'Thank you so much.'
    case "not as generous":
      return "Thank you."
  }
}