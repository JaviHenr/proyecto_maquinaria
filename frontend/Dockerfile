FROM node:20
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install -D vite
COPY . .
CMD ["npm", "run", "dev", "--", "--host"]