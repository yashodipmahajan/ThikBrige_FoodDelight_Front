# # Stage 1: Build Angular app

# # 1️⃣ Base image
# FROM node:18-alpine

# # 2️⃣ Set working directory
# WORKDIR /app

# # 3️⃣ Copy dependency files first (for caching)
# COPY package.json package-lock.json ./

# # 4️⃣ Install dependencies
# RUN npm install

# # 5️⃣ Copy rest of source code
# COPY . .

# # 6️⃣ Build (if needed)
# RUN npm run build



# # Stage 2: Serve with Nginx
# FROM nginx:alpine

# COPY --from=build /app/dist/ /usr/share/nginx/html

# EXPOSE 4200

# CMD ["npm", "start"]


FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "start", "--", "--host", "0.0.0.0"]