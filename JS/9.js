let arr2 = []; // 비어있는 배열 
// -> 다른 파일에서라도 변수 이름 겹치면 안돼!
// 이런 식으로 선언하고,
// 모든 JS 자료형을 값으로 담을 수 있다.

let arr3 = [10, 20];
let arr4 = [10, 'abc', true, null, undefined, function(){}, {}];
// 모든 자료형을 ,로 연결해서 선언이 가능하다.
// Symbol도 할당할 수 있지만 잘 안 쓰니 PASS

document.write(arr3[0]); // 20
document.write(arr4[2]); // true
