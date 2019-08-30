// the class for a scene is created. This class extends scene class already declared in the Phaser library
class mainGame extends Phaser.Scene {
  // constructor function which calles the constructor of scene with the string declaring the name of the game
  constructor() {
    super("MainGame");
  }

  //preload is a predefined fumction which we are overriding to preload our assets
  preload() {
    this.load.image("char", "../assets/blueOrb.png");
  }

  //create is a pre defined function used to create the scene
  create() {
    this.character = this.add.sprite(20, 30, "char");
  }
}
