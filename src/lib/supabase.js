import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Create a dummy client if env vars are missing (for deployment preview)
const hasValidConfig = supabaseUrl && supabaseAnonKey

export const supabase = hasValidConfig 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export const isSupabaseConfigured = hasValidConfig
