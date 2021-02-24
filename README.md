# **PROYECTO DE PRÁCTICAS PROFESIONALIZANTES**



Tabla de contenidos
=================

* [Jerarquías y roles](#jerarquías-y-roles)
    * [Rol administrativo](#rol-administrativo)
    * [Rol alumno](#rol-alumno)
    * [Rol profesor](#rol-profesor)
* [Funcionalidades](#funcionalidades)
    * [Preinscripción](#preinscripción)
    * [Menú dinámico](#menú-dinámico)
    * [Encriptación de contraseñas](#encriptación-de-contraseñas)
* [Inicialización del workspace](#inicialización-del-workspace)
* [Estructura básica del proyecto](#estructura-básica-del-proyecto)
* [Flujo de datos](#flujo-de-datos)
* [Errores / Incertidumbres](#errores--incertidumbres)
* [Posibles implementaciones a futuro](#posibles-implementaciones-a-futuro)

## Jerarquías y roles

El manejo de los permisos que pueden tener los usuarios en la página, fueron modelados utilizando una sola tabla con un campo de rol, el cual funciona cómo identificador ( a nivel permisos ) de cada usuario.

Otras opciones que fueron consideración a la hora de diseñar la jerarquía de usuarios:

- Herencia: Consiste simplemente en generar una tabla con todos los atributos que tienen en común todos los usuarios, y generar una tabla por cada rol necesario. Tanto la tabla de información en común cómo la de roles, contarán con algún identificador en común para poder recuperar la información mediante el uso de Joins.
- Tablas por Roles : A diferencia de la solución anterior que agrupaba toda la información común en una única tabla. Este diseño radica en que cada rol contenga la información de cada usuario (nombre, apellido, dirección, etc). Y si el usuario no se encuentra en una tabla específica, esto implica que el mismo no tendrá los permisos correspondientes a dicho rol. 

A continuación se detallan los distintos roles que existen dentro de la plataforma.

### Rol administrativo

Credenciales incorporadas a través de seeds/semillas de la base de datos:

*User*: SandraOvando

*Password:* 1234

Botones funcionales dentro del panel de control: 

**Consultar listado completo de alumnos**

(*en realidad, es un listado completo de usuarios*)

![img](https://lh3.googleusercontent.com/1o9L6zNzc_kpMp5QVMvMtW1NTLM10fnADHwPEAbp-6KJRSYixBh_sBV62S8UIzF0mznf0GKj2a4oaOQ3A18C2U5G5adDlN174Bee9Byissvm2n-8qeUCC1j98WJ-FGv3e6S96aYS)



Se visualiza a través de una tabla la totalidad de usuarios, ordenándose de forma ascendente por ID. Además, se incluyen nombre de usuario, nombre completo y rol. 

Se incorporó un campo de texto que funciona como filtro dinámico utilizando javascript.

Los archivos donde se pueden visualizar los códigos correspondientes son: 

src > controller > controladorUsuarios.js >** **exports.obtenerListado_get()**

**src > views > administrativo >** **listadoAlumnos.ejs**



**Consultar listado de preinscritos**

![img](https://lh4.googleusercontent.com/otSA8bCmuiYu2WIHd2cIkBwKFjQ6_mfvUtDKaPzxqnN_-r9k5LHZDVkmVakok2gxUo-M_bx3m5X7qMgSsgTV1NHFHZZ0rvx9akX0Rk1fiPtVh1xV9lpAPylAm4p8eBU891-8rkUU)

Al igual que en la página anterior, se visualiza una tabla con filtrado de datos, respecto a usuarios con intenciones de inscribirse en alguna carrera del Instituto. Al rellenar el formulario de “preinscripción”, el usuario se cargará en una tabla y se podrá visualizar desde una cuenta administrativa. Los botones “confirmar”, “editar” y “borrar” NO están funcionales (“editar” tiene un popUp diseñado, sin funcionalidades), pero sí lo están los campos de las bases de datos, por lo cual sería posible su implementación.

Archivos donde se puede visualizar el código:

**src > controller > controladorUsuarios.js > exports.consultarPreinscripciones_get()**

**src > views > administrativo > listadoPreinscripciones.ejs**



**Gestión de noticias**

Para acceder al formulario de creación de noticias, se puede acceder desde el panel de control cliqueando en el botón “Gestionar noticias”, o bien desde el menú, cliqueando “Noticias y eventos”



![img](https://lh3.googleusercontent.com/MN76T_UjVenorfFrozPMVuzP-fTF2Ex-cSOGHUPvb0IXlyxj6DThHM-zwC6WRWCBq9xnBDyMUkrlWI5y3fA_8GUXjovREer9rgd3MDMTRg8r_NZZDFc3E85CEqlCj_HY7biptAQz)



Implementaciones previstas:

- Mejorar el despliegue de “publicar nueva noticia”, podría desarrollarse un mejor diseño / vista
- Añadir funcionalidad de categorías, solo está la parte gráfica.

![img](https://lh4.googleusercontent.com/fhF9JcN2G5jdN1qG3afVKMJkr7WSQ8gh5qCVdPmNNCPUEHeG7xhJDGmjDOC1ULNtFk1yfbMz66FHBlyF2WD2D1B7kY_WSH3aZxTfEX8MAUjWNWYni0F900mLRplwMKuNrTYa-FxX)



Archivos:

**src > controller > controladorNoticia.js > exports.crearNoticia_get()**

**src > controller > controladorNoticia.js > exports.crearNoticia_post()**

**src > views > noticias > crear.ejs**

Desde la misma sección “noticias y eventos” también se encontrarán las opciones para editar y borrar las noticias, los códigos pertinentes se encuentran en las mismas secciones: **controladorNoticia.js** y la carpeta de vistas “**noticias**”



**Gestionar carreras**

A través de ese botón (en el panel de control del usuario administrativo) accedemos a la sección administrativa donde se encuentra la gestión de las carreras.

![img](https://lh3.googleusercontent.com/9BJg3xBb2NFk-BZbBY5pqhKPNnDjK5hWz1xtvyGVfdCOsdtzCHpAvBrt29JBBHShNrjr-IrdHir5jhRhr4WAdfj0MfybXpkcCH_Ye7bFMDhIfaI0_-tECreRhnld5ede2eWWoCZc)



![img](https://lh4.googleusercontent.com/aMnzvhNcLj7bYWDjW8gVyEV-lpADh3Qrc7oboXapj4qrb-56Dydyab5yFhvZfQcT1gIslvg_bG6cbxRAmpRy5ZK_06UnvNV3FeXTIpFzPRnCEwLs1wUJp0vJzzG1bSOF5QmlhmIp)



Archivos:

**src > controller > controladorCarreras.js**

**src > views > carreras > listarCarreras.ejs, crear.ejs, actualizar.ejs, carrera.ejs (esta última muestra la información específica de la carrera seleccionada)**

### Rol alumno

Credenciales de prueba

*Usuario:* GeraS

*Contraseña:* 1234



**Panel de control**



![img](https://lh3.googleusercontent.com/WbbFfpfEYvd_CI9siwkIiO_aFlbB9QfNuGN4-gsrk_mJrb_eo_jSki-mvJg_0oFl7B-eAbQFeRs9GQHEU2NhFu_j1Xe3GQihqA2nTkqnAYTnDX3v4g6g8BZqRZotBiwoiziyvevM)



Sobre la columna derecha, se agregó un formulario (no funcional, hasta el momento) que incorpora automáticamente el nombre completo del usuario. La finalidad prevista para este módulo, es poder establecer un contacto directo con un administrativo a través de “buzones de correo” o mensajería, que estarían disponibles en el panel de control de cada usuario independientemente de su rol.

Dentro del **menú de acciones estudiantiles,** la única “funcionalidad” añadida como ejemplo es la de “*solicitar constancia de alumno”*

![img](https://lh6.googleusercontent.com/KvBzEneALD1x5iwNip7jzPt6aX1oeuABGsZGBvnGpHWm7jBruWX4RbJfd6y7cM7jazd0LIrKOySFJoEZ2QfeMyNCqr_6pF5ituz7JcC5mdHskgmZzHJnymK_FB1CssU1uErdE0zm)

Dicho botón despliega un popUp/modal con una variedad de opciones, las cuales no son funcionales (por defecto, la constancia apunta a ser presentada ante autoridades de IOSFA). Esta funcionalidad podría ser implementada.

![img](https://lh5.googleusercontent.com/Kew_AMBwn28EZsKLM5xi_RM_5R3HW_DFedO0PL3C2jBnQJ73mO5vRVsr-q-U_cL_fZSaZpHyYfU1JkE1XNWRwTkOFM1NRsW47bsmvAKp9bc9DeA1SFBj7vy60DXOZ9xQ-xGvoZrh)

Al presionar “generar”, se genera una constancia (html + css puro), donde se emplea una fecha dinámica (vía Javascript), y se obtiene el nombre completo desde la base de datos. Sin embargo, el DNI y la carrera son datos hardcodeados, ya que la idea sería extraer esos datos directamente de la base de datos del instituto, analizando la posibilidad de emplear una API con el sistema Clarion existente. 

El código QR no está implementado, sino que se muestra como posibilidad de validación de las constancias.

Archivos:

Panel de control => **src > views > perfil.ejs** ( *en el mismo archivo se incluye la lógica para distinguir entre las distintas jerarquías de usuario, trabajando con los datos de la sesión, que son enviadas desde* **src > routes > index.js > router.get(‘/perfil’, [...])** )

### Rol profesor

Si bien este rol no tiene ninguna funcionalidad incorporada, está considerado dentro de la jerarquía de roles y se le puede implementar funcionalidades.

Credenciales de ejemplo:

*User:* DiBella

*Password:* 1234

**Panel de control**



![img](https://lh3.googleusercontent.com/6IrKutq4fmRqIoypq4vjlx5ArGjc0AjjNQQJjcmsfObUrazscu6-VJmi3SU8CMQNHEkVio2ZYMHCVZvOiX1LA7FU4ifkFG25uLnpT6KrqFp6TEF65Hrwy9aqy7oArSNakV7znONb)

Dentro de las posibles implementaciones, consideramos la posibilidad de consultar las cátedras asignadas al profesor, el listado de alumnos inscriptos en sus materias, y acceso al sistema de notas, el cual dispondría de alta/baja/modificación de notas para cada cátedra asignada.

## Funcionalidades

### Preinscripción

![img](https://lh4.googleusercontent.com/6FX3Rce-yAYfvi_gEXBrM9V_aUA0yRy1uLmSIELSpmOOliS18IiEq08GjTcVEd22J6KS2P5AzJrQRzY7J1WpjpDEXQL5Vs1BpjNrpfz81AWo5kFqKjvO2J_eOOQeydfAgYm1RELc)

- La pre inscripción podrá ser visualizada, aprobada, editada o borrada desde el panel de control de un usuario administrativo.

### Menú dinámico

Si el usuario no está logueado, se mostrarán dos enlaces en el menú: “preinscripción” y “login”

![img](https://lh4.googleusercontent.com/5mBj9zHfa-AVM2o9lZSz_wUjUttpdVjFkqGu6SA-CRclyCsV0xRsLIFYM4PCnGk91DIotvtXe8k-8Lvt8eikcdb3I2JyJWw4ZTC6k9q2uX1W8J1VAkvZG3lK-_oDZ823KxyQEOsi)





En caso de que se detecte una sesión de usuario, se mostrará en la esquina superior derecha un mensaje de bienvenida, tomando el nombre completo del usuario y añadiendo un enlace al panel de control. Además, se remueven los botones de preinscripción y login, siendo reemplazados por la opción de logout.

![img](https://lh5.googleusercontent.com/uphevQIoXsQ3DyUO0EhdbzRa5v9MFSHwv4yYhaNLVRmGaBqTWoxLWUxyo8rTp6BKf3PAJi5NjbkTvchWQWPNIK9aGBwV2-0ynAy0kifmlX797P6XYxa_-0s_cXA3RyP_eklMhDKD)



### Encriptación de contraseñas

Si bien no hay registro directo de usuarios, los usuarios añadidos a través de las seeds/semillas incorporan un algoritmo de encriptado empleando la librería “bcrypt”.

El código puede verse en: 

**src > dataBase > seeders > 20201024173754-crear-usuarios.js > línea 77**



## Inicialización del workspace

Para facilitar el trabajo en equipo y la trazabilidad de los cambios realizados, utilizamos un SW de control de versión denominado GIT. En el informe del proyecto se encuentran algunos comandos básicos, así mismo en el apartado de biografía hay varios links a diferentes tutoriales, también es recomendable visitar la documentación oficial de GIT.

Para bajar el repositorio y poder trabajarlo de manera local 

![](https://lh4.googleusercontent.com/XlA17C6q9-iUDhPfMX_lP0mi3ICGQrojEvFw4htXPoIYpsvnmm6tKg7q-4hPw-Mqs228JCpwrXtTgOZlq6y7CVVcv8vasdtMG1Mi2cF6gBV-fajazoE5jR2ZcIXadzZjBsBNn74G)

Una vez descargado se corre el comando:

![img](https://lh4.googleusercontent.com/hh5lmUuhrfwB5eCTZ5rMcVcb1hx-jqergHclOJSH9B2z8hYhJcsYWPe-8zUmv3zPexw8iPZUG4saWAMQ7zs8dsUXkelI_mAuibTLS9sFdvoiyFSGIylhxUwYWm6PaxGdW_Ri7oYK)

Este comando instalará todos los paquetes necesarios, de la rama donde se encuentren posicionados.

El workflow de git que estuvimos manejando fue:

- Rama **master:** Esta rama contiene todo el funciones estable y testeadas
- Rama **vistas:**  Dentro de la rama vista sería el equivalente a una rama de **developer,** en esta rama contiene las vistas y varias integraciones con la BD.

A medida que se fue desarrollando por lo general al momento de agregar alguna función o módulo, se creaba un **branch**  con un nombre significativo, y se testeaba/desarrollaba en dicho **branch,**  al momento de finalizar estos cambios se **mergeaban**  en la rama master.

![img](https://lh4.googleusercontent.com/Fuo2W-tPL3-VZbRKIoarETGY7fs-c-Kxn2uQ7mfhae4k1uqo1M8e3FPg7WYvjV8wZ5zSPw4QgZ6AiijUI-Lx-LxpgOAlTQzXhcaAZdIctb0U2dB_sw5F_D8Iw8NAZ0applsnGaJP)

Esta extensión de Visual Studio Code se llama **Git Graph,** 

Para lanzar la aplicación de manera local: 

![img](https://lh6.googleusercontent.com/Fpi8YgFhEHuFlmNPxAXuf8fVl5muRp-2rePlQFxdvFYg9VVyLg--Fj2YeLt4-N4WnT2SoudvN2DVcYybIai5i7noF7wbcEqzExY7CPoEshmS6fMVdy3J47APWq4Gm-XbHg_zNjmJ)



Este es un script que se encuentra dentro **package.json**,  la funcionalidad de este script es correr el servidor con un complemento/módulo adicional denominado **nodemon,** el cual re-inicializa el servidor automáticamente cada vez que el espacio de trabajo sufre alguna modificación.

![img](https://lh5.googleusercontent.com/cf-h9cfzuk1jpl4hPBz4vVT7JjeC8N1BXz1_-q7CzUAfz35pWEghW-id7oDbryaEkZr88c5qQMD8WtzrBrBJXfMY7O1Q5C-uAtQIBGidOAGipYSXEpUsWxh9P2rTNksGtcP1HeFC)



## Estructura básica del proyecto

En este proyecto se optó por la utilización de un patrón de diseño MVC (Modelo vista controlador), más que un patrón de diseño lo podríamos denominar un estilo de arquitectura de SW donde los datos de la GUI (Graphic User Interface) y la lógica se encuentran separados. Para entender mejor este estilo de arquitectura resulta sencillo imaginar a cada uno de los elementos antes mencionados cómo componentes, los cuales interactúan entre sí para llegar a un objetivo específico.

A continuación detallaremos cada una de las carpetas que se encuentran dentro del repositorio.

![img](https://lh5.googleusercontent.com/ZjFFEMSrZk0ydKCy5aveF835Wd27zIyMyYLoqcVhtqSU15_m0MzRj1Q4uaxxpnp4hdzyr0Fouvz-gmAqSO5CujRfPGqUdJ6feNEguEwbED1MqrZSdl9OOGrZ7aGv9xBTFQSTZ-Rb)

- **Bin:** Esta carpeta contiene parte de la configuración inicial del framework Express, fue generada automáticamente al utilizar la estructura básica que el propio framework brinda.

- **config:** Aloja los archivos de configuración de passaport y de sequelize.

- - config.js: Esté archivos ayuda al CLI que viene integrado a sequelize a identificar dónde tiene que crear cada uno de los modelos,semillas y también la forma de acceso a la base de datos, es posible asignarle un usuario específico para poder tener una trazabilidad de las acciones realizadas.
  - passport.js: En este archivo se implementa la configuración de passport, que cuenta con la estrategia (así denomina passport al tipo de autenticación, que puede ser local, vía google, facebook, mail, etc), la confirmación de existencia del usuario en la BD y la conexión y desconexión de sus sesiones. Este archivo es llamado desde **src/app.js**, y debería ser revisado para chequear su funcionalidad (más información en "errores / incertidumbres")

- **node_modules:** Almacena el código de los distintos paquetes que son utilizados en el proyecto.

- **public:** Todos los recursos que son de acceso público para los usuarios, deberían estar alojados dentro de esta carpeta.

- **spec:** Testing de las distintas funcionalidades desarrolladas, originalmente este proyecto iba contar con testing unitarios utilizando Jasmine, pero debido a limitaciones en cuanto a tiempo, fueron aplazadas. Se encuentran especificados algunas pocas funciones, a largo plazo sería ideal poder implementar el testing para todas las funciones principales del proyecto

- **src:** Esta carpeta funciona de nodo central para el proyecto almacenando gran parte de los módulos desarrollados. Se encuentra constituida por distintas subcarpetas que se detallaran a continuación . 

![img](https://lh4.googleusercontent.com/gkQZJ8fHigfFqKsOMthKAuQmqiLPNC0LLvyk7EoLAzSpsjMMRgGMoCyEaexEVQINDx7zDh69Stz_8NZ26IvEuTO9z5xQ3-t69OWTEbUy83X_qAeL2bILelFWi0OlC1sjHzv7_Whi)

- **src/controller:** En esta carpeta se localizan todos los controladores de servidor, en otras palabras la lógica del proyecto se encuentra centralizada en los diferentes controladores.

![img](https://lh5.googleusercontent.com/QYMhjOjh_NFfbB-Ccb0RnbcPigeMBL3LnzekMTBMwHLTKZxzG9h7YMIrsOqMzI27KH6Qpe_T4nP_cKGDj7SBcQR29ysScrIPqC_4ystJ7CLoHgG0IyjhsADpPpJbOlwwD8deWxm5) 

Las diferentes funcionalidades que fueron detalladas respectos a los roles, se corresponden con una función o varias, dentro de uno de estos controladores.

- **src/database:** Aloja parte de los archivos que genera y utiliza sequelize para poder trabajar con la base de datos

![img](https://lh3.googleusercontent.com/QewpYPsQGypencwUBwRzvdVzHInusFYfw_yTvWTjY8qmoET1e6j0taEkPKtfZv6qrwaS9eu_4RlayMqPRye8Aef1wRPY7UDlbpn7B6Xyr98p7dIHi02GYC7aXBgFCfI_cu0pA06F) 

En el informe del proyecto, se detalla de manera más simple el funcionamiento del sequelize-cli, así cómo la relación que existe entre el modelo de objetos y el modelo relacional. En el apéndice del mismo se dejaron varios links para que se puedan interiorizar respecto que es un ORM y cómo trabaja.



- **src/model:** Cada uno de las tablas en la base de datos se corresponde con uno de los modelos en el backend, también existe una carpeta oldModels que contiene los modelos viejos, que eran utilizados antes de utilizar el CLI, el problema principal con los modelos viejos es que las relaciones de la base de datos sólo podían ser descritas en un solo sentido.

  ![img](https://lh3.googleusercontent.com/Ldlc5vFpSKn8qdOHvP4huAdlV5KJcFwbda_nIoeh2xT6krOLM3eGNICmWTE-xC-4xWeFysgYZRrbDKHxBv6KZE5ZX_NDENL1wQaNTPw6xufGZEjoiahxT7alAEB68MNbjTIRHQfl)

  ​	 

- **src/router** :En esta carpeta se sitúan los manejadores de rutas, al momento que el servidor recibe una petición a una url específica con un verbo determinado(GET,PUT,POST), estan necesitan ser tratadas de alguna manera, este es el trabajo de los enrutados que se encuentran la carpeta routes.

![img](https://lh3.googleusercontent.com/exk7Z7U-XzcYk5KRL_xEoHIEx8OknooJr07yKWUD77_TzOayB0K2U5O7j16b6ZHSJ40-aU2sh-T9kRwGUqih6u0YhoMVV10jEgyDutPlZ_1D7LMMMejf2HXrKTuIp0-oftdKk_Nj)

- **src/view:** Cada una de las pantallas que fueron detalladas anteriormente se corresponden con un archivo dentro de la carpeta vista.

![img](https://lh4.googleusercontent.com/_qO9-aFI7ckMljLkGJE_G8lkB6ZBguitKXs661e6Z3AZPLiCgg1TR23SFTN2AEZK7X5FxffTHe8GXOi2OL32xYjXYm9LpMqRK0xAhoIFX5ES5AZw_bXpV3_mAMIeCXVqxyLjBub0)



**EJS** (**E**mbedded **J**avascript **T**emplating)**,** es un *motor de plantillas* usado por Node.js. Los motores de plantillas ayudan a crear una plantilla HTML disminuyendo código, a la vez que pueden **inyectar datos** en dicha plantilla obteniéndolos desde el servidor y mostrándolos como HTML desde el lado cliente.



![img](https://lh6.googleusercontent.com/XonpELmT7pFgcFZ4WmP_3tPjiOLtwsaNxYRfUfNJTAquZ1VXL5vw5D3H10sBhqwpgGfoZN900tPIvLxBM1b8rlq1he5WhX2FCR2WtnONaLeSQPe_03kKihwCEpKmz-fHC4i9V48J)

Existen varios motores de plantillas, los cuales difieren en sintaxis. EJS se caracteriza por respetar la estructura y sintaxis HTML, incluyendo código programable que debe ubicarse entre símbolos <% y %>.

Uno de los más populares es **PUG**, anteriormente llamado **Jade**. Ejemplo:

**![img](https://lh3.googleusercontent.com/CeL6n_7zyGrk6kx8BfUblBL9hB3EBZF0QJgLnt-_ZKcBZqFyD8YHt1IIc6IkduDYa3SLHcTpsQQSd_ljnt0gsvr3_1jWXO_bIIKebUjwZwGWf0XEjepadKrfzuf2wmPqb3654bq_)**

En este motor de plantilla se simplifica el etiquetado, lo cual a primera vista puede ser confuso o molesto pero puede significar un desarrollo más rápido y una lectura más sencilla conforme el programador se adapta a su sintaxis. 

## Flujo de datos

Contamos con una arquitectura de tipo **cliente-servidor,** donde los clientes(usuarios de la página) solicitan al servidor(backend desarrollado en NodeJs utilizando Express cómo framework) información o realizan algún tipo de petición.

Para describir cómo es flujo/interacción entre el backend y la página, utilizaremos cómo ejemplo, el caso de uso más sencillo que es ingresar en el navegador y solicitar la página.



Al momento de escribir en la barra de navegación y presionar enter obtendremos la página,

![img](https://lh5.googleusercontent.com/5U-QJFBJt9wonRin9DaZqEv5lEdND_9t80pSmzctpxst5Y1oDJK9IN5FbAmj1P_aGd1flyyRlAeGLFfjl9lpDXJ5F3qgZJ1xYH8P2WMJpfs01mQYrVJzGhzu1nz5wawiEPpaG6TZ)

Dentro de la consola se puede observar cómo el servidor contestó a la petición GET, a la ruta “raiz”. Para más información respecto a cómo interactúa la página y el servidor recomiendo mirar protocolo **http/https**.

Por simplicidad nos centraremos en cómo el servidor trata las peticiones, al momento que el servidor recibe una petición, el componente src/app.js, es el encargado de realizar el procesamiento de la petición. Cada petición sufre modificaciones antes de decidir que ruta es la que se está solicitando, las cuales se realizan mediantes **MiddleWares.**

**![img](https://lh3.googleusercontent.com/iKmeVCdpH8amNVJBgVCS0jCKLlmKO_K4qWoYI3K_s6gwL4fg07Q6Ff65hCkC9jXzTcqRe4al-bdOhmkTwM7PEPc7SQtKh1PoJYxdtg31lh5v4i61mdos3d02euTTMY3wb2kvvZ8A)**

Al llegar a la sección de Routers, en base a la ruta que fue especificada en la petición http, se carga un controlador. En este caso estamos suponiendo la acción de solicitar al página de inicio al servidor, por lo cual el verbo utilizado es GET y la ruta es “/”. El router es el encargado de discernir la acción a realizar en base al verbo http que fue enviado en la solicitud.

**src/router/index.js**

**![img](https://lh4.googleusercontent.com/YDwK0eEEup5wtMJoIfbUpUkEUrWVadswuvh9mQvWlhJ0uf7iWptERzjayJ9MiBJ79o-07txMKWQaoY91rVcj7KdqXxWMd6Q8DMvSOehEWQpf7pNnjFpGVQyBmXKBOi349vuz_e6V)**

Se puede observar todas las acciones que el router index.js maneja. Principalmente el router es el encargado de delegar a un controlador. El controlador se encuentra conformado de la siguiente manera:

![img](https://lh4.googleusercontent.com/6K_zD_rdQnHULdSFGKXXAY9t2KhbDXWRrE-VsvuNK4FexesTbtL1Fu_h7GB0A-Z4IVshGnxabQwH7O5ZpNiWdIi_cvgXh4_Ho7AHkdavUSqZ3ocSyQGuI5o528cpyT-D8ofC0XM-)

Básicamente el controlador se encarga de delegar la responsabilidad de renderizar la vista a **ejs**, y en caso de necesitar algún procesamiento, actualización o recuperación de datos, esta tarea será programada dentro de este módulo. 



La plantilla de ejs correspondiente a la vista recibe un JSON con información, la cual utiliza para renderizar.

![img](https://lh4.googleusercontent.com/dT1JOtnMBuqjdA_a6-SbhXmQ_0qkGpPQp2HIanggbvUUgTfM_ql_9QF8Xb7_2scOlt3Sov5so4E27PrIQlIB2MkXPjpQJ6uFMlmTKaVbQ7uVCq-gIrmjc2xZROy4x2H1TLQFTnhN)

## Errores / Incertidumbres

- Al cambiar el título de una noticia/imagen, ya no se podrá visualizar la imagen.

- - **Razón:** el manejo de imágenes está implementado a nivel DIRECTORIOS y no a nivel base de datos, es decir, al crear una nueva noticia con el título “ejemplo”, se creará una carpeta en **/public/uploads/ejemplo/**. Dentro de esa carpeta se subirán todas las imágenes relacionadas a la noticia, numeradas de 0 a N, todas en formato .jpg. Similar con las carreras. Este procedimiento se realiza empleando la librería “multer”, y el código puede verse en mayor detalle en **src > routes > noticias.js > línea 3, línea 13.** También en **src > routes > carreras.js > línea 3, línea 14** y en el código de los controladores**.** Una solución viable es implementar un algoritmo que, al momento de modificar el título de una noticia o carrera, también modifique el nombre de la carpeta donde se almacenan las imágenes. Ya que en la vista de las noticias (por ejemplo: **src > views > noticias > listar.ejs**) las imágenes son buscadas a través del título de la noticia (**/miniaturas/0.jpg”**). Podría emplearse un método más práctico o más sencillo para el manejo de las imágenes.

- Se debería revisar el código de **config/passport.js**, en la función de passport.deserializeUser. Dicha función está marcada como de revisión, pero no recuerdo con exactitud la razón (fue programada hace 5 meses) - sin embargo el login y el logout de usuarios funcionan correctamente. Se debería comparar con la documentación original de passport

## Posibles implementaciones a futuro

- Contacto funcional

- - empleando un servidor de mail o desarrollando un sistema de “buzón de entrada” para cada perfil, siendo los de rol administrativo los que reciban los contactos de soporte.

- Preinscripción funcional

- - añadir funcionalidad desde el lado administrativo para poder aprobar, editar o borrar preinscripciones

- Completar las funcionalidades de cada perfil

- - añadir funcionalidades a todos los botones de cada rol (disponibles en el panel de control)

- APIs

- - Como implementación avanzada (con datos reales), se podría desarrollar una API con el sistema actual del ISFT (basado en Clarion). Aparentemente, [puede generar salidas HTML, XML, entre otros](https://es.wikipedia.org/wiki/Clarion_(lenguaje_de_programación)). Por lo cual se podrían extraer esos datos. 

- Servidor en producción

- - Se podría buscar un VPS Linux gratuito (o de pago) e instalar el stack empleado en este sistema para poder tener un servidor en producción, y que los alumnos puedan acceder online y trabajar con los mismos datos.

- Moodle

- - Al ser Moodle uno de los proyectos tentativos que surgieron desde dirección, se podría implementar esta plataforma y establecer una comunicación con el sistema mostrado en este documento. Hemos realizado pruebas de API y servicios web obteniendo buenos resultados. Incluso logramos registrar usuarios desde una página externa, mostrar las categorías y cursos, etcétera. [Documentación](https://docs.moodle.org/dev/Web_service_API_functions) (*requiere conocimiento del panel de control de Moodle y conocimiento de APIs, tokens, JSON, servicios*)