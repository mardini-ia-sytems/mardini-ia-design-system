# Component Patterns — Mardini IA

## Button (Primary CTA)
```jsx
<button className="
  bg-gradient-to-r from-blue-600 to-blue-500
  hover:from-blue-500 hover:to-blue-400
  text-white font-bold
  px-6 sm:px-10 py-3 sm:py-4
  text-base sm:text-xl
  rounded-xl
  shadow-2xl shadow-blue-500/30
  hover:shadow-blue-500/50
  hover:scale-[1.02]
  transition-all duration-300
">
  CTA
</button>
```

## Card (Standard)
```jsx
<div className="
  relative
  bg-gradient-to-br from-gray-900/80 to-gray-800/50
  backdrop-blur-sm
  border border-gray-800/50
  rounded-2xl p-6 sm:p-8
  hover:border-gray-700/50
  hover:shadow-lg hover:shadow-blue-500/10
  transition-all duration-300
  overflow-hidden
">
  {/* content */}
</div>
```

## Badge
```jsx
<div className="
  inline-flex items-center gap-2
  px-4 py-2
  bg-blue-500/10 border border-blue-500/20
  rounded-full
  text-blue-400 text-sm font-medium
">
  <Icon className="w-4 h-4" /> Badge text
</div>
```

## Section (Standard)
```jsx
<section className="relative py-16 sm:py-24 lg:py-28 overflow-hidden">
  {/* blob decorativo */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* content */}
  </div>
</section>
```

## Icon Container
```jsx
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
  <Icon className="w-6 h-6 text-white" />
</div>
```

## Gradient Text
```jsx
<span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
  palabra clave
</span>
```

## Glass Panel
```jsx
<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
  {/* content */}
</div>
```

## Gradient Blob (decorativo)
```jsx
<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
```

## Grids responsive
```jsx
// 2 columnas
<div className="grid sm:grid-cols-2 gap-6 lg:gap-8"> … </div>

// 3 columnas
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"> … </div>

// 4 columnas (2 en mobile)
<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"> … </div>
```
