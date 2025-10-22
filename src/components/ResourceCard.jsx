import React from 'react';

/**
 * 📦 资源卡片组件
 * 显示单个资源的详细信息（标题、描述、按钮等）
 * 
 * Props 参数：
 * @param {string} icon - 资源图标（emoji）
 * @param {string} title - 资源标题
 * @param {string} subtitle - 资源副标题
 * @param {string} description - 资源描述
 * @param {array} buttons - 按钮数组
 * @param {string} category - 所属分类（用于配色）
 */
function ResourceCard({ icon, title, subtitle, description, buttons, category }) {
  // 为不同分类定义专属配色
  const categoryColors = {
    ebooks: {
      border: 'hover:border-emerald-300 dark:hover:border-emerald-600',
      glow: 'group-hover:shadow-emerald-200/50 dark:group-hover:shadow-emerald-900/50',
      title: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400'
    },
    comics: {
      border: 'hover:border-violet-300 dark:hover:border-violet-600',
      glow: 'group-hover:shadow-violet-200/50 dark:group-hover:shadow-violet-900/50',
      title: 'group-hover:text-violet-600 dark:group-hover:text-violet-400'
    },
    movies: {
      border: 'hover:border-rose-300 dark:hover:border-rose-600',
      glow: 'group-hover:shadow-rose-200/50 dark:group-hover:shadow-rose-900/50',
      title: 'group-hover:text-rose-600 dark:group-hover:text-rose-400'
    },
    games: {
      border: 'hover:border-cyan-300 dark:hover:border-cyan-600',
      glow: 'group-hover:shadow-cyan-200/50 dark:group-hover:shadow-cyan-900/50',
      title: 'group-hover:text-cyan-600 dark:group-hover:text-cyan-400'
    },
    tools: {
      border: 'hover:border-indigo-300 dark:hover:border-indigo-600',
      glow: 'group-hover:shadow-indigo-200/50 dark:group-hover:shadow-indigo-900/50',
      title: 'group-hover:text-indigo-600 dark:group-hover:text-indigo-400'
    },
    study: {
      border: 'hover:border-amber-300 dark:hover:border-amber-600',
      glow: 'group-hover:shadow-amber-200/50 dark:group-hover:shadow-amber-900/50',
      title: 'group-hover:text-amber-600 dark:group-hover:text-amber-400'
    },
    navigation: {
      border: 'hover:border-sky-300 dark:hover:border-sky-600',
      glow: 'group-hover:shadow-sky-200/50 dark:group-hover:shadow-sky-900/50',
      title: 'group-hover:text-sky-600 dark:group-hover:text-sky-400'
    }
  };

  const colors = categoryColors[category] || categoryColors.ebooks;

  return (
    /* 🎴 资源卡片容器
       🔧 常用修改：
       - rounded-2xl: 圆角大小（可改为 rounded-lg, rounded-xl, rounded-3xl）
       - p-4: 卡片内边距（可改为 p-3, p-5, p-6）
       - hover:-translate-y-1: 鼠标悬停上浮效果（可改为 -translate-y-2）
       - shadow-sm: 初始阴影（可改为 shadow, shadow-md）
       - hover:shadow-2xl: 悬停阴影（可改为 hover:shadow-xl）
    */
    <div className={`group relative bg-white dark:bg-gray-800/80 rounded-2xl shadow-sm hover:shadow-2xl ${colors.glow} transition-all duration-300 p-4 border border-gray-200/60 dark:border-gray-700/60 ${colors.border} transform hover:-translate-y-1 flex flex-col h-full overflow-hidden`}>
      {/* 鼠标悬停时的背景光晕效果 */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 dark:to-gray-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      
      {/* 卡片内容区域 */}
      <div className="relative z-10 flex flex-col h-full">
        
        {/* 📋 顶部区域：图标 + 标题 + 副标题 */}
        <div className="flex items-start mb-2">
          
          {/* 📌 图标
              text-2xl: 图标大小（可改为 text-xl, text-3xl）
              mr-2: 图标与文字间距
              hover:scale-110: 悬停放大效果
          */}
          {icon && (
            <div className="text-2xl mr-2 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          )}
          
          {/* 标题和副标题容器 */}
          <div className="flex-1 min-w-0">
            
            {/* 📝 主标题
                text-base: 文字大小（可改为 text-sm, text-lg）
                font-bold: 字体粗细（可改为 font-semibold, font-extrabold）
                line-clamp-1: 单行显示，超出显示省略号
            */}
            <h3 className={`text-base font-bold text-gray-900 dark:text-white mb-1 ${colors.title} transition-colors line-clamp-1`}>
              {title}
            </h3>
            
            {/* 📝 副标题
                text-xs: 文字大小（可改为 text-sm）
                line-clamp-1: 单行显示
            */}
            {subtitle && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-medium line-clamp-1">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        
        {/* 📄 描述文字
            text-xs: 文字大小（可改为 text-sm）
            mb-3: 与按钮的间距
            line-clamp-2: 最多显示 2 行（可改为 line-clamp-3）
            leading-relaxed: 行高（可改为 leading-normal, leading-loose）
        */}
        {description && (
          <p className="text-gray-600 dark:text-gray-300 text-xs mb-3 leading-relaxed line-clamp-2 flex-grow">
            {description}
          </p>
        )}
        
        {/* 🔘 按钮区域
            gap-1.5: 按钮之间的间距（可改为 gap-2, gap-3）
            justify-end: 按钮靠右对齐（可改为 justify-center, justify-start）
        */}
        <div className="flex flex-wrap gap-1.5 justify-end mt-auto">
          {buttons && buttons.map((btn, index) => (
            
            /* 🔘 单个按钮
               🔧 常用修改：
               - px-3 py-1.5: 按钮内边距（可改为 px-4 py-2）
               - rounded-lg: 圆角大小（可改为 rounded-md, rounded-xl）
               - text-xs: 文字大小（可改为 text-sm）
               - hover:scale-105: 悬停放大效果（可改为 hover:scale-110）
               
               primary 按钮（绿色渐变）：主要操作按钮
               非 primary 按钮（灰色）：次要操作按钮
            */
            <a
              key={index}
              href={btn.href}
              className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 transform hover:scale-105 ${
                btn.primary 
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-600 dark:to-cyan-600 text-white hover:from-emerald-600 hover:to-cyan-600 shadow-md hover:shadow-lg' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 shadow-sm'
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {btn.icon && <span className="mr-1">{btn.icon}</span>}
              {btn.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResourceCard;

