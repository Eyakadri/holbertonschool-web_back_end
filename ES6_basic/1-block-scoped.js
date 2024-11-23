export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // this block is intentionally empty to demonstrate scope
  }

  return [task, task2];
}