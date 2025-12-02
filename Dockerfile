# Dockerfile – cho React (Vite / CRA đều chạy được)
FROM node:21-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build   # tạo thư mục dist hoặc build

# Dùng nginx để serve file tĩnh
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Nếu bạn dùng Vite → là thư mục "dist"
# Nếu dùng Create-React-App → đổi thành /app/build

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]