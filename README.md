# React on Rails Tutorial With SSR, HMR fast refresh, and TypeScript
Each commit demonstrates a step in the [React on Rails Tutorial](https://github.com/shakacode/react_on_rails/blob/master/docs/tutorial.md).

Please ⭐️ this repo if you find this useful.

See the [commit history](https://github.com/shakacode/react_on_rails_tutorial_with_ssr_and_hmr_fast_refresh/commits/master).

## Key features
1. Server-Side Rendering (SSR) of React using a separate server bundle.
2. Webpack configuration for the server bundle is based on the rails/webpacker configuration for the client files.
3. HMR is provided by [react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin).

# Installation

## Setup
```bash              
git clone git@github.com:shakacode/react_on_rails_tutorial_with_ssr_and_hmr_fast_refresh.git
bundle
yarn
```

## Running with HMR
```
foreman start -f Procfile.dev-hmr
```

## Running without HMR, statically creating the bundles 
```
foreman start -f Procfile.dev
```                          

## Debugging the webpack setup

1. Uncomment the debugger line at the end of file `config/webpack/webpackConfig.js`
2. Set your preferred environment values and run
   `NODE_ENV=production RAILS_ENV=production bin/webpack --debug`
 
## Notable Steps
1. [Rails new](https://github.com/shakacode/react_on_rails_tutorial_with_ssr_and_hmr_fast_refresh/commit/cba5b53644a540a6e0de94b35a2870023bacf619): `rails new --skip-sprockets -J --skip-turbolinks test-react-on-rails-v12-ssr-v2`
1. [Add webpacker gem](https://github.com/shakacode/react_on_rails_tutorial_with_ssr_and_hmr_fast_refresh/commit/40897dd4fab5c1abd6eda763f8c17fd762c03ebe): `bundle add webpacker` 
1. [Add React on Rails gem](https://github.com/shakacode/react_on_rails_tutorial_with_ssr_and_hmr_fast_refresh/commit/8038d7139f718dfee1366b97b1c30471b107db0b): `bundle add react_on_rails`. 
1. [Set React on Rails version to be exact](https://github.com/shakacode/react_on_rails_tutorial_with_ssr_and_hmr_fast_refresh/commit/58c7c55ec26328234ee10f4a9b6e7e2fe02ecae9): Edit the Gemfile and run `bundle`.
1. [Install webpacker](https://github.com/shakacode/react_on_rails_tutorial_with_ssr_and_hmr_fast_refresh/commit/c91e1ffccdd00bf01d7f08b9f3338699d244a6a0): `bundle exec rails webpacker:install`
1. [Install webpacker React](https://github.com/shakacode/react_on_rails_tutorial_with_ssr_and_hmr_fast_refresh/commit/0e7cd331cbcf7bcd2295557d9a6a4c0cf196f161): `bundle exec rails webpacker:install:react`
1. [Install React on Rails](https://github.com/shakacode/react_on_rails_tutorial_with_ssr_and_hmr_fast_refresh/commit/1ab76f5f59fb6ac0eaa18715d7e2e7a62dba2622): `rails generate react_on_rails:install`
1. [Add HMR and Fast Refresh](https://github.com/shakacode/react_on_rails_tutorial_with_ssr_and_hmr_fast_refresh/commit/cb7037be084e49656b2d6a2412a75bc3db461075)
   Leverages the [react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin) to have [Fast Refresh](https://reactnative.dev/docs/fast-refresh) working with Webpack v4. After this change, you can
   1. Run: `foreman start -f Procfile.dev-hmr`
   2. Edit a JSX file and save and see the React change and the component state was preserved.
1. [rails/webpacker installs TypeScript into webpack](https://github.com/shakacode/react_on_rails_tutorial_with_ssr_and_hmr_fast_refresh/commit/b5b8697146f91b473cadb8d9b7664290160e71c3): `bundle exec rails webpacker:install:typescript`
1. [Convert demo screen and ReactOnRails registration to Typescript](https://github.com/shakacode/react_on_rails_tutorial_with_ssr_and_hmr_fast_refresh/commit/6acb4d3d41236f8b321601d98b6b7786c778f16e)
1. [Enable simple Server-Side Rendering (SSR) for Hello World using the same bundle for client and server rendering](https://github.com/shakacode/react_on_rails_tutorial_with_ssr_and_hmr_fast_refresh/commit/d4d5c94e2c5ca97f61c24b43151f15f46b561bd4). This is the simple, but imperfect way to turn on SSR using the same bundle for the server and client. HMR is not available.
1. [Switch to separate bundle for server-side rendering](https://github.com/shakacode/react_on_rails_tutorial_with_ssr_and_hmr_fast_refresh/commit/8e3bad711c318ceadff9edeb4895592aa845812d)
   Convert to separate bundles for server vs. client rendering with HMR
   
   1. Turned back on hmr and inline in webpacker.yml to support HMR.
   2. Change config/initializers/react_on_rails.rb to have the correct server bundle name
   3. Follow the flow from config/webpack/development.js to webpackConfig.js and consider
      uncommenting the debug line to see what happens when you run bin/webpack --debug
      
# Client only rendering versus Server-Side Rendering

## Client Only Rendering
![2020-08-02_17-14-33](https://user-images.githubusercontent.com/1118459/89173965-ce000900-d520-11ea-905b-38df2b467eb1.png)

## Server-Side Rendering
![2020-08-02_17-10-16](https://user-images.githubusercontent.com/1118459/89173975-d0626300-d520-11ea-83d4-d4c60de1e473.png)

      
# About
This project is sponsored by the software consulting firm [ShakaCode](https://www.shakacode.com). We focus on React front-ends, often with Ruby on Rails or Gatsby, using TypeScript or ReasonML. The best way to see what we do is to see the details of [our recent work](https://www.shakacode.com/recent-work).

Interested in optimizing your webpack setup for React on Rails including code
splitting with [react-router](https://github.com/ReactTraining/react-router#readme), 
and [loadable-components](https://loadable-components.com/) with server-side rendering?
We just did this for Popmenu, [lowering Heroku costs 20-25% while getting a 73% decrease in average response times](https://www.shakacode.com/recent-work/popmenu/).

Feel free to contact Justin Gordon, [justin@shakacode.com](mailto:justin@shakacode.com), maintainer of React on Rails, for more information.

[Click to join **React + Rails Slack**](https://reactrails.slack.com/join/shared_invite/enQtNjY3NTczMjczNzYxLTlmYjdiZmY3MTVlMzU2YWE0OWM0MzNiZDI0MzdkZGFiZTFkYTFkOGVjODBmOWEyYWQ3MzA2NGE1YWJjNmVlMGE).



 
