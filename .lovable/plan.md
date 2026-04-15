
# MH Sport Césped - Tienda Online Profesional

## Resumen
Construir una tienda online completa de césped artificial con diseño moderno, mobile-first, usando React + Vite + Tailwind + Supabase (Lovable Cloud) + Stripe integrado de Lovable.

## Diseño
- **Colores**: Verde oscuro (#1F7A3E) como primario, blanco, gris claro (#F5F5F5), verde secundario (#2DA44E) para botones
- **Tipografía**: Inter (sans-serif moderna)
- **Logo**: Se usará el logo subido directamente en header y footer
- **Estilo**: Minimalista, profesional, mobile-first

## Páginas y funcionalidades

### 1. Página de Inicio
- **Hero** con fondo de césped, título, subtítulo, botones "Ver tienda" y "Calcular m²"
- **Barra de confianza**: 4 iconos (envío rápido, fácil instalación, durabilidad, asesoramiento)
- **Productos destacados**: Grid de tarjetas con imagen, nombre, precio, botón añadir al carrito
- **Categorías**: Tarjetas visuales (Césped Artificial, Accesorios, Herramientas, Complementos)
- **Servicio de instalación**: CTA con botón "Solicitar presupuesto"
- **Galería de trabajos**: Grid filtrable (Jardines, Terrazas, Piscinas, Áreas deportivas)
- **Reseñas de clientes**: Testimonios con estrellas
- **CTA final**: Calculadora de metros cuadrados

### 2. Tienda (Shop)
- Grid de productos con buscador, filtros (categoría, precio, altura mm), ordenación
- Tarjetas con imagen, nombre, precio, botones "Añadir al carrito" y "Ver producto"

### 3. Página de Producto
- Galería de imágenes, título, precio, selector de cantidad, botón añadir al carrito
- **Calculadora integrada**: ancho × largo = m² necesarios + precio estimado
- Pestañas: Descripción, Características técnicas, Instalación, Envíos
- Productos recomendados

### 4. Servicio de Instalación
- Proceso paso a paso
- Formulario: nombre, teléfono, email, ciudad, m², mensaje

### 5. Sobre Nosotros
- Historia, experiencia, valores, fotos del equipo

### 6. Contacto
- Formulario de contacto
- Dirección, teléfono, email
- Mapa de Google Maps embebido

### 7. Calculadora de m²
- Página dedicada: ancho × largo → m², cantidad recomendada, precio estimado

### 8. Carrito y Checkout
- Carrito funcional con estado global (Context/Zustand)
- Checkout: dirección, método de envío, pago con Stripe
- Confirmación de pedido

## Backend (Lovable Cloud + Supabase)
- Tablas: productos, categorías, pedidos, reseñas, solicitudes de presupuesto
- RLS para seguridad
- Panel admin básico para gestionar productos (añadir, editar, imágenes, precios, categorías)

## Funcionalidades extra
- **Botón flotante de WhatsApp** en todas las páginas
- **Sistema de reseñas** con valoraciones de estrellas
- **SEO**: meta títulos, descripciones, URLs amigables
- **Responsive**: diseño mobile-first optimizado

## Pagos
- Se habilitará Stripe integrado de Lovable para procesar pagos
- Primero se creará la tienda con datos de ejemplo, luego se conectará Stripe

## Orden de implementación
1. Configurar diseño (colores, tipografía, logo) y layout base (header, footer, navegación)
2. Página de inicio completa con todas las secciones
3. Tienda con filtros y tarjetas de productos
4. Página de producto con calculadora
5. Carrito y checkout
6. Páginas estáticas (Instalación, Sobre Nosotros, Contacto)
7. Calculadora de m² dedicada
8. Backend Supabase (tablas, productos, reseñas, admin)
9. Integrar Stripe para pagos
10. WhatsApp flotante, SEO, pulido final
