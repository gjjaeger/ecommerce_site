export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      sales:this.store.findAll('sale')
    });
  }

});
