// this is the javascript code for initialize the game with a configuration

// starting the game on window load
window.onload = () => {
  // declaring the configuration
  const config = {
    type: Phaser.AUTO, // this makes the browser to choose the render engine
    width: 800, //width of game scene given in pixels
    height: 600, //height of game scene given in pixels
    scene: [mainGame] //this is the array containig all the scenes declared in sperate classes, we are going to make the in seperate files
  };

  game = new Phaser.Game(config);
};
