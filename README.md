# ✚ Fomulario registro usuario
## 1. 🎯 Objetivo del Proyecto

El proyecto consiste en la creación de un formulario de registro de usuarios interactivo que permita validar los datos ingresados por los usuarios antes de su envío. Se parte de una base proporcionada en la rama main de un repositorio, y el objetivo principal es implementar validaciones mediante JavaScript para garantizar que los usuarios ingresen información correcta y completa.

## 2. 🗂️ Estructura del Proyecto

El proyecto está organizado en varios archivos:

* HTML (index.html): Define la estructura del formulario de registro, con campos como nombre completo, correo electrónico, contraseña y confirmación de contraseña.
* CSS (styles.css): Se encarga del estilo visual del formulario, proporcionando un diseño atractivo y responsivo que facilite la interacción con el usuario.
* JavaScript (script.js): Contiene la lógica para la validación de los campos del formulario. Aquí es donde se aplican las reglas para asegurar que los datos proporcionados sean válidos antes de enviarse.

## 3. 📄 Funcionalidades Clave

El formulario de registro debe implementar las siguientes funcionalidades:

-	Nombre de usuario: Sólo permite letras y espacios en blanco, un máximo de 20 carácteres.
-	Apellidos: Sólo permite letras y espacios en blanco, un máximo de 20 carácteres.
-	Número de tlf: Sólo se permiten 9 dígitos.
-	Contraseña: Debe tener un tamaño mínimo de 6 carácteres, incluir algún dígito y que tenga alguna letra mayúscula y minúscula. 
- Se deberá tener otro campo que confirme la contraseña.
-	Se deberá incluir un check que simule que se han aceptado las condiciones de uso.
- Cualquier input, tras perder su foco, se deberá realizar su comprobación y mostrar el borde del mismo en verde, si lo que ha introducido el usuario es correcto, o en rojo, en caso contrario.
- Cuando todos los inputs estén verdes y el checkbox esté pulsado, el botón de registrar, inicialmente deshabilitado, se habilitará.
