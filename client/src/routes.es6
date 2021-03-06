'use strict';

let config = /*@ngInject*/ ($stateProvider, $sceProvider, $urlRouterProvider) => {
  $sceProvider.enabled(false);
  
  /** Medications routes **/
  $stateProvider
  .state('products', {
    url: '/products',
    templateUrl: './html/products-view.html',
    controller: 'ShopCtrl',
    controllerAs: 'shopCtrl',
  })
  .state('product', {
    url: '/products/:product_id',
    templateUrl: './html/single-product-view.html',
    controller: 'ProductCtrl',
    controllerAs: 'productCtrl',
  })
  .state('cart', {
    url: '/cart',
    templateUrl: './html/cart-view.html',
    controller: 'ShopCtrl',
    controllerAs: 'shopCtrl',
  })
  ;

  $urlRouterProvider.otherwise('/products');
}

export default config