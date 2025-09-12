// Test script to verify Supabase connection
// Run with: node test-supabase.js

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables:');
  console.error('NEXT_PUBLIC_SUPABASE_URL:', !!supabaseUrl);
  console.error('NEXT_PUBLIC_SUPABASE_ANON_KEY:', !!supabaseAnonKey);
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testSupabase() {
  console.log('Testing Supabase connection...');
  console.log('URL:', supabaseUrl);
  
  try {
    // Test basic connection
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .limit(1);
    
    if (error) {
      console.error('Supabase error:', error.message);
      console.error('Error details:', error);
    } else {
      console.log('✅ Supabase connection successful');
      console.log('Sample data:', data);
    }
    
    // Test insert
    console.log('\nTesting insert...');
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Submission',
      message: 'This is a test message',
      created_at: new Date().toISOString()
    };
    
    const { data: insertData, error: insertError } = await supabase
      .from('contact_submissions')
      .insert([testData])
      .select();
    
    if (insertError) {
      console.error('Insert error:', insertError.message);
    } else {
      console.log('✅ Insert successful:', insertData);
    }
    
  } catch (error) {
    console.error('Connection failed:', error);
  }
}

testSupabase();