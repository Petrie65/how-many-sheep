import Sheep from '../sprites/Sheep';
import makeAnimations from '../animations';
// import { textChangeRangeIsUnchanged } from 'typescript';


class BootScene extends Phaser.Scene {
    constructor(test) {
		super({key: 'BootScene'});
	}

    preload() {
		this.gw = this.sys.game.config.width;
		this.gh = this.sys.game.config.height;

		this.score = 0;
		this.scoreTxt = document.getElementById('score');

        const progress = this.add.graphics();
		
        // Register a load progress event to show a load bar
        this.load.on('progress', (value) => {
            progress.clear();
            progress.fillStyle(0xff0000, 1);
            progress.fillRect(0, this.gh / 2, this.gw * value, 60);
        });
		
        // Register a load complete event to launch the title screen when all files are loaded
        this.load.on('complete', () => {
			// prepare all animations, defined in a separate file
			makeAnimations(this);
			progress.destroy();
		});

		// We want to see pretty
		this.load.image('grass-tile', 'assets/images/grass-tile.jpg');

		// Load sheep
		let framConfig = {
		    frameWidth: 175,
		    frameHeight: 128,
		    startFrame: 0,
			endFrame: 8
		}
		this.load.spritesheet('sheep', 'assets/sprites/sheep_175x128.png', framConfig);

		// var x = game.load.atlasXML('seacreatures', 'assets/sprites/seacreatures.png', 'assets/sprites/seacreatures.xml');
		//  Here is the exact same set of animations but as a JSON file instead
		// game.load.atlas('seacreatures', 'assets/sprites/seacreatures_json.png', 'assets/sprites/seacreatures_json.json');
	}

	create() {;
		// Setup input
		this.cursors = this.input.keyboard.createCursorKeys();

		// Add the background as an tilesprite.
		const scale = 1;
		this.add.image(0, 0, 'clouds');
		this.myTile = this.add.tileSprite(0, 0, this.gw / scale, this.gh / scale, 'grass-tile') 
			.setScale(scale)
			.setOrigin(0,0);

		// Camera
		// this.cameras.main.setBounds(0, 0, 1024, 2048);
		// this.cameras.main.setZoom(0.5);
		// this.cameras.main.centerOn(0, 0);
		// this.cameras.main.startFollow(this.sheep);
		
		// UI input
		this.addButton = document.getElementById('sheepButton');
		this.addButton.addEventListener('click', this.addSheep.bind(this));
	}

	addSheep() {
		const randX = this.getRandomInt(this.gw);
		const randY = this.getRandomInt(this.gh);
		
		// CREATE SHEEP!!!
		this.sheep = new Sheep({
			scene: this,
			key: 'sheep',
			x: randX,
			y: randY
		});

		// Update score
		this.score++;
		this.scoreTxt.textContent = "" + this.score;
	}

	getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	update(time, delta) {
		// X input
		if (this.cursors.left.isDown){ this.sheep.x -= 5;}
		else if (this.cursors.right.isDown){ this.sheep.x += 5;}
		// Y input
		if (this.cursors.up.isDown){ this.sheep.y -= 5;}
		else if (this.cursors.down.isDown){ this.sheep.y += 5;}
	}
}

export default BootScene;
