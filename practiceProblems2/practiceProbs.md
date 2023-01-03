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


# Baby Names

More for loops, if conditions, and storage

What is the shortest baby name in the top 40 baby names for 2020?
What are the longest baby names in the top 40 baby names for 2020? Make sure you can handle if there’s a tie.

Nested for loops

There is at least one baby name from the top 40 baby names for 2020 that, when spelled backwards, is a valid Scrabble word. Find and print all such names.
    Solve this two ways: first with an array to hold the Scrabble words, and then with a dictionary (or set) to hold the Scrabble words. Use timer functions to measure how long it takes to complete this work under each implementation. Why is the time different?
What are all of the names that were top 40 baby names in both 1880 and 2020?

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