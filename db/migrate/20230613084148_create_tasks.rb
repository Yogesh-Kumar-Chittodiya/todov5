class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :tname
      t.string :tstatus
      t.boolean :is_active

      t.timestamps
    end
  end
end
