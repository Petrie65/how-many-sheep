import 'phaser';
import BootScene from './scenes/BootScene';

var config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL, 
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
	width: 800,
	height: 500,
	state: this,
	antialias: true,
	tranwsparent: false,
	scene:  [ BootScene ],
	backgroundColor: "#6888ff",
	fps: {
        min: 10,
        target: 60,
        forceSetTimeOut: false,
        deltaHistory: 10
    },
    disableContextMenu: false,
};

const game = new Phaser.Game(config); // eslint-disable-line no-unused-vars
