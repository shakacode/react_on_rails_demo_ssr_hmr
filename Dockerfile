
FROM ruby:3.1.2

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs

# Install yarn version 3.2.1
RUN node -v && npm i -g yarn && yarn set version 3.2.1
# Set the working directory in the container
WORKDIR /app

# Copy node package maps
COPY .yarnrc.yml package.json yarn.lock /app/
COPY .yarn/ /app/.yarn/

COPY Gemfile* /app
# Install Gemfile
RUN bundle install

# Install node modules
RUN yarn install

# Copy the current directory contents into the container at /app
COPY . /app

# Expose the rails app to outside the container
EXPOSE 3000

# Expose hmr server to outside the container
EXPOSE 3035 

# Run the app when the container launches
CMD ["bunde", "exec", "rails",  "s", "-b", "0.0.0.0", "-p", "3000"]