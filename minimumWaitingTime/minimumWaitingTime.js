// Minimum Waiting Time
// You're given a non-empty array of positive integers representing the amounts of time that specific queries take to execute. Only one query can be executed at a time, but the queries can be executed in any order.

// A query's waiting time is defined as the amount of time that it must wait before its execution starts. In other words, if a query is executed second, then its waiting time is the duration of the first query; if a query is executed third, then its waiting time is the sum of the durations of the first two queries.

// Write a function that returns the minimum amount of total waiting time for all of the queries. For example, if you're given the queries of durations [1, 4, 5], then the total waiting time if the queries were executed in the order of [5, 1, 4] would be (0) + (5) + (5 + 1) = 11. The first query of duration 5 would be executed immediately, so its waiting time would be 0, the second query of duration 1 would have to wait 5 seconds (the duration of the first query) to be executed, and the last query would have to wait the duration of the first two queries before being executed.

// Note: you're allowed to mutate the input array.

// Sample Input
// queries = [3, 2, 1, 2, 6]
// Sample Output
// 17 // 1 + (1 + 2) + (1 + 2 + 2) + (1 + 2 + 2 + 3)

// O(nLog(n)) time | O(1) space
function minimumWaitingTime(queries) {
	queries.sort((a, b) => a - b);
	let minimumTime = 0;

	for (let i = 0; i < queries.length - 1; i += 1) {
		const query = queries[i];
		const queriesLeft = queries.length - (i + 1);
		const waitingTimeToAdd = queriesLeft * query;
		minimumTime += waitingTimeToAdd;
	}

	return minimumTime;
}

console.log(minimumWaitingTime([3, 2, 1, 2, 6])); // 17
console.log(minimumWaitingTime([2, 1, 1, 1])); // 6
console.log(minimumWaitingTime([1, 2, 4, 5, 2, 1])); // 23
console.log(minimumWaitingTime([25, 30, 2, 1])); // 32
console.log(minimumWaitingTime([1, 1, 1, 1, 1])); // 10
console.log(minimumWaitingTime([7, 9, 2, 3])); // 19
console.log(minimumWaitingTime([4, 3, 1, 1, 3, 2, 1, 8])); // 45
console.log(minimumWaitingTime([2])); // 0