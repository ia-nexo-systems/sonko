# BLOQUE A — Instrucciones manuales para Olga
## Desbloquear Google Ads — profesorsonko.com
## Fecha: 2026-04-06

---

## PASO 1 — Crear propiedad GA4

1. Ve a https://analytics.google.com
2. Haz clic en **Admin** (rueda dentada abajo a la izquierda)
3. Haz clic en **Create Property**
4. Nombre: **Profesor SONKO**
5. Zona horaria: **Espana**
6. Moneda: **EUR**
7. Haz clic en **Next**
8. Selecciona **Web** como plataforma
9. URL: **profesorsonko.com** (https)
10. Nombre del stream: **profesorsonko.com**
11. Haz clic en **Create stream**
12. Anota el **MEASUREMENT ID** (formato G-XXXXXXXXXX)

---

## PASO 2 — Crear contenedor GTM

1. Ve a https://tagmanager.google.com
2. Haz clic en **Create Account**
3. Account name: **IA Nexo Systems**
4. Country: **Spain**
5. Container name: **profesorsonko.com**
6. Target platform: **Web**
7. Haz clic en **Create**
8. Acepta los terminos
9. Anota el **GTM ID** (formato GTM-XXXXXXX)

---

## PASO 3 — Sustituir IDs en el codigo

Abre este archivo en VS Code:
```
C:\Users\Olga\Proyectos\IA_NEXO_SYSTEMS_2026\ia-nexo-systems\04_CLIENTES\CL-006_SONKO\05_WEB_LANDING\index.html
```

Busca `GTM-XXXXXXX` (aparece 2 veces) y reemplaza por tu GTM ID real.

Abre este archivo:
```
C:\Users\Olga\Proyectos\IA_NEXO_SYSTEMS_2026\ia-nexo-systems\04_CLIENTES\CL-006_SONKO\05_WEB_LANDING\src\klaro-config.js
```

Busca `GA_MEASUREMENT_ID` (aparece 2 veces) y reemplaza por tu G-XXXXXXXXXX real.

---

## PASO 4 — Configurar GA4 en GTM

1. En GTM, ve a **Tags** → **New**
2. Nombre: **GA4 Configuration**
3. Tag type: **Google Analytics: GA4 Configuration**
4. Measurement ID: **G-XXXXXXXXXX** (tu ID real)
5. Trigger: **All Pages**
6. Haz clic en **Save**

---

## PASO 5 — Configurar evento de conversion en GTM

1. En GTM, ve a **Tags** → **New**
2. Nombre: **Lead Form Submit**
3. Tag type: **Google Analytics: GA4 Event**
4. Configuration tag: selecciona **GA4 Configuration** (del paso anterior)
5. Event name: **lead_form_submit**
6. Haz clic en **Save**

7. Ve a **Triggers** → **New**
8. Nombre: **Lead Form Submit Trigger**
9. Trigger type: **Custom Event**
10. Event name: **lead_form_submit**
11. Haz clic en **Save**

12. Vuelve al tag **Lead Form Submit** → asigna el trigger que acabas de crear
13. Haz clic en **Save**

---

## PASO 6 — Configurar conversion Google Ads en GTM

1. En GTM, ve a **Tags** → **New**
2. Nombre: **Google Ads Conversion**
3. Tag type: **Google Ads Conversion Tracking**
4. Conversion ID: (obtenerlo de Google Ads → Tools → Conversions)
5. Conversion Label: (obtenerlo de Google Ads)
6. Trigger: selecciona **Lead Form Submit Trigger**
7. Haz clic en **Save**

---

## PASO 7 — Publicar GTM

1. En GTM, haz clic en **Submit** (arriba a la derecha)
2. Version name: **v1 — GA4 + Lead conversion**
3. Haz clic en **Publish**

---

## PASO 8 — Verificar en modo Preview

1. En GTM, haz clic en **Preview** (arriba a la derecha)
2. Introduce la URL: **https://profesorsonko.com**
3. Verifica que los tags GA4 y Conversion estan disparando
4. Rellena el formulario y verifica que el evento **lead_form_submit** aparece
5. Ve a Google Analytics → Realtime → verifica que hay eventos

---

## PASO 9 — Aplicar bono 400 EUR

1. Ve a Google Ads → cuenta 952-032-6841
2. Settings → Billing → Promotional codes
3. Introduce el codigo del bono
4. IMPORTANTE: el bono se debe gastar en los primeros 14 dias

---

## PASO 10 — Commit y deploy

Cuando estes lista con los IDs reales, dile a Claude Code:
"Commit y push SONKO con los IDs de GTM y GA4"

El deploy a Cloudflare Pages es automatico tras el push.

---

## CHECKLIST ANTES DE ACTIVAR ADS

- [ ] meta robots: index,follow en produccion
- [ ] Politica de privacidad accesible en /privacidad
- [ ] Banner cookies aparece en primera visita
- [ ] GA4 recibe eventos en tiempo real
- [ ] GTM preview muestra tags disparando
- [ ] Evento lead_form_submit llega a GTM
- [ ] Google Ads conversion tracking activo
- [ ] Landing no tiene promesas garantizadas
- [ ] Texto moderado compatible con politicas Ads
- [ ] Bono 400 EUR aplicado en cuenta 952-032-6841
