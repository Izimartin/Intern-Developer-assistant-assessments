function maxA(N) {
  // Create an array to store the maximum number of 'A's that can be printed on the screen after pressing the keys i times.
  let dp = new Array(N + 1).fill(0);

  // Iterate through each key press from 1 to N.
  for (let i = 1; i <= N; i++) {
    // Case 1: Simply press the Key 1 to print one 'A' on the screen.
    dp[i] = dp[i - 1] + 1;

    // Case 2: Press the Key 1 to print 'A's on the screen, then press the Key 2 to select everything, press the Key 3 to copy it to the buffer, and then press the Key 4 repeatedly (i-j-1) times to paste the copied 'A's on the screen.
    for (let j = 1; j <= i - 3; j++) {
      dp[i] = Math.max(dp[i], dp[j] * (i - j - 1));
    }
  }

  // Return the maximum number of 'A's that can be printed on the screen after pressing the keys N times.
  return dp[N];
}
