import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  totalprice: 0,

  add(item){
    var filterItems = this.get('items').filter(function(currentItem){
      return currentItem.get('id')==item.get('id');
    });
    if(filterItems==false){
      this.get('items').pushObject(item);
    }
    var total = this.get('totalprice');
    this.set('totalprice', total+item.get('price'));
    var new_quantity = item.get('quantity_selected')+1;
    item.set('quantity_selected',new_quantity);
  },

  remove(item){
    var total= this.get('totalprice');
    this.set('totalprice', total-item.get('price'));
    var new_quantity = item.get('quantity_selected')-1;
    item.set('quantity_selected',new_quantity);
    if(item.get('quantity_selected')==0){
      this.get('items').removeObject(item);
    }
  }



});
