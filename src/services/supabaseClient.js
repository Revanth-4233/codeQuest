// Supabase Configuration
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wpxailicdksstndygdtg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndweGFpbGljZGtzc3RuZHlnZHRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY0NjI2MTksImV4cCI6MjA4MjAzODYxOX0.K8dp_q2Wz-97H_5f_BWEebctP1_R0RjN2KHQdrjfFm8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;