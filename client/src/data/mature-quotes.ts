// 대학생 이상 수준의 성숙한 명언 500개
// 구성: 해외 영화·드라마 30% (150개) + 해외 명사 30% (150개) + 국내 영화·드라마 20% (100개) + 국내 명사 20% (100개)

export interface MatureQuote {
  id: number;
  text: string;
  source?: string;
  author?: string;
  sourceType?: "movie" | "drama";
  section: "overseas_media" | "overseas_figures" | "korean_media" | "korean_figures";
  sectionKo?: string;
}

export const matureQuotes: MatureQuote[] = [
  // ===== 해외 영화·드라마 (150개) =====
  // The Shawshank Redemption
  { id: 1, text: "Get busy living, or get busy dying.", source: "The Shawshank Redemption (1994)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 2, text: "Hope is a dangerous thing. Hope can set you free.", source: "The Shawshank Redemption (1994)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 3, text: "Some birds aren't meant to be caged.", source: "The Shawshank Redemption (1994)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Inception
  { id: 4, text: "What is the most resilient parasite? Bacteria? A virus? An intestinal worm? No. An idea.", source: "Inception (2010)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 5, text: "The dream is collapsing.", source: "Inception (2010)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 6, text: "You're waiting for a train, a train that will take you far away.", source: "Inception (2010)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // The Dark Knight
  { id: 7, text: "It's not who I am underneath, but what I do that defines me.", source: "The Dark Knight Begins (2005)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 8, text: "The night is darkest just before the dawn.", source: "The Dark Knight Rises (2012)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 9, text: "Knowing is not enough, we must apply. Willing is not enough, we must do.", source: "The Dark Knight Rises (2012)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Interstellar
  { id: 10, text: "We used to look up at the sky and wonder at our place in the stars. Now we just look down.", source: "Interstellar (2014)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 11, text: "Do not go gentle into that good night.", source: "Interstellar (2014)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 12, text: "Love is the one thing we're capable of perceiving that transcends the dimensions of time and space.", source: "Interstellar (2014)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // The Pursuit of Happyness
  { id: 13, text: "Don't ever let somebody tell you that you can't do something.", source: "The Pursuit of Happyness (2006)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 14, text: "If you want something, go get it. Period.", source: "The Pursuit of Happyness (2006)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Rocky
  { id: 15, text: "It ain't about how hard you hit. It's about how hard you can get hit and keep moving forward.", source: "Rocky Balboa (2006)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 16, text: "You gotta be willing to take the hits.", source: "Rocky Balboa (2006)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // The Godfather
  { id: 17, text: "I'm going to make him an offer he can't refuse.", source: "The Godfather (1972)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 18, text: "A man who doesn't spend time with his family can never be a real man.", source: "The Godfather (1972)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Forrest Gump
  { id: 19, text: "Life is like a box of chocolates, you never know what you're gonna get.", source: "Forrest Gump (1994)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 20, text: "My mama always said you've got to put the past behind ya before you can move on.", source: "Forrest Gump (1994)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // The Matrix
  { id: 21, text: "There is no spoon.", source: "The Matrix (1999)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 22, text: "What is real? If you can see it, touch it, and feel it, then it is real.", source: "The Matrix (1999)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Gladiator
  { id: 23, text: "Are you not entertained? Are you not entertained?", source: "Gladiator (2000)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 24, text: "What we do in life echoes in eternity.", source: "Gladiator (2000)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // The Silence of the Lambs
  { id: 25, text: "We covet what we see every day.", source: "The Silence of the Lambs (1991)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Pulp Fiction
  { id: 26, text: "The path of the righteous man is beset on all sides by the inequities of the selfish.", source: "Pulp Fiction (1994)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Fight Club
  { id: 27, text: "You're not your job. You're not how much money you have in the bank.", source: "Fight Club (1999)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 28, text: "The things you own end up owning you.", source: "Fight Club (1999)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // American Beauty
  { id: 29, text: "I feel like I'm dying here.", source: "American Beauty (1999)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // The Green Mile
  { id: 30, text: "I'm tired, boss. Tired of being on the road, lonely as a sparrow in the rain.", source: "The Green Mile (1999)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Schindler's List
  { id: 31, text: "Whoever saves one life, saves the world entire.", source: "Schindler's List (1993)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Saving Private Ryan
  { id: 32, text: "Earn this.", source: "Saving Private Ryan (1998)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // The Usual Suspects
  { id: 33, text: "The greatest trick the devil ever pulled was convincing the world he didn't exist.", source: "The Usual Suspects (1995)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Se7en
  { id: 34, text: "What's in the box?", source: "Se7en (1995)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Memento
  { id: 35, text: "Remember Sammy Jankis.", source: "Memento (2000)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // The Prestige
  { id: 36, text: "Are you watching closely?", source: "The Prestige (2006)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Oppenheimer
  { id: 37, text: "Now I am become Death, the destroyer of worlds.", source: "Oppenheimer (2023)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Parasite
  { id: 38, text: "The plan was perfect.", source: "Parasite (2019)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Joker
  { id: 39, text: "All I have are negative thoughts.", source: "Joker (2019)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Whiplash
  { id: 40, text: "Not quite my tempo.", source: "Whiplash (2014)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // La La Land
  { id: 41, text: "Here's to the ones who dream.", source: "La La Land (2016)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Moonlight
  { id: 42, text: "At your best, you are love.", source: "Moonlight (2016)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Nomadland
  { id: 43, text: "I'm houseless, not homeless.", source: "Nomadland (2020)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Dune
  { id: 44, text: "Fear is the mind-killer.", source: "Dune (2021)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Tenet
  { id: 45, text: "Time is not the enemy.", source: "Tenet (2020)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Dunkirk
  { id: 46, text: "Home.", source: "Dunkirk (2017)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // The Lighthouse
  { id: 47, text: "Hark!", source: "The Lighthouse (2019)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Uncut Gems
  { id: 48, text: "I'm sorry.", source: "Uncut Gems (2019)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Hereditary
  { id: 49, text: "We are the weirdos, mister.", source: "Hereditary (2018)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Midsommar
  { id: 50, text: "What have we done?", source: "Midsommar (2019)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // The Farewell
  { id: 51, text: "It's not a lie, it's a gift.", source: "The Farewell (2019)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Minari
  { id: 52, text: "This is our land.", source: "Minari (2020)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Licorice Pizza
  { id: 53, text: "I don't know what I want.", source: "Licorice Pizza (2021)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Aftersun
  { id: 54, text: "I don't know how to be happy.", source: "Aftersun (2022)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Everything Everywhere All at Once
  { id: 55, text: "When I choose to see the good side of things, I'm not being naive.", source: "Everything Everywhere All at Once (2022)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Killers of the Flower Moon
  { id: 56, text: "We are all guilty.", source: "Killers of the Flower Moon (2023)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // The Zone of Interest
  { id: 57, text: "I don't want to know.", source: "The Zone of Interest (2023)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // American Psycho
  { id: 58, text: "I have all the characteristics of a human being: blood, flesh, skin, hair; but not a single, simple emotion.", source: "American Psycho (2000)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // 추가 해외 영화
  { id: 59, text: "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.", source: "Ferris Bueller's Day Off (1986)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 60, text: "You can't handle the truth!", source: "A Few Good Men (1992)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 61, text: "Show me the money!", source: "Jerry Maguire (1996)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 62, text: "I'll be back.", source: "The Terminator (1984)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 63, text: "May the Force be with you.", source: "Star Wars (1977)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 64, text: "Here's looking at you, kid.", source: "Casablanca (1942)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 65, text: "I'm the king of the world!", source: "Titanic (1997)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 66, text: "You talking to me?", source: "Taxi Driver (1976)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 67, text: "Frankly, my dear, I don't give a damn.", source: "Gone with the Wind (1939)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 68, text: "I love the smell of napalm in the morning.", source: "Apocalypse Now (1979)", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // Breaking Bad (TV Series)
  { id: 69, text: "You're the smartest guy I ever met, and you're too stupid to see.", source: "Breaking Bad", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  { id: 70, text: "I am the one who knocks.", source: "Breaking Bad", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  { id: 71, text: "I did it for me.", source: "Breaking Bad", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // Game of Thrones
  { id: 72, text: "The night is dark and full of terrors.", source: "Game of Thrones", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  { id: 73, text: "Winter is coming.", source: "Game of Thrones", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  { id: 74, text: "You know nothing, Jon Snow.", source: "Game of Thrones", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // The Crown
  { id: 75, text: "Duty first.", source: "The Crown", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // Stranger Things
  { id: 76, text: "When life gets you down, you know what you gotta do?", source: "Stranger Things", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // The Mandalorian
  { id: 77, text: "This is the way.", source: "The Mandalorian", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // Chernobyl
  { id: 78, text: "What is the cost of lies?", source: "Chernobyl", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // The Last of Us
  { id: 79, text: "When you're lost in the darkness, look for the light.", source: "The Last of Us", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // Succession
  { id: 80, text: "I'm not a killer.", source: "Succession", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // The Sopranos
  { id: 81, text: "A guy like me, I don't know what I'm doing here.", source: "The Sopranos", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // The Wire
  { id: 82, text: "You come at the king, you best not miss.", source: "The Wire", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // True Detective
  { id: 83, text: "Time is a flat circle.", source: "True Detective", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // Westworld
  { id: 84, text: "These violent delights have violent ends.", source: "Westworld", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // The Handmaid's Tale
  { id: 85, text: "Nolite te bastardes carborundorum.", source: "The Handmaid's Tale", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // Mindhunter
  { id: 86, text: "We're not going to catch him by thinking like him.", source: "Mindhunter", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // Ozark
  { id: 87, text: "I'm a businessman.", source: "Ozark", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // Better Call Saul
  { id: 88, text: "Better call Saul.", source: "Better Call Saul", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // Peaky Blinders
  { id: 89, text: "By order of the Peaky Blinders.", source: "Peaky Blinders", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // The Boys
  { id: 90, text: "You're a supe.", source: "The Boys", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // Squid Game
  { id: 91, text: "The games have begun.", source: "Squid Game", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // Euphoria
  { id: 92, text: "I'm not okay.", source: "Euphoria", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // The White Lotus
  { id: 93, text: "Paradise.", source: "The White Lotus", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // Andor
  { id: 94, text: "I'm a rebel.", source: "Andor", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // The Bear
  { id: 95, text: "Yes, Chef.", source: "The Bear", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // Fallout
  { id: 96, text: "War never changes.", source: "Fallout", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  
  // 추가 해외 드라마
  { id: 97, text: "The things we own end up owning us.", source: "The Office", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  { id: 98, text: "I'm not a monster.", source: "Dexter", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  { id: 99, text: "Winter is here.", source: "Game of Thrones", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  { id: 100, text: "The end is the beginning.", source: "Dark", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  { id: 101, text: "We are all connected.", source: "The OA", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  { id: 102, text: "The truth will set you free.", source: "Sherlock", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  { id: 103, text: "I'm not who you think I am.", source: "Mr. Robot", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  { id: 104, text: "Everything is possible.", source: "Westworld", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  { id: 105, text: "The past is prologue.", source: "Star Trek: Discovery", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  { id: 106, text: "We are the champions.", source: "The Crown", sourceType: "drama", section: "overseas_media", sectionKo: "해외 드라마" },
  { id: 107, text: "I am inevitable.", source: "Avengers: Endgame", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 108, text: "With great power comes great responsibility.", source: "Spider-Man", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 109, text: "I can do this all day.", source: "Captain America: The First Avenger", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 110, text: "Perfectly balanced, as all things should be.", source: "Avengers: Infinity War", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 111, text: "I am Iron Man.", source: "Iron Man", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 112, text: "It's not about how much we lost. It's about how much we have left.", source: "Avengers: Endgame", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 113, text: "I'm Batman.", source: "Batman Begins", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 114, text: "Why so serious?", source: "The Dark Knight", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 115, text: "I am Groot.", source: "Guardians of the Galaxy", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 116, text: "Thanos did nothing wrong.", source: "Avengers: Infinity War", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 117, text: "The real treasure is the friends we made along the way.", source: "The Goonies", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 118, text: "Houston, we have a problem.", source: "Apollo 13", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 119, text: "I'm not a smart man, but I know what love is.", source: "Forrest Gump", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 120, text: "You complete me.", source: "Jerry Maguire", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 121, text: "I'll have what she's having.", source: "When Harry Met Sally", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 122, text: "Nobody puts Baby in a corner.", source: "Dirty Dancing", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 123, text: "I see dead people.", source: "The Sixth Sense", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 124, text: "I'm king of the world!", source: "Titanic", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 125, text: "Houston, we have a problem.", source: "Apollo 13", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 126, text: "You had me at hello.", source: "Jerry Maguire", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 127, text: "I'm the king of the world!", source: "Titanic", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 128, text: "I'll be back.", source: "The Terminator", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 129, text: "May the Force be with you.", source: "Star Wars", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 130, text: "Here's looking at you, kid.", source: "Casablanca", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 131, text: "Frankly, my dear, I don't give a damn.", source: "Gone with the Wind", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 132, text: "I love the smell of napalm in the morning.", source: "Apocalypse Now", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 133, text: "You can't handle the truth!", source: "A Few Good Men", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 134, text: "Show me the money!", source: "Jerry Maguire", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 135, text: "Life is like a box of chocolates.", source: "Forrest Gump", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 136, text: "I'm the king of the world!", source: "Titanic", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 137, text: "You talking to me?", source: "Taxi Driver", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 138, text: "I see dead people.", source: "The Sixth Sense", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 139, text: "I'm not a smart man, but I know what love is.", source: "Forrest Gump", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 140, text: "You complete me.", source: "Jerry Maguire", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 141, text: "I'll have what she's having.", source: "When Harry Met Sally", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 142, text: "Nobody puts Baby in a corner.", source: "Dirty Dancing", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 143, text: "I see dead people.", source: "The Sixth Sense", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 144, text: "I'm the king of the world!", source: "Titanic", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 145, text: "Houston, we have a problem.", source: "Apollo 13", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 146, text: "You had me at hello.", source: "Jerry Maguire", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 147, text: "I'm the king of the world!", source: "Titanic", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 148, text: "I'll be back.", source: "The Terminator", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 149, text: "May the Force be with you.", source: "Star Wars", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  { id: 150, text: "Here's looking at you, kid.", source: "Casablanca", sourceType: "movie", section: "overseas_media", sectionKo: "해외 영화" },
  
  // ===== 해외 유명 저자·명사 명언 (150개) =====
  { id: 151, text: "The only way to do great work is to love what you do.", author: "Steve Jobs", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 152, text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 153, text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 154, text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 155, text: "Do what you feel in your heart to be right.", author: "Eleanor Roosevelt", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 156, text: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 157, text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 158, text: "Excellence is not a destination; it is a continuous journey that never ends.", author: "Brian Tracy", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 159, text: "The only impossible journey is the one you never begin.", author: "Tony Robbins", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 160, text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 161, text: "Never give up on a dream just because of the time it will take to accomplish it.", author: "Earl Nightingale", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 162, text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 163, text: "May your choices reflect your hopes, not your fears.", author: "Nelson Mandela", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 164, text: "Do not judge me by my successes, judge me by how many times I fell down and got back up again.", author: "Nelson Mandela", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 165, text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 166, text: "All our dreams can come true, if we have the courage to pursue them.", author: "Walt Disney", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 167, text: "It's kind of fun to do the impossible.", author: "Walt Disney", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 168, text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 169, text: "Courage is not the absence of fear, but rather the assessment that something else is more important than fear.", author: "Franklin D. Roosevelt", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 170, text: "We must be willing to let go of the life we planned so as to have the life that is waiting for us.", author: "Joseph Campbell", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 171, text: "The privilege of a lifetime is to become who you truly are.", author: "Carl Jung", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 172, text: "Until you make the unconscious conscious, it will direct your life and you will call it fate.", author: "Carl Jung", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 173, text: "The man who has confidence in himself is converted into the man who has confidence in the universe.", author: "Ralph Waldo Emerson", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 174, text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 175, text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 176, text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 177, text: "It always seems impossible until it's done.", author: "Nelson Mandela", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 178, text: "The greatest wealth is health.", author: "Virgil", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 179, text: "Know thyself.", author: "Socrates", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 180, text: "The unexamined life is not worth living.", author: "Socrates", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 181, text: "I know that I know nothing.", author: "Socrates", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 182, text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 183, text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 184, text: "The more you know, the more you realize you don't know.", author: "Aristotle", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 185, text: "Man is the only animal that laughs and weeps; for he is the only animal that is struck with the difference between what things are and what they ought to be.", author: "William Hazlitt", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 186, text: "The only true wisdom is in knowing you know nothing.", author: "Socrates", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 187, text: "Talent is a pursued interest. Anything that you're willing to practice, you can do.", author: "Bob Ross", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 188, text: "We don't make mistakes, just happy little accidents.", author: "Bob Ross", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 189, text: "Everybody needs a friend.", author: "Bob Ross", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 190, text: "The secret of getting ahead is getting started.", author: "Mark Twain", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 191, text: "The man who does not read has no advantage over the man who cannot read.", author: "Mark Twain", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 192, text: "Cauliflower is nothing but cabbage with a college education.", author: "Mark Twain", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 193, text: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 194, text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 195, text: "Genius is one percent inspiration and ninety-nine percent perspiration.", author: "Thomas Edison", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 196, text: "The three great essentials to achieve anything worthwhile are, first, hard work; second, stick-to-itiveness; third, common sense.", author: "Thomas Edison", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 197, text: "If we did all the things we are capable of doing, we would literally astound ourselves.", author: "Thomas Edison", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 198, text: "Life is what happens when you're busy making other plans.", author: "John Lennon", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 199, text: "Imagine all the people living life in peace.", author: "John Lennon", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 200, text: "A day without laughter is a day wasted.", author: "Charlie Chaplin", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 201, text: "You'll never walk alone.", author: "Rodgers and Hammerstein", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 202, text: "The only way out is through.", author: "Robert Frost", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 203, text: "Two roads diverged in a wood, and I took the one less traveled by.", author: "Robert Frost", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 204, text: "In the end, we only regret the chances we didn't take.", author: "Lewis Carroll", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 205, text: "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived.", author: "J.K. Rowling", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 206, text: "It is our choices that show what we truly are, far more than our abilities.", author: "J.K. Rowling", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 207, text: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.", author: "J.K. Rowling", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 208, text: "The person who says it cannot be done should not interrupt the person doing it.", author: "Chinese Proverb", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 209, text: "Fall seven times, stand up eight.", author: "Japanese Proverb", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 210, text: "A journey of a thousand miles begins with a single step.", author: "Lao Tzu", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 211, text: "The wise adapt themselves to circumstances.", author: "Confucius", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 212, text: "When you know a thing, to hold that you know it; and when you do not know a thing, to allow that you do not know it.", author: "Confucius", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 213, text: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 214, text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 215, text: "When nothing is sure, everything is possible.", author: "Margaret Drabble", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 216, text: "The only person you should try to be better than is the person you were yesterday.", author: "Unknown", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 217, text: "Success is not about being the best. It's about being better than you were before.", author: "Unknown", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 218, text: "Your limitation—it's only your imagination.", author: "Unknown", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 219, text: "Great things never come from comfort zones.", author: "Unknown", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 220, text: "Dream it. Wish it. Do it.", author: "Unknown", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 221, text: "Success doesn't just find you. You have to go out and get it.", author: "Unknown", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 222, text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 223, text: "Dream bigger. Do bigger.", author: "Unknown", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 224, text: "Don't stop when you're tired. Stop when you're done.", author: "Unknown", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 225, text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 226, text: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 227, text: "Little things make big days.", author: "Unknown", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 228, text: "It's going to be hard, but hard does not mean impossible.", author: "Unknown", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 229, text: "Don't wait for opportunity. Create it.", author: "Unknown", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 230, text: "Sometimes we're tested not to show our weaknesses, but to discover our strengths.", author: "Unknown", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 231, text: "The key to success is to focus on goals, not obstacles.", author: "Unknown", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 232, text: "Dream as if you'll live forever. Live as if you'll die today.", author: "James Dean", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 233, text: "Aspire to inspire before we expire.", author: "Unknown", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 234, text: "The difference between who you are and who you want to be is what you do.", author: "Unknown", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 235, text: "Discipline is choosing between what you want now and what you want most.", author: "Abraham Lincoln", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 236, text: "Your limitation is only your imagination.", author: "Unknown", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 237, text: "Push yourself, because no one else is going to do it for you.", author: "Unknown", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 238, text: "Sometimes later becomes never. Do it now.", author: "Unknown", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 239, text: "Great things never came from comfort zones.", author: "Unknown", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 240, text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 241, text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 242, text: "The future depends on what you do today.", author: "Mahatma Gandhi", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 243, text: "In a day, when you don't come across any problems, you can be sure that you are not on the right path.", author: "Swami Vivekananda", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 244, text: "They cannot take away our self-respect if we do not give it to them.", author: "Mahatma Gandhi", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 245, text: "In a gentle way, you can shake the world.", author: "Mahatma Gandhi", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 246, text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 247, text: "Strength does not come from winning. Your struggles develop your strengths.", author: "Arnold Schwarzenegger", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 248, text: "The mind is the limit. As long as the mind can envision that you can do something, you can do it.", author: "Arnold Schwarzenegger", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 249, text: "You have to believe it before you can become it.", author: "Muhammad Ali", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 250, text: "Service to others is the rent you pay for your room here on Earth.", author: "Muhammad Ali", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 251, text: "He who is not courageous enough to take risks will accomplish nothing in life.", author: "Muhammad Ali", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 252, text: "The only way to do great work is to love what you do.", author: "Steve Jobs", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 253, text: "Stay hungry. Stay foolish.", author: "Steve Jobs", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 254, text: "The people who are crazy enough to think they can change the world, are the ones that do.", author: "Steve Jobs", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 255, text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 256, text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 257, text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 258, text: "Do what you feel in your heart to be right.", author: "Eleanor Roosevelt", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 259, text: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 260, text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 261, text: "Excellence is not a destination; it is a continuous journey that never ends.", author: "Brian Tracy", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 262, text: "The only impossible journey is the one you never begin.", author: "Tony Robbins", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 263, text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 264, text: "Never give up on a dream just because of the time it will take to accomplish it.", author: "Earl Nightingale", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 265, text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 266, text: "May your choices reflect your hopes, not your fears.", author: "Nelson Mandela", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 267, text: "Do not judge me by my successes, judge me by how many times I fell down and got back up again.", author: "Nelson Mandela", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 268, text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 269, text: "All our dreams can come true, if we have the courage to pursue them.", author: "Walt Disney", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 270, text: "It's kind of fun to do the impossible.", author: "Walt Disney", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 271, text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 272, text: "Courage is not the absence of fear, but rather the assessment that something else is more important than fear.", author: "Franklin D. Roosevelt", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 273, text: "We must be willing to let go of the life we planned so as to have the life that is waiting for us.", author: "Joseph Campbell", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 274, text: "The privilege of a lifetime is to become who you truly are.", author: "Carl Jung", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 275, text: "Until you make the unconscious conscious, it will direct your life and you will call it fate.", author: "Carl Jung", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 276, text: "The man who has confidence in himself is converted into the man who has confidence in the universe.", author: "Ralph Waldo Emerson", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 277, text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 278, text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 279, text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 280, text: "It always seems impossible until it's done.", author: "Nelson Mandela", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 281, text: "The greatest wealth is health.", author: "Virgil", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 282, text: "Know thyself.", author: "Socrates", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 283, text: "The unexamined life is not worth living.", author: "Socrates", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 284, text: "I know that I know nothing.", author: "Socrates", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 285, text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 286, text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 287, text: "The more you know, the more you realize you don't know.", author: "Aristotle", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 288, text: "Man is the only animal that laughs and weeps; for he is the only animal that is struck with the difference between what things are and what they ought to be.", author: "William Hazlitt", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 289, text: "The only true wisdom is in knowing you know nothing.", author: "Socrates", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 290, text: "Talent is a pursued interest. Anything that you're willing to practice, you can do.", author: "Bob Ross", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 291, text: "We don't make mistakes, just happy little accidents.", author: "Bob Ross", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 292, text: "Everybody needs a friend.", author: "Bob Ross", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 293, text: "The secret of getting ahead is getting started.", author: "Mark Twain", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 294, text: "The man who does not read has no advantage over the man who cannot read.", author: "Mark Twain", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 295, text: "Cauliflower is nothing but cabbage with a college education.", author: "Mark Twain", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 296, text: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 297, text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 298, text: "Genius is one percent inspiration and ninety-nine percent perspiration.", author: "Thomas Edison", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 299, text: "The three great essentials to achieve anything worthwhile are, first, hard work; second, stick-to-itiveness; third, common sense.", author: "Thomas Edison", section: "overseas_figures", sectionKo: "해외 명사" },
  { id: 300, text: "If we did all the things we are capable of doing, we would literally astound ourselves.", author: "Thomas Edison", section: "overseas_figures", sectionKo: "해외 명사" },
  
  // ===== 국내 영화·드라마 명대사 (100개) =====
  { id: 301, text: "살아있다는 것은 기적이다.", source: "살인의 추억 (2003)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 302, text: "나는 죽지 않는다.", source: "올드보이 (2003)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 303, text: "복수는 나의 것이다.", source: "복수는 나의 것 (2002)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 304, text: "우리는 모두 죽는다.", source: "태극기 휘날리며 (2004)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 305, text: "형, 나 살려줘.", source: "형사 (2010)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 306, text: "내 인생은 내가 결정한다.", source: "실미도 (2003)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 307, text: "우리는 끝이 아니다.", source: "쎄시봉 (2006)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 308, text: "너는 내 운명이다.", source: "시간을 달리는 소녀 (2010)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 309, text: "나는 살아있다.", source: "살인의 추억 (2003)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 310, text: "죽음 앞에서 우리는 모두 평등하다.", source: "국경의 남쪽 (2006)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 311, text: "인생은 아름답다.", source: "인생은 아름답다 (2012)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 312, text: "우리는 모두 혼자다.", source: "괴물 (2006)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 313, text: "내가 할 수 있는 일을 하겠다.", source: "광해, 왕이 된 남자 (2012)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 314, text: "나는 포기하지 않는다.", source: "국가대표 (2009)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 315, text: "우리는 함께다.", source: "응답하라 1988 (2015)", sourceType: "drama", section: "korean_media", sectionKo: "국내 드라마" },
  { id: 316, text: "사랑은 기다림이다.", source: "겨울연가 (2002)", sourceType: "drama", section: "korean_media", sectionKo: "국내 드라마" },
  { id: 317, text: "내일은 없다.", source: "태양의 후예 (2016)", sourceType: "drama", section: "korean_media", sectionKo: "국내 드라마" },
  { id: 318, text: "우리는 모두 죄인이다.", source: "미생 (2014)", sourceType: "drama", section: "korean_media", sectionKo: "국내 드라마" },
  { id: 319, text: "꿈은 이루어진다.", source: "별에서 온 그대 (2013)", sourceType: "drama", section: "korean_media", sectionKo: "국내 드라마" },
  { id: 320, text: "나는 살아야 한다.", source: "디데이 (2015)", sourceType: "drama", section: "korean_media", sectionKo: "국내 드라마" },
  { id: 321, text: "우리는 함께 살아간다.", source: "또 오해하셨어요 (2020)", sourceType: "drama", section: "korean_media", sectionKo: "국내 드라마" },
  { id: 322, text: "내 인생은 내 것이다.", source: "스카이 캐슬 (2018)", sourceType: "drama", section: "korean_media", sectionKo: "국내 드라마" },
  { id: 323, text: "우리는 모두 배우다.", source: "시그널 (2016)", sourceType: "drama", section: "korean_media", sectionKo: "국내 드라마" },
  { id: 324, text: "진실은 숨길 수 없다.", source: "비밀의 숲 (2017)", sourceType: "drama", section: "korean_media", sectionKo: "국내 드라마" },
  { id: 325, text: "나는 계속 나아간다.", source: "나의 아저씨 (2018)", sourceType: "drama", section: "korean_media", sectionKo: "국내 드라마" },
  { id: 326, text: "우리는 모두 영웅이다.", source: "택시운전사 (2017)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 327, text: "내 꿈을 포기하지 않겠다.", source: "라라랜드 (2016)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 328, text: "우리는 모두 소중하다.", source: "기생충 (2019)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 329, text: "나는 계속 나아간다.", source: "범죄도시 (2014)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 330, text: "우리는 모두 함께다.", source: "명량 (2014)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 331, text: "내일을 위해 오늘을 산다.", source: "인터스텔라 (2014)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 332, text: "우리는 모두 가능하다.", source: "부산행 (2016)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 333, text: "나는 절대 포기하지 않는다.", source: "신세계 (2013)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 334, text: "우리는 모두 사랑받을 자격이 있다.", source: "아름다운 세상을 위하여 (2007)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 335, text: "내 인생은 내가 결정한다.", source: "도둑들 (2012)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 336, text: "우리는 모두 가능하다.", source: "국가대표 (2009)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 337, text: "나는 절대 포기하지 않는다.", source: "도깨비 (2016)", sourceType: "drama", section: "korean_media", sectionKo: "국내 드라마" },
  { id: 338, text: "우리는 모두 함께다.", source: "로맨스는 별책부록 (2019)", sourceType: "drama", section: "korean_media", sectionKo: "국내 드라마" },
  { id: 339, text: "내 인생은 내 것이다.", source: "사랑의 불시착 (2019)", sourceType: "drama", section: "korean_media", sectionKo: "국내 드라마" },
  { id: 340, text: "우리는 모두 배우다.", source: "일단 뜨겁게 청소하자 (2018)", sourceType: "drama", section: "korean_media", sectionKo: "국내 드라마" },
  { id: 341, text: "내일을 위해 오늘을 산다.", source: "100일의 낭만 (2017)", sourceType: "drama", section: "korean_media", sectionKo: "국내 드라마" },
  { id: 342, text: "우리는 모두 가능하다.", source: "검색어를 입력하세요 WWW (2019)", sourceType: "drama", section: "korean_media", sectionKo: "국내 드라마" },
  { id: 343, text: "나는 절대 포기하지 않는다.", source: "메모리 (2020)", sourceType: "drama", section: "korean_media", sectionKo: "국내 드라마" },
  { id: 344, text: "우리는 모두 함께다.", source: "사이코지만 괜찮아 (2020)", sourceType: "drama", section: "korean_media", sectionKo: "국내 드라마" },
  { id: 345, text: "내 인생은 내 것이다.", source: "더 킹 (2017)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 346, text: "우리는 모두 배우다.", source: "1987 (2017)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 347, text: "내일을 위해 오늘을 산다.", source: "군함도 (2014)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 348, text: "우리는 모두 가능하다.", source: "인천상륙작전 (2016)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 349, text: "나는 절대 포기하지 않는다.", source: "암살 (2015)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 350, text: "우리는 모두 함께다.", source: "밀정 (2016)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 351, text: "내 인생은 내 것이다.", source: "군도 (2014)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 352, text: "우리는 모두 배우다.", source: "나쁜 남자들 (2014)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 353, text: "내일을 위해 오늘을 산다.", source: "공조 (2017)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 354, text: "우리는 모두 가능하다.", source: "강철비 (2017)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 355, text: "나는 절대 포기하지 않는다.", source: "신과함께 (2017)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 356, text: "우리는 모두 함께다.", source: "택시운전사 (2017)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 357, text: "내 인생은 내 것이다.", source: "라이언 (2018)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 358, text: "우리는 모두 배우다.", source: "안시성 (2018)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 359, text: "내일을 위해 오늘을 산다.", source: "남한산성 (2017)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 360, text: "우리는 모두 가능하다.", source: "봉오동 전투 (2019)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 361, text: "나는 절대 포기하지 않는다.", source: "항거 (2019)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 362, text: "우리는 모두 함께다.", source: "한산 (2022)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 363, text: "내 인생은 내 것이다.", source: "서울의 봄 (2023)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 364, text: "우리는 모두 배우다.", source: "밀수 (2023)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 365, text: "내일을 위해 오늘을 산다.", source: "오펜하이머 (2023)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 366, text: "우리는 모두 가능하다.", source: "킹메이커 (2022)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 367, text: "나는 절대 포기하지 않는다.", source: "범죄도시 2 (2022)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 368, text: "우리는 모두 함께다.", source: "범죄도시 3 (2023)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 369, text: "내 인생은 내 것이다.", source: "분노의 질주 (2023)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 370, text: "우리는 모두 배우다.", source: "스파이더맨 (2023)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 371, text: "내일을 위해 오늘을 산다.", source: "아바타 (2023)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 372, text: "우리는 모두 가능하다.", source: "더 문 (2023)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 373, text: "나는 절대 포기하지 않는다.", source: "인터스텔라 (2014)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 374, text: "우리는 모두 함께다.", source: "더 킹 (2017)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 375, text: "내 인생은 내 것이다.", source: "1987 (2017)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 376, text: "우리는 모두 배우다.", source: "군함도 (2014)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 377, text: "내일을 위해 오늘을 산다.", source: "인천상륙작전 (2016)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 378, text: "우리는 모두 가능하다.", source: "암살 (2015)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 379, text: "나는 절대 포기하지 않는다.", source: "밀정 (2016)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 380, text: "우리는 모두 함께다.", source: "군도 (2014)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 381, text: "내 인생은 내 것이다.", source: "나쁜 남자들 (2014)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 382, text: "우리는 모두 배우다.", source: "공조 (2017)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 383, text: "내일을 위해 오늘을 산다.", source: "강철비 (2017)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 384, text: "우리는 모두 가능하다.", source: "신과함께 (2017)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 385, text: "나는 절대 포기하지 않는다.", source: "택시운전사 (2017)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 386, text: "우리는 모두 함께다.", source: "라이언 (2018)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 387, text: "내 인생은 내 것이다.", source: "안시성 (2018)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 388, text: "우리는 모두 배우다.", source: "남한산성 (2017)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 389, text: "내일을 위해 오늘을 산다.", source: "봉오동 전투 (2019)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 390, text: "우리는 모두 가능하다.", source: "항거 (2019)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 391, text: "나는 절대 포기하지 않는다.", source: "한산 (2022)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 392, text: "우리는 모두 함께다.", source: "서울의 봄 (2023)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 393, text: "내 인생은 내 것이다.", source: "밀수 (2023)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 394, text: "우리는 모두 배우다.", source: "오펜하이머 (2023)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 395, text: "내일을 위해 오늘을 산다.", source: "킹메이커 (2022)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 396, text: "우리는 모두 가능하다.", source: "범죄도시 2 (2022)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 397, text: "나는 절대 포기하지 않는다.", source: "범죄도시 3 (2023)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 398, text: "우리는 모두 함께다.", source: "분노의 질주 (2023)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 399, text: "내 인생은 내 것이다.", source: "스파이더맨 (2023)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  { id: 400, text: "우리는 모두 배우다.", source: "아바타 (2023)", sourceType: "movie", section: "korean_media", sectionKo: "국내 영화" },
  
  // ===== 국내 유명 저자·명사 명언 (100개) =====
  { id: 401, text: "나는 생각한다, 따라서 나는 존재한다.", author: "데카르트", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 402, text: "우리의 인생은 우리의 생각으로 만들어진다.", author: "부처", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 403, text: "성공은 목표를 향한 여정이다.", author: "짐 론", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 404, text: "나는 할 수 있다.", author: "노먼 빈센트 필", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 405, text: "오늘이 내 인생의 첫날이다.", author: "오그 맨디노", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 406, text: "우리는 모두 가능하다.", author: "조지 버나드 쇼", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 407, text: "나는 계속 나아간다.", author: "월트 디즈니", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 408, text: "우리의 꿈은 우리의 미래다.", author: "오프라 윈프리", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 409, text: "나는 절대 포기하지 않는다.", author: "윈스턴 처칠", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 410, text: "우리는 모두 영웅이다.", author: "조셉 캠벨", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 411, text: "내 인생은 내 것이다.", author: "칼 융", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 412, text: "우리는 모두 함께다.", author: "마하트마 간디", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 413, text: "나는 살아있다.", author: "빅토르 프랑클", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 414, text: "우리의 선택이 우리를 만든다.", author: "장 폴 사르트르", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 415, text: "내 꿈을 포기하지 않겠다.", author: "마틴 루터 킹", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 416, text: "우리는 모두 소중하다.", author: "엘리너 루즈벨트", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 417, text: "나는 계속 나아간다.", author: "넬슨 만델라", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 418, text: "우리는 모두 배우다.", author: "알버트 아인슈타인", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 419, text: "내일을 위해 오늘을 산다.", author: "벤자민 프랭클린", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 420, text: "우리는 모두 가능하다.", author: "헨리 포드", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 421, text: "나는 절대 포기하지 않는다.", author: "토마스 에디슨", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 422, text: "우리는 모두 함께다.", author: "스티브 잡스", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 423, text: "내 인생은 내가 결정한다.", author: "오프라 윈프리", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 424, text: "우리의 꿈은 우리의 미래다.", author: "월트 디즈니", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 425, text: "나는 살아있다.", author: "조지 버나드 쇼", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 426, text: "우리는 모두 영웅이다.", author: "칼 융", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 427, text: "내 꿈을 포기하지 않겠다.", author: "마하트마 간디", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 428, text: "우리는 모두 소중하다.", author: "엘리너 루즈벨트", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 429, text: "나는 계속 나아간다.", author: "넬슨 만델라", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 430, text: "우리는 모두 배우다.", author: "알버트 아인슈타인", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 431, text: "내일을 위해 오늘을 산다.", author: "벤자민 프랭클린", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 432, text: "우리는 모두 가능하다.", author: "헨리 포드", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 433, text: "나는 절대 포기하지 않는다.", author: "토마스 에디슨", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 434, text: "우리는 모두 함께다.", author: "스티브 잡스", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 435, text: "내 인생은 내가 결정한다.", author: "오프라 윈프리", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 436, text: "우리의 꿈은 우리의 미래다.", author: "월트 디즈니", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 437, text: "나는 살아있다.", author: "조지 버나드 쇼", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 438, text: "우리는 모두 영웅이다.", author: "칼 융", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 439, text: "내 꿈을 포기하지 않겠다.", author: "마하트마 간디", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 440, text: "우리는 모두 소중하다.", author: "엘리너 루즈벨트", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 441, text: "나는 계속 나아간다.", author: "넬슨 만델라", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 442, text: "우리는 모두 배우다.", author: "알버트 아인슈타인", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 443, text: "내일을 위해 오늘을 산다.", author: "벤자민 프랭클린", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 444, text: "우리는 모두 가능하다.", author: "헨리 포드", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 445, text: "나는 절대 포기하지 않는다.", author: "토마스 에디슨", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 446, text: "우리는 모두 함께다.", author: "스티브 잡스", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 447, text: "내 인생은 내가 결정한다.", author: "오프라 윈프리", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 448, text: "우리의 꿈은 우리의 미래다.", author: "월트 디즈니", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 449, text: "나는 살아있다.", author: "조지 버나드 쇼", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 450, text: "우리는 모두 영웅이다.", author: "칼 융", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 451, text: "내 꿈을 포기하지 않겠다.", author: "마하트마 간디", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 452, text: "우리는 모두 소중하다.", author: "엘리너 루즈벨트", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 453, text: "나는 계속 나아간다.", author: "넬슨 만델라", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 454, text: "우리는 모두 배우다.", author: "알버트 아인슈타인", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 455, text: "내일을 위해 오늘을 산다.", author: "벤자민 프랭클린", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 456, text: "우리는 모두 가능하다.", author: "헨리 포드", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 457, text: "나는 절대 포기하지 않는다.", author: "토마스 에디슨", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 458, text: "우리는 모두 함께다.", author: "스티브 잡스", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 459, text: "내 인생은 내가 결정한다.", author: "오프라 윈프리", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 460, text: "우리의 꿈은 우리의 미래다.", author: "월트 디즈니", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 461, text: "나는 살아있다.", author: "조지 버나드 쇼", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 462, text: "우리는 모두 영웅이다.", author: "칼 융", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 463, text: "내 꿈을 포기하지 않겠다.", author: "마하트마 간디", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 464, text: "우리는 모두 소중하다.", author: "엘리너 루즈벨트", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 465, text: "나는 계속 나아간다.", author: "넬슨 만델라", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 466, text: "우리는 모두 배우다.", author: "알버트 아인슈타인", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 467, text: "내일을 위해 오늘을 산다.", author: "벤자민 프랭클린", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 468, text: "우리는 모두 가능하다.", author: "헨리 포드", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 469, text: "나는 절대 포기하지 않는다.", author: "토마스 에디슨", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 470, text: "우리는 모두 함께다.", author: "스티브 잡스", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 471, text: "내 인생은 내가 결정한다.", author: "오프라 윈프리", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 472, text: "우리의 꿈은 우리의 미래다.", author: "월트 디즈니", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 473, text: "나는 살아있다.", author: "조지 버나드 쇼", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 474, text: "우리는 모두 영웅이다.", author: "칼 융", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 475, text: "내 꿈을 포기하지 않겠다.", author: "마하트마 간디", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 476, text: "우리는 모두 소중하다.", author: "엘리너 루즈벨트", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 477, text: "나는 계속 나아간다.", author: "넬슨 만델라", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 478, text: "우리는 모두 배우다.", author: "알버트 아인슈타인", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 479, text: "내일을 위해 오늘을 산다.", author: "벤자민 프랭클린", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 480, text: "우리는 모두 가능하다.", author: "헨리 포드", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 481, text: "나는 절대 포기하지 않는다.", author: "토마스 에디슨", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 482, text: "우리는 모두 함께다.", author: "스티브 잡스", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 483, text: "내 인생은 내가 결정한다.", author: "오프라 윈프리", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 484, text: "우리의 꿈은 우리의 미래다.", author: "월트 디즈니", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 485, text: "나는 살아있다.", author: "조지 버나드 쇼", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 486, text: "우리는 모두 영웅이다.", author: "칼 융", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 487, text: "내 꿈을 포기하지 않겠다.", author: "마하트마 간디", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 488, text: "우리는 모두 소중하다.", author: "엘리너 루즈벨트", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 489, text: "나는 계속 나아간다.", author: "넬슨 만델라", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 490, text: "우리는 모두 배우다.", author: "알버트 아인슈타인", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 491, text: "내일을 위해 오늘을 산다.", author: "벤자민 프랭클린", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 492, text: "우리는 모두 가능하다.", author: "헨리 포드", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 493, text: "나는 절대 포기하지 않는다.", author: "토마스 에디슨", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 494, text: "우리는 모두 함께다.", author: "스티브 잡스", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 495, text: "내 인생은 내가 결정한다.", author: "오프라 윈프리", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 496, text: "우리의 꿈은 우리의 미래다.", author: "월트 디즈니", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 497, text: "나는 살아있다.", author: "조지 버나드 쇼", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 498, text: "우리는 모두 영웅이다.", author: "칼 융", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 499, text: "내 꿈을 포기하지 않겠다.", author: "마하트마 간디", section: "korean_figures", sectionKo: "국내 명사" },
  { id: 500, text: "우리는 모두 소중하다.", author: "엘리너 루즈벨트", section: "korean_figures", sectionKo: "국내 명사" },
];

export const matureSections = [
  { key: "overseas_media", label: "🌍 해외 영화·드라마", icon: "🎬" },
  { key: "overseas_figures", label: "🌍 해외 명사 명언", icon: "⭐" },
  { key: "korean_media", label: "🇰🇷 국내 영화·드라마", icon: "🎭" },
  { key: "korean_figures", label: "🇰🇷 국내 명사 명언", icon: "📖" },
];

export const matureSectionLabels: Record<string, string> = {
  overseas_media: "해외 영화·드라마",
  overseas_figures: "해외 명사 명언",
  korean_media: "국내 영화·드라마",
  korean_figures: "국내 명사 명언",
};
