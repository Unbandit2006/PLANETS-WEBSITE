FULL_EARTH_DESC = 'Our home planet is the third planet from the Sun\n and the only place we know of so far that’s inhabited \nby living things.\n\n\nWhile Earth is only the fifth largest planet\nin the solar system, it is the only world\nin our solar system with liquid water on the surface.\nJust slightly larger than nearby Venus. Earth is\nthe biggest of the four planets closest to the Sun,\nall of which are made of rock and metal.\n\n\nThe name Earth is at least 1,000 years old.\nAll of the planets, except for Earth were named after Greek\nand Roman gods and goddesses.\nHowever, the name Earth is a Germanic word\nwhich simply means “the ground.”'
EARTH_FACT = '" Humans are the primary inahbitants of this beautiful planet, but they treat it very poorly... "'
FULL_JUPITER_DESC = 'Jupiter has a long history surprising \nscientists—all the way back to 1610 when Galileo Galilei \nfound the first moons beyond Earth. \nThat discovery changed the way we see the universe.\n\n\nFifth in line from the Sun, Jupiter is, \nby far, the largest planet in the solar system \nmore than twice as massive as all \nthe other planets combined.\n\n\nJupiter\'s familiar stripes \nand swirls are actually cold, windy clouds \nof ammonia and water, floating in an atmosphere of \nhydrogen and helium. Jupiter’s iconic Great Red Spot \nis a giant storm bigger than Earth that has \nraged for hundreds of years.'
JUPITER_FACT = 'One spacecraft — NASA\'s Juno orbiter — is currently exploring this giant world.'
FULL_NEPTUNE_DESC = 'Dark, cold and whipped by supersonic winds, \nice giant Neptune is the eighth and most distant \nplanet in our solar system.\n\n\nMore than 30 times as far from the Sun as Earth, Neptune \nis the only planet in our solar system not visible to the \nnaked eye and the first predicted by \nmathematics before its discovery. In 2011\nNeptune completed its first 165-year \norbit since its discovery in 1846.\n\n\n NASA\'s Voyager 2 is the only spacecraft \nto have visited Neptune up close. It flew past in \n1989 on its way out of the solar system.'
NEPTUNE_FACT = 'Neptune has 14 moons! \nThe most interesting moon is Triton, a frozen world that is spewing nitrogen ice and dust particles out from below its surface.\nIt was likely captured by the gravitationalnpull of Neptune. It is probably the coldest world in the solar system.'
FULL_MARS_DESC = 'The fourth planet from the Sun, \nMars is a dusty, cold, \ndesert world with a very thin atmosphere.\n\n\nThis dynamic planet has seasons, \npolar ice caps and weather and canyons and \nextinct volcanoes, evidence it was once \nan even more active past\n\n\n Mars is one of the most explored bodies \nin our solar system, and it\'s the only planet \nwhere we\'ve sent rovers to roam the\nalien landscape. NASA currently has three spacecraft \nin orbit, one rover and one lander on the surface.\nIndia and ESA also have spacecraft in orbit above Mars.\nThese robotic explorers have found lots of \nevidence that Mars was much wetter and warmer, \nwith a thicker atmosphere, \nbillions of years ago. NASA launched the next-generation \nPerseverance rover to Mars on July 30,2020.'
MARS_FACT = 'NASA\'s latest robotic mission to the Red Planet, Mars 2020, aims to help future astronauts \nbrave that inhospitable landscape.'
FULL_SATURN_DESC = 'Saturn is the sixth planet from the Sun \nand the second largest planet in our solar system.\n\n\nAdorned with thousands of beautiful ringlets,\n Saturn is unique among the planets. It is\nnot the only planet to have rings—made \nof chunks of ice and rock—but none \nare as spectacular or as complicated as Saturn\'s.\n\n\n Like fellow gas giant Jupiter, Saturn is a massive \nball made mostly of hydrogen and helium.'
SATURN_FACT = 'Nine Earths side by side would almost span Saturn’s diameter. That doesn’t include Saturn’s rings.'
FULL_VENUS_DESC = 'Venus is the second planet from the Sun and our \nclosest planetary neighbor. Similar in structure and size to \nEarth, Venus spins slowly in the opposite direction from \nmost planets.Its thick atmosphere traps heat in a runaway \ngreenhouse effect, making it the hottest planet \nin our solar system with surface temperatures hot enough \nto melt lead. Glimpses below the clouds \nreveal volcanoes and deformed mountains.\n\n\n Venus is named for the ancient Roman goddess of love \nand beauty, who was known as Aphrodite \nto the Ancient Greeks.'
VENUS_FACT = 'With a radius of 3,760 miles, Venus is roughly the same size as Earth — just slightly smaller'
FULL_URANUS_DESC = 'The first planet found with the aid of a telescope\nUranus was discovered in 1781 by astronomer William Herschel\n although he originally thought it was either a comet or a star.\n\n\nIt was two years later that the object was \nuniversally accepted as a new planet, \nin part because of observations by astronomer Johann Elert Bode.\nHerschel tried unsuccessfully to name his discovery \nGeorgium Sidus after King George III. Instead the \nscientific community accepted Bode\'s suggestion to name \nit Uranus, the Greek god of the sky, \nas suggested by Bode.'
URANUS_FACT = 'Uranus is known as the “sideways planet” because it rotates on its side.'
FULL_MERCURY_DESC = 'The smallest planet in our solar system and \nnearest to the Sun, Mercury is only \nslightly larger than Earth\'s Moon.\n\n\n From the surface of Mercury, the Sun would \nappear more than three times as large as it \ndoes when viewed from Earth,\nand the sunlight would be as \nmuch as seven times brighter. Despite its \nproximity to the Sun, Mercury is not the hottest \nplanet in our solar system \nthat title belongs to nearby Venus, \nthanks to its dense atmosphere.'
MERCURY_FACT = 'It is the closest planet to the Sun at a distance of about 36 million miles (58 million kilometers)'
FULL_PLUTO_DESC = 'Pluto—which is smaller than Earth’s Moon\nhas a heart-shaped glacier that’s the size of Texas\nThis fascinating world has blue skies, \nspinning moons, mountains as high as the Rockies\nand it snows—but the snow is red.\n\n\n Pluto’s atmosphere is thin and composed \nmostly of nitrogen, methane and carbon monoxide.\n\n\nPluto got its name from 11-year-old \nVenetia Burney of Oxford, England'
PLUTO_FACT = 'Pluto (minor planet designation: 134340 Pluto) is an icy dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune'

function Planet(){
    PlanetName=document.getElementById('drop').value

    if (PlanetName=='Earth'){
        // Replaces Text in Div by the ID of desc_frame
        planet_label = document.getElementById('desc_frame')
        planet_label.innerHTML = FULL_EARTH_DESC

        // Replaces the Image
        pic = '<img src = "photos/earth.png" alt = "High Definition picture of Earth"/>'        

        src = document.getElementById('image_frame')
        src.innerHTML = pic

        // Replace Fun Fact
        planet_fact = document.getElementById('fact_frame')
        planet_fact.innerHTML = EARTH_FACT

    }

    if (PlanetName=='Mercury'){
        // Replaces Text in Div by the ID of desc_frame
        planet_label = document.getElementById('desc_frame')
        planet_label.innerHTML = FULL_MERCURY_DESC

        // Replaces the Image
        pic = '<img src = "photos/mercury.png" alt = "High Definition picture of Mercury"/>'        

        src = document.getElementById('image_frame')
        src.innerHTML = pic

        // Replace Fun Fact
        planet_fact = document.getElementById('fact_frame')
        planet_fact.innerHTML = MERCURY_FACT
    }

    if (PlanetName=='Venus'){
        // Replaces Text in Div by the ID of desc_frame
        planet_label = document.getElementById('desc_frame')
        planet_label.innerHTML = FULL_VENUS_DESC

        // Replaces the Image
        pic = '<img src = "photos/venus.png" alt = "High Definition picture of Venus"/>'        

        src = document.getElementById('image_frame')
        src.innerHTML = pic

        // Replace Fun Fact
        planet_fact = document.getElementById('fact_frame')
        planet_fact.innerHTML = VENUS_FACT
    }

    if (PlanetName=='Mars'){
        // Replaces Text in Div by the ID of desc_frame
        planet_label = document.getElementById('desc_frame')
        planet_label.innerHTML = FULL_MARS_DESC

        // Replaces the Image
        pic = '<img src = "photos/mars.png" alt = "High Definition picture of Mars"/>'        

        src = document.getElementById('image_frame')
        src.innerHTML = pic

        // Replace Fun Fact
        planet_fact = document.getElementById('fact_frame')
        planet_fact.innerHTML = MARS_FACT
    }

    if (PlanetName=='Jupiter'){
        // Replaces Text in Div by the ID of desc_frame
        planet_label = document.getElementById('desc_frame')
        planet_label.innerHTML = FULL_JUPITER_DESC

        // Replaces the Image
        pic = '<img src = "photos/jupiter.png" alt = "High Definition picture of Jupiter"/>'        

        src = document.getElementById('image_frame')
        src.innerHTML = pic

        // Replace Fun Fact
        planet_fact = document.getElementById('fact_frame')
        planet_fact.innerHTML = JUPITER_FACT
    }

    if (PlanetName=='Saturn'){
        // Replaces Text in Div by the ID of desc_frame
        planet_label = document.getElementById('desc_frame')
        planet_label.innerHTML = FULL_SATURN_DESC

        // Replaces the Image
        pic = '<img src = "photos/saturn.png" alt = "High Definition picture of Saturn"/>'        

        src = document.getElementById('image_frame')
        src.innerHTML = pic

        // Replace Fun Fact
        planet_fact = document.getElementById('fact_frame')
        planet_fact.innerHTML = SATURN_FACT
    }

    if (PlanetName=='Uranus'){
        // Replaces Text in Div by the ID of desc_frame
        planet_label = document.getElementById('desc_frame')
        planet_label.innerHTML = FULL_URANUS_DESC

        // Replaces the Image
        pic = '<img src = "photos/uranus.png" alt = "High Definition picture of Uranus"/>'        

        src = document.getElementById('image_frame')
        src.innerHTML = pic

        // Replace Fun Fact
        planet_fact = document.getElementById('fact_frame')
        planet_fact.innerHTML = URANUS_FACT
    }

    if (PlanetName=='Neptune'){
        // Replaces Text in Div by the ID of desc_frame
        planet_label = document.getElementById('desc_frame')
        planet_label.innerHTML = FULL_NEPTUNE_DESC

        // Replaces the Image
        pic = '<img src = "photos/neptune.png" alt = "High Definition picture of Neptune"/>'        

        src = document.getElementById('image_frame')
        src.innerHTML = pic

        // Replace Fun Fact
        planet_fact = document.getElementById('fact_frame')
        planet_fact.innerHTML =NEPTUNE_FACT
    }
}