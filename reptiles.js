$(() => {
  const displayTitle = () => {
    $(".main.content").prepend(`<h3>Welcome to the Aussie Reptiles part of the Zoo, my dude</h3>`);
  };

  const removeTitle = () => {
    $(".main.content h3").remove();
  };

  class AussieReptiles {
    group = "reptile";

    constructor(name, lifespan, food, description, length, weight, location, smallimg, bigimg) {
      this.name = name;
      this.lifespan = lifespan;
      this.food = food;
      this.description = description;
      this.length = length;
      this.weight = weight;
      this.location = location;
      this.smallimg = smallimg;
      this.bigimg = bigimg;
    }
  }

  const frillNeckedLizard = new AussieReptiles(
    "Frill-Necked Lizard",
    "20 years",
    "Small insects and spiders",
    "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
    "90cm",
    "1kg",
    "Northern Australia",
    "./img/frilled-lizard-small.jpeg",
    "./img/frilled-lizard-big.jpeg"
  );

  const blueTongued = new AussieReptiles(
    "Blue-tongued Skink",
    "15 years",
    "Insects, fruits, and small vertebrates",
    "The Blue-tongued Skink is known for its distinctive blue tongue, which it uses as a warning signal. When threatened, it may hiss, flatten its body, and display its colorful tongue to deter predators.",
    "50cm",
    "0.5kg",
    "Eastern Australia",
    "./img/blue-tongue-small.jpeg",
    "./img/blue-thong-big.jpeg"
  );

  const taipanSnake = new AussieReptiles(
    "Taipan Snake",
    "15 years",
    "Small mammals and birds",
    "The Taipan is one of the world's most venomous snakes. Despite its potent venom, it is generally shy and prefers to avoid human encounters. It is known for its striking appearance and deadly bite.",
    "200cm",
    "3kg",
    "Central Australia",
    "./img/taipan-snake-small.jpeg",
    "./img/taipan-snake-big.jpeg"
  );

  const frilledDragon = new AussieReptiles(
    "Frilled Dragon",
    "15 years",
    "Insects and small vertebrates",
    "The Frilled Dragon, similar to the Frill-necked Lizard, has a frill that it displays when threatened. It also has a unique way of moving, using its hind legs and tail to glide from tree to tree in search of prey.",
    "70cm",
    "0.7kg",
    "Northern Australia",
    "./img/frilled-dragon-small.jpeg",
    "./img/frilled-dragon-big.jpeg"
  );

  const stimsonPython = new AussieReptiles(
    "Stimson's Python",
    "20 years",
    "Small mammals and birds",
    "Stimson's Python is a non-venomous snake with a calm disposition. It is known for its attractive coloration and is often kept as a pet. It constricts its prey before consuming it.",
    "120cm",
    "2kg",
    "Southern Australia",
    "./img/stimson-small.jpeg",
    "./img/stimson-big.jpeg"
  );

  const goanna = new AussieReptiles(
    "Goanna",
    "25 years",
    "Birds, eggs, and small mammals",
    "The Goanna is a large monitor lizard found across Australia. It is an excellent climber and forager, using its keen sense of smell to locate food. Some species of Goannas can reach impressive sizes.",
    "150cm",
    "5kg",
    "Various regions in Australia",
    "./img/goana-small.jpeg",
    "./img/goanna-big.jpeg"
  );

  const reptiles = [frillNeckedLizard, blueTongued, taipanSnake, frilledDragon, stimsonPython, goanna];

  const renderNames = (reptiles) => {
    $(".sidebar.content").empty();

    reptiles.forEach((reptile, index) => {
      $(".sidebar.content").append(`
        <p class="reptile-animal" data-index="${index}">
          ${reptile.name}
        </p>
      `);
    });
  };

  const renderDetails = (reptile) => {
    $(".displayed-content").empty().toggleClass("active").append(`
      <img class="animal-img" src="${reptile.smallimg}">
      <h4>${reptile.name}</h4>
      <p class="animal-description">${reptile.description}</p>
      <p class="animal-menu">Favorite food: ${reptile.food}</p>
      <p class="animal-lifespan">This animal can live for ${reptile.lifespan} years</p>
      <p class="animal-length">This animal is usually ${reptile.length}</p>
      <p class="animal-weight">This animal usually weighs ${reptile.weight}</p>
      <p class="animal-location">This animal usually lives in ${reptile.location}</p>
      <p class="animal-link"><a href="./reptiles.html">This animal belongs to the ${reptile.group} group!</a></p>
    `);
  };

  const handleClick = (index) => {
    const selectedReptile = reptiles[index];
    removeTitle();
    renderDetails(selectedReptile);
    setTimeout(() => {
      if ($(".main.content h3").length) {
        removeTitle();
      } else {
        removeTitle();
        $(".main.content").prepend("<h3>Welcome back to the Aussie Reptiles part of the Zoo, my dude</h3>");
      }
    }, 250);
  };

  const registerClick = () => {
    $(".sidebar.content .reptile-animal").on("click", function () {
      const index = $(this).data("index");
      handleClick(index);
    });
  };

  renderNames(reptiles);
  displayTitle();
  registerClick();
});
