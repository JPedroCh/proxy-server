const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy `/api` requests to the HTTP API
app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://ec2-54-91-215-149.compute-1.amazonaws.com', // Replace with the HTTP API URL
    changeOrigin: true, // Ensures the Host header is updated correctly
    pathRewrite: { '^/api': '/api' }, // Optional, depending on your API path
  })
);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
