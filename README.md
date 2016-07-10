# grokking-algorithms
[Grokking Algorithms](https://www.manning.com/books/grokking-algorithms)

# Chapter One

* O(lg n) (binary search) is faster than O(n) (simple search), but it gets a lot faster once the list of items you’re searching through grows.
* Algorithm times are measured in terms of growth of an algorithm not speed.
* Algorithm times are written in Big O notation.
* The traveling salesperson problem
  * 120 permutations with 5 cities, so it will take 120 operations to solve the problem for 5 cities. For 6 cities, it will take 720 operations (720 permutations).
  * O(n!) time = factorial time.
  * Once you’re dealing with 100+ cities, it’s impossible to calculate the answer in time.
  * This is one of the unsolved problems in CS.
  * There’s no fastknown algorithm for it, and smart people think it’s impossible to have a smart algorithm for this problem. The best we can do is come up with an approximate solution.

# Chapter Two
* Your computer’s memory is like a giant set of drawers (arrays and lists).
* With an array, all your elements are stored right next to each other.
* With a list, they’re strewn all over, and one element stores the address of the next one.
* Arrays allow fast reads.
* Linked lists allow fast inserts and deletes.
* Array
  * Reading: O(1) constant time
  * Insertion: O(n) linear time
* Lists
  * Reading: O(n) linear time
  * Insertion: O(1) constant time
* Selection Sort: O(n x n) time or O(n^2)
  * Ex: To find the artist with the highest play count from a list, you have to check each item in the list (O(n)). So you have an operationthat takes O(n) time, and you have to do that n times.
  * Constants like 1/2 are ignored in big-O notation.

# Chapter Three
* Recursion is when a function calls itself.
* Every recursive function has two cases: the base case and the recursive case.
  * Recursive case is a stack of half-completed function call
* A stack has two operations: push and pop.
..* When you insert an item, it gets added to the top of the list. When you read an item, you just get to read the topmost item, and it gets taken off the list.
..* Used to save the variables for each recursive function.
..* Topmost box in the stack tells you what call to factorial() we are currently on.
.. * All function calls go onto the call stack.
..* The call stack can get very large, which takes up a lot of memory.

# Chapter Four
* Divide and conquer algorithms are recursive algorithms
* Euclid’s algorithm
.. * Ex: If we find the biggest box that will work for this size, that will be the biggest box that will work for the entire farm.
* If you are using divide and conquer on a list, the base case is probably an empty array, or an array with one element.
* If you are implementing quicksort, choose a random element as the pivot.
.. * “The performance of quicksort heavily depends on the pivot you choose.
* The average runtime of quicksort is O(n log n)!
* The constant in big-O notation can matter sometimes. That’s why quicksort is faster than mergesort.
.. * We usually ignore that constant because if two algorithms have different big-O times, the constant doesn’t matter.
* The constant will almost never matter for simple search vs binary search, because O(lg n) is so much faster than O(n) when your list gets big.
