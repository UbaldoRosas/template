# Template para sitios web
Este template básico contiene código Javascript y CSS base para mayor agilidad al comenzar un nuevo proyecto desde cero.

## Primeros pasos
Para comenzar a trabajar con este template es necesario contar con algunos requisitos instalados en tu equipo

### Prerequisitos

Servidor Apache (local) - MAMP, WAMPP, XAMPP

[Node JS](https://nodejs.org/es/download/)

[Grunt CLI](https://gruntjs.com/getting-started)

[Sass](https://sass-lang.com/install)

### Inicialización

1. Abrir Terminal

2. Ingresar la ruta de la carpeta de tu proyecto

```
cd ruta/hacia/tu/proyecto
```

3. Ingresar el siguiente comando:

```
npm install
```

Hasta este punto ya tendremos descargado los módulos y dependencias necesarios para el funcionamiento del template. 
Para ponerlo en marcha, ingresar el comando:

```
grunt watch
```

## Funcionamiento

### Javascript

Al modificar un archivo de la carpeta *js* se creará la carpeta *js* fuera del template que contendrá un archivo llamado *scripts.all.js* con todos los archivos javascript del template concatenados

### Sass

Al modificar un archivo de la carpeta *sass* se creará la carpeta *css* fuera del template que contendrá un archivo llamado *estilos.min.css* con todos los estilos transpilados y minificados
