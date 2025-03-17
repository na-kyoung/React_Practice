class Todo {
  id: string;
  text: string;

  // 생성자
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;