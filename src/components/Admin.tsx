import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 检查是否是本地环境
const isLocalEnvironment = (): boolean => {
  const hostname = window.location.hostname;
  return (
    hostname === 'localhost' ||
    hostname === '127.0.0.1'
  );
};

const Admin = () => {
  const navigate = useNavigate();
  const [isLocal, setIsLocal] = useState<boolean | null>(null);

  useEffect(() => {
    const local = isLocalEnvironment();
    setIsLocal(local);

    if (!local) {
      // 如果不是本地环境，重定向到首页
      navigate('/', { replace: true });
    }
  }, [navigate]);

  // 在检查完成前不渲染任何内容
  if (isLocal === null || !isLocal) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col gradient-bg-elegant font-sans">
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">管理后台</h1>
          <p className="text-gray-600 mb-6">
            欢迎来到管理后台。此页面仅在本地环境可访问。
          </p>

          <div className="space-y-4">
            <div className="border-t pt-4">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">功能区域</h2>
              <p className="text-gray-500">管理功能将在此处添加...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

