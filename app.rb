require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, "sqlite3:pizzashop.db"

class Product < ActiveRecord::Base
end

class Order < ActiveRecord::Base
end

before do
	@products = Product.all
end

get '/' do
	erb :index
end

get '/about' do
	erb :about
end

get '/products' do
	erb :products
end

get '/products/:id' do
	@p = Product.find params[:id]
	erb :pizza
end

post '/cart' do
	@orders_input = params[:orders]
	@items = parse_orders_input @orders_input

	if @items.size ==0
		return erb :cart_is_empty
	end

	@items.each do |item|
		#id, cnt
		item[0] = @products.find(item[0])
	end

   	erb :cart
end

def parse_orders_input orders_input

	s1 = orders_input.split(/,/)

	arr = []

	s1.each do |x|
		s2 = x.split(/\=/)
		s3 = s2[0].split(/_/)
		id = s3[1]
		cnt = s2[1]
		arr2 = [id, cnt]
		arr.push arr2
	end

	return arr
end

post '/place_order' do
	@orders = Order.create params[:order]
	@orders = Order.last(1)
	
  	erb :place_order
end


get '/internet' do
	erb :internet
end
