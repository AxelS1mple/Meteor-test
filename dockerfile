# Usa una imagen base de Node.js
FROM node:20

# Instala curl y bash
RUN apt-get update && apt-get install -y curl bash

# Instala Meteor de forma global
RUN curl https://install.meteor.com/ | bash

# Asegura que Meteor esté en el PATH
ENV PATH="/root/.meteor:/root/.meteor/packages/meteor-tool/current/bin:$PATH"

# Crea un usuario no root por seguridad
RUN useradd -m meteoruser

# Cambia al usuario meteoruser
USER meteoruser

# Establece el directorio de trabajo
WORKDIR /home/meteoruser/app

# Copia los archivos del proyecto
COPY --chown=meteoruser:meteoruser . .

# Instala dependencias de Meteor
RUN meteor npm install --unsafe-perm

# Construye la aplicación para producción
RUN meteor build --directory /home/meteoruser/build --server-only

# Expone el puerto 3000
EXPOSE 3000

# Define el comando de inicio
CMD ["meteor", "run", "--port", "0.0.0.0:3000"]