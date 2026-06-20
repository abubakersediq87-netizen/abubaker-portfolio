import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import Button from '../components/ui/Button'

export default function AboutPage() {
  const { t } = useLanguage()

  const highlights = [
    { icon: 'fas fa-code', titleKey: 'about.cleanCode', descKey: 'about.cleanCodeDesc', color: 'from-blue-500 to-blue-600' },
    { icon: 'fas fa-lightbulb', titleKey: 'about.innovation', descKey: 'about.innovationDesc', color: 'from-yellow-500 to-yellow-600' },
    { icon: 'fas fa-users', titleKey: 'about.collaboration', descKey: 'about.collaborationDesc', color: 'from-green-500 to-green-600' },
    { icon: 'fas fa-bolt', titleKey: 'about.performance', descKey: 'about.performanceDesc', color: 'from-purple-500 to-purple-600' },
  ]

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
              {t('about.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Text */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-[#3a86ff]">{t('about.story')}</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p className="text-lg">{t('about.text1')}</p>
                <p className="text-lg">{t('about.text2')}</p>
                <p className="text-lg">{t('about.text3')}</p>
              </div>
              <div className="mt-8">
                <Button to="/contact" variant="primary" size="lg" icon="fas fa-paper-plane">
                  {t('about.contact')}
                </Button>
              </div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl group">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                
                {/* Image */}
                <img 
                  src="/images/Screenshot 2025-10-15 104108.png"
                  alt="Abubaker Sediq - About"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // که عکس پیدا نشي، د fallback عکس وښایه
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600/3a86ff/ffffff?text=Abubaker+Sediq'
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Highlights */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-20"
          >
            <h3 className="text-2xl font-bold text-center mb-12">{t('about.bring')}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${highlight.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${highlight.icon} text-white text-2xl`}></i>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{t(highlight.titleKey)}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{t(highlight.descKey)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}