# Usa la imagen base de Node.js
FROM node:20

# Instala dependencias necesarias
RUN apt-get update && apt-get install -y curl bash

# Instala Meteor
RUN curl https://install.meteor.com/ | bash

# Agrega Meteor al PATH
ENV PATH="/root/.meteor:/root/.meteor/packages/meteor-tool/current/bin:${PATH}"

# Crea un usuario no root para seguridad
RUN useradd -m meteoruser

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY . .

# Cambia la propiedad del directorio a meteoruser
RUN chown -R meteoruser:meteoruser /app

# Cambia al usuario meteoruser
USER meteoruser

# Instala las dependencias del proyecto
RUN /root/.meteor/meteor npm install --unsafe-perm

# Construye la aplicación
RUN /root/.meteor/meteor build --directory ./build --allow-superuser

# Expone el puerto
EXPOSE 3000

# Inicia la aplicación
CMD ["/root/.meteor/meteor", "run", "--port", "0.0.0.0:3000"]
