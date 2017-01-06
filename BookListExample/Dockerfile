# Build form node 7.1.0
FROM node:7.1.0

# Set environment
ENV DEBIAN_FRONTEND noninteractive

# Use bin/bash instead bin/sh
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Install basic tools
RUN apt-get update && apt-get install -y \
    vim \
    locate \
    curl \
    bash \
    git

# Install yarn
RUN npm install -g yarn

# Install gulp via yarn
RUN yarn global add gulp

# Install node serve via yarn
RUN yarn global add node-serve

# Change folder permission to access yarn
RUN chmod g+rwx /root
RUN chmod g+rwx -R /root/.yarn

# Expose ports
EXPOSE 8080
