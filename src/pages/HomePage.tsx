import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import Button from '../components/ui/Button'

export default function HomePage() {
  const { t } = useLanguage()

  const stats = [
    { icon: 'fas fa-code', number: '15+', key: 'stats.projects', color: 'from-blue-500 to-blue-600' },
    { icon: 'fas fa-users', number: '42+', key: 'stats.clients', color: 'from-green-500 to-green-600' },
    { icon: 'fas fa-clock', number: '4+', key: 'stats.experience', color: 'from-orange-500 to-orange-600' },
    { icon: 'fas fa-rocket', number: '12+', key: 'stats.products', color: 'from-purple-500 to-purple-600' },
  ]

  const socialLinks = [
    { icon: 'fab fa-twitter', href: 'https://x.com/AbubakerSe60815', color: 'bg-[#1DA1F2]' },
    { icon: 'fab fa-telegram', href: 'https://t.me/+qfoHB_3cp3JkMWE9', color: 'bg-[#26A5E4]' },
    { icon: 'fab fa-instagram', href: 'https://www.instagram.com/abubakersediq.1234', color: 'bg-gradient-to-tr from-[#F56040] to-[#BC2A8D]' },
    { icon: 'fab fa-whatsapp', href: 'https://whatsapp.com/channel/0029Vb6w5380QeatRANf0G0j', color: 'bg-[#25D366]' },
    { icon: 'fab fa-youtube', href: 'https://youtube.com/@abubakersediq-b5o', color: 'bg-[#FF0000]' },
    { icon: 'fab fa-facebook', href: 'https://www.facebook.com/share/17kcYxFJpJ/', color: 'bg-[#1877F2]' },
    { icon: 'fab fa-tiktok', href: 'https://www.tiktok.com/@abubaker.sediq', color: 'bg-[#010101]' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#3a86ff]/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff006e]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#8338ec]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container-custom py-20 text-center relative z-10">
          {/* Profile Image - لوی شوی */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto mb-10"
          >
            {/* د عکس شاوخوا انیمیشن لرونکی حلقه */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3a86ff] via-[#8338ec] to-[#ff006e] animate-spin-slow" style={{ padding: '3px' }}></div>
            
            {/* اصلي عکس */}
            <div className="absolute inset-[3px] rounded-full bg-white dark:bg-gray-900 overflow-hidden shadow-2xl">
              <img 
                src="/images/20231114_113313.jpg"
                alt="Abubaker Sediq"
                className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full flex items-center justify-center"><i class="fas fa-user text-8xl text-[#3a86ff]"></i></div>';
                  }
                }}
              />
            </div>
            
            {/* د آنلاین شاخص */}
            <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 animate-pulse shadow-lg">
              <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
            </div>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <span className="px-5 py-2.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-semibold shadow-lg border border-gray-200 dark:border-gray-700">
              <i className="fas fa-check-circle text-green-500 mr-2"></i>
              {t('hero.available')}
            </span>
            <span className="px-5 py-2.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-semibold shadow-lg border border-gray-200 dark:border-gray-700">
              <i className="fas fa-rocket text-[#3a86ff] mr-2"></i>
              {t('hero.experience')}
            </span>
            <span className="px-5 py-2.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-semibold shadow-lg border border-gray-200 dark:border-gray-700">
              <i className="fas fa-award text-[#ff006e] mr-2"></i>
              {t('hero.quality')}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            {t('hero.hi')}{' '}
            <span className="bg-gradient-to-r from-[#3a86ff] via-[#8338ec] to-[#ff006e] bg-clip-text text-transparent animate-pulse">
              {t('hero.name')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4 font-medium"
          >
            {t('hero.title')}
          </motion.p>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button to="/products" variant="primary" size="lg" icon="fas fa-rocket">
              {t('hero.products')}
            </Button>
            <Button to="/contact" variant="outline" size="lg" icon="fas fa-paper-plane">
              {t('hero.contact')}
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 rounded-full ${social.color} flex items-center justify-center text-white hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg`}
              >
                <i className={`${social.icon} text-lg`}></i>
              </a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <div className="w-6 h-10 border-2 border-[#3a86ff] rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#3a86ff] rounded-full mt-2 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#3a86ff] to-[#ff006e] bg-clip-text text-transparent">
              {t('stats.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('stats.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${stat.icon} text-white text-3xl`}></i>
                </div>
                <div className="text-4xl font-bold text-[#3a86ff] mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{t(stat.key)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}