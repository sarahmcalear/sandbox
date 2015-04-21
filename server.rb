module SandBox
  class Server < Sinatra::Base
    helpers SandBox::DatabaseHelper

    configure :development do
      $sandbox_database = Redis.new
      register Sinatra::Reloader
      require 'pry'
    end

    configure :production do
      $sandbox_database = Redis.new({url: ENV['REDISTOGO_URL']})
    end

    get('/') do
      render :erb, :index, {:layout => :default}
    end

    get('/clickables') do
      render :erb, :clickables, {:layout => :default}
    end

    post('/members') do
      name = params['name']
      birthday = params['birthday']
      mid = $sandbox_database.incr('member_id')
      $sandbox_database.hmset(
        'member:' + mid.to_s,
        'name', name,
        'birthday', birthday).to_json
      redirect_to ('/')
    end

  end
end
