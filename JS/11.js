function gugudan(num) {
    document.write(num, '* 1 = ', num*1);
    document.write(num, '* 2 = ', num*2);
    document.write(num, '* 3 = ', num*3);
    document.write(num, '* 4 = ', num*4);
    document.write(num, '* 5 = ', num*5);
    document.write(num, '* 6 = ', num*6);
    document.write(num, '* 7 = ', num*7);
    document.write(num, '* 8 = ', num*8);
    document.write(num, '* 9 = ', num*9);
  };
  // 함수 선언식은 세미콜론 꼭 찍지 않아도 됨
  
  // 함수 호출하는 법 = 함수 실행하는 법
  gugudan(3); 
  // 함수 선언식은 함수 이름으로만 호출 가능
  // 이렇게 호출하면 중괄호 내부만 실행.
  // 함수 사용하면 함수 내부 코드만 수정해서 사용하면 되어서
  // 유지보수에 용이
  
  // 함수 표현식
  // 함수는 내용 변경 잘 안하기 때문에 const로 선언.
  const ggd = function gugudan(num){
    document.write(num, '*1 = ', num*1,`\n`);
    document.write(num, '*2 = ', num*2,`\n`);
    document.write(num, '*3 = ', num*3,`\n`);
    document.write(num, '*4 = ', num*4,`\n`);
    document.write(num, '*5 = ', num*5,`\n`);
    document.write(num, '*6 = ', num*6,`\n`);
    document.write(num, '*7 = ', num*7,`\n`);
    document.write(num, '*8 = ', num*8,`\n`);
    document.write(num, '*9 = ', num*9,`\n`);
  };  // 함수 표현식은 세미콜론 찍는거 꼭 기억.
  
  // 함수 표현식 호출하는 법 
  // 변수의 이름으로만 호출 가능
  ggd(3);