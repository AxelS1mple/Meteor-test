# Usamos una imagen base de Node.js
FROM node:16

# Instalar Meteor
RUN curl https://install.meteor.com/ | sh

# Configuración del directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY . .

# Instalar dependencias de npm
RUN meteor npm install

# Construir la aplicación
RUN meteor build --directory ./build

# Configurar el puerto en el que la aplicación correrá
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["meteor", "--settings", "settings.json"]
