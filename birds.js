$(()=> {
    //constructor by Davide
    function Animal(name,lifespan,group,food,description,length,weight,found) {
        this.name= name,
        this.lifespan=lifespan,
        this.group=group,
        this.food=food,
        this.description=description,
        this.length=length,
        this.weight=weight,
        this.found=found
    }
    //creating single animal objects
    let cassowary= new Animal("Cassowary",
    "20 years",
    "bird",
    "Plants matter like fruit, insects and small animals like mice amd lizards",
    "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",
    "1.7 m",
    "44 kg",
    "Queensland"
    )
    console.log(cassowary)

    $('.main.content').empty().append(
        `
    <img class="animal-img" src="./img/birds.jpg"></img>
    `
      ).hide().fadeIn(500);

    $(".animal.cassowary").on("click", ()=>{
        $(".welcome").toggleClass("inactive");
        $(".animal.cassowary").toggleClass("active");
        //rob wants that once you click again the welcome message comes back
        $(".main.content").empty().append(`
        <img class="animal-img" src="./img/Cassowary.jpg"></img>
        <h3>Name ${cassowary.name}</h3>
        <p>${cassowary.description}</p>
        <p>${cassowary.food}</p>
        <p>${cassowary.group} must insert link!!!</p>
        `) 
    })
})


