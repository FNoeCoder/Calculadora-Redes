# Calculadora de Redes

Este proyecto es una calculadora de redes que permite subnetear una red y analizar sus datos. La aplicación está desarrollada en React y cuenta con varias funcionalidades para trabajar con redes y subredes.

## Funcionalidades

1. **Subnetear una red**: Permite subnetear una red para obtener información detallada sobre cada subred.
2. **Multisubnetear una red**: Permite dividir una red en múltiples subredes especificando la cantidad de hosts necesarios para cada subred.
3. **Desglosar una red**: Proporciona información detallada de una red específica, incluyendo clase, rango de direcciones, dirección de broadcast, máscara de subred, etc.

## Estructura del Proyecto

El proyecto está organizado en varios componentes de React:

- **BarraLateral**: Componente que contiene la barra lateral de navegación.
- **VistaPrincipal**: Componente que muestra la vista principal según la funcionalidad seleccionada.
- **Tabla**: Componente para mostrar los datos de las subredes en formato de tabla.
- **VentanaFlotante**: Componente para mostrar mensajes de error.
- **BotonDescargarTabla**: Componente para descargar los datos de la tabla.
- **Cantidades**: Componente para gestionar y mostrar la lista de cantidades de hosts.

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/FNoeCoder/Calculadora-Redes
    ```
2. Navega al directorio del proyecto:

    ```bash
    cd Calculadora-Redes
    ```
3. Instala las dependencias:

    ```bash
    npm install
    ```
4. Inicia la aplicación:

    ```bash
    npm dev
    ```

## Uso

### Subnetear una Red

1. Ingresa la dirección de la red en el campo correspondiente.
2. Selecciona si deseas subnetear por cantidad de hosts o subredes.
3. Ingresa la cantidad requerida y presiona el botón "Subnetear".
4. La tabla mostrará los datos de las subredes generadas.

### Multisubnetear una Red

1. Ingresa la dirección de la red en el campo correspondiente.
2. Agrega las cantidades de hosts requeridos para cada subred.
3. Presiona el botón "Subnetear".
4. La tabla mostrará los datos de las subredes generadas.

### Desglosar una Red

1. Ingresa la dirección de la red en el campo correspondiente.
2. Presiona el botón "Desglosar".
3. La tabla mostrará los datos detallados de la red.


