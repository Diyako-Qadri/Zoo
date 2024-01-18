$(() => {
  console.log('connected');
  let currentAnimal = null;

 
  function Animal(
    name,
    lifespan,
    group,
    food,
    description,
    length,
    weight,
    found
  ) {
    (this.name = name),
      (this.lifespan = lifespan),
      (this.group = group),
      (this.food = food),
      (this.description = description),
      (this.length = length),
      (this.weight = weight),
      (this.found = found);
  }
  //creating single animal objects

  let echidna = new Animal(
    'Echidna',
    '50 years',
    'mammals',
    'insects such as ants and termites, beetle larvae and worms',
    "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
    '76 cm',
    '10 kg',
    'Throughout Australia'
  );
  console.log(echidna);

  let frillNeckedLizard = new Animal(
    'Frill-necked lizard',
    '20 years',
    'reptile',
    'Small insects and spiders',
    'When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.',
    '90 cm',
    '1 kg',
    'Northern Australia'
  );
  console.log(frillNeckedLizard);

  let cassowary = new Animal(
    'Cassowary',
    '20 years',
    'bird',
    'Plants matter like fruit, insects and small animals like mice amd lizards',
    'It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida',
    '1.7 m',
    '44 kg',
    'Queensland'
  );
  let Wallabies = new Animal(
    'Wallabies',
    '9 years',
    'Mammals',
    'Herbivore',
    'The yellow-footed rock wallaby is a marsupial—a pouched mammal—belonging to the same family as the kangaroo. This rock wallaby lives in mountain habitats in isolated portions of Australia. The yellow-footed rock wallaby moves easily around mountaintops, jumping as far as 13 feet (four meters) from rock to rock and even scaling cliffs and climbing trees. In the hot Australian summers, the wallaby is active only at night, while in the winter it can sometimes be seen sunbathing on the rocks.',
    '12 to 41 inches; tail: 10 to 29 inches',
    '4 to 53 pounds',
    'in mountain habitats in isolated portions of Australia.'
  );
  let Tasmanian_Devil = new Animal(
    'Tasmanian-Devil',
    'Up to 5 years',
    'Mammals',
    'Carnivore',
    "If you watch cartoons, the first thing you think of when you hear the name Tasmanian devil is probably Taz, the whirling, maniacal, always hungry, angry cartoon character. But Tasmanian devils are real and are feisty like the cartoon Taz! Tasmanian devils are the largest carnivorous (meat-eating) marsupials in the world. Tasmanian devils live in Tasmania, a large island just south of Australia. In fact, Tasmania is the only place where they are found in the wild. Adult Tasmanian devils are usually about the size of a small dog. They have coarse brown or black fur and a pudgy appearance that makes them look like baby bears. But don't let their cuteness fool you. They have sharp teeth and strong, muscular jaws that can deliver one of the most powerful bites of any mammal on Earth.",
    '20 to 31 inches',
    '9 to 26pounds',
    'south of Australia.'
  );
  let koala = new Animal(
    'Koala',
    '20 years',
    'Mammals',
    'Herbivore',
    'The koala is an iconic Australian animal. Often called the koala “bear,” this tree-climbing animal is a marsupial—a mammal with a pouch for the development of offspring.Though koalas look fuzzy, their hair is more like the coarse wool of a sheep. They have two opposing thumbs on their hands, and both their feet and hands have rough pads and claws to grab onto branches. They have two toes, fused together, on their feet, which they use to comb their fur.',
    '23.5 to 33.5 inches',
    ' 20 pounds',
    'the eucalyptus forests of southeastern and eastern Australia'
  );
  console.log(cassowary);

  const mapAnimalIterator = animal => {
    let arrayAnimalObjects = [cassowary, frillNeckedLizard, echidna];

    arrayAnimalObjects.map(animal =>
      console.log(
        `
            ${animal.name} lives ${animal.lifespan} and is present in ${animal.found}
               `
      )
    );
  };
  let arrayAnimalObjects = [cassowary, frillNeckedLizard, echidna];

  arrayAnimalObjects.map(animal =>
    console.log(
      `
        ${animal.name} lives ${animal.lifespan} and is present in ${animal.found}
           `
    )
  );

  const showAnimalInfo = animal => {
    $('.welcome').addClass('inactive');
    $('.main.content')
      .empty()
      .append(
        `
        <img src="./img/${animal.name}.jpg" class="animal-img" alt="">
        <h3>Name: ${animal.name}</h3>
        <p>${animal.description}</p>
        <p>${animal.food}</p>
        <p><a href="./${animal.group}.html" target="_blank">${animal.group}</a></p>
        `
      )
      .hide()
      .fadeIn(500);
  };
  
  const resetWelcome = () => {
    $('.main.content')
      .empty()
      .append(
        `<p class="welcome">Welcome to Changemaker´s Australian Animal Portal!</p>`
      );
    currentAnimal = null; 
  };

 
  const handleAnimalClick = animal => {
    if (currentAnimal === animal) {
      
      resetWelcome();
    } else {
      
      showAnimalInfo(animal);
      currentAnimal = animal; 
    }
  };

  $('.animal.Wallabies').on('click', () => handleAnimalClick(Wallabies));
  $('.animal.Tasmanian.Devil').on('click', () =>
    handleAnimalClick(Tasmanian_Devil)
  );
  $('.animal.Koala').on('click', () => handleAnimalClick(koala));
  $('.animal.cassowary').on('click', () => handleAnimalClick(cassowary));
  $('.animal.echidna').on('click', () => handleAnimalClick(echidna));
  $('.animal.frillNeckedLizard').on('click', () =>
    handleAnimalClick(frillNeckedLizard)
  );

  $(".food").on({
    mouseenter: function () {
      $(this).siblings().fadeTo(0, 0.3);
    },
    mouseleave: function () {
      $(this).siblings().fadeTo(0, 1);
    },
  });
});
