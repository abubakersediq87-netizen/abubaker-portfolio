import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ProgressBar from '../components/ui/ProgressBar'

export default function SkillsPage() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const frontendSkills = [
    { name: 'React/Next.js', percentage: 95 },
    { name: 'TypeScript', percentage: 90 },
    { name: 'Tailwind CSS', percentage: 88 },
    { name: 'HTML5/CSS3', percentage: 94 },
  ]

  const backendSkills = [
    { name: 'Node.js', percentage: 92 },
    { name: 'Python', percentage: 85 },
    { name: 'PostgreSQL', percentage: 80 },
    { name: 'MongoDB', percentage: 87 },
  ]

  const toolsSkills = [
    { name: 'Git/GitHub', percentage: 95 },
    { name: 'Docker', percentage: 82 },
    { name: 'VS Code', percentage: 97 },
    { name: 'Figma', percentage: 80 },
  ]

  const techTags = [
    'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
    'Docker', 'Git', 'Tailwind CSS', 'Next.js', 'Express.js', 'REST APIs'
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
              {t('skills.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('skills.subtitle')}
            </p>
          </motion.div>

          <div ref={ref} className="grid lg:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-[#3a86ff] flex items-center gap-2">
                <i className="fas fa-code"></i> {t('skills.frontend')}
              </h3>
              {frontendSkills.map((skill, index) => (
                <ProgressBar
                  key={index}
                  label={skill.name}
                  percentage={skill.percentage}
                  value={`${skill.percentage}%`}
                  delay={index * 0.2}
                />
              ))}
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-[#3a86ff] flex items-center gap-2">
                <i className="fas fa-server"></i> {t('skills.backend')}
              </h3>
              {backendSkills.map((skill, index) => (
                <ProgressBar
                  key={index}
                  label={skill.name}
                  percentage={skill.percentage}
                  value={`${skill.percentage}%`}
                  delay={index * 0.2}
                />
              ))}
            </motion.div>

            {/* Tools Skills */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-[#3a86ff] flex items-center gap-2">
                <i className="fas fa-tools"></i> {t('skills.tools')}
              </h3>
              {toolsSkills.map((skill, index) => (
                <ProgressBar
                  key={index}
                  label={skill.name}
                  percentage={skill.percentage}
                  value={`${skill.percentage}%`}
                  delay={index * 0.2}
                />
              ))}
            </motion.div>
          </div>

          {/* Tech Tags */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8">{t('skills.techTitle')}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techTags.map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: index * 0.03 }}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#3a86ff]/10 to-[#ff006e]/10 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:from-[#3a86ff] hover:to-[#ff006e] hover:text-white transition-all duration-300 cursor-pointer shadow-md"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}