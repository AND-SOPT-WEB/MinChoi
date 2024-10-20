// querySelector로 요소 가져오기
const todoList = document.querySelector(".todo-list");
const input = document.querySelector(".input");
const button = document.querySelector(".button");

const btn = () => {
  const li = document.createElement('li');
  const rebtn = document.createElement('button');

  li.textContent = input.value;
  rebtn.textContent = "삭제"; 

  // li 요소에 삭제 버튼인 rebtn을 자식으로 추가
  li.appendChild(rebtn);
  // todoList에 li를 추가하여 화면에 항목을 표시
  todoList.appendChild(li);

  rebtn.addEventListener('click',() => {
    todoList.removeChild(li);
  })

  //입력 필드 초기화
  input.value='';
}

button.addEventListener('click',btn);