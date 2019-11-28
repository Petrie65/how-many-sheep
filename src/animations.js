export default function makeAnimations(scene) {
	let config;

    config = {
        key: 'sheep-idle-right',
        frames: scene.anims.generateFrameNames('sheep', {
			start: 0,
            end: 7
        }),
        frameRate: 16,
        repeat: -1,
    };
	scene.anims.create(config);
	
    config = {
        key: 'sheep-idle-left',
        frames: scene.anims.generateFrameNames('sheep', {
			start: 10,
            end: 17
        }),
        frameRate: 8,
        repeat: -1,
    };

	// scene.anims.add(config);
}
