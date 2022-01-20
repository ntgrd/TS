export interface ToDo {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}

export interface ToDos {
  [key: number]: ToDo
}

export async function getTodosByCount(count: number): Promise<ToDos> {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const data = await response.json();
  const countData: ToDos = data.splice(0, count);
  console.log(countData)
  return countData
}

