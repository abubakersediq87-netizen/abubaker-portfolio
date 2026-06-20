import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { products } from '../data/productsData'
import ProductCard from '../components/ProductCard'

export default function ProductsPage() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: t('products.all'), icon: 'fas fa-th-large' },
    { id: 'web', label: t('products.web'), icon: 'fas fa-globe' },
    { id: 'mobile', label: t('products.mobile'), icon: 'fas fa-mobile-alt' },
    { id: 'saas', label: t('products.saas'), icon: 'fas fa-cloud' },
    { id: 'tools', label: t('products.tools'), icon: 'fas fa-tools' },
  ]

  const filteredProducts = products.filter(product =>
    activeFilter === 'all' ? true : product.category.includes(activeFilter)
  )

  return (
    <div className="min-h-screen py-20">
      <section className="py-16">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#3a86ff] to-[#ff006e] bg-clip-text text-transparent">
              {t('products.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('products.subtitle')}
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-[#3a86ff] to-[#ff006e] text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
                }`}
              >
                <i className={filter.icon}></i>
                <span>{filter.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}