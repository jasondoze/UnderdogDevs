# Wordplay
For loops and if conditions
What are all of the words containing UU?
What are all of the words containing an X and a Y and a Z?
What are all of the words containing a Q but not a U?
What are all of the words that contain the word CAT and are exactly 5 letters long?
What are all of the words that have no E or A and are at least 15 letters long?
What are all of the words that have a B and an X and are less than 5 letters long?
What are all of the words that both start and end with a Y?
What are all of the words with no vowel and not even a Y?
What are all of the words that have all 5 vowels, in any order?
What are all of the words that have all 5 vowels, in alphabetical order?

Setting up storage to use during a for loop, including counters and arrays

How many words contain the substring "TYPE”?
Create and print an array containing all of the words that end in "GHTLY"
What is the shortest word that contains all 5 vowels?
What is the longest word that contains no vowels?
Which of the letters Q, X, and Z is the least common?
What is the longest palindrome?
What are all of the letters that never appear consecutively in an English word? For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?

<br>

# Countries

For loops and if conditions

What are all of the countries that have “United” in the name?
What countries both begin and end with a vowel?
What country names are > 50% vowels?

Setting up storage to use during a for loop, including counters and arrays

What is the shortest country name? Make sure your solution can handle ties.
What countries use only one vowel in their name (the vowel can be used multiple times)
    - For example, if the word “BEEKEEPER” were a country, it would be an answer, because it only uses “E”.
There is at least one country name that contains another country name. Find all of these cases.

<br>

# Baby Names

More for loops, if conditions, and storage

What is the shortest baby name in the top 40 baby names for 2020?
What are the longest baby names in the top 40 baby names for 2020? Make sure you can handle if there’s a tie.

Nested for loops

There is at least one baby name from the top 40 baby names for 2020 that, when spelled backwards, is a valid Scrabble word. Find and print all such names.
    Solve this two ways: first with an array to hold the Scrabble words, and then with a dictionary (or set) to hold the Scrabble words. Use timer functions to measure how long it takes to complete this work under each implementation. Why is the time different?
What are all of the names that were top 40 baby names in both 1880 and 2020?

<br>

# More Wordplay questions

The sections after this section (“NBA Finals”, “Top Movies”, “Billboard Top 100”) are focused on using bigger datasets to practice breaking down and solving larger problems, including making choices about what data structures to use, coming up with an algorithm to implement, and writing functions to help organize your implementation.

Before you move on to those sections, we recommend confirming that you are comfortable independently breaking down, implementing, and debugging the questions below. If you aren’t, work with your mentor on more Wordplay, Countries, and Baby Names-sized questions until you are consistently able to solve them independently.

Revisiting for loops, if conditions, and using lists as storage

What are all of the words that both start with a “TH” and end with a “TH”?

What are all of the words that have only “U”s for vowels?

What are all of the words that have only “E”s for vowels and are at least 15 letters long?

What are all of the words that start with “PRO”, end in “ING”, and are exactly 11 letters long?

What are the shortest words that start with “PRO” and end in “ING”? Make sure your solution can handle ties.

What are all of the words that can be made from only the letters in “RSTLNE”? Not all of those letters need to be used, and letters can be repeated.

What is the longest word that can be made from only the letters in “RSTLNE”? Not all of those letters need to be used, and letters can be repeated. Make sure your solution can handle ties.

What are all of the words that can be made without the letters in “AEIOSHRTN” (in other words, without the most common letters)?

What is the longest word that can be made without the letters in “AEIOSHRTN” (in other words, without the most common letters)? Make sure your solution can handle ties.

Functions

Write a function that takes a string `substring` as an argument and returns an array of all of the words that contain that substring (the substring can appear anywhere in the word).

Write a function that takes a string `prefix` as an argument and returns an array of all of the words that start with that prefix (the prefix has to be at the beginning of the word).

Write a function that takes a string `prefix` as the first argument, a string `suffix` as the second argument, and an integer `length` as the third argument. It should return an array of all of the words that start with that prefix, end with that suffix, and are that length.

Write a function that takes a string `word` as an argument and returns a count of all of the “A”s in that string.

Write a function that takes a string `word` as the first argument, a string `letter` as the second argument, and returns a count of how many times `letter` occurs in `word`.

Write a function that takes a string `phrase` and returns a dictionary contains counts of how many times every character appears in `phrase`.

<br>

# NBA Finals

Dictionaries

Read the NBA finals CSV data into one more more data structures as needed to complete the following:

Write a function that takes as an argument a year and returns the winner of the NBA finals that year.

Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals.

Which teams have made it to the NBA finals but have never won?
Print out a ranking of who has won the MVP more than once, by times won, e.g. this output:
    - 6 times: Michael Jordan
    - 3 times: Shaquille O'Neal, LeBron James
    - 2 times: <etc>

<br>

# Top Movies


What movies on this list were distributed by DreamWorks?

What is the highest grossing movie from Universal Pictures, domestically?

What distributor has the most films on this list?                                

What is the earliest year on this list, and what were the films from that year?

What is the distribution of ratings? (How many are PG, PG-13, R, etc.?)  


# Billboard Hot 100 of 2000

<br>


Print out all of the #1 songs and the artists who made them. If a song was #1 for more than one week, only print it once. Example output:
    These were the number one songs of 2000:
    "Try Again" - Aaliyah
    "Say My Name" - Destiny's Child
    "What A Girl Wants" - Christina Aguilera
    "Maria Maria" - Santana Featuring The Product G&B
    "Smooth" - Santana Featuring Rob Thomas
    "Independent Women Part I" - Destiny's Child


What song was the #1 song for the most weeks of 2000, who was the artist, and how many weeks was it at #1?

What artist had the most songs chart in 2000, and what were those songs?

What song(s) were on the charts (anywhere on the charts) for the most weeks of 2000?
