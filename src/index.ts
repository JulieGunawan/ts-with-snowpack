import { v4 as uuidV4 } from "uuid";

// console.log(uuidV4());
type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.querySelector<HTMLFormElement>("#new-task-form");
const input = document.querySelector<HTMLInputElement>("#new-task-input");
const tasks: Task[] = loadTasks();
tasks.forEach((task) => addListItem(task));

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input?.value == "" || input?.value == null) {
    return;
  }

  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };
  console.log(newTask);
  tasks.push(newTask);

  addListItem(newTask);
  saveTasks();
  input.value = "";
});

function addListItem(task: Task) {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    saveTasks();
  });
  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item);
}

function saveTasks() {
  localStorage.setItem("TASKS", JSON.stringify(tasks));
}

function loadTasks(): Task[] {
  //JSON parse only accepts string and not null, so we need to break it down
  const taskJSON = localStorage.getItem("TASKS");
  if (taskJSON == null) return [];
  //but JSON.parse could return anything, if parameter is not null
  return JSON.parse(taskJSON);
}
