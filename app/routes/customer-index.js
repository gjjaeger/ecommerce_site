import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      products: this.store.findAll('product'),
      sales:this.store.findAll('sale')
    });
  },
  actions : {
    addsoldItems(soldItems){
      debugger;
      var self = this.store;
      soldItems.forEach(function(element){
        var newsale = self.createRecord('sale',element);
        newsale.save();
      });
    }
  }
});
