function printBanana(){
    document.write('banana');
  };
  // 바나나 대신 다른 문자열을 출력하고 싶다면?
  // 함수를 무한으로 생성해?
  // ㄴㄴ. 유지보수 어려움.
  
  // 함수 호출 시에 어떤 데이터를 전달해서 해결하자.
  // 매개변수 : 어떤 데이터를 넣어줄지 선언해두는 변수
  function printFruit(name){
    document.write(name);
  }
  
  printFruit('banana'); // 넣어주는 데이터가 인수
  printFruit('shinemuscat');
  // 서로 다른 것을 출력하고자 함수를 새로 만드는 게 아니라,
  // 데이터를 넘겨서 함수를 호출하기만 하면 됨.
  
  // 매개변수는 여러개를 전달할 수도 있음.
  // 콤마나 배열, 객체를 이용하면 가능
  function printFruitPrice(name, price){
    document.write(name,'의 가격은',price,'입니다.');
  }
  
  function printFruitPrice2(fruitArr){
    document.write(fruitArr[0],'의 가격은',fruitArr[1],'입니다.');
  }
  
  function printFruitPrice3(fruitObj){
    document.write(fruitObj.name,'의 가격은',fruitObj.price,'입니다.');
  }