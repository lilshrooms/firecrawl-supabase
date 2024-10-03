// firecrawl.js
import Firecrawl from 'firecrawl';
import dotenv from 'dotenv';
import supabase from './supabaseClient';

// Load environment variables
dotenv.config();

const firecrawlApiKey = process.env.FIRECRAWL_API_KEY;

const firecrawl = new Firecrawl({
  apiKey: firecrawlApiKey,
  // Other Firecrawl configuration
});

firecrawl.on('data', async (data) => {
  // Store data in Supabase
  const { error } = await supabase
    .from('your_table_name')
    .insert(data);

  if (error) {
    console.error('Error inserting data:', error);
  } else {
    console.log('Data inserted successfully');
  }
});

firecrawl.start();