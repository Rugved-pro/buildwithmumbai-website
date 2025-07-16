import { createServer } from 'vite';

const PORT = process.env.PORT || 3000;

async function startServer() {
  // Get the Replit domain from environment variables if available
  const replitDomain = process.env.REPL_SLUG && process.env.REPL_OWNER 
    ? `${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`
    : null;
  
  const allowedHosts = ['localhost', '127.0.0.1', '0.0.0.0'];
  if (replitDomain) {
    allowedHosts.push(replitDomain);
  }
  // Add current Replit domain pattern
  allowedHosts.push('.spock.replit.dev');
  
  console.log('Allowed hosts:', allowedHosts);
  
  const vite = await createServer({
    server: {
      port: parseInt(PORT.toString()),
      host: '0.0.0.0',
      allowedHosts: allowedHosts
    },
    configFile: false,  // Override config file to ensure our settings take precedence
    root: './client',
    plugins: [
      (await import('@vitejs/plugin-react')).default(),
      (await import('@replit/vite-plugin-runtime-error-modal')).default()
    ],
    resolve: {
      alias: {
        '@': '/home/runner/workspace/client/src',
        '@shared': '/home/runner/workspace/shared',
        '@assets': '/home/runner/workspace/attached_assets'
      }
    }
  });

  await vite.listen();
  console.log(`Vite server running on http://0.0.0.0:${PORT}`);
}

startServer().catch(console.error);