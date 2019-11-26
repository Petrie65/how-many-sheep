// import GameScene from './GameScene';
import Sheep from '../sprites/Sheep';

class BootScene extends Phaser.Scene {
    constructor(test) {
		super({key: 'BootScene'});
		console.log("gamescene boot");
	}

    preload() {
        const progress = this.add.graphics();

		console.log("preload boot");
		
        // Register a load progress event to show a load bar
        this.load.on('progress', (value) => {
            progress.clear();
            progress.fillStyle(0xffffff, 1);
            progress.fillRect(0, this.sys.game.config.height / 2, this.sys.game.config.width * value, 60);
        });
		
        // Register a load complete event to launch the title screen when all files are loaded
        this.load.on('complete', () => {
			// prepare all animations, defined in a separate file
            // makeAnimations(this);
			progress.destroy();

			console.log('done loading');
			

			// this.scene.start('GameScene');
			// this.game = new GameScene();
		});

		// We want to see pretty clouds
		this.load.image('background-clouds', 'assets/images/clouds.png'); // 16-bit later
	}

	create() {
		console.log('BETA');
		// Add the background as an tilesprite.
		this.add.tileSprite(0, 0, 500, 500, 'background-clouds');
		console.log("tileSprite added")
		
		// // CREATE SHEEP!!!
		this.sheep = new Sheep({
			scene: this,
			key: 'sheep',
			x: 50,
			y: 50
		});

		// // Set bounds for current room
		// this.sheep.setRoomBounds(this.rooms);

		// // The camera should follow Sheep
		// this.cameras.main.startFollow(this.sheep);

		// this.cameras.main.roundPixels = true;

	}

	update(time, delta) {

	}

}

export default BootScene;
