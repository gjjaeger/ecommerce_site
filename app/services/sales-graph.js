import Ember from 'ember';

export default Ember.Service.extend({
  data: [['Year', 'Sales']],

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

});
