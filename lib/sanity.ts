import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

// Sanity schema types would be defined here
// This is a placeholder for the CMS integration

export async function getExperiences() {
  // Query experiences from Sanity
  // This would be implemented with GROQ queries
  return []
}

export async function getBlogPosts() {
  // Query blog posts from Sanity
  return []
}

export async function getElders() {
  // Query elder profiles from Sanity
  return []
}

