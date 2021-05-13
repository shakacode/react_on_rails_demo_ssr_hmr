# frozen_string_literal: true

class ExpoController < ApplicationController
  layout "expo"

  def index
    @expo_props = { foo: "This is a prop sent from Rails Application" }
  end
end
