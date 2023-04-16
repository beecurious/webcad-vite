VITE_SUPABASE_URL = "https://wraykayxfzbsgflgwhhy.supabase.co/"
VITE_SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyYXlrYXl4Znpic2dmbGd3aGh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1NzU0NDEsImV4cCI6MTk5NTE1MTQ0MX0.8bgWsHsxFMq_hZDlNgt0jjMQmsvIaCKbb5Wss3QtgwQ"


import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    {VITE_SUPABASE_URL},
  {VITE_SUPABASE_KEY}
);