class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :name
      t.text  :description
      t.string :website_url
      t.string :img_url
      t.string :address
      t.string :type
      t.float :lat 
      t.float :lng 

      t.timestamps
    end
  end
end
