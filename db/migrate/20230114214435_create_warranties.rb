class CreateWarranties < ActiveRecord::Migration[7.0]
  def change
    create_table :warranties do |t|
      t.string :dname
      t.text :wtype
      t.datetime :exdate

      t.timestamps
    end
  end
end
