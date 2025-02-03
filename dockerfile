# Usar la imagen oficial de Node.js
FROM node:20

# Crear un usuario no root para ejecutar Meteor
RUN useradd -m meteoruser

# Instalar las dependencias necesarias para instalar Meteor
RUN apt-get update && apt-get install -y curl

# Instalar Meteor de manera global
RUN curl https://install.meteor.com/ | sh

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo de configuración .meteor y el código de la aplicación
# Se separa la copia del código y de las dependencias para aprovechar el cacheo de Docker
COPY .meteor .meteor
COPY package.json package-lock.json ./

# Cambiar a meteoruser para evitar problemas de permisos
USER meteoruser

# Instalar dependencias del proyecto
RUN meteor npm install

# Copiar el resto del código de la aplicación
COPY . .

# Construir la aplicación de Meteor
RUN meteor build --directory ./build --allow-superuser

# Establecer el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para ejecutar la app (usando la construcción de Meteor)
CMD ["meteor", "run", "--production"]
