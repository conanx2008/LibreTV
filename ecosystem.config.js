/**
 * pm2 启动脚本
 * 生产环境启动命令
 * pm2 restart ecosystem.config.js --env production
 */
module.exports = {
  apps : [{
    name: "LibreTV",
    script: "server.mjs",
    out_file: "./logs/LibreTV.log",         //正常日志
    error_file: "./logs/LibreTV-err.log",   //错误日志
    merge_logs: true,
    // 指定日志文件的时间格式
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    exec_mode: 'cluster',
    instances: 1,
    autorestart: true,
    watch: false
  }]
};
