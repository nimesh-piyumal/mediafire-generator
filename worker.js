import * as cheerio from 'cheerio';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Root route
    if (url.pathname === '/') {
      return new Response(JSON.stringify({
        status: true,
        creator: "Nimesh Piyumal",
        response: "Mediafire Link Generator API"
      }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // API route
    if (url.pathname === '/api/generate') {
      const targetUrl = url.searchParams.get('url');

      if (!targetUrl || !targetUrl.includes('mediafire.com')) {
        return new Response(JSON.stringify({ 
          error: 'Please provide a valid Mediafire URL as the "url" query parameter.' 
        }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }

      try {
        const response = await fetch(targetUrl);
        const html = await response.text();
        const $ = cheerio.load(html);

        const downloadLink = $('#downloadButton').attr('href');
        
        if (!downloadLink) {
          return new Response(JSON.stringify({ 
            error: 'Could not find the direct download link on the provided page.' 
          }), {
            status: 404,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          });
        }

        return new Response(JSON.stringify({ 
          success: true, 
          creator: "Nimesh Piyumal",
          response: downloadLink
        }), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });

      } catch (error) {
        return new Response(JSON.stringify({ 
          error: 'Failed to fetch the Mediafire page.',
          details: error.message
        }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
    }

    // Handle 404 Not Found
    return new Response(JSON.stringify({ error: 'Not Found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
