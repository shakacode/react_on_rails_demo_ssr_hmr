# frozen_string_literal: true

require 'rails_helper'

RSpec.describe "hello_world", **{ type: :system, js: true } do
  it 'loads correct view' do
    visit '/hello_world'
    expect(page).to have_content 'Hello, World!'
    expect(page).to have_content 'Hello, Stranger from MDX!'
  end

  context 'react component' do
    it 'updates the text as input field gets changes' do
      visit '/hello_world'
      fill_in('name', with: 'my friend')
      expect(page).to have_content 'Hello, my friend from MDX!'
    end
  end
end
