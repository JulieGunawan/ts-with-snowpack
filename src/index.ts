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

  addListItem(newTask);
});

function addListItem(task: Task) {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document;
}
