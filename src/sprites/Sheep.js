export default class Sheep extends Phaser.GameObjects.Sprite {
	constructor(config) {
		super(config.scene, config.x, config.y, config.key);
		config.scene.add.existing(this);

		// Set sheep
		this.sheep = config.scene.sheep;		

		// Place sheep behind each other
		this.depth = this.y;

		this.anims.play('sheep-idle-left');
	}
	
    update() {}
}
