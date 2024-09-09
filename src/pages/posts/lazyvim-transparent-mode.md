---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Cómo activar el modo transparente en lazyvim: Una Guía Paso a Paso.'
pubDate: '09-09-2024'
resume: 'En la guía publicada por Richard Aguilar, se explica cómo activar el modo transparente en Lazyvim. Primero, asegúrate de tener Lazyvim y la terminal XFCE instalados. Luego, accede a la configuración de Lazyvim, crea un archivo de configuración Lua para habilitar la transparencia, y ajusta los parámetros adecuados. Finalmente, configura la opacidad de la terminal XFCE para completar el proceso. Esto te permitirá tener un fondo transparente en Lazyvim, mejorando la apariencia de tu entorno de desarrollo.'
author: 'Richard Aguilar'
tags: ["Vim", "Lazyvim", "Terminal","Code editor","Linux"]
---
<h2 class="mt-4 mb-2 text-xl text-primary" markdown='1'>
  Tabla de contenido:
</h2>

  1. _[¿Que es lyzyvim? <i class="fa-solid fa-link" style="color: #0970be;"></i>](#title-1)_

<br/>

  2. _[Prerequisitos <i class="fa-solid fa-link" style="color: #0970be;"></i>](#title-2)_

<br/>

  3. _[Habilitando el modo transparente <i class="fa-solid fa-link" style="color: #0970be;"></i>](#title-3)_

<br/>

  4. _[Configurando terminal <i class="fa-solid fa-link" style="color: #0970be;"></i>](#title-4)_

<br/>

![Editor de código lazyvim con fondo transparente](/post-sources/lazyvim-wallpaper-transparent.png) 

<section class="mt-8 mb-4">
  <h2 id="title-1" class="text-xl text-primary" markdown='1'>
    ¿Que es Lazyvim?
  </h2>
  </section>

<p class="text-justify" markdown='1'>
    Lazyvim es uno de los editores de código más amados por los 
    entusiastas de la programación porque al ser un editor de código
    que funciona en la terminal de línea de comandos es lo vuelve muy 
    ligero y rápido además de los múltiples plug-ins que se le pueden agregar
    para poder convertir a lazyvim es un potente IDE de desarrollo 
    que no te puedes perder.
  </p>

<section class="mt-8 mb-4" markdown='1'>
  <h2 id="title-2" class="text-xl text-primary" markdown='1'>
    Prerrequisitos
  </h2>
</section>

Antes de comenzar con esta guía, asegúrate de tener lo siguiente:
<br/><br/>
  1) **Lazyvim** - _[Link de descarga <i class="fa-solid fa-link" style="color: #0970be;"></i>](https://www.lazyvim.org/)_

  2) **Xfce terminal** - [Link de descarga <i class="fa-solid fa-link" style="color: #0970be;"></i>](https://docs.xfce.org/apps/xfce4-terminal/dropdown)

<br/><br/>

<section class="mt-8 mb-4" markdown='1'>
  <h2 id="title-3" class="text-xl text-primary" markdown='1'>
    Habilitando el modo transparente
  </h2>
</section>

- **Iniciando la terminal XFCE:** Puedes la terminal xfce desde tu sistema Linux o lanzador de apps.

<br/>

![Editor de código lazyvim con fondo transparente](/post-sources/neofetch-xfce-terminal.png)

<br/>

- **Ruta de instalación de Lazyvim:** Tienes que dirigirte a la siguiente ruta.

<br/>

```bash 
cd /home/[tu nombre de usuario]/.config/nvim/
```
<br/>

![Ruta de configuración de Lazyvim](/post-sources/nvim-config-path.png)

<br/>

- **Agregando esquema de colores:** Creamos un nuevo archivo de configuración de 
*lua* que es el lenguaje de programación de que usa Lazyvim para gestión sus plug-ins.

<br/>

```bash
touch lua/plugins/colorscheme.lau
```
<br/>

  >**Nota:** con el comando "touch" puedes crear archivos por medio de la terminal

<br/>

- **Cambiamos al modo transparente:** Lazyvim trae por defecto el esquema de colores del tema
*tokyonight* así que para habilitar la transparencia del fondo tenemos que agregar el siguiente código al archivo 
generado anteriormente el cual es *colorscheme.lua*.

<br/>

```lua
return{
  {
    "folke/tokyonight.nvim",
    opts = {
      transparent = true,
      styles = {
        sidebars = "transparent",
        floats = "transparent"
      },
    },
  },
  {
    "rcarriga/nvim-notify",
    opts = {
      background_colour = "#000000",
    },
  },
}
```

<br/>

![Haciendo configuración](/post-sources/color-scheme-config.gif)

<br/>

<section class="mt-8 mb-4" markdown='1'>
  <h2 id="title-4" class="text-xl text-primary" markdown='1'>
    Configurando fondo en la terminal XFCE
  </h2>
</section>

- **Apariencia de terminal:** Dándole click derecho a la terminal podemos 
acceder a sus propiedades de personalización de apariencia.

<br/>

![Propiedades de configuración de la terminal XFCE](/post-sources/xfce-props.png)

<br/>

- **Ajustamos la apariencia:** Seleccionamos un fondo para la terminal y ajustamos la opacidad

<br/>

![Apariencia del fondo de la terminal](/post-sources/xfce-background.png)

<br/>


