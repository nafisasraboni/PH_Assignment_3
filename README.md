# JavaScript Assignment — Functions, Array Methods & ES6

A JavaScript programming assignment focused on **functions, validation, array methods, ES6 features, string manipulation, and debugging**.

## 📌 Assignment Overview

This assignment contains 5 JavaScript problems designed to practice:

* JavaScript Functions
* `return` statements
* Input validation
* Arrays and Objects
* `filter()`
* `map()`
* `reduce()`
* `for` loops
* Template Literals
* String methods
* ES6 features
* Debugging and logical problem solving
* Edge Case and Hidden Test Case handling

---

## ⚠️ General Rules

* Function names must remain **exactly the same** as specified in each problem.
* Every function must return the required value using `return`.
* `console.log()` alone is not considered a valid solution.
* Variables and logic must remain inside the function.
* No global variables should be used.
* The function must return exactly what the problem requires.
* Solutions should handle both the provided sample cases and hidden test cases.
* Arrow functions are allowed as long as the required function name remains unchanged.

---

# 🧩 Problem 01 — Student Introduction Generator

### Function

```js
studentIntroduction(student)
```

### Description

Creates an introduction message for a newly registered student.

### Input

An object containing:

```js
{
    name: "Rafi",
    age: 18,
    course: "JavaScript"
}
```

### Expected Output

```text
My name is Rafi. I am 18 years old. I am learning JavaScript.
```

### Validation

Return `"Invalid"` when:

* Input is not an object
* Input is `null`
* Input is an Array
* `name` property is missing
* `age` property is missing
* `course` property is missing

### Concepts Used

* `typeof`
* `Array.isArray()`
* `in` operator
* Template Literals
* Object properties
* Conditional statements

---

# 🧩 Problem 02 — Active User Filter

### Function

```js
filterActiveUsers(users)
```

### Description

Filters a list of users and returns only users whose:

```js
isActive === true
```

### Input

```js
[
    { name: "A", isActive: true },
    { name: "B", isActive: false }
]
```

### Expected Output

```js
[
    { name: "A", isActive: true }
]
```

### Validation

Return `"Invalid"` when:

* Input is not an Array
* Array is empty
* An element is not an object
* An element is `null`
* An element is an Array
* `isActive` property is missing

### Important Behavior

```js
{ name: "A", isActive: false }
```

is **valid**, but it should not appear in the returned Array.

### Concepts Used

* Arrays
* Objects
* `Array.isArray()`
* `for` loop
* `in` operator
* `filter()`
* Strict equality (`===`)

---

# 🧩 Problem 03 — Trending Hashtag Counter

### Function

```js
countHashtags(caption)
```

### Description

Scans a caption and counts words beginning with `#`.

It also finds the longest hashtag without the `#` symbol.

### Input

```text
Loving this weather today #sunny #vibes #weekend
```

### Expected Output

```js
{
    hashtagCount: 3,
    longestTag: "weekend"
}
```

### Rules

* Input must be a String.
* A hashtag is a word starting with `#`.
* `hashtagCount` contains the total number of hashtags.
* `longestTag` contains the hashtag text without `#`.
* If multiple hashtags have the same length, the **first one** is selected.
* If there are no hashtags:

```js
{
    hashtagCount: 0,
    longestTag: ""
}
```

### Concepts Used

* Strings
* `split()`
* `startsWith()`
* `slice()`
* Arrays
* `for` loop
* String length
* Objects

---

# 🧩 Problem 04 — Bonus Score Calculator

### Function

```js
bonusScore(scores)
```

### Description

Each participant receives **10 bonus marks**.

The updated scores are then added together to calculate the total score.

### Input

```js
[80, 65, 90, 75]
```

### Processing

```text
80 + 10 = 90
65 + 10 = 75
90 + 10 = 100
75 + 10 = 85
```

### Expected Output

```text
350
```

### Validation

Return `"Invalid"` when:

* Input is not an Array
* Array is empty
* Any element is not a Number

### Concepts Used

* Array validation
* `typeof`
* `for` loop
* `map()`
* `reduce()`
* Arrow functions

---

# 🧩 Problem 05 — AI Leaderboard Generator

### Function

```js
generateLeaderboard(students)
```

### Description

Generates a leaderboard containing the top qualified students.

### Rules

1. Only students with a score of **70 or higher** qualify.
2. Qualified student names must be converted to **UPPERCASE**.
3. Only the **first 3 qualified students** are returned.
4. Original input order must be preserved.
5. The final result must **not be sorted**.

### Input

```js
[
    { name: "Rafi", score: 90 },
    { name: "Sadia", score: 65 },
    { name: "Karim", score: 85 },
    { name: "Nafis", score: 75 }
]
```

### Expected Output

```js
[
    "RAFI",
    "KARIM",
    "NAFIS"
]
```

### Validation

Return `"Invalid"` when:

* Input is not an Array
* Array is empty
* Any element is not an object
* Any element is `null`
* `name` property is missing
* `score` property is missing
* `score` is not a Number

### Important Boundary Case

A score of exactly `70` qualifies:

```js
{ name: "A", score: 70 }
```

### Concepts Used

* `Array.isArray()`
* Object validation
* `in` operator
* `typeof`
* `filter()`
* `map()`
* Destructuring
* `toUpperCase()`
* `slice()`
* Arrow functions
* ES6 features

---

# 🧪 Sample Test Cases

## Problem 01

```js
studentIntroduction({
    name: "Rafi",
    age: 18,
    course: "JavaScript"
});
```

Expected:

```text
My name is Rafi. I am 18 years old. I am learning JavaScript.
```

---

## Problem 02

```js
filterActiveUsers([
    { name: "A", isActive: true },
    { name: "B", isActive: false }
]);
```

Expected:

```js
[
    { name: "A", isActive: true }
]
```

---

## Problem 03

```js
countHashtags("Loving this weather today #sunny #vibes #weekend");
```

Expected:

```js
{
    hashtagCount: 3,
    longestTag: "weekend"
}
```

---

## Problem 04

```js
bonusScore([80, 65, 90, 75]);
```

Expected:

```text
350
```

---

## Problem 05

```js
generateLeaderboard([
    { name: "Rafi", score: 90 },
    { name: "Sadia", score: 65 },
    { name: "Karim", score: 85 },
    { name: "Nafis", score: 75 }
]);
```

Expected:

```js
["RAFI", "KARIM", "NAFIS"]
```

---

# 🧠 Key JavaScript Concepts Practiced

| Concept           | Problems   |
| ----------------- | ---------- |
| Functions         | 1–5        |
| `return`          | 1–5        |
| `typeof`          | 1, 2, 4, 5 |
| `Array.isArray()` | 1, 2, 4, 5 |
| `in` operator     | 1, 2, 5    |
| Template Literal  | 1          |
| `for` loop        | 2, 3, 4, 5 |
| `filter()`        | 2, 5       |
| `map()`           | 4, 5       |
| `reduce()`        | 4          |
| `split()`         | 3          |
| `startsWith()`    | 3          |
| `slice()`         | 3, 5       |
| Destructuring     | 5          |
| `toUpperCase()`   | 5          |
| Arrow Function    | 2, 4, 5    |
| Input Validation  | 1–5        |
| Edge Cases        | 1–5        |

---

# 🚀 Learning Outcome

After completing this assignment, I practiced how to:

* Build reusable JavaScript functions.
* Validate different types of input.
* Work with Arrays and Objects safely.
* Use modern ES6 syntax.
* Filter and transform Array data.
* Calculate values using `reduce()`.
* Manipulate Strings.
* Handle missing properties and invalid inputs.
* Identify and fix common JavaScript bugs.
* Think about hidden test cases and edge cases.
* Preserve input order while processing data.

---

## 📁 Suggested Project Structure

```text
javascript-assignment/
│
├── assignment.js
└── README.md
```

The `assignment.js` file contains the five required functions, while this README documents the assignment requirements, concepts, validation rules, and expected behavior.


