let score = 0;
let bestScore = 0;
let stack = [];

export default function playRound(name, setScore, setBestScore) {
  if (stack.indexOf(name) > -1) {
    // card exists, so you win the round
    console.log(`${name} exists`);
    if (stack.length > bestScore) {
      setBestScore(stack.length);
      bestScore = stack.length;
      console.log(`Best Score = ${score}`);
    }
    // triggering render due to state update
    setScore(0);
    score = 0;
    console.log(`Score = ${score}`);
    stack = []; // clears the stack
  } else {
    stack.push(name);
    // triggering render due to state update
    setScore((score) => score + 1);
    score++;
    console.log(`Score = ${score}`);
  }
}
