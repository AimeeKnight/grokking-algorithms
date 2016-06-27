# grokking-algorithms
[Grokking Algorithms](https://www.manning.com/books/grokking-algorithms)

# Chapter One

* O(lg n) (binary search) is faster than O(n) (simple search), but it gets a lot faster once the list of items you’re searching through grows.
* Algorithm times are measured in terms of growth of an algorithm not speed.
* Algorithm times are written in Big O notation.
* The "traveling salesperson problem
..* 120 permutations with 5 cities, so it will take 120 operations to solve the problem for 5 cities. For 6 cities, it will take 720 operations (720 permutations).
..* O(n!) time = factorial time.
..* Once you’re dealing with 100+ cities, it’s impossible to calculate the answer in time.
..* This is one of the unsolved problems in CS.
..*There’s no fastknown algorithm for it, and smart people think it’s impossible to have a smart algorithm for this problem. The best we can do is come up with an approximate solution.

# Chapter Two
* Your computer’s memory is like a giant set of drawers (arrays and lists).
* With an array, all your elements are stored right next to each other.
* With a list, they’re strewn all over, and one element stores the address of the next one.
* Arrays allow fast reads.
* Linked lists allow fast inserts and deletes.
* Array
..* Reading: O(1) constant time
..* Insertion: O(n) linear time
* Lists
..* Reading: O(n) linear time
..* Insertion: O(1) constant time
* Selection Sort: O(n x n) time or O(n^2)
..* Ex: To find the artist with the highest play count from a list, you have to check each item in the list (O(n)). So you have an operationthat takes O(n) time, and you have to do that n times.
..* Constants like 1/2 are ignored in big-O notation.

Chapter Three
* Recursion is when a function calls itself.
* Every recursive function has two cases: the base case and the recursive case.
..* Recursive case is a stack of half-completed function call
* A stack has two operations: push and pop.
..* When you insert an item, it gets added to the top of the list. When you read an item, you just get to read the topmost item, and it gets taken off the list.
..* Used to save the variables for each recursive function.
..* Topmost box in the stack tells you what call to factorial() we are currently on.
.. * All function calls go onto the call stack.
..* The call stack can get very large, which takes up a lot of memory.
