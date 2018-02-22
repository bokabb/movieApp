function loadDemoData() {
    if (confirm("Are you sure? This will delete current data!")) {
        var demoData = {
            "actors": [
                { "id": 4, "actorName": "Denzel Washington", "description": "Denzel Hayes Washington, Jr. was born on December 28, 1954 in Mount Vernon, New York. He is the middle of three children..." },
                { "id": 6, "actorName": "Brad Pitt", "description": "An actor and producer known as much for his versatility as he is for his handsome face, Golden Globe-winner Brad Pitt..." },
                { "id": 7, "actorName": " Tim Robbins", "description": "Born in West Covina, California, but raised in New York City..." },
                { "id": 8, "actorName": "Jean Reno", "description": "Jean Reno was born Juan Moreno y Herrera-Jiménez in Casablanca, Morocco, to Spanish parents (from Andalucía) who moved to North Africa to seek work. His father was a linotypist. Reno settled in France at 17..." },
                { "id": 9, "actorName": "Tom Hanks", "description": "Thomas Jeffrey Hanks was born in Concord, California..." },
                { "id": 10, "actorName": "Audrey Tautou", "description": "Audrey Justine Tautou was born on August 9, 1976 in Beaumont, France. Audrey showed an interest for comedy at an early age and started her acting lessons at.." },
                { "id": 11, "actorName": "Kevin Spacey", "description": "Kevin Spacey Fowler, better known by his stage name Kevin Spacey, is an American actor of screen and stage, film director,... " },
                { "id": 12, "actorName": "Edward Norton ", "description": "American actor, filmmaker and activist Edward Harrison Norton was born on August 18, 1969, in Boston, Massachusetts, and was raised in Columbia, Maryland..." },
                { "id": 13, "actorName": "Russell Crowe", "description": "Russell Ira Crowe was born in Wellington, New Zealand." },
                { "id": 14, "actorName": "Harrison Ford ", "description": "Harrison Ford was born on July 13, 1942 in Chicago, Illinois, to Dorothy (Nidelman), a radio actress, and Christopher Ford (born John William Ford), an actor turned advertising executive..." },
                { "id": 15, "actorName": "Matt Damon", "description": "Matthew Paige Damon was born on October 8, 1970, in Boston, Massachusetts.  He attended Harvard University as an English major. While in Harvard, he kept on skipping classes to pursue acting projects..." },
                { "id": 16, "actorName": "Mario Casas", "description": "Mario Casas was born on June 12, 1986 in A Coruña, Galicia..." },
                { "id": 17, "actorName": "Jim Carrey", "description": "Canadian-born and a U.S. citizen since 2004, is an actor and producer famous for his rubbery body movements and flexible facial expressions. " },
                { "id": 18, "actorName": "Tom Payne", "description": "He is an actor, known for The Walking Dead (2010), The Physician (2013)..." },
                { "id": 19, "actorName": "Roberto Begnini", "description": "He is an actor and writer, known for Life Is Beautiful (1997)..." },
                { "id": 20, "actorName": "Eddie Murphy", "description": "Murphy worked as a stand-up comic on the lower part of New York..." },
                { "id": 21, "actorName": " Gerard Butler ", "description": "Butler went on to attend Glasgow University, where he studied to be a lawyer/solicitor." },
                { "id": 22, "actorName": "Leonardo DiCaprio", "description": "DiCaprio is a committed environmentalist, who is actively involved in many environmental causes..." },
                { "id": 23, "actorName": "Marilyn Monroe", "description": "She became one of the world's most enduring iconic figures and is remembered both for her winsome embodiment of the Hollywood sex symbol..." },
                { "id": 24, "actorName": "Marlon Brando", "description": "Marlon Brando is widely considered the greatest movie actor of all time..." },
                { "id": 25, "actorName": "Christian Slater", "description": "He became somewhat known as the Hollywood bad-boy, having many run-ins with the law..." },
                { "id": 26, "actorName": "Ryan Gosling", "description": "After appearing in the sleeper The Notebook (2004) in 2004..." },
                { "id": 27, "actorName": "Robin Williams", "description": "Williams' continuous comedies and wild comic talents involved a great deal of improvisation..." },
                { "id": 28, "actorName": "Brad Garrett ", "description": "Standing 6 feet 8-1/2 inches tall..." },
                { "id": 29, "actorName": "Daniele Liotti", "description": "Daniele Liotti was born in 1971 in Rome, Lazio, Italy..." }
            ],
            "genres": [
                { "id": 1, "genreName": "Action" },
                { "id": 2, "genreName": "Adventure" },
                { "id": 3, "genreName": "Animation" },
                { "id": 4, "genreName": "Biography" },
                { "id": 5, "genreName": "Comedy" },
                { "id": 6, "genreName": "Crime" },
                { "id": 7, "genreName": "Documentary" },
                { "id": 8, "genreName": "Drama" },
                { "id": 9, "genreName": "Fantasy" },
                { "id": 10, "genreName": "History" },
                { "id": 11, "genreName": "Horror" },
                { "id": 12, "genreName": "Musical" },
                { "id": 13, "genreName": "Mystery" },
                { "id": 14, "genreName": "Romance" },
                { "id": 15, "genreName": "Sci-Fi" },
                { "id": 16, "genreName": "Thriller" },
                { "id": 17, "genreName": "War" },
                { "id": 18, "genreName": "Western" }
            ],
            "movies": [
                { "id": 1, "title": "Man on Fire", "genre": "Action", "actor": "Denzel Washington", "duration": "130 min.", "image": "manonfire.jpg", "imdbNumber": "tt0328107" },
                { "id": 3, "title": "The Shawshenk Redemption", "genre": "Drama", "actor": " Tim Robbins", "duration": "160 min.", "image": "shawshenk.jpg", "imdbNumber": "tt0111161" },
                { "id": 4, "title": "Leon, the professional", "genre": "Action", "actor": "Jean Reno", "duration": "140 min.", "image": "professional.jpg", "imdbNumber": "tt0110413" },
                { "id": 5, "title": "Up", "genre": "Animation", "actor": "Some actor", "duration": "135 min.", "image": "up.jpg", "imdbNumber": "tt1049413" },
                { "id": 6, "title": "Good Will Hunting", "genre": "Drama", "actor": "Matt Damon", "duration": "126 min.", "image": "good_willh.jpg", "imdbNumber": "tt0119217" },
                { "id": 7, "title": "Contratiempo", "genre": "Mystery", "actor": "Mario Casas", "duration": "106 min.", "image": "contratiempo.jpg", "imdbNumber": "tt4857264" },
                { "id": 8, "title": "Dumb and Dumber", "genre": "Comedy", "actor": "Jim Carrey", "duration": "107 min.", "image": "dumb_dumber.jpg", "imdbNumber": "tt0109686" },
                { "id": 9, "title": "Amelie", "genre": "Romance", "actor": "Audrey Tautou", "duration": "122 min.", "image": "amelie.jpg", "imdbNumber": "tt0211915" },
                { "id": 10, "title": "American beauty", "genre": "Drama", "actor": "Kevin Spacey", "duration": "122 min.", "image": "americanb.jpg", "imdbNumber": "tt0169547" },
                { "id": 11, "title": "Fight club", "genre": "Drama", "actor": "Brad Pitt", "duration": "139 min.", "image": "fight_club.jpg", "imdbNumber": "tt0137523" },
                { "id": 12, "title": "Gladiator", "genre": "Action", "actor": "Russell Crowe", "duration": "155 min.", "image": "gladiator.jpg", "imdbNumber": "tt0172495" },
                { "id": 13, "title": "The Psysician", "genre": "Adventure", "actor": "Tom Payne", "duration": "150 min.", "image": "thephysician.jpg", "imdbNumber": "tt2101473" },
                { "id": 14, "title": "Life is beautiful", "genre": "Comedy", "actor": "Roberto Begnini", "duration": "116 min.", "image": "lifeb.jpg", "imdbNumber": "tt0118799" },
                { "id": 15, "title": "Shrek", "genre": "Animation", "actor": "Eddie Murphy", "duration": "90 min.", "image": "shrek.jpg", "imdbNumber": "tt0126029" },
                { "id": 16, "title": "Law Abiding Citizen", "genre": "Crime", "actor": " Gerard Butler ", "duration": "119 min.", "image": "law-ac.jpg", "imdbNumber": "tt1197624" },
                { "id": 17, "title": "Inception", "genre": "Sci-Fi", "actor": "Leonardo DiCaprio", "duration": "148 min.", "image": "inception.jpg", "imdbNumber": "tt1375666" },
                { "id": 18, "title": "Some like it hot", "genre": "Comedy", "actor": "Marilyn Monroe", "duration": "121 min. ", "image": "some-like-it-hot.jpg", "imdbNumber": "tt0053291" },
                { "id": 19, "title": "American History X", "genre": "Crime", "actor": "Edward Norton ", "duration": "120 min.", "image": "american-history.jpg", "imdbNumber": "tt0120586" },
                { "id": 20, "title": "The Godfather", "genre": "Crime", "actor": "Marlon Brando", "duration": "175 min.", "image": "godfather.jpg", "imdbNumber": "tt0068646" },
                { "id": 21, "title": "True Romance", "genre": "Crime", "actor": "Christian Slater", "duration": "120 min.", "image": "true-romance.jpg", "imdbNumber": "tt0108399" },
                { "id": 22, "title": "The Notebook", "genre": "Romance", "actor": "Ryan Gosling", "duration": "123 min.", "image": "the_notebook.jpg", "imdbNumber": "tt0332280" },
                { "id": 23, "title": "Mrs. Doubtfire", "genre": "Comedy", "actor": "Robin Williams", "duration": "125 min.", "image": "mrs.doubtfire.jpg", "imdbNumber": "tt0107614" },
                { "id": 24, "title": " Ratatouille", "genre": "Animation", "actor": "Brad Garrett ", "duration": "115 min.", "image": "ratatuli.jpg", "imdbNumber": "tt0382932" },
                { "id": 25, "title": "Blade Runner 2049", "genre": "Sci-Fi", "actor": "Harrison Ford", "duration": "164 min.", "image": "blade_runner.jpg", "imdbNumber": "tt1856101" },
                { "id": 26, "title": "Perdona si te llamo amor", "genre": "Romance", "actor": "Daniele Liotti", "duration": "120 min.", "image": "perdona.jpg", "imdbNumber": "tt3230668" }
            ],
            "users": [
                { "id": 1, "firstname": "Bojana", "lastname": "Baic", "username": "bocko", "email": "boka@gmail.com", "password": "bb", "role": "Admin" },
                { "id": 2, "firstname": "Nikola", "lastname": "Maric", "username": "nice", "email": "nm@gmail.com", "password": "nn", "role": "Guest" },
                { "id": 3, "firstname": "Jelena", "lastname": "Zaric", "username": "jeca", "email": "jz@gmail.com", "password": "jj", "role": "Korisnik" },
                { "id": 4, "firstname": "Branislav", "lastname": "Jovanovic", "username": "bane", "email": "bane.jovanovic@gmail.com", "password": "baki55", "role": "Guest" }
            ],
            "roles": [
                { "id": 1, "roleName": "Admin" },
                { "id": 3, "roleName": "Korisnik" },
                { "id": 4, "roleName": "Guest" }
            ]
        };
        for (var data in demoData) {
            putDataToStorage(data, demoData[data]);
        }
    }
}
