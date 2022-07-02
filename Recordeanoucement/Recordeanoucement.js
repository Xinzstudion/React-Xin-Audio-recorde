/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Recordeanoucement extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "746eb7b7f1141dd4a3ed62f4740c3bbc-cc_ft_576",
        "./Recordeanoucement/costumes/746eb7b7f1141dd4a3ed62f4740c3bbc-cc_ft_576.png",
        { x: 480, y: 248 }
      )
    ];

    this.sounds = [
      new Sound("pop", "./Recordeanoucement/sounds/pop.wav"),
      new Sound("1", "./Recordeanoucement/sounds/1.wav"),
      new Sound("2", "./Recordeanoucement/sounds/2.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "StartRecording" },
        this.whenIReceiveStartrecording
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "StopRecording" },
        this.whenIReceiveStoprecording
      )
    ];
  }

  *whenIReceiveStartrecording() {
    this.goto(0, 0);
    this.size = 100;
    this.visible = true;
    yield* this.playSoundUntilDone(1);
    this.visible = false;
  }

  *whenIReceiveStoprecording() {
    this.goto(0, 0);
    this.size = 100;
    this.visible = true;
    yield* this.playSoundUntilDone(2);
    this.visible = false;
  }
}
