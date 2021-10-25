
/**
 * 0补位
 * @param num 
 * @param targetLength 
 * @returns 
 */
export function padZero(num: number | string, targetLength = 2): string {
  let str = num + '';

  while (str.length < targetLength) {
    str = '0' + str;
  }

  return str;
}