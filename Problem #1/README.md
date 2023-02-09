# Problem #1

Imagine you have a special keyboard with the following keys:

Key 1: (A): Print one ‘A’ on screen
Key 2: (Ctrl-A): Select everything printed in the whole screen
Key 3: (Ctrl-C): Copy selection to buffer
Key 4: (Ctrl-V): Print buffer on screen appending it after what has already been printed.

You can only press the keyboard for N times, find out the maximum numbers of ‘A’ you can print on screen.

### Example 1:

Input: N = 2
Output: 2 -> for the sequence: A, A

### Example 2:
Input: N = 7
Output: 9 -> for the sequence: A, A, A, Ctrl-A, Ctrl-C, Ctrl-V, Ctrl-V

## Extra clarifications:

1 <= N <= 50
Answers will be in the range of 32-bit signed integer.
