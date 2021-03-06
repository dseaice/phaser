/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

/**
 * The Scene Create Event.
 * 
 * This event is dispatched by a Scene after it has been created by the Scene Manager.
 * 
 * If a Scene has a `create` method then this event is emitted _after_ that has run.
 * 
 * If there is a transition, this event will be fired after the `TRANSITION_START` event.
 * 
 * Listen to it from a Scene using `this.scene.events.on('create', listener)`.
 * 
 * @event Phaser.Scenes.Events#CREATE
 * @since 3.16.3
 * 
 * @param {Phaser.Scene} scene - A reference to the Scene that emitted this event.
 */
module.exports = 'create';
