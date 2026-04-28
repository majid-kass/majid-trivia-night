// ============ EMOJI POOLS ============
const emojiPools = {
  "Marvel & Heroes": ["🦸","🦸‍♀️","🦸‍♂️","🛡️","⚡","🕷️","🦅","🐺","🔨","💎","🌌","🦾"],
  "Movies": ["🎬","🎥","🍿","🎞️","📽️","🎭","⭐","🏆","🎟️","👑"],
  "Horror": ["👻","🧛","🧟","🎃","🔪","🩸","💀","🦇","🌙"],
  "Romance": ["💕","💘","💖","🌹","💋","💌","💑","🥂"],
  "Gaming": ["🎮","🕹️","👾","🎯","🏹","⚔️","💣","🧙","🐉","🍄"],
  "Animals": ["🦁","🐯","🐺","🦊","🐼","🐸","🦅","🐢","🦖","🐙","🦈","🦄"],
  "Faces": ["😎","🤓","🥸","🤠","🧐","😈","🤖","👽","🤡","🎅"]
};

// ============ CATEGORIES ============
const categoryMeta = {
  marvel:     { label: "Marvel",         short: "Marvel",   icon: "🦸" },
  romcom:     { label: "Rom-Coms",       short: "Rom-Coms", icon: "💕" },
  horror:     { label: "Horror",         short: "Horror",   icon: "👻" },
  classics:   { label: "Movie Classics", short: "Classics", icon: "🎬" },
  videogames: { label: "Video Games",    short: "Games",    icon: "🎮" },
  geography:  { label: "Geography",      short: "Geo",      icon: "🌍" },
  animation:  { label: "Animation",      short: "Anim",     icon: "🐭" },
  sports:     { label: "Sports",         short: "Sports",   icon: "⚽" },
  music2000s: { label: "2000s Music",    short: "2000s",    icon: "🎵" },
  tvthemes:   { label: "TV Theme Songs", short: "TV Themes",icon: "📺" },
  moviesongs: { label: "Movie Songs",    short: "Mv Songs", icon: "🎤" },
  kuwait:     { label: "Kuwait Childhood", short: "Kuwait", icon: "🇰🇼" }
};

// ============ QUESTION PACKS ============
const questionPacks = {
  standard: {
    name: "Standard",
    icon: "🎯",
    questions: {
      marvel: [
        { q: "Who is the alter ego of Iron Man?", options: ["Bruce Banner", "Tony Stark", "Steve Rogers", "Peter Parker"], answer: 1 },
        { q: "What is the name of Thor's hammer?", options: ["Stormbreaker", "Gungnir", "Mjolnir", "Hofund"], answer: 2 },
        { q: "Who killed Thanos in Avengers: Endgame?", options: ["Iron Man", "Captain America", "Thor", "Doctor Strange"], answer: 0 },
        { q: "Which Infinity Stone is hidden on Vormir?", options: ["Power", "Reality", "Soul", "Mind"], answer: 2 },
        { q: "Who is the Sorcerer Supreme before Doctor Strange?", options: ["Wong", "The Ancient One", "Kaecilius", "Mordo"], answer: 1 },
        { q: "What is Captain America's shield made of?", options: ["Adamantium", "Vibranium", "Titanium", "Uru"], answer: 1 },
        { q: "Who is T'Challa's home country?", options: ["Sokovia", "Wakanda", "Genosha", "Latveria"], answer: 1 },
        { q: "What is Scarlet Witch's real name?", options: ["Wanda Maximoff", "Jean Grey", "Storm", "Rogue"], answer: 0 },
        { q: "Who voices Rocket Raccoon?", options: ["Vin Diesel", "Bradley Cooper", "Chris Pratt", "Dave Bautista"], answer: 1 },
        { q: "In what year was Iron Man (2008) released?", options: ["2007", "2008", "2009", "2010"], answer: 1 }
      ],
      romcom: [
        { q: "Which film features 'You had me at hello'?", options: ["Jerry Maguire", "Pretty Woman", "Sleepless in Seattle", "Notting Hill"], answer: 0 },
        { q: "Who stars opposite Tom Hanks in 'You've Got Mail'?", options: ["Julia Roberts", "Sandra Bullock", "Meg Ryan", "Diane Keaton"], answer: 2 },
        { q: "In 'Notting Hill', what does Hugh Grant's character own?", options: ["A bakery", "A bookshop", "A restaurant", "A flower shop"], answer: 1 },
        { q: "Who plays Mark Darcy in 'Bridget Jones's Diary'?", options: ["Hugh Grant", "Colin Firth", "Jude Law", "Liam Neeson"], answer: 1 },
        { q: "In 'Crazy Rich Asians', where is the wedding?", options: ["Hong Kong", "Singapore", "Shanghai", "Bangkok"], answer: 1 },
        { q: "What city is '10 Things I Hate About You' set in?", options: ["Boston", "Seattle", "Portland", "Chicago"], answer: 1 },
        { q: "Who directed 'When Harry Met Sally'?", options: ["Nora Ephron", "Rob Reiner", "Nancy Meyers", "Garry Marshall"], answer: 1 },
        { q: "In '27 Dresses', what is the protagonist's job?", options: ["Wedding planner", "Bridesmaid serial", "Florist", "Photographer"], answer: 1 },
        { q: "What sport features in 'Wimbledon' (2004)?", options: ["Cricket", "Soccer", "Tennis", "Golf"], answer: 2 },
        { q: "In 'The Proposal', where do they travel?", options: ["Hawaii", "Alaska", "Maine", "Vermont"], answer: 1 }
      ],
      horror: [
        { q: "What's the killer's name in 'Halloween'?", options: ["Jason Voorhees", "Freddy Krueger", "Michael Myers", "Leatherface"], answer: 2 },
        { q: "Who wrote 'The Shining'?", options: ["Dean Koontz", "Stephen King", "Clive Barker", "Anne Rice"], answer: 1 },
        { q: "Who directed 'Get Out' (2017)?", options: ["Ari Aster", "Jordan Peele", "Robert Eggers", "James Wan"], answer: 1 },
        { q: "In 'The Exorcist', what's the possessed girl's name?", options: ["Carrie", "Regan", "Damien", "Rosemary"], answer: 1 },
        { q: "Which 1999 film popularized found-footage horror?", options: ["Paranormal Activity", "The Blair Witch Project", "Cloverfield", "REC"], answer: 1 },
        { q: "Who plays Pennywise in the 2017 'It'?", options: ["Tim Curry", "Bill Skarsgård", "Doug Jones", "Javier Bardem"], answer: 1 },
        { q: "In 'A Nightmare on Elm Street', Freddy's weapon is:", options: ["Chainsaw", "Knives glove", "Machete", "Hook"], answer: 1 },
        { q: "What town is 'Friday the 13th' set near?", options: ["Camp Crystal Lake", "Haddonfield", "Derry", "Springwood"], answer: 0 },
        { q: "In 'The Ring', what happens 7 days after watching the tape?", options: ["Possession", "You die", "Insanity", "Sleep paralysis"], answer: 1 },
        { q: "What is the name of the doll in the Conjuring universe?", options: ["Chucky", "Annabelle", "Brahms", "Slappy"], answer: 1 }
      ],
      classics: [
        { q: "In 'The Matrix', what color pill does Neo take?", options: ["Blue", "Green", "Red", "Yellow"], answer: 2 },
        { q: "Who played the Joker in 'The Dark Knight'?", options: ["Jared Leto", "Joaquin Phoenix", "Jack Nicholson", "Heath Ledger"], answer: 3 },
        { q: "Who directed 'Pulp Fiction'?", options: ["Scorsese", "Tarantino", "Coen Brothers", "Fincher"], answer: 1 },
        { q: "Which film won Best Picture at the 2020 Oscars?", options: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"], answer: 2 },
        { q: "Who directed 'Schindler's List'?", options: ["Kubrick", "Spielberg", "Polanski", "Coppola"], answer: 1 },
        { q: "What year was the original 'Star Wars' released?", options: ["1975", "1977", "1979", "1981"], answer: 1 },
        { q: "Which 1975 thriller made people fear the ocean?", options: ["The Deep", "Jaws", "Open Water", "Orca"], answer: 1 },
        { q: "Who voiced Woody in Toy Story?", options: ["Tim Allen", "Tom Hanks", "Billy Crystal", "John Goodman"], answer: 1 },
        { q: "In 'The Godfather', what is the family name?", options: ["Soprano", "Gambino", "Corleone", "Barzini"], answer: 2 },
        { q: "Which film features 'I'll be back'?", options: ["Predator", "The Terminator", "Total Recall", "RoboCop"], answer: 1 }
      ],
      videogames: [
        { q: "Who is Mario's brother?", options: ["Wario", "Toad", "Luigi", "Yoshi"], answer: 2 },
        { q: "In 'Minecraft', what is the green exploding enemy?", options: ["Zombie", "Creeper", "Enderman", "Skeleton"], answer: 1 },
        { q: "Best-selling video game of all time?", options: ["Tetris", "GTA V", "Minecraft", "Wii Sports"], answer: 2 },
        { q: "In 'The Witcher 3', what's the protagonist's name?", options: ["Geralt", "Ciri", "Yennefer", "Triss"], answer: 0 },
        { q: "Who developed 'Elden Ring'?", options: ["CD Projekt Red", "FromSoftware", "Bethesda", "Bandai"], answer: 1 },
        { q: "What's the protagonist's name in 'The Legend of Zelda'?", options: ["Zelda", "Link", "Ganon", "Sheik"], answer: 1 },
        { q: "Which company makes the PlayStation?", options: ["Microsoft", "Nintendo", "Sony", "Sega"], answer: 2 },
        { q: "In 'Halo', who's the protagonist?", options: ["Master Chief", "Cortana", "Arbiter", "Noble Six"], answer: 0 },
        { q: "Currency in 'Animal Crossing'?", options: ["Coins", "Rupees", "Bells", "Gil"], answer: 2 },
        { q: "Which game franchise has the city of Los Santos?", options: ["Saints Row", "Watch Dogs", "GTA", "Mafia"], answer: 2 }
      ],
      geography: [
        { q: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: 3 },
        { q: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: 2 },
        { q: "Mount Everest borders Nepal and which country?", options: ["India", "Bhutan", "China", "Pakistan"], answer: 2 },
        { q: "Which country has the most time zones?", options: ["Russia", "USA", "France", "China"], answer: 2 },
        { q: "Which African country was formerly Abyssinia?", options: ["Sudan", "Kenya", "Ethiopia", "Somalia"], answer: 2 },
        { q: "What's the capital of Canada?", options: ["Toronto", "Vancouver", "Montreal", "Ottawa"], answer: 3 },
        { q: "Which is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: 1 },
        { q: "Smallest country by area?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], answer: 1 },
        { q: "Which sea is the saltiest?", options: ["Red Sea", "Mediterranean", "Dead Sea", "Caspian"], answer: 2 },
        { q: "Which country is on two continents?", options: ["Egypt", "Turkey", "Greece", "Cyprus"], answer: 1 }
      ],
      animation: [
        { q: "In 'The Lion King', who is Simba's father?", options: ["Scar", "Mufasa", "Rafiki", "Pumbaa"], answer: 1 },
        { q: "Which studio made 'Shrek'?", options: ["Pixar", "Disney", "DreamWorks", "Illumination"], answer: 2 },
        { q: "Who is the protagonist of 'Finding Nemo'?", options: ["Marlin", "Dory", "Nemo", "Bruce"], answer: 0 },
        { q: "In 'Frozen', what is Elsa's sister's name?", options: ["Anna", "Aria", "Elena", "Ella"], answer: 0 },
        { q: "Which DreamWorks film features a panda named Po?", options: ["Madagascar", "Kung Fu Panda", "Trolls", "Boss Baby"], answer: 1 },
        { q: "Who voices Woody in the Toy Story films?", options: ["Tim Allen", "Tom Hanks", "Billy Crystal", "John Goodman"], answer: 1 },
        { q: "What's the name of the rat chef in 'Ratatouille'?", options: ["Remy", "Linguini", "Emile", "Django"], answer: 0 },
        { q: "Which Disney princess has a pet tiger named Rajah?", options: ["Mulan", "Jasmine", "Pocahontas", "Tiana"], answer: 1 },
        { q: "Who directs Studio Ghibli's 'Spirited Away'?", options: ["Isao Takahata", "Hayao Miyazaki", "Mamoru Hosoda", "Makoto Shinkai"], answer: 1 },
        { q: "In 'How to Train Your Dragon', what's Hiccup's dragon's name?", options: ["Stormfly", "Toothless", "Meatlug", "Hookfang"], answer: 1 }
      ],
      sports: [
        { q: "How many players are on a soccer team on the field?", options: ["10", "11", "12", "9"], answer: 1 },
        { q: "Which country won the 2022 FIFA World Cup?", options: ["France", "Brazil", "Argentina", "Germany"], answer: 2 },
        { q: "How many points is a 3-point shot in basketball?", options: ["2", "3", "4", "5"], answer: 1 },
        { q: "Which tennis tournament is played on grass?", options: ["French Open", "US Open", "Australian Open", "Wimbledon"], answer: 3 },
        { q: "How many holes are on a standard golf course?", options: ["9", "12", "18", "24"], answer: 2 },
        { q: "In which sport would you perform a 'slam dunk'?", options: ["Volleyball", "Basketball", "Tennis", "Cricket"], answer: 1 },
        { q: "Which country invented Olympic-style judo?", options: ["China", "Japan", "Korea", "Thailand"], answer: 1 },
        { q: "How long is a soccer match (regulation)?", options: ["60 mins", "75 mins", "90 mins", "100 mins"], answer: 2 },
        { q: "Lionel Messi has won how many Ballon d'Or awards (as of 2024)?", options: ["6", "7", "8", "9"], answer: 2 },
        { q: "What's the maximum break in snooker?", options: ["100", "147", "180", "200"], answer: 1 }
      ],
      music2000s: [
        { q: "Name this 2000s hit!", audio: "audio/music2000s/track-01.m4a", options: ["Hips Don't Lie - Shakira", "Toxic - Britney Spears", "Crazy in Love - Beyoncé", "Umbrella - Rihanna"], answer: 0 },
        { q: "Name this 2000s hit!", audio: "audio/music2000s/track-02.m4a", options: ["Mr. Brightside - The Killers", "Yellow - Coldplay", "In the End - Linkin Park", "Take Me Out - Franz Ferdinand"], answer: 0 },
        { q: "Name this 2000s hit!", audio: "audio/music2000s/track-03.m4a", options: ["Hey Ya! - OutKast", "Crazy - Gnarls Barkley", "SexyBack - Justin Timberlake", "Single Ladies - Beyoncé"], answer: 0 },
        { q: "Name this 2000s hit!", audio: "audio/music2000s/track-04.m4a", options: ["I Kissed a Girl - Katy Perry", "Bad Romance - Lady Gaga", "Don't Stop the Music - Rihanna", "Rolling in the Deep - Adele"], answer: 0 },
        { q: "Name this 2000s hit!", audio: "audio/music2000s/track-05.m4a", options: ["Numb - Linkin Park", "Boulevard of Broken Dreams - Green Day", "Wake Me Up When September Ends - Green Day", "Chasing Cars - Snow Patrol"], answer: 0 },
        { q: "Name this 2000s hit!", audio: "audio/music2000s/track-06.m4a", options: ["Lose Yourself - Eminem", "In Da Club - 50 Cent", "Hey Ya! - OutKast", "Empire State of Mind - Jay-Z"], answer: 0 },
        { q: "Name this 2000s hit!", audio: "audio/music2000s/track-07.m4a", options: ["Complicated - Avril Lavigne", "Since U Been Gone - Kelly Clarkson", "Bleeding Love - Leona Lewis", "Apologize - OneRepublic"], answer: 0 },
        { q: "Name this 2000s hit!", audio: "audio/music2000s/track-08.m4a", options: ["Mambo No. 5 - Lou Bega", "Dragostea Din Tei - O-Zone", "Crazy Frog - Axel F", "Macarena - Los del Río"], answer: 1 },
        { q: "Name this 2000s hit!", audio: "audio/music2000s/track-09.m4a", options: ["Fix You - Coldplay", "Viva la Vida - Coldplay", "Clocks - Coldplay", "The Scientist - Coldplay"], answer: 1 },
        { q: "Name this 2000s hit!", audio: "audio/music2000s/track-10.m4a", options: ["Halo - Beyoncé", "Just Dance - Lady Gaga", "Poker Face - Lady Gaga", "Tik Tok - Kesha"], answer: 2 }
      ],
      tvthemes: [
        { q: "Which show is this theme from?", audio: "audio/tvthemes/theme-01.m4a", options: ["Friends", "Seinfeld", "How I Met Your Mother", "The Big Bang Theory"], answer: 0 },
        { q: "Which show is this theme from?", audio: "audio/tvthemes/theme-02.m4a", options: ["Game of Thrones", "Lord of the Rings", "Vikings", "The Witcher"], answer: 0 },
        { q: "Which show is this theme from?", audio: "audio/tvthemes/theme-03.m4a", options: ["The Office (US)", "Parks and Recreation", "Brooklyn Nine-Nine", "Community"], answer: 0 },
        { q: "Which show is this theme from?", audio: "audio/tvthemes/theme-04.m4a", options: ["Stranger Things", "Black Mirror", "Dark", "The OA"], answer: 0 },
        { q: "Which show is this theme from?", audio: "audio/tvthemes/theme-05.m4a", options: ["Breaking Bad", "Better Call Saul", "Ozark", "Narcos"], answer: 0 },
        { q: "Which show is this theme from?", audio: "audio/tvthemes/theme-06.m4a", options: ["The Simpsons", "Family Guy", "South Park", "American Dad"], answer: 0 },
        { q: "Which show is this theme from?", audio: "audio/tvthemes/theme-07.m4a", options: ["The Fresh Prince of Bel-Air", "Full House", "Family Matters", "Saved by the Bell"], answer: 0 },
        { q: "Which show is this theme from?", audio: "audio/tvthemes/theme-08.m4a", options: ["Lost", "24", "Prison Break", "Heroes"], answer: 0 },
        { q: "Which show is this theme from?", audio: "audio/tvthemes/theme-09.m4a", options: ["The Crown", "Downton Abbey", "Bridgerton", "Peaky Blinders"], answer: 0 },
        { q: "Which show is this theme from?", audio: "audio/tvthemes/theme-10.m4a", options: ["Sherlock", "Doctor Who", "Luther", "Broadchurch"], answer: 0 }
      ],
      moviesongs: [
        { q: "Which movie is this song from?", audio: "audio/moviesongs/song-01.m4a", options: ["Titanic", "The Bodyguard", "Dirty Dancing", "Ghost"], answer: 0 },
        { q: "Which movie is this song from?", audio: "audio/moviesongs/song-02.m4a", options: ["The Lion King", "Aladdin", "Beauty and the Beast", "The Little Mermaid"], answer: 0 },
        { q: "Which movie is this song from?", audio: "audio/moviesongs/song-03.m4a", options: ["A Star is Born", "La La Land", "The Greatest Showman", "Bohemian Rhapsody"], answer: 0 },
        { q: "Which movie is this song from?", audio: "audio/moviesongs/song-04.m4a", options: ["Frozen", "Tangled", "Moana", "Encanto"], answer: 0 },
        { q: "Which movie is this song from?", audio: "audio/moviesongs/song-05.m4a", options: ["8 Mile", "Hustle & Flow", "Straight Outta Compton", "Get Rich or Die Tryin'"], answer: 0 },
        { q: "Which movie is this song from?", audio: "audio/moviesongs/song-06.m4a", options: ["Pulp Fiction", "Reservoir Dogs", "Kill Bill", "Jackie Brown"], answer: 0 },
        { q: "Which movie is this song from?", audio: "audio/moviesongs/song-07.m4a", options: ["Top Gun", "Footloose", "Dirty Dancing", "Flashdance"], answer: 0 },
        { q: "Which movie is this song from?", audio: "audio/moviesongs/song-08.m4a", options: ["Mamma Mia!", "Chicago", "Hairspray", "Burlesque"], answer: 0 },
        { q: "Which movie is this song from?", audio: "audio/moviesongs/song-09.m4a", options: ["Guardians of the Galaxy", "Baby Driver", "Drive", "Atomic Blonde"], answer: 0 },
        { q: "Which movie is this song from?", audio: "audio/moviesongs/song-10.m4a", options: ["The Bodyguard", "Whitney", "Sister Act", "Dreamgirls"], answer: 0 }
      ],
      kuwait: [
        { q: "Which iconic Kuwaiti dairy brand was a 90s/2000s staple in every household?", options: ["KDD", "Almarai", "Nada", "Lurpak"], answer: 0 },
        { q: "What was the main Kuwaiti TV channel that aired classic cartoons in the 90s?", image: "images/kuwait/kuwait-01.jpg", options: ["KTV1", "KTV2", "Funoun", "MBC"], answer: 1 },
        { q: "Which famous Kuwaiti shopping destination opened in the 80s and was THE hangout in the 90s/2000s?", options: ["The Avenues", "Marina Mall", "Salhiya Complex", "Souq Sharq"], answer: 2 },
        { q: "What was the popular Kuwaiti chocolate-covered wafer biscuit?", image: "images/kuwait/kuwait-02.jpg", options: ["Tiffany", "Galaxy", "Patchi", "Mackintosh"], answer: 0 },
        { q: "Which famous beach/seafront did 90s Kuwaiti kids grow up visiting?", options: ["Al Kout Beach", "Marina Beach", "Messila Beach", "Gulf Road / Shaab"], answer: 3 },
        { q: "What classic Arabic-dubbed anime did most Kuwaiti 90s kids watch on TV?", options: ["Detective Conan / Adnan wa Lina / Sally", "Naruto", "One Piece", "Dragon Ball Z"], answer: 0 },
        { q: "Which Kuwaiti supermarket chain has been around since the 80s?", options: ["Lulu", "Carrefour", "The Sultan Center (TSC)", "City Centre"], answer: 2 },
        { q: "What was the iconic Kuwaiti landmark with the three blue/green spheres?", image: "images/kuwait/kuwait-03.jpg", options: ["Liberation Tower", "Kuwait Towers", "Al Hamra Tower", "Seif Palace"], answer: 1 },
        { q: "Which Kuwaiti soft drink/fruit juice in cartons was a school lunchbox staple?", options: ["KDD juice", "Rani", "Suntop", "All of the above"], answer: 3 },
        { q: "Which old-school Kuwaiti restaurant is famous for breakfast (foul, beid, etc.)?", options: ["Slider Station", "Mais Alghanim", "Freij Sweifiyeh", "Burger Boutique"], answer: 1 }
      ]
    }
  },
  hard: {
    name: "Hard Mode",
    icon: "🔥",
    questions: {
      marvel: [
        { q: "What is the name of Black Panther's father?", options: ["T'Chaka", "M'Baku", "N'Jobu", "T'Challa Sr."], answer: 0 },
        { q: "Who wields Stormbreaker before Thor?", options: ["No one", "Beta Ray Bill", "Odin", "Bor"], answer: 1 },
        { q: "What is Vision's mind stone color?", options: ["Blue", "Green", "Yellow", "Red"], answer: 2 },
        { q: "Who is Iron Man's first MCU villain?", options: ["Whiplash", "Iron Monger", "Mandarin", "Aldrich Killian"], answer: 1 },
        { q: "What's the name of Quill's mother?", options: ["Mary", "Meredith", "Margaret", "Maria"], answer: 1 },
        { q: "In which year did Marvel Studios release its first film?", options: ["2006", "2007", "2008", "2009"], answer: 2 },
        { q: "Who created the Ultron AI in the MCU?", options: ["Tony alone", "Tony & Bruce", "Hank Pym", "Vision"], answer: 1 },
        { q: "What is the name of Loki's true mother in Asgard mythology (MCU)?", options: ["Frigga", "Sif", "Hela", "Laufey"], answer: 0 },
        { q: "Who directs 'Black Panther' (2018)?", options: ["Taika Waititi", "Ryan Coogler", "Anthony Russo", "James Gunn"], answer: 1 },
        { q: "Which Avenger sacrificed themselves on Vormir?", options: ["Hawkeye", "Black Widow", "Iron Man", "Captain America"], answer: 1 }
      ],
      romcom: [
        { q: "Who directed 'Sleepless in Seattle'?", options: ["Nora Ephron", "Rob Reiner", "Nancy Meyers", "James L. Brooks"], answer: 0 },
        { q: "In 'Roman Holiday', who plays the princess?", options: ["Grace Kelly", "Audrey Hepburn", "Ingrid Bergman", "Sophia Loren"], answer: 1 },
        { q: "What year was 'Pretty Woman' released?", options: ["1988", "1989", "1990", "1991"], answer: 2 },
        { q: "In '500 Days of Summer', what does Tom do for a living?", options: ["Architect", "Greeting card writer", "Lawyer", "Teacher"], answer: 1 },
        { q: "Who plays Annie in 'Bridesmaids'?", options: ["Tina Fey", "Amy Poehler", "Kristen Wiig", "Maya Rudolph"], answer: 2 },
        { q: "In 'About Time', what is the family ability?", options: ["Mind reading", "Time travel", "Telekinesis", "Invisibility"], answer: 1 },
        { q: "Who directed 'Eternal Sunshine of the Spotless Mind'?", options: ["Spike Jonze", "Michel Gondry", "Wes Anderson", "Charlie Kaufman"], answer: 1 },
        { q: "In 'My Best Friend's Wedding', who does Julia Roberts try to stop from marrying?", options: ["Cameron Diaz's character", "Dermot Mulroney's character", "Both", "Neither"], answer: 1 },
        { q: "What city is 'Sleepless in Seattle' partly set in (besides Seattle)?", options: ["Boston", "New York", "Chicago", "L.A."], answer: 1 },
        { q: "Who plays Jamie in 'Love Actually'?", options: ["Hugh Grant", "Colin Firth", "Liam Neeson", "Alan Rickman"], answer: 1 }
      ],
      horror: [
        { q: "Who directed 'Hereditary'?", options: ["Ari Aster", "Jordan Peele", "Robert Eggers", "James Wan"], answer: 0 },
        { q: "What year was 'Psycho' (Hitchcock) released?", options: ["1958", "1960", "1962", "1965"], answer: 1 },
        { q: "In 'The Witch' (2015), what era is it set in?", options: ["1500s", "1630s", "1700s", "1800s"], answer: 1 },
        { q: "Who wrote the screenplay for 'Scream' (1996)?", options: ["Wes Craven", "Kevin Williamson", "John Carpenter", "Stephen King"], answer: 1 },
        { q: "In 'Saw', what's the killer's name?", options: ["Pighead", "Jigsaw", "Amanda", "Hoffman"], answer: 1 },
        { q: "Who directed 'The Babadook'?", options: ["Jennifer Kent", "Ari Aster", "Karyn Kusama", "Coralie Fargeat"], answer: 0 },
        { q: "What is Norman Bates' mother's name?", options: ["Norma", "Helen", "Margaret", "Marion"], answer: 0 },
        { q: "In 'The Conjuring', what year is it set?", options: ["1965", "1971", "1977", "1982"], answer: 1 },
        { q: "Who directed 'Suspiria' (1977)?", options: ["Mario Bava", "Dario Argento", "Lucio Fulci", "Luca Guadagnino"], answer: 1 },
        { q: "What's the name of the family in 'Hereditary'?", options: ["Smith", "Graham", "Wheeler", "Carter"], answer: 1 }
      ],
      classics: [
        { q: "Who wrote and directed 'Citizen Kane'?", options: ["Orson Welles", "John Ford", "Frank Capra", "Howard Hawks"], answer: 0 },
        { q: "What year was 'Casablanca' released?", options: ["1939", "1942", "1945", "1948"], answer: 1 },
        { q: "Who directed 'Vertigo'?", options: ["Hitchcock", "Wilder", "Wyler", "Kazan"], answer: 0 },
        { q: "In 'Lawrence of Arabia', who plays the title character?", options: ["Omar Sharif", "Peter O'Toole", "Alec Guinness", "Anthony Quinn"], answer: 1 },
        { q: "Who directed 'Apocalypse Now'?", options: ["Coppola", "Scorsese", "Cimino", "Friedkin"], answer: 0 },
        { q: "What year was 'Goodfellas' released?", options: ["1988", "1990", "1992", "1995"], answer: 1 },
        { q: "Who directed 'Seven Samurai' (1954)?", options: ["Akira Kurosawa", "Yasujirō Ozu", "Kenji Mizoguchi", "Hayao Miyazaki"], answer: 0 },
        { q: "In 'Rear Window', what does the protagonist witness?", options: ["A robbery", "A murder", "A kidnapping", "A spy"], answer: 1 },
        { q: "Who composed the score for 'The Good, the Bad and the Ugly'?", options: ["Ennio Morricone", "John Williams", "Henry Mancini", "Bernard Herrmann"], answer: 0 },
        { q: "What year was 'Singin' in the Rain' released?", options: ["1948", "1950", "1952", "1955"], answer: 2 }
      ],
      videogames: [
        { q: "Who founded id Software?", options: ["Carmack & Romero", "Wright & Maxis", "Miyamoto", "Newell"], answer: 0 },
        { q: "What year was the original Doom released?", options: ["1991", "1993", "1995", "1997"], answer: 1 },
        { q: "Who is the main protagonist of 'Metal Gear Solid'?", options: ["Big Boss", "Solid Snake", "Raiden", "Liquid Snake"], answer: 1 },
        { q: "In 'Final Fantasy VII', what's the main villain's name?", options: ["Kefka", "Sephiroth", "Kuja", "Ultimecia"], answer: 1 },
        { q: "What year did 'World of Warcraft' launch?", options: ["2003", "2004", "2005", "2006"], answer: 1 },
        { q: "Who created Pac-Man?", options: ["Shigeru Miyamoto", "Toru Iwatani", "Hideo Kojima", "Yu Suzuki"], answer: 1 },
        { q: "What's the name of the main character in 'Bioshock'?", options: ["Booker", "Jack", "Subject Delta", "Atlas"], answer: 1 },
        { q: "Which company developed 'Half-Life'?", options: ["id", "Valve", "Bungie", "Bethesda"], answer: 1 },
        { q: "In 'Portal', what's the AI's name?", options: ["GLaDOS", "SHODAN", "HAL", "Cortana"], answer: 0 },
        { q: "What year was 'Tetris' invented?", options: ["1982", "1984", "1986", "1988"], answer: 1 }
      ],
      geography: [
        { q: "What is the deepest point in the ocean?", options: ["Puerto Rico Trench", "Mariana Trench", "Java Trench", "Tonga Trench"], answer: 1 },
        { q: "Which country has 14 official languages?", options: ["India", "South Africa", "Switzerland", "Belgium"], answer: 1 },
        { q: "What's the capital of Mongolia?", options: ["Astana", "Ulaanbaatar", "Bishkek", "Tashkent"], answer: 1 },
        { q: "Which is the largest landlocked country?", options: ["Mongolia", "Kazakhstan", "Chad", "Bolivia"], answer: 1 },
        { q: "What strait separates Australia from Papua New Guinea?", options: ["Bass", "Torres", "Cook", "Bering"], answer: 1 },
        { q: "What's Africa's highest mountain?", options: ["Mt. Kenya", "Mt. Kilimanjaro", "Mt. Stanley", "Mt. Meru"], answer: 1 },
        { q: "Which country is shaped like a boot?", options: ["Greece", "Italy", "Croatia", "Portugal"], answer: 1 },
        { q: "What's the capital of New Zealand?", options: ["Auckland", "Wellington", "Christchurch", "Dunedin"], answer: 1 },
        { q: "Which desert is the largest hot desert?", options: ["Gobi", "Kalahari", "Sahara", "Atacama"], answer: 2 },
        { q: "What's the only country that's also a continent?", options: ["Greenland", "Antarctica", "Australia", "Russia"], answer: 2 }
      ],
      animation: [
        { q: "Which Pixar film features the song 'Remember Me'?", options: ["Coco", "Up", "Soul", "Inside Out"], answer: 0 },
        { q: "Who composed the score for 'Princess Mononoke'?", options: ["Joe Hisaishi", "Yoko Kanno", "Yuki Kajiura", "Ryuichi Sakamoto"], answer: 0 },
        { q: "What's the name of the city in 'Zootopia'?", options: ["Animalia", "Zootopia", "Beastville", "Wildtown"], answer: 1 },
        { q: "Who directed 'The Iron Giant'?", options: ["Brad Bird", "John Lasseter", "Henry Selick", "Don Bluth"], answer: 0 },
        { q: "In 'Spirited Away', what's the name of the bathhouse worker spirit?", options: ["No-Face", "Yubaba", "Haku", "Kamaji"], answer: 0 }
      ],
      sports: [
        { q: "Who has the record for most career goals in soccer?", options: ["Pelé", "Cristiano Ronaldo", "Messi", "Romario"], answer: 1 },
        { q: "How many minutes long is each quarter in NBA basketball?", options: ["10", "12", "15", "20"], answer: 1 },
        { q: "Which Grand Slam tennis tournament is played first each year?", options: ["French Open", "US Open", "Australian Open", "Wimbledon"], answer: 2 },
        { q: "Who won the 2014 FIFA World Cup?", options: ["Brazil", "Argentina", "Germany", "Spain"], answer: 2 },
        { q: "What's the diameter of a basketball hoop in inches?", options: ["16", "18", "20", "24"], answer: 1 }
      ],
      music2000s: [
        { q: "Name this 2000s hit!", audio: "audio/music2000s/track-01.m4a", options: ["A", "B", "C", "D"], answer: 0 }
      ],
      tvthemes: [
        { q: "Name this TV theme!", audio: "audio/tvthemes/theme-01.m4a", options: ["A", "B", "C", "D"], answer: 0 }
      ],
      moviesongs: [
        { q: "Name this movie song!", audio: "audio/moviesongs/song-01.m4a", options: ["A", "B", "C", "D"], answer: 0 }
      ],
      kuwait: [
        { q: "What was the original name of Kuwait City?", options: ["Al Qurain", "Al Kout", "Al Sabah", "Al Jahra"], answer: 0 }
      ]
    }
  }
};

// ============ FINAL QUESTION POOL ============
const finalQuestionPool = [
  { catLabel: "🎬 Cinema", q: "Which film holds the record for most Academy Award wins (tied)?", options: ["Titanic", "Ben-Hur", "Lord of the Rings: Return of the King", "All three are tied at 11"], answer: 3 },
  { catLabel: "🦸 Marvel", q: "What is the name of the entity that controls the Time Variance Authority?", options: ["He Who Remains", "Kang", "The Watcher", "Eternity"], answer: 0 },
  { catLabel: "🎮 Gaming", q: "What was the first video game ever to be played in space?", options: ["Tetris", "Pong", "Space Invaders", "Pac-Man"], answer: 0 },
  { catLabel: "🌍 Geography", q: "What is the only sea on Earth without a coastline?", options: ["Sargasso Sea", "Caspian Sea", "Black Sea", "Aral Sea"], answer: 0 },
  { catLabel: "👻 Horror", q: "What was the first official 'slasher' film, predating Halloween (1978)?", options: ["Psycho (1960)", "Black Christmas (1974)", "The Texas Chain Saw Massacre (1974)", "Peeping Tom (1960)"], answer: 1 },
  { catLabel: "💕 Rom-Com", q: "Which film is the highest-grossing romantic comedy of all time?", options: ["My Big Fat Greek Wedding", "Pretty Woman", "There's Something About Mary", "What Women Want"], answer: 0 }
];

const POINT_VALUES = [100, 200, 300, 400, 500];

// ============ SETTINGS ============
const settings = {
  timerSeconds: 120,
  theme: "midnight",
  pack: "standard",
  sound: true,
  buzzers: true,
  dailyDouble: true,
  confetti: true,
  rounds: 2,
  finalQuestion: true,
  hostVoice: true,
  music: true,
  volHost: 0.8,
  volMusic: 0.35,
  volSfx: 0.6
};

const STREAK_BONUS_AT = 3;
const STREAK_BONUS_AMOUNT = 500;

// ============ STATE ============
let players = [{ name: "Majid", emoji: "🎬", score: 0, streak: 0, finalWager: 0, finalSet: false, finalCorrect: null }];
let currentEmojiTarget = null;
let selectedCategories = [];
let board = []; // [{cat, points, q, options, answer, used, isDD, picker}]
let activeTile = null;
let selectedPlayer = null;
let turnIndex = 0;
let activeAnswerer = 0;
let timerSeconds = 120;
let timerInterval = null;
let timerPaused = false;
let teamsTried = [];
let currentRound = 1;
let usedQuestionsByCat = {}; // tracks indices used per cat across rounds
let finalQuestion = null;
let finalCurrentJudgeIdx = 0;

// Player tones (in Hz) — cycled by index
const PLAYER_TONES = [261.63, 392.00, 329.63, 523.25, 440.00, 587.33, 659.25, 783.99];

// ============ HOST VO + BACKGROUND MUSIC ============
let hostAudio = null;
let hostQueue = [];
let hostBusy = false;
let audioUnlocked = false;
let bgMusicNodes = null;
let bgMusicPlaying = false;
const HOST_LINES = {
  welcome:     "Welcome to Majid Trivia Night!",
  round1:      "Round 1 — let's go!",
  round2:      "Double Jeopardy! Points are doubled!",
  final:       "The Final Question. Place your wagers!",
  dailydouble: "Daily Double! Double the points!",
  timesup:     "Time's up — pass it on!",
  correct:     "Brilliant! Absolutely correct.",
  wrong:       "Oh no, that's not right.",
  streak:      "Three in a row — bonus!",
  winner:      "And that's your champion! Congratulations!",
  tile_pick:   "Make your selection."
};

function showHostBanner(text) {
  const banner = document.getElementById("host-banner");
  document.getElementById("host-text").textContent = text;
  banner.classList.add("shown");
}
function hideHostBanner() {
  document.getElementById("host-banner").classList.remove("shown");
}

function playHost(key) {
  if (!audioUnlocked || !settings.hostVoice) return;
  const text = HOST_LINES[key] || "";
  if (hostBusy) { hostQueue.push(key); return; }
  hostBusy = true;
  showHostBanner(text);
  if (hostAudio) { hostAudio.pause(); hostAudio = null; }
  hostAudio = new Audio(`audio/host/${key}.m4a`);
  hostAudio.volume = settings.volHost;
  let cleaned = false;
  const cleanup = () => {
    if (cleaned) return;
    cleaned = true;
    hostBusy = false;
    hideHostBanner();
    if (hostQueue.length > 0) {
      const next = hostQueue.shift();
      setTimeout(() => playHost(next), 250);
    }
  };
  hostAudio.onended = cleanup;
  hostAudio.onerror = cleanup;
  setTimeout(cleanup, 7000);
  hostAudio.play().catch(() => cleanup());
}

// Procedural ambient music (Web Audio API — no file needed)
function startBgMusic() {
  if (!audioUnlocked || !settings.music || bgMusicPlaying) return;
  const ctx = getAudioCtx();
  if (!ctx) return;
  bgMusicPlaying = true;
  const master = ctx.createGain();
  master.gain.value = 0;
  master.gain.linearRampToValueAtTime(settings.volMusic, ctx.currentTime + 1.5);
  master.connect(ctx.destination);

  const pad = ctx.createOscillator();
  pad.type = "sine"; pad.frequency.value = 110;
  const padGain = ctx.createGain(); padGain.gain.value = 0.18;
  pad.connect(padGain).connect(master); pad.start();

  const pad2 = ctx.createOscillator();
  pad2.type = "sine"; pad2.frequency.value = 165;
  const pad2Gain = ctx.createGain(); pad2Gain.gain.value = 0.10;
  pad2.connect(pad2Gain).connect(master); pad2.start();

  const scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33];
  const melodyInterval = setInterval(() => {
    if (!bgMusicPlaying) { clearInterval(melodyInterval); return; }
    const freq = scale[Math.floor(Math.random() * scale.length)];
    const osc = ctx.createOscillator();
    osc.type = "triangle"; osc.frequency.value = freq;
    const g = ctx.createGain();
    g.gain.value = 0;
    g.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.05);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.6);
    osc.connect(g).connect(master);
    osc.start();
    osc.stop(ctx.currentTime + 1.7);
  }, 1100);

  bgMusicNodes = { master, pad, pad2, melodyInterval };
}

function stopBgMusic() {
  if (!bgMusicNodes) { bgMusicPlaying = false; return; }
  const ctx = getAudioCtx();
  const { master, pad, pad2, melodyInterval } = bgMusicNodes;
  clearInterval(melodyInterval);
  if (master && ctx) {
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.6);
    setTimeout(() => { try { pad.stop(); pad2.stop(); } catch(e){} }, 700);
  }
  bgMusicNodes = null;
  bgMusicPlaying = false;
}

function setMusicVolume(v) {
  settings.volMusic = v;
  if (bgMusicNodes && bgMusicNodes.master) {
    const ctx = getAudioCtx();
    bgMusicNodes.master.gain.linearRampToValueAtTime(v, ctx.currentTime + 0.2);
  }
}

function spawnAmbientParticles() {
  const container = document.getElementById("ambient-particles");
  if (!container) return;
  const symbols = ["★", "✦", "✧", "•", "◆", "◇"];
  for (let i = 0; i < 22; i++) {
    const span = document.createElement("span");
    span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    span.style.left = Math.random() * 100 + "vw";
    span.style.fontSize = (0.8 + Math.random() * 1.4) + "rem";
    span.style.animationDuration = (12 + Math.random() * 18) + "s";
    span.style.animationDelay = (Math.random() * 20) + "s";
    container.appendChild(span);
  }
}

// ============ AUDIO ENGINE ============
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch (e) { return null; }
  }
  return audioCtx;
}
function playTone(freq, durationMs = 200, type = "sine", volume = 0.15) {
  if (!settings.sound) return;
  const ctx = getAudioCtx();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.value = volume;
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + durationMs / 1000);
  osc.stop(ctx.currentTime + durationMs / 1000);
}
function playSequence(notes) {
  if (!settings.sound) return;
  const ctx = getAudioCtx();
  if (!ctx) return;
  let t = ctx.currentTime;
  notes.forEach(n => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = n.type || "sine";
    osc.frequency.value = n.freq;
    gain.gain.setValueAtTime(n.vol || 0.15, t);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + (n.dur || 0.15));
    osc.stop(t + (n.dur || 0.15));
    t += (n.dur || 0.15) * 0.9;
  });
}
function sfxCorrect() {
  playSequence([
    { freq: 523.25, dur: 0.12 },
    { freq: 659.25, dur: 0.12 },
    { freq: 783.99, dur: 0.18 }
  ]);
}
function sfxWrong() {
  playSequence([
    { freq: 200, dur: 0.18, type: "square", vol: 0.1 },
    { freq: 150, dur: 0.25, type: "square", vol: 0.1 }
  ]);
}
function sfxTimeUp() {
  playSequence([
    { freq: 880, dur: 0.15, type: "square", vol: 0.12 },
    { freq: 880, dur: 0.15, type: "square", vol: 0.12 },
    { freq: 880, dur: 0.25, type: "square", vol: 0.12 }
  ]);
}
function sfxDailyDouble() {
  playSequence([
    { freq: 523, dur: 0.1 }, { freq: 659, dur: 0.1 },
    { freq: 783, dur: 0.1 }, { freq: 1046, dur: 0.25 }
  ]);
}
function sfxBuzz(playerIdx) {
  const freq = PLAYER_TONES[playerIdx % PLAYER_TONES.length];
  playTone(freq, 250, "triangle", 0.18);
}

// ============ CONFETTI ============
function fireConfetti() {
  if (!settings.confetti) return;
  const container = document.createElement("div");
  container.className = "confetti-container";
  document.body.appendChild(container);
  const colors = ["#ffd700", "#ff6b6b", "#00f5d4", "#f72585", "#5a189a", "#fff"];
  for (let i = 0; i < 80; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (1.6 + Math.random() * 1.4) + "s";
    piece.style.animationDelay = Math.random() * 0.4 + "s";
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(piece);
  }
  setTimeout(() => container.remove(), 3500);
}

// ============ ELEMENTS ============
const screens = {
  start: document.getElementById("start-screen"),
  category: document.getElementById("category-screen"),
  board: document.getElementById("board-screen"),
  round2: document.getElementById("round2-screen"),
  finalWager: document.getElementById("final-wager-screen"),
  finalQuestion: document.getElementById("final-question-screen"),
  result: document.getElementById("result-screen")
};

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[name].classList.add("active");
}

// ============ PLAYER SETUP ============
function renderPlayers() {
  const list = document.getElementById("players-list");
  list.innerHTML = "";
  players.forEach((p, i) => {
    const row = document.createElement("div");
    row.className = "player-row";
    row.innerHTML = `
      <div class="player-avatar" data-idx="${i}">${p.emoji}</div>
      <input class="player-name" type="text" placeholder="Player name" value="${p.name}" data-idx="${i}" />
      ${players.length > 1 ? `<button class="remove-btn" data-idx="${i}">Remove</button>` : ""}
    `;
    list.appendChild(row);
  });
  list.querySelectorAll(".player-avatar").forEach(el => {
    el.addEventListener("click", () => openEmojiPicker(parseInt(el.dataset.idx)));
  });
  list.querySelectorAll(".player-name").forEach(el => {
    el.addEventListener("input", e => {
      players[parseInt(e.target.dataset.idx)].name = e.target.value;
    });
  });
  list.querySelectorAll(".remove-btn").forEach(el => {
    el.addEventListener("click", () => {
      players.splice(parseInt(el.dataset.idx), 1);
      renderPlayers();
    });
  });
}

function buildEmojiPicker() {
  const sections = document.getElementById("emoji-sections");
  sections.innerHTML = "";
  Object.entries(emojiPools).forEach(([title, list]) => {
    const section = document.createElement("div");
    section.className = "emoji-section";
    section.innerHTML = `<div class="emoji-section-title">${title}</div>`;
    const grid = document.createElement("div");
    grid.className = "emoji-grid";
    list.forEach(emoji => {
      const btn = document.createElement("button");
      btn.className = "emoji-pick";
      btn.textContent = emoji;
      btn.addEventListener("click", () => {
        if (currentEmojiTarget !== null) {
          players[currentEmojiTarget].emoji = emoji;
          renderPlayers();
        }
        document.getElementById("emoji-modal").classList.remove("active");
      });
      grid.appendChild(btn);
    });
    section.appendChild(grid);
    sections.appendChild(section);
  });
}

function openEmojiPicker(idx) {
  currentEmojiTarget = idx;
  document.getElementById("emoji-modal").classList.add("active");
}

document.getElementById("add-player").addEventListener("click", () => {
  const defaults = ["🦸","🎮","👻","🌹","🍿","🎬","🎭","🦁","🐉","😎"];
  players.push({ name: "", emoji: defaults[players.length % defaults.length], score: 0, streak: 0, finalWager: 0, finalSet: false, finalCorrect: null });
  renderPlayers();
});

document.getElementById("to-category").addEventListener("click", () => {
  const valid = players.filter(p => p.name.trim().length > 0);
  if (valid.length === 0) {
    alert("Add at least one player with a name.");
    return;
  }
  players = valid.map(p => ({ ...p, score: 0, streak: 0, finalWager: 0, finalSet: false, finalCorrect: null }));
  renderCategoryPicker();
  showScreen("category");
});

document.getElementById("emoji-modal").addEventListener("click", e => {
  if (e.target.id === "emoji-modal") {
    document.getElementById("emoji-modal").classList.remove("active");
  }
});

// ============ CATEGORY PICK ============
function renderCategoryPicker() {
  const grid = document.getElementById("category-pick-grid");
  grid.innerHTML = "";
  Object.entries(categoryMeta).forEach(([key, meta]) => {
    const btn = document.createElement("div");
    btn.className = "category-pick" + (selectedCategories.includes(key) ? " selected" : "");
    btn.dataset.cat = key;
    btn.innerHTML = `<span class="icon">${meta.icon}</span>${meta.label}`;
    btn.addEventListener("click", () => toggleCategory(key));
    grid.appendChild(btn);
  });
  updateCatCount();
}

function toggleCategory(key) {
  const idx = selectedCategories.indexOf(key);
  if (idx >= 0) {
    selectedCategories.splice(idx, 1);
  } else {
    selectedCategories.push(key);
  }
  renderCategoryPicker();
}

function updateCatCount() {
  const n = selectedCategories.length;
  document.getElementById("selected-count").textContent =
    n === 0 ? "Pick at least 1 category" : `${n} selected`;
  document.getElementById("start-game").disabled = n < 1;
}

document.getElementById("back-to-players").addEventListener("click", () => showScreen("start"));
document.getElementById("start-game").addEventListener("click", startGame);

// Settings: timer chips
document.querySelectorAll("#timer-chips .chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll("#timer-chips .chip").forEach(c => c.classList.remove("selected"));
    chip.classList.add("selected");
    settings.timerSeconds = parseInt(chip.dataset.secs);
  });
});
// Settings: theme chips
document.querySelectorAll("#theme-chips .chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll("#theme-chips .chip").forEach(c => c.classList.remove("selected"));
    chip.classList.add("selected");
    settings.theme = chip.dataset.theme;
    applyTheme();
  });
});
// Settings: pack chips
document.querySelectorAll("#pack-chips .chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll("#pack-chips .chip").forEach(c => c.classList.remove("selected"));
    chip.classList.add("selected");
    settings.pack = chip.dataset.pack;
  });
});
// Settings: rounds chips
document.querySelectorAll("#rounds-chips .chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll("#rounds-chips .chip").forEach(c => c.classList.remove("selected"));
    chip.classList.add("selected");
    settings.rounds = parseInt(chip.dataset.rounds);
  });
});
function applyTheme() {
  document.body.className = "theme-" + settings.theme;
}
// Toggles
document.getElementById("opt-sound").addEventListener("change", e => settings.sound = e.target.checked);
document.getElementById("opt-buzzers").addEventListener("change", e => settings.buzzers = e.target.checked);
document.getElementById("opt-dd").addEventListener("change", e => settings.dailyDouble = e.target.checked);
document.getElementById("opt-confetti").addEventListener("change", e => settings.confetti = e.target.checked);
document.getElementById("opt-final").addEventListener("change", e => settings.finalQuestion = e.target.checked);

// ============ BOARD ============
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildBoardForRound(roundNum) {
  const pack = questionPacks[settings.pack];
  const multiplier = roundNum === 2 ? 2 : 1;
  board = [];
  selectedCategories.forEach(cat => {
    if (!usedQuestionsByCat[cat]) usedQuestionsByCat[cat] = new Set();
    const allQs = pack.questions[cat] || [];
    // Build pool of indices not yet used
    const availableIndices = allQs.map((_, i) => i).filter(i => !usedQuestionsByCat[cat].has(i));
    // If not enough, reset (rare)
    let pool = availableIndices.length >= 5 ? shuffleArray(availableIndices).slice(0, 5)
             : shuffleArray(allQs.map((_, i) => i)).slice(0, 5);
    pool.forEach(i => usedQuestionsByCat[cat].add(i));
    POINT_VALUES.forEach((points, idx) => {
      const q = allQs[pool[idx]];
      board.push({
        cat,
        points: points * multiplier,
        q: q.q,
        options: q.options,
        answer: q.answer,
        used: false,
        isDD: false
      });
    });
  });
  // Daily Double
  if (settings.dailyDouble && board.length > 0) {
    const candidates = board.filter(t => t.points >= POINT_VALUES[1] * multiplier);
    if (candidates.length > 0) {
      const dd = candidates[Math.floor(Math.random() * candidates.length)];
      dd.isDD = true;
    }
  }
}

function startGame() {
  currentRound = 1;
  usedQuestionsByCat = {};
  players.forEach(p => { p.score = 0; p.streak = 0; p.finalWager = 0; p.finalSet = false; p.finalCorrect = null; });
  turnIndex = 0;
  buildBoardForRound(1);
  applyTheme();
  document.getElementById("round-badge").textContent = "Round 1";
  renderBoard();
  renderScoreboard();
  showScreen("board");
  startBgMusic();
  playHost("round1");
}

function renderBoard() {
  const grid = document.getElementById("board-grid");
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${selectedCategories.length}, 1fr)`;

  // Headers
  selectedCategories.forEach(cat => {
    const meta = categoryMeta[cat];
    const header = document.createElement("div");
    header.className = "board-cat-header";
    header.innerHTML = `<span class="icon">${meta.icon}</span>${meta.short}`;
    grid.appendChild(header);
  });

  // Tiles row by row — derive point values from the actual board (handles round multiplier)
  const multiplier = currentRound === 2 ? 2 : 1;
  const rowValues = POINT_VALUES.map(p => p * multiplier);
  rowValues.forEach(points => {
    selectedCategories.forEach(cat => {
      const tile = board.find(t => t.cat === cat && t.points === points);
      const el = document.createElement("button");
      el.className = "board-tile" + (tile && tile.used ? " used" : "");
      el.textContent = (tile && tile.used) ? "" : `${points} pts`;
      el.addEventListener("click", () => {
        if (tile && !tile.used) openQuestion(tile);
      });
      grid.appendChild(el);
    });
  });
}

function renderScoreboard() {
  renderScoreboardInto("scoreboard");
}

function renderScoreboardInto(elementId) {
  const sb = document.getElementById(elementId);
  if (!sb) return;
  sb.innerHTML = "";
  players.forEach(p => {
    const card = document.createElement("div");
    card.className = "score-card";
    const streakHtml = p.streak >= 2 ? `<span class="streak-flame">🔥 ${p.streak}</span>` : "";
    card.innerHTML = `
      <span class="avatar">${p.emoji}</span>
      <div class="info">
        <span class="name">${p.name}${streakHtml}</span>
        <span class="score">${p.score} pts</span>
      </div>
    `;
    sb.appendChild(card);
  });
}

function showStreakToast(player, streak) {
  const toast = document.createElement("div");
  toast.className = "streak-toast";
  toast.innerHTML = `🔥 ${player.emoji} ${player.name} — ${streak} in a row! +${STREAK_BONUS_AMOUNT} pts bonus!`;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("shown"));
  setTimeout(() => {
    toast.classList.remove("shown");
    setTimeout(() => toast.remove(), 500);
  }, 2400);
}

// ============ QUESTION MODAL ============
function openQuestion(tile) {
  activeTile = tile;
  selectedPlayer = null;
  activeAnswerer = turnIndex;
  teamsTried = [];

  const meta = categoryMeta[tile.cat];
  document.getElementById("q-cat-label").textContent = `${meta.icon} ${meta.label}`;
  // Daily Double = points doubled
  const displayPoints = tile.isDD ? tile.points * 2 : tile.points;
  document.getElementById("q-points-label").textContent = `${displayPoints} pts` + (tile.isDD ? " 2X" : "");
  document.getElementById("q-question").textContent = tile.q;

  // Media (audio / image)
  const mediaEl = document.getElementById("q-media");
  mediaEl.innerHTML = "";
  if (tile.image) {
    const img = document.createElement("img");
    img.src = tile.image;
    img.alt = "Question image";
    img.onerror = () => {
      mediaEl.innerHTML = `<div class="image-missing">📷 Image not found:<br><code>${tile.image}</code><br><small>Drop the file there to display it.</small></div>`;
    };
    mediaEl.appendChild(img);
  }
  if (tile.audio) {
    const audio = document.createElement("audio");
    audio.src = tile.audio;
    audio.controls = true;
    audio.preload = "metadata";
    audio.onerror = () => {
      const missing = document.createElement("div");
      missing.className = "audio-missing";
      missing.innerHTML = `🔇 Audio not found: <code>${tile.audio}</code><br><small>Drop the file there to enable playback.</small>`;
      audio.replaceWith(missing);
    };
    mediaEl.appendChild(audio);
  }

  // Daily Double banner
  const existingDD = document.getElementById("dd-banner");
  if (existingDD) existingDD.remove();
  if (tile.isDD) {
    const ddBanner = document.createElement("div");
    ddBanner.id = "dd-banner";
    ddBanner.className = "dd-banner";
    ddBanner.textContent = "⭐ Daily Double — Points x2 ⭐";
    const modalEl = document.querySelector("#question-modal .question-modal");
    modalEl.insertBefore(ddBanner, document.getElementById("active-turn-banner"));
    sfxDailyDouble();
    playHost("dailydouble");
  }

  // Hide & reset answer reveal
  const ansEl = document.getElementById("answer-reveal");
  ansEl.classList.remove("shown");
  document.getElementById("answer-text").textContent = tile.options[tile.answer];
  const revealBtn = document.getElementById("reveal-btn");
  revealBtn.textContent = "👁 Show Answer";
  revealBtn.dataset.shown = "false";

  renderPlayerButtons();
  updateActiveTurnBanner(false);

  document.getElementById("judge-correct").disabled = true;
  document.getElementById("judge-wrong").disabled = true;

  document.getElementById("question-modal").classList.add("active");
  stopBgMusic();
  startTimer();
}

function renderPlayerButtons() {
  const pb = document.getElementById("player-buttons");
  pb.innerHTML = "";
  players.forEach((p, i) => {
    const wrap = document.createElement("div");
    wrap.style.display = "flex";
    wrap.style.alignItems = "stretch";
    wrap.style.gap = "4px";

    const btn = document.createElement("button");
    btn.className = "player-btn" + (selectedPlayer === i ? " selected" : "");
    btn.dataset.idx = i;
    btn.style.flex = "1";
    btn.innerHTML = `<span class="avatar">${p.emoji}</span>${p.name}`;
    btn.addEventListener("click", () => {
      selectedPlayer = i;
      pb.querySelectorAll(".player-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      sfxBuzz(i);
      document.getElementById("judge-correct").disabled = false;
      document.getElementById("judge-wrong").disabled = false;
    });
    wrap.appendChild(btn);

    if (settings.buzzers) {
      const buzz = document.createElement("button");
      buzz.className = "buzz-btn";
      buzz.textContent = "🔔";
      buzz.title = `${p.name}'s buzzer`;
      buzz.addEventListener("click", (e) => {
        e.stopPropagation();
        sfxBuzz(i);
      });
      wrap.appendChild(buzz);
    }
    pb.appendChild(wrap);
  });
}

function updateActiveTurnBanner(isPassed) {
  const p = players[activeAnswerer];
  document.getElementById("active-avatar").textContent = p.emoji;
  document.getElementById("active-name").textContent = p.name;
  let status;
  if (isPassed) status = "— passed to them (time was up)";
  else if (activeAnswerer === turnIndex) status = "picked this tile — they're up first!";
  else status = "is up";
  document.getElementById("active-status").textContent = status;
  const banner = document.getElementById("active-turn-banner");
  banner.classList.toggle("passed", isPassed);
}

document.getElementById("reveal-btn").addEventListener("click", () => {
  const btn = document.getElementById("reveal-btn");
  const ans = document.getElementById("answer-reveal");
  if (btn.dataset.shown === "false") {
    ans.classList.add("shown");
    btn.textContent = "🙈 Hide Answer";
    btn.dataset.shown = "true";
  } else {
    ans.classList.remove("shown");
    btn.textContent = "👁 Show Answer";
    btn.dataset.shown = "false";
  }
});

// ============ TIMER ============
function startTimer() {
  stopTimer();
  timerSeconds = settings.timerSeconds;
  timerPaused = false;
  updateTimerDisplay();
  document.getElementById("pause-btn").textContent = "⏸ Pause";
  timerInterval = setInterval(() => {
    if (timerPaused) return;
    timerSeconds--;
    updateTimerDisplay();
    if (timerSeconds <= 0) {
      stopTimer();
      sfxTimeUp();
      playHost("timesup");
      onTimeUp();
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function updateTimerDisplay() {
  const m = Math.floor(timerSeconds / 60);
  const s = timerSeconds % 60;
  const display = document.getElementById("timer-display");
  display.textContent = `${m}:${s.toString().padStart(2, "0")}`;
  display.classList.remove("warning", "danger", "paused");
  if (timerPaused) {
    display.classList.add("paused");
  } else if (timerSeconds <= 15) {
    display.classList.add("danger");
  } else if (timerSeconds <= 30) {
    display.classList.add("warning");
  }
}

function onTimeUp() {
  teamsTried.push(activeAnswerer);
  // Find next team that hasn't tried yet
  if (teamsTried.length >= players.length) {
    // Everyone has had a turn — auto-close as no answer
    alert("Time's up — no one got it. Closing the question.");
    finishTile();
    return;
  }
  activeAnswerer = (activeAnswerer + 1) % players.length;
  while (teamsTried.includes(activeAnswerer)) {
    activeAnswerer = (activeAnswerer + 1) % players.length;
  }
  selectedPlayer = null;
  document.getElementById("judge-correct").disabled = true;
  document.getElementById("judge-wrong").disabled = true;
  renderPlayerButtons();
  updateActiveTurnBanner(true);
  startTimer();
}

document.getElementById("pause-btn").addEventListener("click", () => {
  timerPaused = !timerPaused;
  document.getElementById("pause-btn").textContent = timerPaused ? "▶ Resume" : "⏸ Pause";
  updateTimerDisplay();
});

document.getElementById("judge-correct").addEventListener("click", () => {
  if (selectedPlayer === null || !activeTile) return;
  const pts = activeTile.isDD ? activeTile.points * 2 : activeTile.points;
  const p = players[selectedPlayer];
  p.score += pts;
  // Reset streaks for everyone else who tried this question
  players.forEach((other, i) => { if (i !== selectedPlayer) other.streak = 0; });
  // Increment streak
  p.streak++;
  if (p.streak === STREAK_BONUS_AT) {
    p.score += STREAK_BONUS_AMOUNT;
    showStreakToast(p, p.streak);
    playHost("streak");
  } else if (p.streak > STREAK_BONUS_AT && p.streak % STREAK_BONUS_AT === 0) {
    p.score += STREAK_BONUS_AMOUNT;
    showStreakToast(p, p.streak);
    playHost("streak");
  }
  sfxCorrect();
  fireConfetti();
  finishTile();
});

document.getElementById("judge-wrong").addEventListener("click", () => {
  if (selectedPlayer === null || !activeTile) return;
  const pts = activeTile.isDD ? activeTile.points * 2 : activeTile.points;
  const p = players[selectedPlayer];
  p.score -= pts;
  p.streak = 0;
  sfxWrong();
  if (!teamsTried.includes(selectedPlayer)) teamsTried.push(selectedPlayer);
  if (teamsTried.length >= players.length) {
    finishTile();
    return;
  }
  let next = (selectedPlayer + 1) % players.length;
  while (teamsTried.includes(next)) next = (next + 1) % players.length;
  activeAnswerer = next;
  selectedPlayer = null;
  document.getElementById("judge-correct").disabled = true;
  document.getElementById("judge-wrong").disabled = true;
  renderPlayerButtons();
  updateActiveTurnBanner(true);
  startTimer();
});

document.getElementById("judge-skip").addEventListener("click", () => {
  if (activeTile) finishTile();
  else closeModal();
});

function finishTile() {
  activeTile.used = true;
  stopTimer();
  turnIndex = (turnIndex + 1) % players.length;
  closeModal();
  renderBoard();
  renderScoreboard();
  if (board.every(t => t.used)) {
    onRoundComplete();
  }
}

function onRoundComplete() {
  if (currentRound === 1 && settings.rounds === 2) {
    // Show round 2 transition
    renderScoreboardInto("round2-scoreboard");
    showScreen("round2");
  } else if (settings.finalQuestion && players.length > 0) {
    showFinalWagerScreen();
  } else {
    showFinalResult();
  }
}

function startRound2() {
  currentRound = 2;
  buildBoardForRound(2);
  document.getElementById("round-badge").textContent = "Round 2 — Double";
  renderBoard();
  renderScoreboard();
  showScreen("board");
  startBgMusic();
  playHost("round2");
}

document.getElementById("start-round2").addEventListener("click", startRound2);

function closeModal() {
  stopTimer();
  document.querySelectorAll("#q-media audio").forEach(a => { a.pause(); a.currentTime = 0; });
  document.getElementById("question-modal").classList.remove("active");
  activeTile = null;
  selectedPlayer = null;
  // Resume waiting music if a board screen is showing
  const boardActive = document.getElementById("board-screen").classList.contains("active");
  if (boardActive) startBgMusic();
}

document.getElementById("end-game-btn").addEventListener("click", () => {
  if (confirm("End the game now and go to results?")) showFinalResult();
});

// ============ FINAL QUESTION ============
function showFinalWagerScreen() {
  stopBgMusic();
  playHost("final");
  finalQuestion = finalQuestionPool[Math.floor(Math.random() * finalQuestionPool.length)];
  finalCurrentJudgeIdx = 0;
  players.forEach(p => { p.finalSet = false; p.finalWager = 0; p.finalCorrect = null; });
  document.getElementById("final-cat-preview").textContent = `Category: ${finalQuestion.catLabel}`;
  renderWagerList();
  document.getElementById("reveal-final-q").disabled = true;
  showScreen("finalWager");
}

function renderWagerList() {
  const list = document.getElementById("wager-list");
  list.innerHTML = "";
  players.forEach((p, i) => {
    const max = Math.max(0, p.score);
    const row = document.createElement("div");
    row.className = "wager-row" + (p.finalSet ? " set" : "");
    row.innerHTML = `
      <span class="avatar">${p.emoji}</span>
      <div class="info">
        <div class="name">${p.name}</div>
        <div class="max">Score: ${p.score} pts · Max wager: ${max} pts</div>
      </div>
      <div class="wager-input-area" id="wager-area-${i}"></div>
    `;
    list.appendChild(row);
    const area = row.querySelector(`#wager-area-${i}`);
    if (p.finalSet) {
      area.innerHTML = `<span class="wager-locked">✓ Set</span>`;
    } else {
      const input = document.createElement("input");
      input.type = "password";
      input.className = "wager-input";
      input.placeholder = "0 pts";
      input.min = 0;
      input.max = max;
      const btn = document.createElement("button");
      btn.className = "wager-set-btn";
      btn.textContent = "Lock In";
      btn.addEventListener("click", () => {
        let val = parseInt(input.value, 10);
        if (isNaN(val) || val < 0) val = 0;
        if (val > max) val = max;
        p.finalWager = val;
        p.finalSet = true;
        renderWagerList();
        if (players.every(pl => pl.finalSet)) {
          document.getElementById("reveal-final-q").disabled = false;
        }
      });
      area.appendChild(input);
      area.appendChild(btn);
    }
  });
}

document.getElementById("reveal-final-q").addEventListener("click", () => {
  document.getElementById("final-q-cat").textContent = finalQuestion.catLabel;
  document.getElementById("final-q-text").textContent = finalQuestion.q;
  document.getElementById("final-answer-text").textContent = finalQuestion.options[finalQuestion.answer];
  document.getElementById("final-answer-reveal").classList.remove("shown");
  document.getElementById("final-reveal-btn").textContent = "👁 Show Answer";
  document.getElementById("final-reveal-btn").dataset.shown = "false";
  renderFinalJudging();
  document.getElementById("final-finish").disabled = false;
  showScreen("finalQuestion");
  startFinalTimer();
});

document.getElementById("final-reveal-btn").addEventListener("click", () => {
  const btn = document.getElementById("final-reveal-btn");
  const ans = document.getElementById("final-answer-reveal");
  if (btn.dataset.shown === "false") {
    ans.classList.add("shown");
    btn.textContent = "🙈 Hide Answer";
    btn.dataset.shown = "true";
  } else {
    ans.classList.remove("shown");
    btn.textContent = "👁 Show Answer";
    btn.dataset.shown = "false";
  }
});

function renderFinalJudging() {
  const fj = document.getElementById("final-judging");
  fj.innerHTML = "";
  players.forEach((p, i) => {
    const row = document.createElement("div");
    row.className = "final-judge-row" + (p.finalCorrect === true ? " judged-correct" : p.finalCorrect === false ? " judged-wrong" : "");
    const verdictText = p.finalCorrect === true ? `<span class="verdict" style="color:#2ecc71">+${p.finalWager} pts</span>`
      : p.finalCorrect === false ? `<span class="verdict" style="color:#e74c3c">-${p.finalWager} pts</span>`
      : `<span class="verdict" style="color:#a0a0c0">Wager: ${p.finalWager} pts</span>`;
    row.innerHTML = `
      <span class="avatar">${p.emoji}</span>
      <div class="info">
        <div><strong>${p.name}</strong> ${verdictText}</div>
      </div>
      <button class="judge-correct" data-idx="${i}" data-verdict="correct">✓ Correct</button>
      <button class="judge-wrong" data-idx="${i}" data-verdict="wrong">✗ Wrong</button>
    `;
    fj.appendChild(row);
  });
  fj.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      const i = parseInt(btn.dataset.idx);
      const verdict = btn.dataset.verdict;
      const p = players[i];
      const wasCorrect = p.finalCorrect;
      // Undo any previous adjustment
      if (wasCorrect === true) p.score -= p.finalWager;
      else if (wasCorrect === false) p.score += p.finalWager;
      // Apply new
      if (verdict === "correct") {
        p.score += p.finalWager;
        p.finalCorrect = true;
        sfxCorrect();
      } else {
        p.score -= p.finalWager;
        p.finalCorrect = false;
        sfxWrong();
      }
      renderFinalJudging();
    });
  });
}

document.getElementById("final-finish").addEventListener("click", () => {
  stopFinalTimer();
  // Confetti for the winner
  fireConfetti();
  showFinalResult();
});

// Final question timer (1 minute)
let finalTimerSeconds = 60;
let finalTimerInterval = null;
let finalTimerPaused = false;
function startFinalTimer() {
  stopFinalTimer();
  finalTimerSeconds = 60;
  finalTimerPaused = false;
  document.getElementById("final-pause-btn").textContent = "⏸ Pause";
  updateFinalTimerDisplay();
  finalTimerInterval = setInterval(() => {
    if (finalTimerPaused) return;
    finalTimerSeconds--;
    updateFinalTimerDisplay();
    if (finalTimerSeconds <= 0) {
      stopFinalTimer();
      sfxTimeUp();
    }
  }, 1000);
}
function stopFinalTimer() {
  if (finalTimerInterval) {
    clearInterval(finalTimerInterval);
    finalTimerInterval = null;
  }
}
function updateFinalTimerDisplay() {
  const m = Math.floor(finalTimerSeconds / 60);
  const s = finalTimerSeconds % 60;
  const display = document.getElementById("final-timer-display");
  display.textContent = `${m}:${s.toString().padStart(2, "0")}`;
  display.classList.remove("warning", "danger", "paused");
  if (finalTimerPaused) display.classList.add("paused");
  else if (finalTimerSeconds <= 10) display.classList.add("danger");
  else if (finalTimerSeconds <= 20) display.classList.add("warning");
}
document.getElementById("final-pause-btn").addEventListener("click", () => {
  finalTimerPaused = !finalTimerPaused;
  document.getElementById("final-pause-btn").textContent = finalTimerPaused ? "▶ Resume" : "⏸ Pause";
  updateFinalTimerDisplay();
});

// ============ RESULT ============
function showFinalResult() {
  stopBgMusic();
  playHost("winner");
  fireConfetti();
  showScreen("result");
  const sorted = [...players].sort((a, b) => b.score - a.score);
  const winner = sorted[0];
  const tied = sorted.filter(p => p.score === winner.score).length > 1;
  document.getElementById("result-subtitle").textContent = tied
    ? `Tied at ${winner.score} pts!`
    : `${winner.emoji} ${winner.name} wins with ${winner.score} pts!`;

  const lb = document.getElementById("leaderboard");
  lb.innerHTML = "";
  sorted.forEach((p, i) => {
    const row = document.createElement("div");
    row.className = "leader-row" + (i === 0 ? " first" : "");
    const medal = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `#${i+1}`;
    row.innerHTML = `
      <span class="leader-rank">${medal}</span>
      <span class="avatar">${p.emoji}</span>
      <span class="name">${p.name}</span>
      <span class="score">${p.score} pts</span>
    `;
    lb.appendChild(row);
  });
}

document.getElementById("play-again").addEventListener("click", () => {
  players.forEach(p => { p.score = 0; p.streak = 0; p.finalSet = false; p.finalWager = 0; p.finalCorrect = null; });
  selectedCategories = [];
  usedQuestionsByCat = {};
  currentRound = 1;
  renderCategoryPicker();
  showScreen("category");
});
document.getElementById("new-crew").addEventListener("click", () => showScreen("start"));

// ============ VOLUME SLIDERS + AUDIO UNLOCK ============
function bindVolumeSlider(id, key, displayId) {
  const el = document.getElementById(id);
  const display = document.getElementById(displayId);
  if (!el) return;
  el.addEventListener("input", e => {
    const v = parseInt(e.target.value, 10);
    display.textContent = v + "%";
    if (key === "volMusic") setMusicVolume(v / 100);
    else settings[key] = v / 100;
  });
}
bindVolumeSlider("vol-host", "volHost", "vol-host-val");
bindVolumeSlider("vol-music", "volMusic", "vol-music-val");
bindVolumeSlider("vol-sfx", "volSfx", "vol-sfx-val");

// Audio autoplay policies require a user gesture before audio can play.
// Show an unlock button until the user clicks anywhere.
function unlockAudio() {
  if (audioUnlocked) return;
  audioUnlocked = true;
  const ctx = getAudioCtx();
  if (ctx && ctx.state === "suspended") ctx.resume();
  document.getElementById("audio-enable").classList.remove("shown");
  // Welcome the user
  setTimeout(() => playHost("welcome"), 400);
}
document.getElementById("audio-enable").addEventListener("click", unlockAudio);
document.addEventListener("click", () => {
  if (!audioUnlocked) unlockAudio();
}, { once: true });

// Show the audio-unlock CTA after a short delay if the user hasn't clicked
setTimeout(() => {
  if (!audioUnlocked) document.getElementById("audio-enable").classList.add("shown");
}, 1500);

// ============ INIT ============
buildEmojiPicker();
renderPlayers();
applyTheme();
spawnAmbientParticles();
