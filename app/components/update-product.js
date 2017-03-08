import Ember from 'ember';

export default Ember.Component.extend({
  updateProductForm: false,
  actions: {
    updateProductForm() {
      this.set('updateProductForm', true);
    },
    update(product) {
      var params = {
        name: this.get('name'),
        barcode: this.get('barcode'),
        brand: this.get('brand'),
        price: this.get('price'),
        image: this.get('image'),
        description: this.get('description')
      };
      this.set('updateProductForm', false);
      this.sendAction('update', product, params);
    }
  }
});
