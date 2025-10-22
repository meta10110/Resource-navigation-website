import React from 'react';
import ResourceCard from './ResourceCard';
import { getSiteInfo, getQuickLinks, getCategories, getTips } from '../utils/loadContent';

/**
 * 🎯 精选资源展示组件
 * 这是网站的核心区域，显示所有资源分类和资源卡片
 * 
 * 包含两个主要部分：
 * 1. 热门资源一键直达（quickLinks - 快捷链接按钮）
 * 2. 精选资源推荐（categories - 所有分类的资源卡片）
 * 
 * 数据来源：content.json 中的 quickLinks 和 categories
 */
function FeaturedResources() {
  const siteInfo = getSiteInfo();
  const quickLinks = getQuickLinks();
  const categories = getCategories();
  const tips = getTips();

  // 定义分类颜色映射
  const categoryColorMap = {
    ebooks: {
      border: 'from-blue-200 to-purple-200',
      text: 'from-blue-600 to-purple-600'
    },
    comics: {
      border: 'from-pink-200 to-purple-200',
      text: 'from-pink-600 to-purple-600'
    },
    movies: {
      border: 'from-red-200 to-orange-200',
      text: 'from-red-600 to-orange-600'
    },
    games: {
      border: 'from-green-200 to-teal-200',
      text: 'from-green-600 to-teal-600'
    },
    tools: {
      border: 'from-indigo-200 to-blue-200',
      text: 'from-indigo-600 to-blue-600'
    },
    study: {
      border: 'from-yellow-200 to-orange-200',
      text: 'from-yellow-600 to-orange-600'
    },
    navigation: {
      border: 'from-cyan-200 to-blue-200',
      text: 'from-cyan-600 to-blue-600'
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors">
      
      {/* ============================================
          📌 第一部分：热门资源一键直达
          数据来源：content.json 中的 quickLinks 数组
          ============================================ */}
      <section className="py-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors">
        <div className="container mx-auto px-6">
          
          {/* 标题区域 */}
          <div className="text-center mb-8">
            {/* 🔤 主标题
                text-3xl: 文字大小（可改为 text-2xl, text-4xl）
                font-bold: 字体粗细
            */}
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              热门资源一键直达
            </h2>
            {/* 装饰线 */}
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          {/* 📐 快捷链接网格布局
              🔧 常用修改：
              - grid-cols-2: 手机端显示列数（可改为 grid-cols-1, grid-cols-3）
              - md:grid-cols-3: 平板端显示列数
              - lg:grid-cols-5: 电脑端显示列数（可改为 lg:grid-cols-4, lg:grid-cols-6）
              - gap-4: 按钮之间的间距（可改为 gap-2, gap-6, gap-8）
          */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {quickLinks.map((link, index) => (
              <QuickLink
                key={index}
                icon={link.icon}
                title={link.title}
                href={link.href}
                highlight={link.highlight}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          📌 第二部分：精选资源推荐
          数据来源：content.json 中的 categories 对象
          ============================================ */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
        <div className="container mx-auto px-6">
          
          {/* 顶部标题区域 */}
          <div className="text-center mb-12">
            {/* 主标题 */}
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-3">
              精选资源推荐
            </h2>
            {/* 描述文字（来自 JSON） */}
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">{siteInfo.description}</p>
            {/* 收藏提示（来自 JSON） */}
            <p className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold mt-3">
              {siteInfo.bookmarkTip}
            </p>
            {/* 装饰线 */}
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full mt-4"></div>
          </div>

          {/* 🔄 动态渲染所有分类
              遍历 categories 对象中的每个分类，自动生成分类区域
              每个分类包含：分类标题 + 该分类下的所有资源卡片
          */}
          {Object.entries(categories).map(([categoryId, category]) => {
            const colors = categoryColorMap[categoryId] || categoryColorMap.ebooks;
            
            return (
              /* 单个分类区域
                 id={categoryId}: 用于锚点跳转（如 #ebooks）
                 mb-12: 分类之间的间距
              */
              <div key={categoryId} id={categoryId} className="mb-12">
                
                {/* 🏷️ 分类标题栏
                    🔧 常用修改：
                    - mb-6: 标题与卡片的间距（可改为 mb-4, mb-8）
                    - pb-2: 标题底部内边距
                    - border-b-2: 底部边框粗细（可改为 border-b, border-b-4）
                */}
                <div className={`flex items-center mb-6 pb-2 border-b-2 border-gradient-to-r ${colors.border}`}>
                  
                  {/* 📌 分类图标
                      text-3xl: 图标大小（可改为 text-2xl, text-4xl）
                      mr-2: 图标与标题间距
                  */}
                  <span className="text-3xl mr-2">{category.icon}</span>
                  
                  {/* 📝 分类名称
                      text-2xl: 文字大小（可改为 text-xl, text-3xl）
                      font-bold: 字体粗细
                  */}
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${colors.text} bg-clip-text text-transparent`}>
                    {category.name}
                  </h3>
          </div>

                {/* 📐 资源卡片网格布局
                    🔧 常用修改：
                    - grid-cols-1: 手机端显示 1 列
                    - md:grid-cols-2: 平板端显示 2 列
                    - lg:grid-cols-4: 电脑端显示 4 列（可改为 lg:grid-cols-3, lg:grid-cols-5）
                    - gap-4: 卡片之间的间距（可改为 gap-3, gap-6）
                */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.resources && category.resources.map((resource, index) => (
              <ResourceCard
                      key={index}
                      category={categoryId}
                      icon={resource.icon}
                      title={resource.title}
                      subtitle={resource.subtitle}
                      description={resource.description}
                      buttons={resource.buttons}
                    />
                  ))}
            </div>
          </div>
            );
          })}

      </div>
    </section>
    </div>
  );
}

/**
 * 🔘 快捷链接按钮组件
 * 显示在"热门资源一键直达"区域的单个按钮
 * 
 * Props 参数：
 * @param {string} icon - 图标（emoji）
 * @param {string} title - 按钮文字
 * @param {string} href - 跳转链接
 * @param {boolean} highlight - 是否高亮显示（橙红色渐变）
 */
function QuickLink({ icon, title, href, highlight }) {
  return (
    /* 🔘 快捷链接按钮
       🔧 常用修改（在 className 中查找对应类名）：
       
       📏 尺寸相关：
       - p-4: 按钮内边距（可改为 p-3, p-5, p-6）
       - rounded-2xl: 圆角大小（可改为 rounded-xl, rounded-3xl）
       
       📝 文字相关：
       - text-sm: 文字大小（可改为 text-xs, text-base, text-lg）【在下面的 span 中】
       - font-semibold: 字体粗细（可改为 font-medium, font-bold）【在下面的 span 中】
       
       🎨 图标相关：
       - text-3xl: 图标大小（可改为 text-2xl, text-4xl）【在下面的第一个 span 中】
       
       ✨ 动画效果：
       - hover:-translate-y-2: 鼠标悬停上浮高度（可改为 -translate-y-1, -translate-y-3）
       - hover:shadow-2xl: 悬停阴影大小（可改为 hover:shadow-xl）
       - shadow-lg: 初始阴影（可改为 shadow-md, shadow-xl）
       
       🎨 颜色：
       - highlight=true 时：橙红渐变背景，白色文字（主要推荐）
       - highlight=false 时：白色背景，灰色文字，悬停蓝紫色（普通链接）
    */
    <a
      href={href}
      className={`group flex items-center p-4 rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
        highlight 
          ? 'bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white' 
          : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-600'
      }`}
    >
      {/* 📌 图标
          text-3xl: 图标大小（可改为 text-2xl, text-4xl, text-5xl）
          mr-3: 图标与文字间距
          hover:scale-110: 鼠标悬停放大效果
      */}
      <span className="text-3xl mr-3 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      
      {/* 📝 按钮文字
          text-sm: 文字大小（可改为 text-xs, text-base, text-lg）
          font-semibold: 字体粗细（可改为 font-medium, font-bold）
      */}
      <span className={`text-sm font-semibold ${
        highlight 
          ? 'text-white' 
          : 'text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400'
      }`}>
        {title}
      </span>
    </a>
  );
}

export default FeaturedResources;
