import Ember from 'ember';

/**
 * @module components
 * @class  sl-radio
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * HTML tag name for the root element
     *
     * @property {Ember.String} tagName
     * @default  "div"
     */
    tagName: 'div',

    /**
     * Class names for the root element
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'sl-radio' ],

    /**
     * Class name bindings for the root element
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: [ 'disabled', 'radioType' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Type of radio button; "radio-inline" when inline, "radio" default
     *
     * @function radioType
     * @observes inline
     * @returns  {Ember.String}
     */
    radioType: function() {
        return this.get( 'inline' ) ? 'radio-inline' : 'radio';
    }.property( 'inline' )
});
