FROM ubuntu:bionic

# 1. Install node12
RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
    apt-get install -y nodejs
    
# Get yarn gpg
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -

# 
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && apt-get install -y yarn

RUN apt-get update && apt-get install -y make && apt-get install -y python-pip

RUN pip install fonttools brotli zopfli


# RUN yarn

# # copy app src
# COPY . .

WORKDIR /darrik.dev

CMD 'make install && make buildSite && make subsetFont'
