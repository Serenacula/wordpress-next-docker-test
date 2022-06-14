FROM wordpress:latest

RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - 
RUN apt-get install -y nodejs