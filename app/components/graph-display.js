import Ember from 'ember';

export default Ember.Component.extend({
  salesGraph: Ember.inject.service(),
  model() {
    return this.store.findAll('sale');
  },

  data: [['Year', 'Sales']],
  show:false,
  actions : {
    showSales(sales){
      var data = this.get('data');
      this.set('show', true);
      sales.forEach(function(sale){
        var row_arr = []
        var date = new Date (sale.get('year')+", "+sale.get('month')+", "+sale.get('day'));
        row_arr.push(date);
        var quantity = sale.get('quantity_selected');
        row_arr.push(quantity);
        data.push(row_arr);
      });

    }
  }

  // data: [['Year', 'Sales']],
  //
  // mapData: Ember.computed('model', function() {
  //   var sales = this.get('model');
  //   sales.forEach(function(){
  //     return "hello"
  //   });
  // }),




    // for (var i in sales){
    //   var date = (this.get('sales.day') + "/" + this.get('sales.month')+ "/" + this.get('sales.year'));
    //   var quantity = this.get('sales.quantity_selected');
    // }

  // this.get('model.sales').forEach(function(element){
  //   newrow: [];
  //   date = element.get('day');
  //   date.push(newrow);
  //   sale= element.get('quantity_selected');
  //   sale.push(newrow);
  //   newrow.push(data);
  // })
});
