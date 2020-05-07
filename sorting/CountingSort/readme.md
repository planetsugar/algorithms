Counting Sort

Sort based on data range and range between specific keys.

Complexity: O(n + k)

where n is the number of elements and k is the range.

Counting sort is generally only ever used if k isn't larger than n; in other words, if the range of input values isn't greater than the number of values to be sorted. In that scenario, the complexity of counting sort is much closer to O(n), making it a linear sorting algorithm.