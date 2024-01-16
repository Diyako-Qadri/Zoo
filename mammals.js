$(() => {
  //Diyako

  $('.mammals').on('click', () => {
    $('.main.content').empty(),
      $('.main.content')
        .append(
          `
      <img  class="mammals-img" src="./img/mammals.jpg"></img>
      `
        )
        .fadeIn(1000);
    $('.main.content')
      .append(
        `
      <h2> Mammals </h2>
      `
      )
      .toggle();
    $('.main.content')
      .append(
        `
      <div class="mammals-content"> 
      <h3>Fun fact about mammals: </p>
     
      <p> 1. Mammals feed their young milk.
       All mammals give birth to babies which are then fed on their mother’s milk. They don’t all give birth in the same way though, they can be divided into two categories:
       Prototheria - these mammals actually lay eggs and incubate them until they are ready to hatch. There are only two species of mammals on Earth that lay eggs. They are the platypus and the echidna.
       Theria - these mammals carry their young in their womb until they are ready to give birth. Mammals such as koalas and kangaroos are called ‘marsupials’ because their young must be carried in a pouch after birth in order to finish growing. 95% of mammals including humans, cows and bears are ‘Eutheria’ because once they have given birth their young doesn’t have to stay in a pouch and receive further nourishment.
       </p> <br> <br>
       <p>2. Mammals give their young survival skills.
       Mammals are brilliant at giving their young training and protection. Unlike lizards and snakes who abandon their eggs as soon as they have been laid, mammals stick around and help their young survive and learn how to find food and shelter.
       A great example of this is one of the most cooperative mammals on earth - the meerkat. They teach their young how to protect themselves from being injured by their main source of food, scorpions. The parents will firstly bring their young a dead scorpion to show them how to eat it, then an injured one and then an alive one, so they can learn the best technique to eat it while dodging the deadly tail!
       </p>
       <br> <br> 
       
       <p> 3. They can be furry or hairy.
       Mammals either have hair or fur. Even the mammals that you wouldn’t expect to have it such as whales have some form of fur when they are born.
       </p>
       <br> <br>
       <p>4. They regulate their body temperature.
       Mammals are warm-blooded animals. This means that it doesn’t matter if it is snowing or bright and warm, their body temperature will stay almost the same.
       Warm-blooded animals can remain active in colder climates for longer than cold-blooded animals, but they do have to burn more energy to stay warm. This means finding more food to eat!
       Reptiles are cold-blooded animals and their source of heat energy is the sun. This means that even though they don’t require as much food to stay alive as mammals, they struggle to survive when they are out of the sun.
       </p>
       <br> <br>
       <p> 5. Mammals have big brains!
       Mammals brains are more developed than most other animals, meaning their brains are much bigger. Species such as the chimpanzee, dolphins and of course humans are among the most intelligent animals.
       </p>
       <br> <br>
       <p> 6. They move on four limbs.
       Nearly all mammals are classed as ‘tetrapods’. This means that they move around on or have four limbs. Obviously, humans no longer have to use all four of our limbs to walk but if you think about a baby crawling, you can see how they learn to use fewer limbs as they get older.
       What about dolphins and whales? Well, it is believed that they once had four limbs but lost their hind legs through the process of evolution because they just don’t need them.
       </p>
       <br> <br>
       <p>7. There are thousands of different species of mammals.
       There are somewhere between 5,000 and 6,000 different species of mammals on Earth. Some of the most common include cows, pigs and rats. There are now a massive 7.8 billion humans in the world!
       </p>
       <br> <br>
       <p>8. The biggest mammal lives in the sea.
       The biggest mammal in the world is the blue whale. At it’s very heaviest, it weighs an incredible 160,000 kilograms. It’s also the loudest mammal on Earth, its call can be as loud as a bomb going off, reaching 188 decibels!
       </p>
       <br> <br>
       <p>9. The smallest mammal will surprise you!
       The very smallest mammal in the world is called the bumblebee bat, and it weighs just 2 grams - that’s like two skittles! They live in Thailand and Myanmar but unfortunately, scientists have put them on an endangered species list as they are slowly dying out due to humans disrupting its habitat.
       </p>
       <br> <br>
       <p>10. Mammals don’t have the same diets.
       If a mammal only eats meat, like a tiger, for example, they are called ‘carnivores’. If their diet consists only of plants, just like donkeys and camels, they are called herbivores. Mammals that like to eat a varied diet of meat and plant, like lots of humans choose to, are named omnivores.
       </p>
       <br> <br>
       <p> 10. Some mammals don't even have teeth!
       Mammals bodies have adapted to the needs of their environment, including what they eat. The anteater and the Baleen whale species have given up on teeth altogether. Their food source is insects and plankton - neither of which require much chewing.
       On land, the mammal with the most teeth is the giant armadillo, they can have up to 100 teeth. In the ocean, the Spinner Dolphin has up to 252 in its jaws.
       The only mammals known to have cavities in their teeth are human beings, bears and domesticated pets. It’s believed that this is because there is too much sugar in our diets - think about the bear that eats honey all day!
       </p>
       <br> <br>
       <p>11. Mammals lived alongside dinosaurs.
       The very first kind of mammal were tiny shrew-sized creatures humans have named the ‘morganucodontids’. Their size meant they could avoid the attention of the carnivorous dinosaurs, and it is believed that every mammal on Earth today descends from the surviving line of this mammal.
       Mammals had to live safely in the shadows until the dinosaurs were extinct. With the huge dominating animals gone, mammals could use as many of the Earth’s resources as they wanted and began to evolve into different species.
       </p>
        
       <p> 12. Only one mammal can fly.
       Bats are the only mammal that can fly. Even though birds are warm-blooded like mammals, they actually belong to a group of animals called ‘aves’. ‘Aves’ are characterised as warm-blooded vertebrates that have toothless beaks, feathers and lay eggs.
       </p>
        
       <p> 13. Mammals stay in the womb for different time periods.
       When a mammal is pregnant with its young it is called the ‘gestation period’. All mammals have different lengths of gestation periods depending on the need of their species. You may know the human gestation period is on average, 40 weeks, but some mammals are pregnant much longer!
       The elephant keeps their baby growing inside them for a massive 22 months - that’s over double the time of humans.
       Alternatively, the Virginian opossum is pregnant for just 12 days!
       </p>
       <br> <br>
       <p>14. Shrews eat a lot!
       Shrews have so little body fat, they have to eat every two hours to stay alive.
       </p>
       <br> <br>
       <p>15. Polar bears are actually black.
       Can your child picture a polar bear? We see a white animal, but their hair is actually colourless and hollow. The sun reflects from the hair allowing them a degree of camouflage in their habitat. Their skin is actually black!
       </p>
       </div>
       
       `
      )
      .fadeIn(1000);
  });
});
