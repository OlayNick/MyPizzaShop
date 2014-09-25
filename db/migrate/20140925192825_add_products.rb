class AddProducts < ActiveRecord::Migration
  def change
  	Product.create 	:title => 'Hawaiian', :description => 'This is Hawaiian pizza', :price => 350, :size => 30, :is_spicy => false, :is_veg => false,  :is_best_offer => false, :path_to_image => '/images/1.jpg'
  
  	Product.create 	:title => 'Pepperoni', :description => 'Nice Pepperoni pizza', :price => 450, :size => 30,	:is_spicy => false,	:is_veg => false, :is_best_offer => true, :path_to_image => '/images/2.jpg'
  
  	Product.create 	:title => 'Vagetarian', :description => 'Amazing Vagetarian pizza', :price => 400, :size => 30, :is_spicy => false,  :is_veg => true, :is_best_offer => false, :path_to_image => '/images/3.jpg'
  end
end
