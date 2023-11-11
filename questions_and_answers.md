<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

-   A: `{}`
-   B: `ReferenceError: greetign is not defined`
-   C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>we have set greetign as {} which is getting printed</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
    return a + b;
}

sum(1, "2");
```

-   A: `NaN`
-   B: `TypeError`
-   C: `"12"`
-   D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>JS is auto converting 1 to string "1" and then joining it with "2". JS auto converts equivalent types when needed.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

-   A: `['🍕', '🍫', '🥑', '🍔']`
-   B: `['🍝', '🍫', '🥑', '🍔']`
-   C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
-   D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>The food array never changed. Its getting printed normally as it was. We only changed info object.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
    return `Hi there, ${name}`;
}

console.log(sayHi());
```

-   A: `Hi there,`
-   B: `Hi there, undefined`
-   C: `Hi there, null`
-   D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>The name variable is is undefined. And when printing the undefined is getting converted to "undefined" string and getting printed in place of name variable.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
    if (num) count += 1;
});

console.log(count);
```

-   A: 1
-   B: 2
-   C: 3
-   D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>We are iterating through all elements of nums array. When it 0 its not getting count+=1 because 0 is falsy value. But in case 1,2,3 its getting count+=1 because they are truthy value.</i>

</p>
</details>
