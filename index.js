import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";

import Recordeanoucement from "./Recordeanoucement/Recordeanoucement.js";

const stage = newFunction();

const sprites = {
  Recordeanoucement: new Recordeanoucement({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;
function newFunction() {
  return new Stage({ costumeNumber: 1 });
}
