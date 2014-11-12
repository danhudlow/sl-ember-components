import Ember from 'ember';

/**
 * @module mixins
 * @class  sl-modal
 */
export default Ember.Mixin.create({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * The name of the layout/template to render for this mixin
     *
     * @property {Ember.String} layoutName
     * @default  "sl-modal"
     */
    layoutName: 'sl-modal',

    /**
     * Attribute value bindings for the containing element
     *
     * @property {Ember.Array} attributeBindings
     */
    attributeBindings: [
        'aria-hidden', 'tabindex', 'role', 'aria-labelledby', 'aria-describedby'
    ],

    /**
     * Class names for the containing element
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'fade', 'modal' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * `aria-describedby` attribute value
     *
     * @property {Ember.String} aria-describedby
     * @default  null
     */
    'aria-describedby': null,

    /**
     * `aria-hidden` attribute to inform assistive technologies to skip the
     * modal's DOM elements
     *
     * @property {Ember.String} aria-hidden
     * @default  "true"
     */
    'aria-hidden': 'true',

    /**
     * Bootstrap's modal backdrop option
     *
     * @property {boolean|Ember.String} backdrop
     * @default  true
     */
    backdrop: true,

    /**
     * `role` attribute value
     *
     * @property {Ember.String} role
     * @default  "dialog"
     */
    role: 'dialog',

    /**
     * `tabindex` attribute value
     *
     * @property {Ember.String} tab index
     * @default  '-1'
     */
    tabindex: '-1',

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Binds handlers for exposed Twitter Bootstrap 3 modal events
     *
     * @function modalize
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    modalize: function() {
        var modal = this.$().modal({
            keyboard : true,
            show     : false,
            backdrop : this.get( 'backdrop' )
        });

        modal.on( 'show.bs.modal', this.showHandler.bind( this ) );
        modal.on( 'shown.bs.modal', this.shownHandler.bind( this ) );
        modal.on( 'hide.bs.modal', this.hideHandler.bind( this ) );
        modal.on( 'hidden.bs.modal', this.hiddenHandler.bind( this ) );
        modal.on( 'loaded.bs.modal', this.loadedHandler.bind( this ) );
    }.on( 'didInsertElement' ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * `aria-labelledby` attribute value
     *
     * Is a randomly-generated unique string
     *
     * @function aria-labelledby
     * @returns  {Ember.String}
     */
    'aria-labelledby': function() {
        return 'modalTitle-' + Math.random();
    }.property(),

    /**
     * Overridable method stub
     *
     * Triggered by Twitter Bootstrap 3 modal's `hidden.bs.modal` event.
     *
     * @function hiddenHandler
     * @returns  {void}
     */
    hiddenHandler: function() {},

    /**
     * Overridable method stub
     *
     * Triggered by Twitter Bootstrap 3 modal's `hide.bs.modal` event.
     *
     * @function hideHandler
     * @returns  {void}
     */
    hideHandler: function() {},

    /**
     * Overridable method stub
     *
     * Triggered by Twitter Bootstrap 3 modal's `loaded.bs.modal` event.
     *
     * @function loadedHandler
     * @returns  {void}
     */
    loadedHandler: function() {},

    /**
     * Overridable method stub
     *
     * Triggered by Twitter Bootstrap 3 modal's `show.bs.modal` event.
     *
     * @function showHandler
     * @returns  {void}
     */
    showHandler: function() {},

    /**
     * Overridable method stub
     *
     * Triggered by Twitter Bootstrap 3 modal's `shown.bs.modal` event.
     *
     * @function shownHandler
     * @returns  {void}
     */
    shownHandler: function() {}

});
