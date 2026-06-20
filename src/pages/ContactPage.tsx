import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    { icon: 'fas fa-envelope', label: t('contact.emailLabel'), value: 'abubakersediq87@gmail.com', link: 'mailto:abubakersediq87@gmail.com', color: 'from-blue-500 to-blue-600' },
    { icon: 'fas fa-phone', label: t('contact.phoneLabel'), value: '0774420164', link: 'tel:0774420164', color: 'from-green-500 to-green-600' },
    { icon: 'fas fa-map-marker-alt', label: t('contact.locationLabel'), value: 'Kabul, Afghanistan', link: 'https://maps.google.com/?q=Kabul,Afghanistan', color: 'from-red-500 to-red-600' },
  ]

  const whyWork = [
    t('contact.why1'),
    t('contact.why2'),
    t('contact.why3'),
    t('contact.why4'),
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
              {t('contact.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#3a86ff] to-[#ff006e] bg-clip-text text-transparent flex items-center gap-2">
                  <i className="fas fa-paper-plane"></i> {t('contact.send')}
                </h3>
                
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3">
                    <i className="fas fa-check-circle text-green-500 text-xl"></i>
                    <p className="text-green-600 dark:text-green-400 text-sm">✓ Thank you for your message! I will get back to you soon.</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      <i className="fas fa-user mr-2 text-[#3a86ff]"></i> {t('contact.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-[#3a86ff] focus:border-transparent transition-all"
                      placeholder="Ahmad Jan"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      <i className="fas fa-envelope mr-2 text-[#3a86ff]"></i> {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-[#3a86ff] focus:border-transparent transition-all"
                      placeholder="Ahmad@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      <i className="fas fa-tag mr-2 text-[#3a86ff]"></i> {t('contact.subject')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-[#3a86ff] focus:border-transparent transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      <i className="fas fa-comment mr-2 text-[#3a86ff]"></i> {t('contact.message')}
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-[#3a86ff] focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-[#3a86ff] to-[#ff006e] text-white rounded-xl font-semibold hover:scale-[1.02] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <><i className="fas fa-spinner fa-spin"></i> Sending...</>
                    ) : (
                      <><i className="fas fa-paper-plane"></i> {t('contact.send')}</>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#3a86ff] to-[#ff006e] bg-clip-text text-transparent flex items-center gap-2">
                  <i className="fas fa-phone-alt"></i> {t('contact.connect')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{t('contact.text')}</p>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={item.icon === 'fas fa-map-marker-alt' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      <i className={`${item.icon} text-white text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300">{item.label}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-[#3a86ff]/10 to-[#ff006e]/10 rounded-xl p-6">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <i className="fas fa-question-circle text-[#3a86ff]"></i> {t('contact.whyTitle')}
                </h4>
                <ul className="space-y-3">
                  {whyWork.map((reason, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <i className="fas fa-check-circle text-[#3a86ff] text-sm"></i>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}