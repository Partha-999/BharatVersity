
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://skrlfcaanlexptgjekft.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrcmxmY2FhbmxleHB0Z2pla2Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxNzMxMzMsImV4cCI6MjA2MTc0OTEzM30.O-gcyqrjPYAvfsDcsPqmKJoqe2HPy1UXCbC3UEi8HkA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
