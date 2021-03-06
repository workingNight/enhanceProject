function quickSort(array, left, right) {
    if (left < right) {
      swap(array, left, right)
      // 随机取值，然后和末尾交换，这样做比固定取一个位置的复杂度略低
      let indexs = part(array, parseInt(Math.random() * (right - left + 1)) + left, right);
      quickSort(array, left, indexs[0]);
      quickSort(array, indexs[1] + 1, right);
    }
  }
  function part(array, left, right) {
    let less = left - 1;
    let more = right;
    while (left < more) {
      if (array[left] < array[right]) {
        // 当前值比基准值小，`less` 和 `left` 都加一
         ++less;
         ++left;
      } else if (array[left] > array[right]) {
        // 当前值比基准值大，将当前值和右边的值交换
        // 并且不改变 `left`，因为当前换过来的值还没有判断过大小
        swap(array, --more, left);
      } else {
        // 和基准值相同，只移动下标
        left++;
      }
    }
    // 将基准值和比基准值大的第一个值交换位置
    // 这样数组就变成 `[比基准值小, 基准值, 比基准值大]`
    swap(array, right, more);
    return [less, more];
  }
  function swap(array, left, right) {
    [array[left], array[right]] = [array[right], array[left]]
}
  let a = [1,3,2,7,6,6,7,8,1,2,4,7,9,1,2,4,6,8,7,9,3,1,2,4,9,0,7]
  quickSort(a, 0, a.length - 1)
  console.log(a)