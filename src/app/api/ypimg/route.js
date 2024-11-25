// pages/api/upload.js
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import FormData from 'form-data';
import { v2 as cloudinary } from 'cloudinary';

// 配置 Cloudinary（如果需要）
cloudinary.config({
  cloud_name: 'your_cloud_name',
  api_key: 'your_api_key',
  api_secret: 'your_api_secret',
});

export default async function upload(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { file, key } = req.body;

  if (!file || !key) {
    return res.status(400).json({ error: 'Missing file or key' });
  }

  // 使用 FormData 构建请求体
  const formData = new FormData();
  formData.append('file', file);
  formData.append('key', key);

  try {
    // 发送请求到图片上传API
    const response = await axios.post('https://img.ypshidifu.cn/api/upload', formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

    // 处理响应
    if (response.data.code === '200') {
      return res.status(200).json(response.data);
    } else {
      return res.status(400).json({ error: response.data.msg });
    }
  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
}
