import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://awpkbhryriuosfbxwmsr.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3cGtiaHJ5cml1b3NmYnh3bXNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0OTc2NTgsImV4cCI6MjA4OTA3MzY1OH0.4okqPuaCtOW3JAr58Pu3AVc9FXZEBTehbomi_h-ClSg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
