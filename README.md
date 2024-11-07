Descripción
Este proyecto es una plataforma de e-commerce desarrollada para facilitar la compra y venta de productos en línea. La aplicación permite a los usuarios navegar por diferentes productos, agregarlos a un carrito de compras, y finalmente realizar la compra generando un ticket de compra que se envía por correo electrónico. Además, los administradores tienen la capacidad de agregar nuevos productos a la plataforma.

Características Principales
________
Gestión de Productos
Visualización de Productos: Los usuarios pueden explorar una variedad de productos organizados por categorías.

Detalles del Producto: Cada producto tiene una página de detalles que muestra información como nombre, precio, stock disponible, descripción y una imagen del producto.
________
Carrito de Compras
Agregar al Carrito: Los usuarios pueden agregar productos a su carrito de compras.

Modificar Cantidad: Los usuarios pueden ajustar la cantidad de productos en el carrito.

Eliminar Productos: Es posible eliminar productos del carrito, incluso si es el último producto.
_________
Generación de Tickets
Ticket de Compra: Al finalizar la compra, se genera un ticket que se guarda en Firestore y este se envía al correo electrónico del usuario utilizando el servicio EmailJS.
_________
Administración de Productos
Subida de Productos: Los administradores pueden subir nuevos productos incluyendo detalles como id, nombre, precio, stock, descripción, categoría e imagenes.
_________
Tecnologías Utilizadas
Frontend: React.js

Backend: Firebase Firestore y Firebase Storage

Envío de Correos: EmailJS
______________________________________________
Configuración y Uso

Instalación de Dependencias
npm install

Ejecutar el Proyecto
npm run dev