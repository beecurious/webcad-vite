export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          code: string | null
          created_at: string | null
          id: number
          name: string | null
          uid: string
        }
        Insert: {
          code?: string | null
          created_at?: string | null
          id?: number
          name?: string | null
          uid: string
        }
        Update: {
          code?: string | null
          created_at?: string | null
          id?: number
          name?: string | null
          uid?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
