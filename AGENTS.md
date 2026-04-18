# AGENTS.md

## Objetivo
Implementar el loging con supabase respetando las normas aqui definidas. Considera que en el archivo .env tengo las dos claves que necesita el frontend para comunicarse con supabase.


1. Flujo de autenticación

El frontend NO habla con la tabla users para login.

Siempre:

Login → supabase.auth.signInWithPassword
Obtener sesión
Obtener perfil desde public.users

- Flujo completo correcto:
Usuario ingresa email + password
        ↓
Supabase Auth valida credenciales
        ↓
Devuelve sesión (JWT)
        ↓
Frontend obtiene user.id
        ↓
Consulta tabla public.users
        ↓
Obtiene perfil (nombre, rol, etc.)


2. Control de acceso

El frontend debe validar:

if (!profile.is_active) {
  // bloquear acceso
}


2.1. Actualización de last_login_at

Después del login exitoso:

await supabase
  .from('users')
  .update({ last_login_at: new Date().toISOString() })
  .eq('id', userId);

2.2. Manejo de errores (clave)

Debes diferenciar:
❌ Credenciales inválidas
❌ Usuario inexistente
❌ Usuario deshabilitado (is_active = false)
❌ Error de red
Nunca mostrar mensajes ambiguos tipo “algo falló”.


2.3. Seguridad (aunque sea interno)

Debes cumplir:

Nunca loguear contraseñas
Nunca almacenar password en estado global
Usar siempre el cliente oficial de Supabase
No construir lógica de auth propia

2.4. Logout
await supabase.auth.signOut();

2.5. Protección de rutas

Debe existir un guard:

if (!session) {
  redirect('/login');
}


3. Errores típicos a evitar (importante)

Evitar explícitamente:
❌ Usar users para autenticar
❌ Duplicar lógica de auth
❌ No validar is_active
❌ No manejar sesión persistente
❌ Hacer queries sin filtrar por id

