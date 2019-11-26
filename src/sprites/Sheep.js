// import Enemy from './Enemy';

// export default class Sheep extends Enemy { 
export default class Sheep {
    constructor(config) {
		console.log('createsheep');
		
        // super(config);
        // this.flipX = true;
        // this.anims.play('Sheep');
        // this.sliding = false;
        // this.type = 'Sheep';
        // this.body.setSize(12, 12);
        // this.body.offset.set(2, 2);
    }

    update() {
        // if (!this.activated()) {
        //     return;
        // }
        // if (this.sliding) {
        //     this.scene.physics.world.collide(this, this.scene.groundLayer, this.scene.tileCollision);
        //     this.scene.enemyGroup.children.entries.forEach((enemy) => {
        //         if (this !== enemy) {
        //             this.scene.physics.world.overlap(this, enemy, this.slidekill);
        //         }
        //     });
        // } else {
        //     this.scene.physics.world.collide(this, this.scene.groundLayer);
        // }
        // this.scene.physics.world.overlap(this, this.scene.mario, this.marioHit);
        // if (this.body.velocity.x === 0) {
        //     this.direction = -this.direction;
        //     this.body.velocity.x = this.direction;
        //     this.flipX = this.direction < 0;
        // }
    }

}
