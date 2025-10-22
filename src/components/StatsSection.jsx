import React from 'react';
import { getStats } from '../utils/loadContent';

/**
 * 📊 统计数据展示区域组件
 * 显示网站的统计信息（资源总数、用户访问等）
 * 数据来源：content.json 中的 stats 数组
 */
function StatsSection() {
  const stats = getStats();

  return (
    // 🎨 整体容器
    // py-12: 上下内边距（调整整个区域的高度）
    <section className="py-12 bg-white dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6">
        
        {/* 📐 统计卡片网格布局
            grid-cols-2: 手机端显示 2 列
            md:grid-cols-4: 平板/电脑端显示 4 列
            gap-4: 卡片之间的间距（可改为 gap-6, gap-8 等）
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            
            /* 📦 单个统计卡片
               🔧 常用修改：
               - rounded-2xl: 圆角大小（可改为 rounded-lg, rounded-3xl）
               - p-6: 卡片内边距（可改为 p-4, p-8）
               - hover:scale-105: 鼠标悬停放大效果（可改为 hover:scale-110）
               - shadow-md: 阴影大小（可改为 shadow-sm, shadow-lg, shadow-xl）
            */
            <div
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              {/* 鼠标悬停时的彩色背景效果 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* 卡片内容区域 */}
              <div className="relative z-10">
                
                {/* 📌 图标
                    text-4xl: 图标大小（可改为 text-3xl, text-5xl, text-6xl）
                    mb-2: 图标与数字的间距
                */}
                <div className="text-4xl mb-2">{stat.icon}</div>
                
                {/* 🔢 数字
                    text-3xl: 数字大小（可改为 text-2xl, text-4xl, text-5xl）
                    font-bold: 字体粗细（可改为 font-semibold, font-extrabold）
                    mb-1: 数字与标签的间距
                */}
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                
                {/* 📝 标签文字
                    text-sm: 文字大小（可改为 text-xs, text-base）
                    font-medium: 字体粗细
                */}
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;

