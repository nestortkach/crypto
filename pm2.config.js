module.exports = {
  apps: [
    {
      name: 'nowguardarian-static-front',
      cwd: __dirname,
      script: 'server.js',
      merge_logs: true,
      log_type: 'json',
      interpreter: 'node14',
    },
  ],
};
