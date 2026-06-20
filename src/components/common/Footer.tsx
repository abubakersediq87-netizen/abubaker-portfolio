import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: 'fab fa-twitter', href: 'https://x.com/AbubakerSe60815' },
    { icon: 'fab fa-telegram', href: 'https://t.me/+qfoHB_3cp3JkMWE9' },
    { icon: 'fab fa-instagram', href: 'https://www.instagram.com/abubakersediq.1234' },
    { icon: 'fab fa-whatsapp', href: 'https://whatsapp.com/channel/0029Vb6w5380QeatRANf0G0j' },
    { icon: 'fab fa-youtube', href: 'https://youtube.com/@abubakersediq-b5o' },
    { icon: 'fab fa-facebook', href: 'https://www.facebook.com/share/17kcYxFJpJ/' },
    { icon: 'fab fa-tiktok', href: 'https://www.tiktok.com/@abubaker.sediq' },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <i className="fas fa-code text-white"></i>
              </div>
              <span className="font-bold text-xl gradient-text">{t('nav.brand')}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {t('footer.text')}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.links')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  {t('nav.skills')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">{t('footer.webDev')}</li>
              <li className="text-gray-600 dark:text-gray-400">{t('footer.mobileDev')}</li>
              <li className="text-gray-600 dark:text-gray-400">{t('footer.uiux')}</li>
              <li className="text-gray-600 dark:text-gray-400">{t('footer.consulting')}</li>
              <li className="text-gray-600 dark:text-gray-400">{t('footer.writing')}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('contact.connect')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <i className="fas fa-envelope text-primary w-5"></i>
                <span className="text-sm">abubakersediq87@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <i className="fas fa-phone text-primary w-5"></i>
                <span className="text-sm">0774420164</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <i className="fas fa-map-marker-alt text-primary w-5"></i>
                <span className="text-sm">Kabul, Afghanistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            {t('footer.copyright').replace('2025', currentYear.toString())}
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm flex items-center gap-1">
            {t('footer.made')} <i className="fas fa-heart text-red-500"></i> using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  )
}