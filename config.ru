require 'json'
require 'redis'
require 'httparty'
require 'sinatra/base'
require 'sinatra/reloader'
require 'sass/plugin/rack'

Sass::Plugin.options[:style] = :compressed
use Sass::Plugin::Rack

require_relative 'database_helper'
require_relative 'server'

run SandBox::Server
