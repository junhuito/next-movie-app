// https://nextjs.org/docs/app/building-your-application/routing/route-handlers#caching
export const dynamic = "force-static";

import { connectDB, movieCollection } from "@/clients/mongodb";

export async function GET() {
  try {
    await connectDB();

    const mockData = [
      {
          "_id": "573a1390f29313caabcd516c",
          "plot": "Original advertising for the film describes it as a drama of primitive life on the shores of the North Pacific...",
          "genres": [
              "Drama",
              "History"
          ],
          "runtime": 65,
          "cast": [
              "Stanley Hunt",
              "Sarah Constance Smith Hunt",
              "Mrs. George Walkus",
              "Paddy 'Malid"
          ],
          "num_mflix_comments": 1,
          "poster": "https://m.media-amazon.com/images/M/MV5BMjE3MjAyNzM5NV5BMl5BanBnXkFtZTgwMjA5OTg5NjE@._V1_SY1000_SX677_AL_.jpg",
          "title": "In the Land of the Head Hunters",
          "lastupdated": "2015-09-16 12:11:37.770000000",
          "languages": [
              "English"
          ],
          "released": "1914-12-07T00:00:00.000Z",
          "directors": [
              "Edward S. Curtis"
          ],
          "writers": [
              "Edward S. Curtis (story)"
          ],
          "awards": {
              "wins": 1,
              "nominations": 0,
              "text": "1 win."
          },
          "year": 1914,
          "imdb": {
              "rating": 5.8,
              "votes": 223,
              "id": 4150
          },
          "countries": [
              "USA"
          ],
          "type": "movie",
          "tomatoes": {
              "viewer": {
                  "rating": 2.7,
                  "numReviews": 64,
                  "meter": 18
              },
              "dvd": "2000-08-15T00:00:00.000Z",
              "website": "http://www.milestonefilms.com/",
              "production": "World Film Corporation",
              "lastUpdated": "2015-08-18T19:21:12.000Z"
          }
      },
      {
          "_id": "573a1390f29313caabcd587d",
          "plot": "At 10 years old, Owens becomes a ragged orphan when his sainted mother dies. The Conways, who are next door neighbors, take Owen in, but the constant drinking by Jim soon puts Owen on the ...",
          "genres": [
              "Biography",
              "Crime",
              "Drama"
          ],
          "runtime": 72,
          "rated": "PASSED",
          "cast": [
              "John McCann",
              "James A. Marcus",
              "Maggie Weston",
              "Harry McCoy"
          ],
          "num_mflix_comments": 1,
          "poster": "https://m.media-amazon.com/images/M/MV5BNDkxZGU4NmMtODJlNy00YzA2LTg4ZGMtNGFlNzAyNzcxOTM1XkEyXkFqcGdeQXVyOTM3MjcyMjI@._V1_SY1000_SX677_AL_.jpg",
          "title": "Regeneration",
          "fullplot": "At 10 years old, Owens becomes a ragged orphan when his sainted mother dies. The Conways, who are next door neighbors, take Owen in, but the constant drinking by Jim soon puts Owen on the street. By 17, Owen learns that might is right. By 25, Owen is the leader of his own gang who spend most of their time gambling and drinking. But Marie comes into the gangster area of town and everything changes for Owen as he falls for Marie. But he cannot tell her so, so he comes to her settlement to find education and inspiration. But soon, his old way of life will rise to confront him again.",
          "languages": [
              "English"
          ],
          "released": "1915-09-13T00:00:00.000Z",
          "directors": [
              "Raoul Walsh"
          ],
          "writers": [
              "Owen Frawley Kildare (book)",
              "Raoul Walsh (adapted from the book: \"My Mamie Rose\")",
              "Carl Harbaugh (adapted from the book: \"My Mamie Rose\")"
          ],
          "awards": {
              "wins": 1,
              "nominations": 0,
              "text": "1 win."
          },
          "lastupdated": "2015-08-14 01:28:18.957000000",
          "year": 1915,
          "imdb": {
              "rating": 6.8,
              "votes": 626,
              "id": 5960
          },
          "countries": [
              "USA"
          ],
          "type": "movie",
          "tomatoes": {
              "viewer": {
                  "rating": 3.4,
                  "numReviews": 395,
                  "meter": 70
              },
              "dvd": "2001-11-27T00:00:00.000Z",
              "critic": {
                  "rating": 9.2,
                  "numReviews": 5,
                  "meter": 100
              },
              "lastUpdated": "2015-09-17T17:22:42.000Z",
              "rotten": 0,
              "production": "Fox Film Corporation",
              "fresh": 5
          }
      },
      {
          "_id": "573a1390f29313caabcd63d6",
          "plot": "Two peasant children, Mytyl and Tyltyl, are led by Berylune, a fairy, to search for the Blue Bird of Happiness. Berylune gives Tyltyl a cap with a diamond setting, and when Tyltyl turns the...",
          "genres": [
              "Fantasy"
          ],
          "runtime": 75,
          "cast": [
              "Tula Belle",
              "Robin Macdougall",
              "Edwin E. Reed",
              "Emma Lowry"
          ],
          "num_mflix_comments": 0,
          "poster": "https://m.media-amazon.com/images/M/MV5BMjNlMThmNzItMTZlMS00YzJkLTk1MzktYzIyMzllOGFmZmRlXkEyXkFqcGdeQXVyMzE0MjY5ODA@._V1_SY1000_SX677_AL_.jpg",
          "title": "The Blue Bird",
          "fullplot": "Two peasant children, Mytyl and Tyltyl, are led by Berylune, a fairy, to search for the Blue Bird of Happiness. Berylune gives Tyltyl a cap with a diamond setting, and when Tyltyl turns the diamond, the children become aware of and conversant with the souls of a Dog and Cat, as well as of Fire, Water, Bread, Light, and other presumably inanimate things. The troupe thus sets off to find the elusive Blue Bird of Happiness.",
          "languages": [
              "English"
          ],
          "released": "1918-03-31T00:00:00.000Z",
          "directors": [
              "Maurice Tourneur"
          ],
          "writers": [
              "Maurice Maeterlinck (play)",
              "Charles Maigne"
          ],
          "awards": {
              "wins": 1,
              "nominations": 0,
              "text": "1 win."
          },
          "lastupdated": "2015-07-20 00:32:04.810000000",
          "year": 1918,
          "imdb": {
              "rating": 6.6,
              "votes": 446,
              "id": 8891
          },
          "countries": [
              "USA"
          ],
          "type": "movie",
          "tomatoes": {
              "viewer": {
                  "rating": 3.6,
                  "numReviews": 607,
                  "meter": 60
              },
              "dvd": "2005-09-06T00:00:00.000Z",
              "lastUpdated": "2015-08-21T18:10:22.000Z"
          }
      },
      {
          "_id": "573a1391f29313caabcd6e2a",
          "plot": "A newly wedded couple attempt to build a house with a prefabricated kit, unaware that a rival sabotaged the kit's component numbering.",
          "genres": [
              "Short",
              "Comedy"
          ],
          "runtime": 25,
          "cast": [
              "Buster Keaton",
              "Sybil Seely"
          ],
          "num_mflix_comments": 0,
          "title": "One Week",
          "fullplot": "Buster and Sybil exit a chapel as newlyweds. Among the gifts is a portable house you easily put together in one week. It doesn't help that Buster's rival for Sybil switches the numbers on the crates containing the house parts.",
          "languages": [
              "English"
          ],
          "released": "1920-09-01T00:00:00.000Z",
          "directors": [
              "Edward F. Cline",
              "Buster Keaton"
          ],
          "rated": "TV-G",
          "awards": {
              "wins": 1,
              "nominations": 0,
              "text": "1 win."
          },
          "lastupdated": "2015-05-07 01:07:01.633000000",
          "year": 1920,
          "imdb": {
              "rating": 8.3,
              "votes": 3942,
              "id": 11541
          },
          "countries": [
              "USA"
          ],
          "type": "movie",
          "tomatoes": {
              "viewer": {
                  "rating": 4.3,
                  "numReviews": 752,
                  "meter": 91
              },
              "lastUpdated": "2015-09-13T18:22:19.000Z"
          }
      },
      {
          "_id": "573a1391f29313caabcd7616",
          "plot": "Salome, the daughter of Herodias, seduces her step-father/uncle Herod, governor of Judea, with a salacious dance. In return, he promises her the head of the prophet John the Baptist.",
          "genres": [
              "Biography",
              "Drama",
              "History"
          ],
          "runtime": 72,
          "cast": [
              "Mitchell Lewis",
              "Alla Nazimova",
              "Rose Dione",
              "Earl Schenck"
          ],
          "num_mflix_comments": 0,
          "poster": "https://m.media-amazon.com/images/M/MV5BMjA0MTY4MzI2OV5BMl5BanBnXkFtZTgwNTMyODg5MTE@._V1_SY1000_SX677_AL_.jpg",
          "title": "Salomè",
          "fullplot": "Salome, the daughter of Herodias, seduces her step-father/uncle Herod, governor of Judea, with a salacious dance. In return, he promises her the head of the prophet John the Baptist.",
          "countries": [
              "USA"
          ],
          "released": "1923-02-15T00:00:00.000Z",
          "directors": [
              "Charles Bryant",
              "Alla Nazimova"
          ],
          "writers": [
              "Oscar Wilde (play)",
              "Natacha Rambova (scenario)"
          ],
          "awards": {
              "wins": 1,
              "nominations": 0,
              "text": "1 win."
          },
          "lastupdated": "2015-04-26 00:03:19.913000000",
          "year": 1922,
          "imdb": {
              "rating": 6.6,
              "votes": 466,
              "id": 13571
          },
          "type": "movie",
          "tomatoes": {
              "viewer": {
                  "rating": 3.9,
                  "numReviews": 310,
                  "meter": 70
              },
              "fresh": 3,
              "critic": {
                  "rating": 6.5,
                  "numReviews": 5,
                  "meter": 60
              },
              "rotten": 2,
              "lastUpdated": "2015-06-13T19:00:41.000Z"
          }
      },
      {
          "_id": "573a1390f29313caabcd5293",
          "plot": "Young Pauline is left a lot of money when her wealthy uncle dies. However, her uncle's secretary has been named as her guardian until she marries, at which time she will officially take ...",
          "genres": [
              "Action"
          ],
          "runtime": 199,
          "cast": [
              "Pearl White",
              "Crane Wilbur",
              "Paul Panzer",
              "Edward Josè"
          ],
          "num_mflix_comments": 0,
          "poster": "https://m.media-amazon.com/images/M/MV5BMzgxODk1Mzk2Ml5BMl5BanBnXkFtZTgwMDg0NzkwMjE@._V1_SY1000_SX677_AL_.jpg",
          "title": "The Perils of Pauline",
          "fullplot": "Young Pauline is left a lot of money when her wealthy uncle dies. However, her uncle's secretary has been named as her guardian until she marries, at which time she will officially take possession of her inheritance. Meanwhile, her \"guardian\" and his confederates constantly come up with schemes to get rid of Pauline so that he can get his hands on the money himself.",
          "languages": [
              "English"
          ],
          "released": "1914-03-23T00:00:00.000Z",
          "directors": [
              "Louis J. Gasnier",
              "Donald MacKenzie"
          ],
          "writers": [
              "Charles W. Goddard (screenplay)",
              "Basil Dickey (screenplay)",
              "Charles W. Goddard (novel)",
              "George B. Seitz",
              "Bertram Millhauser"
          ],
          "awards": {
              "wins": 1,
              "nominations": 0,
              "text": "1 win."
          },
          "lastupdated": "2015-09-12 00:01:18.647000000",
          "year": 1914,
          "imdb": {
              "rating": 7.6,
              "votes": 744,
              "id": 4465
          },
          "countries": [
              "USA"
          ],
          "type": "movie",
          "tomatoes": {
              "viewer": {
                  "rating": 2.8,
                  "numReviews": 9
              },
              "production": "Pathè Frères",
              "lastUpdated": "2015-09-11T17:46:19.000Z"
          }
      },
      {
          "_id": "573a1390f29313caabcd5ea4",
          "plot": "A District Attorney's outspoken stand on abortion gets him in trouble with the local community.",
          "genres": [
              "Drama"
          ],
          "runtime": 62,
          "rated": "APPROVED",
          "cast": [
              "Tyrone Power Sr.",
              "Helen Riaume",
              "Marie Walcamp",
              "Cora Drew"
          ],
          "title": "Where Are My Children?",
          "fullplot": "While prosecuting a physician for the death of a client after an abortion, the district attorney discovers that his wife helped her society friends and the daughter of her maid obtain and pay for abortions from the physician (and was perhaps herself also a client.)",
          "languages": [
              "English"
          ],
          "released": "1916-05-01T00:00:00.000Z",
          "directors": [
              "Phillips Smalley",
              "Lois Weber"
          ],
          "writers": [
              "Lucy Payton (from the story by)",
              "Franklin Hall (from the story by)",
              "Lois Weber",
              "Phillips Smalley"
          ],
          "awards": {
              "wins": 1,
              "nominations": 0,
              "text": "1 win."
          },
          "lastupdated": "2015-09-07 00:51:32.560000000",
          "year": 1916,
          "imdb": {
              "rating": 5.9,
              "votes": 247,
              "id": 7558
          },
          "countries": [
              "USA"
          ],
          "type": "movie",
          "tomatoes": {
              "viewer": {
                  "rating": 3.1,
                  "numReviews": 34,
                  "meter": 50
              },
              "production": "MCA/Universal Pictures",
              "lastUpdated": "2015-08-06T19:49:17.000Z"
          },
          "num_mflix_comments": 0
      },
      {
          "_id": "573a1391f29313caabcd68d0",
          "plot": "A penniless young man tries to save an heiress from kidnappers and help her secure her inheritance.",
          "genres": [
              "Comedy",
              "Short",
              "Action"
          ],
          "runtime": 22,
          "rated": "TV-G",
          "cast": [
              "Harold Lloyd",
              "Mildred Davis",
              "'Snub' Pollard",
              "Peggy Cartwright"
          ],
          "poster": "https://m.media-amazon.com/images/M/MV5BNzE1OWRlNDgtMTllNi00NTZiLWIyNTktYTk0MDY1ZWUwYTc5XkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SY1000_SX677_AL_.jpg",
          "title": "From Hand to Mouth",
          "fullplot": "As a penniless man worries about how he will manage to eat, he is joined by a young waif and her dog, who are in the same predicament. Meanwhile, across town a dishonest lawyer is working with a gang of criminals, trying to swindle an innocent young heiress out of her inheritance. As the heiress is on her way home from the lawyer's office, she notices the young man and the waif in the midst of their latest problem with the authorities, and she rescues them. Later on, the young man will have an unexpected opportunity to repay her for her kindness.",
          "languages": [
              "English"
          ],
          "released": "1919-12-28T00:00:00.000Z",
          "directors": [
              "Alfred J. Goulding",
              "Hal Roach"
          ],
          "writers": [
              "H.M. Walker (titles)"
          ],
          "awards": {
              "wins": 0,
              "nominations": 1,
              "text": "1 nomination."
          },
          "lastupdated": "2015-04-17 00:16:14.220000000",
          "year": 1919,
          "imdb": {
              "rating": 7,
              "votes": 639,
              "id": 10146
          },
          "countries": [
              "USA"
          ],
          "type": "movie",
          "tomatoes": {
              "viewer": {
                  "rating": 3.3,
                  "numReviews": 71,
                  "meter": 55
              },
              "production": "Pathè Exchange",
              "lastUpdated": "2015-08-21T18:45:11.000Z"
          },
          "num_mflix_comments": 0
      },
      {
          "_id": "573a1391f29313caabcd6ea2",
          "plot": "The simple-minded son of a rich financier must find his own way in the world.",
          "genres": [
              "Comedy"
          ],
          "runtime": 77,
          "cast": [
              "Edward Jobson",
              "Beulah Booker",
              "Edward Connelly",
              "Edward Alexander"
          ],
          "num_mflix_comments": 0,
          "poster": "https://m.media-amazon.com/images/M/MV5BZDNiODA3NzQtNTBmZS00NTM3LWJlOGMtMDg2NzFiNDU2M2M3XkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SY1000_SX677_AL_.jpg",
          "title": "The Saphead",
          "fullplot": "Nick Van Alstyne owns the Henrietta silver mine and is very rich. His son Bertie is naive and spoiled. His daughter Rose is married to shady investor Mark. Mark wrecks Bertie's wedding plans by making him take the blame for Mark's illegitimate daughter. Mark also nearly ruins the family business by selling off Henrietta stock at too low a price. Bertie, of all people, must come to the rescue on the trading floor.",
          "countries": [
              "USA"
          ],
          "released": "1920-09-01T00:00:00.000Z",
          "directors": [
              "Herbert Blachè",
              "Winchell Smith"
          ],
          "writers": [
              "Bronson Howard (original play \"The Henrietta\")",
              "Victor Mapes (play)",
              "June Mathis (scenario)",
              "Winchell Smith (play)"
          ],
          "awards": {
              "wins": 0,
              "nominations": 1,
              "text": "1 nomination."
          },
          "lastupdated": "2015-06-20 00:38:08.303000000",
          "year": 1920,
          "imdb": {
              "rating": 6.2,
              "votes": 1020,
              "id": 11652
          },
          "type": "movie",
          "tomatoes": {
              "viewer": {
                  "rating": 3.3,
                  "numReviews": 435,
                  "meter": 49
              },
              "dvd": "2000-01-11T00:00:00.000Z",
              "lastUpdated": "2015-06-23T19:23:34.000Z"
          }
      },
      {
          "_id": "573a1391f29313caabcd6f98",
          "plot": "A romantic rivalry among members of a secret society becomes even tenser when one of the men is assigned to carry out an assassination.",
          "genres": [
              "Crime",
              "Drama",
              "Mystery"
          ],
          "runtime": 75,
          "rated": "PASSED",
          "cast": [
              "Lon Chaney",
              "Leatrice Joy",
              "John Bowers",
              "Hardee Kirkland"
          ],
          "num_mflix_comments": 1,
          "poster": "https://m.media-amazon.com/images/M/MV5BMTkwOTUyNDk1N15BMl5BanBnXkFtZTYwODI3MzI3._V1_SY1000_SX677_AL_.jpg",
          "title": "The Ace of Hearts",
          "fullplot": "A secret society holds a meeting to determine what to do about a powerful and dangerous man whom they have been studying closely for the past three months. They all agree that he deserves to die. Two of the members, Farallone and Forrest, are both in love with Lilith, the group's only female member. But Lilith accepts neither of them, preferring to devote herself to the group's cause. When the group meets again and deals cards to all the members, Forrest draws the ace of hearts, meaning that he will be the one to carry out the assassination. Lilith then suddenly agrees to marry him, in order to give him courage. But after their first night together, both of them begin to feel differently about what they have planned.",
          "countries": [
              "USA"
          ],
          "released": "1924-04-04T00:00:00.000Z",
          "directors": [
              "Wallace Worsley"
          ],
          "writers": [
              "Gouverneur Morris (by)",
              "Ruth Wightman (scenario)"
          ],
          "awards": {
              "wins": 0,
              "nominations": 2,
              "text": "2 nominations."
          },
          "lastupdated": "2015-07-20 00:01:29.560000000",
          "year": 1921,
          "imdb": {
              "rating": 7,
              "votes": 798,
              "id": 11904
          },
          "type": "movie",
          "tomatoes": {
              "viewer": {
                  "rating": 3.5,
                  "numReviews": 377,
                  "meter": 68
              },
              "lastUpdated": "2015-04-28T19:29:23.000Z"
          }
      }
  ];

    await new Promise((res) => setTimeout(res, 500))
    return Response.json(mockData)

    const result = await movieCollection.find().limit(10).toArray();
    
    
    return Response.json(result);
  } catch (error) {
    console.error(error);
    return Response.json([]);
  }
}
