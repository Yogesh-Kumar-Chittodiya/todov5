json.extract! task, :id, :tname, :tstatus, :is_active, :created_at, :updated_at
json.url task_url(task, format: :json)
