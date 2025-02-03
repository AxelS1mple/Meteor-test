# Usar una imagen más reciente que incluya las dependencias correctas
FROM node:20

# Instalar Meteor
RUN curl https://install.meteor.com/ | sh

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto
COPY . .

# Instalar dependencias del proyecto
RUN meteor npm install

# Ejecutar la construcción de Meteor con permisos de superusuario
RUN meteor build --directory ./build --allow-superuser

# Exponer el puerto en el que se ejecutará la app
EXPOSE 3000

# Comando para iniciar la app
CMD ["meteor", "run"]
