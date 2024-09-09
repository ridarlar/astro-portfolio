---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Cómo activar el modo transparente en lazyvim: Una Guía Paso a Paso.'
pubDate: '09-09-2024'
resume: ''
author: 'Richard Aguilar'
tags: ["Vim", "Lazyvim", "Terminal","Code editor","Linux"]
---
<h2 class="mt-4 mb-2 text-xl text-primary" markdown='1'>
  Tabla de contenido:
</h2>

  1. _[Que es lyzyvim <i class="fa-solid fa-link" style="color: #0970be;"></i>](#title-1)_

  2. _[Prerequisitos <i class="fa-solid fa-link" style="color: #0970be;"></i>](#title-2)_

  3. _[Habilitando el modo transparente <i class="fa-solid fa-link" style="color: #0970be;"></i>](#title-3)_
<br/>

![Editor de codigo lazyvim con fondo transparente](/post-sources/lazyvim-wallpaper-transparent.png) 

<section class="mt-8 mb-4">
  <h2 id="title-1" class="text-xl text-primary" markdown='1'>
    Que es Lazyvim?
  </h2>
  <p class="text-justify" markdown='1'>
    Lazyvim es uno de los editores de codigo mas amados por los 
    entusiastas de la programacion por que al ser un editor de codigo
    que funciona en la terminal de linea de comandos es lo vuelve muy 
    ligero y rapido ademas de los multiples plugins que se le pueden agregar
    para poder convertir a lazyvim es un potende IDE de desarrollo 
    que no te puedes perder.
  </p>
</section>

<section class="mt-8 mb-4" markdown='1'>
  <h2 id="title-2" class="text-xl text-primary" markdown='1'>
    Prerequisitos
  </h2>
</section>

Antes de comenzar con esta guia, asegurate de tneer lo siguiente:
<br/><br/>
  1) **Lazyvim** - _[Link de descarga <i class="fa-solid fa-link" style="color: #0970be;"></i>](https://www.lazyvim.org/)_

  2) **Xfce terminal** - _[Link de descarga <i class="fa-solid fa-link" style="color: #0970be;"></i>](https://www.linuxfromscratch.org/blfs/view/svn/xfce/xfce4-terminal.htmlhttps://www.linuxfromscratch.org/blfs/view/svn/xfce/xfce4-terminal.html)_
<br/><br/>

<section class="mt-8 mb-4" markdown='1'>
  <h2 id="title-3" class="text-xl text-primary" markdown='1'>
    Habilitando el modo transparente
  </h2>
</section>

- **Iniciando la terminal XFCE:** Puedes la terminal xfce desde tu sistema linux o lanzador de apps.

<br/>

![Editor de codigo lazyvim con fondo transparente](/post-sources/neofetch-xfce-terminal.png)

<br/>

- **Ruta de instalacion de Lazyvim:** Tienes que dirigirte a la siguiente ruta.

<br/>

```bash 
cd /home/[tu nombre de usuario]/.config/nvim/
```
<br/>

![Ruta de configuracion de Lazyvim](/post-sources/nvim-config-path.png)

<br/>

- **Agregando esquema de colores:** Creamos un nuevo archivo de configuracion de 
lua que es el lenguaje de programacion de que usa Lazyvim para gestion sus plugins.

<br/>

```bash
touch lua/plugins/colorscheme.lau
```
<br/>

  >**Nota:** con el comando "touch" puedes crear archivos por medio de la terminal

<br/>

- **Cambiamos a el modo transparente:** Lazyvim trae por defecto el esquema de colores del template
*tokyonight* asi que para habilitar la transparencia del fondo tenemos que agregar el siguiente codigo al archivo 
creado anteriormente el cual es *colorscheme.lua*.

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

![Haciendo configuracion](/post-sources/color-scheme-config.gif)

<br/>

<section class="mt-8 mb-4" markdown='1'>
  <h2 id="title-4" class="text-xl text-primary" markdown='1'>
    Configurando fondo en la terminal XFCE
  </h2>
</section>

- **Apariencia de terminal:** Dandole click derecho a la terminal podemos acceder a sus propiedad de personalizacion de apariencia.

<br/>

![Propiedades de configuracion de la terminal XFCE](/post-sources/xfce-props.png)

<br/>

- **Ajustamos la apariencia:** Seleccionamos un fondo para la terminal y ajustamos la opacidad

<br/>

![Apariencia del fondo de la terminal](/post-sources/xfce-background.png)

<br/>


