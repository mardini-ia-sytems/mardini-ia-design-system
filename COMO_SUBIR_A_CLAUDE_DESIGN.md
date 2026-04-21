# Cómo subir este design system a Claude Design

## Opción A — GitHub (recomendada, el más completo)

### Paso 1: Crear repo en GitHub
1. Ve a https://github.com/new
2. Nombre: `mardini-ia-design-system`
3. Visibilidad: **Public** (Claude Design requiere repo público para leer el código)
4. NO marques "Initialize with README" (ya tenemos uno)
5. Clic en **Create repository**

### Paso 2: Subir la carpeta desde tu terminal
```bash
cd C:\Users\jhony\Desktop\Agentic_hub\.tmp\mardini-design-system

git init
git add .
git commit -m "feat: initial Mardini IA design system"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/mardini-ia-design-system.git
git push -u origin main
```
> Reemplaza `TU_USUARIO` con tu usuario de GitHub.

### Paso 3: Cargar en Claude Design
1. Ve a https://claude.ai/design
2. En **"Company name and blurb"** escribe:
   ```
   Mardini IA: agencia de automatización con IA para PyMEs latinoamericanas.
   Stack: React 18 + Tailwind CSS + Framer Motion. Dark theme exclusivo.
   ```
3. En **"Link code on GitHub"** pega:
   ```
   https://github.com/TU_USUARIO/mardini-ia-design-system
   ```
4. Clic en **Add**
5. En **"Any other notes?"** agrega:
   ```
   Dark theme exclusivo (#0a0a0f base). Primario: azul #3b82f6.
   Glassmorphism + glow effects. 4 gradientes de categoría:
   ingresos (verde), costos (amarillo), tiempo (azul/cyan), premium (púrpura/rosa).
   Framer Motion para animaciones. WCAG AA en todos los colores.
   ```
6. Clic en **Continue to generation**

---

## Opción B — Carpeta local (más rápido, sin GitHub)

1. Ve a https://claude.ai/design
2. En **"Link code from your computer"** → **browse**
3. Navega a: `C:\Users\jhony\Desktop\Agentic_hub\.tmp\mardini-design-system`
4. Selecciona la carpeta completa (o arrastra)
5. Completa los campos de texto igual que la Opción A
6. Clic en **Continue to generation**

---

## Qué archivos cargará Claude Design y para qué sirve cada uno

| Archivo | Para qué lo usa Claude |
|---------|------------------------|
| `README.md` | Identidad de marca y stack |
| `tokens/colors.json` | Paleta de colores como referencia estructurada |
| `tokens/typography.json` | Escala tipográfica y fuentes |
| `tokens/spacing-shadows.json` | Espaciado, radios, sombras y transiciones |
| `styles/index.css` | Variables CSS reales + animaciones keyframe |
| `styles/tailwind.config.js` | Extensiones de Tailwind con colores y shadows custom |
| `components/Button.jsx` | Patrón de botón con variantes |
| `components/Card.jsx` | Patrón de card + variante accent |
| `components/Badge.jsx` | Patrón de badge con variantes de color |
| `components/Section.jsx` | Wrapper de sección con blobs opcionales |
| `components/animations/Meteors.jsx` | Efecto de partículas decorativas |
| `components/animations/GlowingEffect.jsx` | Borde con glow interactivo por mouse |
| `specs/color_palette.md` | Reglas de uso de colores |
| `specs/components.md` | Snippets JSX de todos los patrones |

---

## Resultado esperado

Con esto cargado, Claude Design tendrá contexto completo para:
- Generar componentes nuevos que respetan la paleta dark de Mardini
- Usar los gradientes correctos por categoría de negocio
- Aplicar los patrones de glassmorphism, glow y animaciones existentes
- Respetar la tipografía Inter + escala de espaciado Tailwind
