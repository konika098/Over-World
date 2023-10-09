<h1>MCQ TEST</h1>

###### 1. Write the correct answer from the following options and give an explanation (2-5 lines).

let greeting;
greetign = {};
console.log(greetign);

- A: {}
- B: ReferenceError: greetign is not defined
- C: undefined

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Correct answer is "B: ReferenceError: greetign is not defined".
 The code you provided contains a typographical error.This code declared the variable as greeting but then tried to assign an empty object to greetign. Because of this error, the correct answer is:

</i>

</p>
</details>

###### 2. Write the correct answer from the following options and give an explanation (2-5 lines).

function sum(a, b) {
  return a + b;
}

sum(1, "2");

- A: NaN
- B: TypeError
- C: "12"
- D: 3

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Correct answer is " C: "12"".
In the given code, you are using the + operator to add two values: 1 (a number) and "2" (a string). JavaScript performs implicit type conversion and treats this as a string concatenation operation. As a result, the two values are concatenated together as strings, resulting in "12"</i>

</p>
</details>

###### 3. Write the correct answer from the following options and give an explanation (2-5 lines).

const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

- A:['🍕', '🍫', '🥑', '🍔']`
- B:['🍝', '🍫', '🥑', '🍔']`
- C['🍝', '🍕', '🍫', '🥑', '🍔']]`
- D: ReferenceError

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Correct Answer is "A: ['🍕', '🍫', '🥑', '🍔']"</i>

</p>
</details>

###### 4. Write the correct answer from the following options and give an explanation (2-5 lines).

function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

- A: Hi there,
- B: Hi there, undefined
- C: Hi there, null
- D: ReferenceError

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i> Correct answer is " B: Hi there, undefined"
In the code you provided, the sayHi function expects one argument name, but when you call sayHi() without providing any arguments, JavaScript assigns the value undefined to the name parameter. Therefore, the function returns "Hi there, undefined".</i>

</p>
</details>

###### 5. Write the correct answer from the following options and give an explanation (2-5 lines).

let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Correct answer is "C:3"
In the given code, you have an array nums with four elements: [0, 1, 2, 3].</i>

</p>
</details>
Write to Moury Chowdhury
