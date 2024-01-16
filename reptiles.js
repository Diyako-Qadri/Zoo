$(() => {
  $(".main.content").append(` <h3> Welcome to the Australian Zoo my dude </h3> `);

  class AussieReptiles {
    group = "reptile";

    constructor(name, lifespan, food, description, length, weight, location) {
      this.name = name;
      this.lifespan = lifespan;
      this.food = food;
      this.description = description;
      this.length = length;
      this.weight = weight;
      this.location = location;
    }
  }

  const frillNeckedLizard = new AussieReptiles(
    "Frill-Necked Lizard",
    "20 years",
    "Small insects and spiders",
    "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
    "90cm",
    "1kg",
    "Northern Australia"
  );

  const blueTongued = new AussieReptiles(
    "Blue-tongued Skink",
    "15 years",
    "Insects, fruits, and small vertebrates",
    "The Blue-tongued Skink is known for its distinctive blue tongue, which it uses as a warning signal. When threatened, it may hiss, flatten its body, and display its colorful tongue to deter predators.",
    "50cm",
    "0.5kg",
    "Eastern Australia"
  );

  const taipanSnake = new AussieReptiles(
    "Taipan Snake",
    "15 years",
    "Small mammals and birds",
    "The Taipan is one of the world's most venomous snakes. Despite its potent venom, it is generally shy and prefers to avoid human encounters. It is known for its striking appearance and deadly bite.",
    "200cm",
    "3kg",
    "Central Australia"
  );

  const frilledDragon = new AussieReptiles(
    "Frilled Dragon",
    "15 years",
    "Insects and small vertebrates",
    "The Frilled Dragon, similar to the Frill-necked Lizard, has a frill that it displays when threatened. It also has a unique way of moving, using its hind legs and tail to glide from tree to tree in search of prey.",
    "70cm",
    "0.7kg",
    "Northern Australia"
  );

  const stimsonPython = new AussieReptiles(
    "Stimson's Python",
    "20 years",
    "Small mammals and birds",
    "Stimson's Python is a non-venomous snake with a calm disposition. It is known for its attractive coloration and is often kept as a pet. It constricts its prey before consuming it.",
    "120cm",
    "2kg",
    "Southern Australia"
  );

  const goanna = new AussieReptiles(
    "Goanna",
    "25 years",
    "Birds, eggs, and small mammals",
    "The Goanna is a large monitor lizard found across Australia. It is an excellent climber and forager, using its keen sense of smell to locate food. Some species of Goannas can reach impressive sizes.",
    "150cm",
    "5kg",
    "Various regions in Australia"
  );

  const renderNames = () => {
    $(".sidebar.content").append(` 
           <p class="reptile-animal"> ${frillNeckedLizard.name} <p>  
     <p class="reptile-animal"> ${blueTongued.name} <p> 
     <p class="reptile-animal"> ${frilledDragon.name} <p> 
         <p class="reptile-animal"> ${stimsonPython.name} <p> 
         <p class="reptile-animal"> ${goanna.name} <p> 
    
    `);
  };
  renderNames();
});
