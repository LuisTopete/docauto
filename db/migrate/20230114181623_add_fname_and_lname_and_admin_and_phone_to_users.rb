class AddFnameAndLnameAndAdminAndPhoneToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :fname, :string
    add_column :users, :lname, :string
    add_column :users, :admin, :boolean
    add_column :users, :phone, :string
  end
end
