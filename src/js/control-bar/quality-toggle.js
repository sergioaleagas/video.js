/**
 * @file quality-toggle.js
 */
import Button from '../button.js';
import Component from '../component.js';

/**
 * Toggle Quality video
 *
 * @extends Button
 */
class QualityToggle extends Button {

  /**
   * Creates an instance of this class.
   *
   * @param { import('./player').default } player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  constructor(player, options) {
    super(player, options);
    this.setIcon('hd');
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */
  buildCSSClass() {
    return `vjs-quality-selector ${super.buildCSSClass()}`;
  }

}

/**
 * The text that should display over the `FullscreenToggle`s controls. Added for localization.
 *
 * @type {string}
 * @protected
 */
QualityToggle.prototype.controlText_ = 'Quality';

Component.registerComponent('QualityToggle', QualityToggle);
export default QualityToggle;
