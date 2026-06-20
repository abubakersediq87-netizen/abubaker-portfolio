import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Product } from '../data/productsData'
import { useLanguage } from '../contexts/LanguageContext'
import Modal from './ui/Modal'
import Button from './ui/Button'

interface ProductCardProps {
  product: Product
  index: number
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
      >
        <div className={`h-48 bg-gradient-to-r ${product.bgGradient} flex items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
          <i className={`${product.icon} text-white text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300`}></i>
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-white text-xs font-semibold">
            New
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
            {t(product.titleKey)}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
            {t(product.descKey)}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {product.category.map((cat) => (
              <span key={cat} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-400">
                {t(`products.${cat}`)}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#3a86ff] to-[#ff006e] bg-clip-text text-transparent">
              {product.price}
            </span>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2 bg-gradient-to-r from-[#3a86ff] to-[#ff006e] text-white rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-md"
            >
              <i className="fas fa-eye mr-2"></i>
              {t('products.more')}
            </button>
          </div>
        </div>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t(product.titleKey)}
        footer={
          <div className="flex gap-3">
            <button onClick={() => setIsModalOpen(false)} className="px-5 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
              {t('modal.close')}
            </button>
            <button className="px-5 py-2 bg-gradient-to-r from-[#3a86ff] to-[#ff006e] text-white rounded-full font-semibold hover:scale-105 transition-all">
              <i className="fas fa-shopping-cart mr-2"></i>
              {t('modal.contact')}
            </button>
          </div>
        }
      >
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">{t(product.descKey)}</p>
          
          <div>
            <h4 className="font-bold mb-3 text-[#3a86ff] flex items-center gap-2">
              <i className="fas fa-list-check"></i> {t('modal.features')}
            </h4>
            <ul className="space-y-2">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                  <i className="fas fa-check-circle text-[#3a86ff] text-xs mt-1"></i>
                  <span>{t(feature)}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-[#3a86ff]/10 to-[#ff006e]/10 p-4 rounded-xl">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <i className="fas fa-info-circle text-[#3a86ff]"></i> {t('modal.more')}
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              This system is designed to meet all your management needs. Contact us for a live demo and custom pricing.
            </p>
          </div>
          
          <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#3a86ff] to-[#ff006e] bg-clip-text text-transparent">
              {product.price}
            </span>
            <div className="flex gap-2">
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star-half-alt text-yellow-400"></i>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}