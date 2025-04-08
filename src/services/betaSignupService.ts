import { supabase } from '../lib/supabase'

export interface BetaSignup {
  email: string
  name?: string
  createdAt?: string
}

export const addBetaSignup = async (signup: BetaSignup) => {
  const { data, error } = await supabase
    .from('beta_signups')
    .insert([signup])
    .select()

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const getBetaSignups = async () => {
  const { data, error } = await supabase
    .from('beta_signups')
    .select('*')
    .order('createdAt', { ascending: false })

  if (error) {
    throw new Error(error.message)
  }

  return data
} 