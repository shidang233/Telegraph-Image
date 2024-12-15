import Link from 'next/link';

export default function Footer() {
  const translateY10Percent = {
    transform: 'translateY(-25%)'
  };

  return (
    <footer className="w-full h-1/8 text-center bg-slate-200 flex flex-col justify-center items-center" style={translateY10Percent}>
      <div>
        {/* 与反馈链接 */}
        <p style={{ marginBottom: '0.1rem', textAlign: 'center' }}>
          <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>闲聊与反馈：</span>
          <a href="https://t.me/yunshuangimg" style={{ marginLeft: '0.5rem', color: '#4a90e2', textDecoration: 'underline', fontSize: '0.875rem' }} target="_blank" rel="noopener noreferrer">点击跳转TG</a>
        </p>
        {/* 友情链接部分 */}
        <p style={{ color: 'red', fontSize: '1rem', marginBottom: '0.1rem', marginTop: '0.1rem' }}>
          友情链接：
          <Link 
            href="http;//jzrxh.work"
            style={{ color: 'red', textDecoration: 'none', fontWeight: 'bold', fontSize: '1rem' }} // 调整字体大小
            target="_blank"
            rel="noopener noreferrer"
          >enderLuoxh博客</Link>
        </p>
        {/* 版权声明部分 */}
        <p style={{ color: '#6b7280', fontSize: '0.75rem', marginTop: '0.1rem' }}>
          Copyright Ⓒ 2024 All rights reserved. 请勿上传违反中国法律的图片，违者后果自负。 本程序基于Cloudflare Pages。开源于
          <span style={{ marginLeft: '0.5rem', color: '#4a90e2' }}><Link href="https://github.com/x-dr/telegraph-Image" target="_blank" rel="noopener noreferrer">GitHub Telegraph-Image</Link></span>
        </p>
      </div>
    </footer>
  );
}
