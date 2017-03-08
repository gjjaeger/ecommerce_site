import Ember from 'ember';

export default Ember.Component.extend({
  actions : {
    update(product,params){
      this.sendAction('update',product,params);
    }
  }
});
