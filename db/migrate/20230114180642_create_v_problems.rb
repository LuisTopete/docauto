class CreateVProblems < ActiveRecord::Migration[7.0]
  def change
    create_table :v_problems do |t|
      t.datetime :sdate
      t.text :aproblem
      t.string :img
      t.boolean :solved

      t.timestamps
    end
  end
end
