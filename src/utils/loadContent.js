// 加载内容配置文件
import contentData from '../data/content.json';

export const getContent = () => {
  return contentData;
};

export const getSiteInfo = () => {
  return contentData.site;
};

export const getStats = () => {
  return contentData.stats;
};

export const getQuickLinks = () => {
  return contentData.quickLinks;
};

export const getCategories = () => {
  return contentData.categories;
};

export const getCategoryResources = (categoryId) => {
  return contentData.categories[categoryId]?.resources || [];
};

export const getFooter = () => {
  return contentData.footer;
};

export const getTips = () => {
  return contentData.tips;
};


