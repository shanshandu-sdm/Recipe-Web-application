import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
// 用户身份验证和授权功能创建express 路由器
const router = express.Router();// 创建路由器实例
export {router as userRouter};//导出器导出，名字为userRouter，以便其他文件访问
