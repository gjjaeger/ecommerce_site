export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      sales:this.store.findAll('sale')
    });
  },
  total: Ember.computed('model.sales', function(){
    var newtotal=0;
    var sales=this.get('model.sales');
    for (i in sales){
      newtotal =newtotal+sales[i].get('price');
    }
    return newtotal;
  })

});
