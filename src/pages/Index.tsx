import ArcGalleryHero from "@/components/ArcGalleryHero";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "ShoppingCart",
    title: "Интернет-магазины",
    desc: "Разработка полноценных e-commerce решений на 1С-Битрикс: каталог, корзина, оплата, доставка, интеграция с 1С.",
  },
  {
    icon: "Puzzle",
    title: "Модули для Битрикс",
    desc: "Создание кастомных модулей и компонентов под любые бизнес-задачи. Маркетплейс и собственные решения.",
  },
  {
    icon: "MessageSquare",
    title: "Модуль комментирования",
    desc: "Гибкий модуль комментариев с модерацией, уведомлениями и антиспам-защитой для сайтов на Битрикс.",
  },
  {
    icon: "List",
    title: "Модуль содержания",
    desc: "Удобное управление структурой контента: оглавления, разделы, навигация и SEO-оптимизированная подача.",
  },
  {
    icon: "Newspaper",
    title: "Новостные порталы",
    desc: "Высоконагруженные новостные сайты на Битрикс с редакционным кабинетом, RSS и AMP-поддержкой.",
  },
  {
    icon: "Settings",
    title: "Доработка и поддержка",
    desc: "Аудит, рефакторинг и техническая поддержка существующих проектов на 1С-Битрикс любой сложности.",
  },
];

const steps = [
  { num: "01", title: "Анализ задачи", desc: "Изучаем бизнес-процессы и формируем техническое задание" },
  { num: "02", title: "Разработка", desc: "Пишем чистый, документированный код с соблюдением стандартов Битрикс" },
  { num: "03", title: "Тестирование", desc: "Проверяем на нагрузку, совместимость и безопасность" },
  { num: "04", title: "Запуск", desc: "Деплой, настройка сервера и сопровождение после релиза" },
];

const images = [
  "/freepik__enhance__98192.png",
  "/freepik__a-closeup-shot-features-a-glossy-purple-crossshape__48873.png",
  "/freepik__the-style-is-3d-model-with-octane-render-volumetri__57555.png",
  "/abstract-blue-gradient.webp",
  "/freepik__abstract-digital-art-featuring-a-series-of-horizon__489.png",
  "/VkvvhXlWo3hEBzcqwTpjd_aa4bf9ee998f4ec0b17a8bf16fe3e9e2.jpg",
  "/slide.png",
];

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground">

      {/* Hero */}
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />

      {/* Overriding hero text via overlay section */}
      <div className="bg-background" />

      {/* Services */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Что мы делаем</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">Услуги по разработке на Битрикс</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Профессиональная разработка под ключ — от небольших модулей до крупных e-commerce платформ</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={s.icon} fallback="Settings" size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-card border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Как мы работаем</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">Прозрачный процесс разработки</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-border -translate-x-1/2 z-0" />
                )}
                <div className="relative z-10">
                  <div className="text-4xl font-black text-primary/20 mb-3">{step.num}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Готовы обсудить ваш проект?</h2>
          <p className="text-muted-foreground mb-10 text-lg">Расскажите задачу — подготовим оценку и сроки в течение 1 рабочего дня</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transform hover:-translate-y-0.5">
              Оставить заявку
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-border text-foreground hover:bg-secondary hover:border-primary/40 transition-all duration-200">
              Посмотреть примеры работ
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-card">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© 2024 Битрикс-разработка. Все права защищены.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#" className="hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;