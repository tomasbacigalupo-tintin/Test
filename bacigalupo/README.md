# Bacigalupo React Demo

Proyecto de ejemplo creado con Vite para mostrar una posible integración con Airtable.

## Instalación

```bash
npm install
npm run dev
```

## Variables de entorno

Copiar el archivo `.env.example` a `.env` y completar los valores:

```
VITE_AIRTABLE_API_KEY=tu_api_key
VITE_AIRTABLE_BASE_ID=tu_base_id
VITE_AIRTABLE_TABLE_NAME=Cars
```

## Uso de Airtable

En `src/api/airtable.js` se definen funciones para leer y escribir registros en Airtable.
El componente `AirtableDemo` muestra los registros de la tabla y permite agregar nuevos modelos.

