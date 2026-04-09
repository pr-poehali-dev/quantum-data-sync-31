import Icon from "@/components/ui/icon";

const steps = [
  { num: "1", title: "Подбираем для вас лучший дизайн и нужный функционал" },
  { num: "2", title: "Создаём разделы и добавляем ваши товары в каталог" },
  { num: "3", title: "Если у вас есть сайт — мы его перенесём без потери данных" },
  { num: "4", title: "Подключаем платёжную систему и настраиваем доставку" },
  { num: "5", title: "Настраиваем и передаём сайт с полной инструкцией" },
  { num: "6", title: "Поддержка после сдачи сайта в течение 3 месяцев" },
];

const plans = [
  {
    name: "Простой",
    color: "from-sky-500 to-sky-600",
    badge: "bg-sky-500",
    price: "155 000",
    features: [
      "Установка CMS 1С-Битрикс HTML5",
      "Подключение 1 готового шаблона на выбор из нашего каталога",
      "Разработка 3 разделов сайта по каталогу",
      "Наполнение не более 50 товаров в каталоге",
      "3 месяца технической поддержки сайта",
    ],
  },
  {
    name: "Базовый",
    color: "from-orange-500 to-orange-600",
    badge: "bg-orange-500",
    price: "192 000",
    features: [
      "Установка CMS 1С-Битрикс HTML5",
      "Все пункты тарифа Простой",
      "Создание уникального дизайна до 5 страниц",
      "Расширенный каталог до 500 товаров",
      "Подключение 2 платёжных систем",
      "До 5 разделов каталога товаров",
      "6 месяцев технической поддержки",
    ],
  },
  {
    name: "Настраиваемый",
    color: "from-red-500 to-red-600",
    badge: "bg-red-500",
    price: "312 000",
    features: [
      "Установка CMS 1С-Битрикс HTML5",
      "Все пункты тарифа Базовый",
      "Настройка редактора страниц",
      "Разработка фильтров",
      "Настройка форм заявок и обратной связи",
      "Интеграция с 1С: Предприятие",
      "Создание личного кабинета покупателя",
      "Настройка программы лояльности",
      "12 месяцев технической поддержки",
    ],
  },
];

const functions = [
  { icon: "FileText", label: "Брифинг" },
  { icon: "BarChart2", label: "Аналитика" },
  { icon: "Calendar", label: "Планирование" },
  { icon: "Layers", label: "Прототипирование" },
  { icon: "Rocket", label: "Старт" },
  { icon: "TestTube", label: "Тестирование" },
  { icon: "Settings2", label: "Настройка сайта" },
  { icon: "Globe", label: "Публикация сайта" },
];

const portfolioItems = [
  { label: "Магазин электроники", color: "from-blue-600 to-blue-800" },
  { label: "Одежда и аксессуары", color: "from-purple-600 to-purple-800" },
  { label: "Строительные материалы", color: "from-orange-600 to-orange-800" },
  { label: "Продукты питания", color: "from-green-600 to-green-800" },
  { label: "Спортивные товары", color: "from-red-600 to-red-800" },
  { label: "Детские товары", color: "from-pink-600 to-pink-800" },
];

const categories = [
  { icon: "Tv", label: "Электроника" },
  { icon: "Shirt", label: "Одежда" },
  { icon: "Sofa", label: "Мебель" },
  { icon: "Dumbbell", label: "Спорт" },
  { icon: "Baby", label: "Детские товары" },
  { icon: "Utensils", label: "Продукты" },
  { icon: "Wrench", label: "Инструменты" },
  { icon: "Gem", label: "Ювелирные" },
];

const individual = [
  "Установка CMS 1С-Битрикс с лицензией на 1-4 сайта или безлимит",
  "Уникальный дизайн с нуля под ваш брендинг",
  "Разработка личного кабинета с расширенным функционалом",
  "Интеграция с любой ERP, CRM, складской системой",
  "Разработка мобильного приложения",
  "Настройка кастомных модулей под бизнес-логику",
  "Мультиязычность и мультивалютность",
  "Приоритетная поддержка 24/7",
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">

      {/* HEADER */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Icon name="ShoppingCart" size={16} className="text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground text-lg">ГОТОВЫЙ</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#how" className="hover:text-foreground transition-colors">Как это работает</a>
            <a href="#tariffs" className="hover:text-foreground transition-colors">Тарифы</a>
            <a href="#individual" className="hover:text-foreground transition-colors">Индивидуальный</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:+74954154970" className="hidden sm:block text-sm text-muted-foreground hover:text-foreground transition-colors">
              +7 495 415-49-70
            </a>
            <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
              Заказать
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
                <Icon name="Zap" size={12} />
                Быстрый старт бизнеса
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
                Готовый интернет-магазин — быстрый старт вашего бизнеса
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Профессиональный готовый интернет-магазин на платформе 1С-Битрикс. Запустите продажи онлайн уже через 5 рабочих дней.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide mb-1">Стоимость от</div>
                  <div className="text-4xl font-black text-white">
                    от 155 000 <span className="text-2xl text-slate-300">руб.</span>
                  </div>
                </div>
              </div>
              <button className="mt-8 px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all duration-200 shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transform">
                Купить интернет-магазин
              </button>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-56 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 shadow-2xl flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent" />
                  <div className="relative z-10 p-6 w-full">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                      <div className="flex-1 h-5 rounded bg-slate-600/60 ml-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-8 rounded bg-primary/30 w-3/4" />
                      <div className="grid grid-cols-3 gap-2">
                        {[1,2,3,4,5,6].map(i => (
                          <div key={i} className="h-16 rounded-lg bg-slate-600/50 border border-slate-500/30" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-48 h-32 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 p-4 backdrop-blur-sm">
                  <div className="text-xs text-orange-300 font-medium mb-1">Продажи сегодня</div>
                  <div className="text-2xl font-black text-white">+124%</div>
                  <div className="mt-2 h-1 rounded-full bg-slate-600 overflow-hidden">
                    <div className="h-full w-3/4 rounded-full bg-orange-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Процесс</span>
          </div>
          <h2 className="text-center text-3xl sm:text-4xl font-black text-foreground mb-3">
            Если вы решили купить готовый интернет-магазин недорого
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Команда проекта «Готовый» проведёт вас по всем шагам и сделает интернет-магазин «под ключ»
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="flex gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0 text-xl font-black text-white shadow-lg shadow-primary/30">
                  {step.num}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pt-1">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-12 px-6 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 border-y border-blue-700/50">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-sm text-blue-300 font-medium uppercase tracking-wide mb-1">Акция</div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Закажите профессиональный интернет-магазин «под ключ» прямо сейчас
            </h3>
          </div>
          <div className="text-center sm:text-right shrink-0">
            <div className="text-4xl font-black text-white">192 000</div>
            <div className="text-blue-300 text-sm mb-4">рублей</div>
            <button className="px-6 py-3 rounded-xl bg-white text-blue-900 font-bold hover:bg-blue-50 transition-colors shadow-lg">
              Купить интернет-магазин
            </button>
          </div>
        </div>
      </section>

      {/* TARIFFS */}
      <section id="tariffs" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Тарифы</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-foreground">Выберите подходящий план</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, idx) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border overflow-hidden flex flex-col ${idx === 2 ? 'border-primary/50 shadow-xl shadow-primary/10' : 'border-border'}`}
              >
                {idx === 2 && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
                )}
                <div className={`bg-gradient-to-br ${plan.color} p-6`}>
                  <h3 className="text-xl font-black text-white mb-1">{plan.name}</h3>
                  <div className="text-white/70 text-xs uppercase tracking-wide mb-4">Пакет включает:</div>
                  <div className="text-3xl font-black text-white">
                    {plan.price} <span className="text-lg font-normal text-white/80">₽</span>
                  </div>
                </div>
                <div className="bg-card p-6 flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`mt-6 w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r ${plan.color} hover:opacity-90 transition-opacity shadow-lg`}>
                    Заказать
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUNCTIONS */}
      <section className="py-24 px-6 bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl sm:text-3xl font-black text-white uppercase mb-16 leading-tight">
            Какие функции содержит готовое решение для создания портала:
          </h2>
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center items-center gap-0 mb-6">
            {functions.slice(0, 4).map((fn, i) => (
              <div key={fn.label} className="flex items-center">
                <div className="flex flex-col items-center gap-2 px-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 border-2 border-white/40 flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors">
                    <Icon name={fn.icon} fallback="Settings" size={28} className="text-white" />
                  </div>
                  <span className="text-white text-xs font-semibold uppercase tracking-wide">{fn.label}</span>
                </div>
                {i < 3 && <div className="w-8 h-0.5 bg-white/50 mb-4 hidden sm:block" />}
              </div>
            ))}
          </div>
          {/* Row 2 reversed */}
          <div className="flex flex-wrap justify-center items-center gap-0">
            {functions.slice(4).reverse().map((fn, i) => (
              <div key={fn.label} className="flex items-center">
                <div className="flex flex-col items-center gap-2 px-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 border-2 border-white/40 flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors">
                    <Icon name={fn.icon} fallback="Settings" size={28} className="text-white" />
                  </div>
                  <span className="text-white text-xs font-semibold uppercase tracking-wide">{fn.label}</span>
                </div>
                {i < 3 && <div className="w-8 h-0.5 bg-white/50 mb-4 hidden sm:block" />}
              </div>
            ))}
          </div>
          {/* Description */}
          <div className="mt-12 flex items-start gap-4 bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 text-white font-black text-lg">1</div>
            <p className="text-white/90 text-sm leading-relaxed">
              Вы получите бренд, который с необходимым минимумом функций будет сразу работать. Мы разработаем удобный сайт, какой нужен вам и который понравится вашим покупателям.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-black text-foreground mb-16 uppercase tracking-wide">
            Созданные интернет-магазины и порталы
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {portfolioItems.map((item) => (
              <div key={item.label} className={`relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br ${item.color} flex items-end p-4 group cursor-pointer`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="relative z-10">
                  <div className="flex gap-1 mb-2">
                    {[1,2,3].map(i => <div key={i} className="w-4 h-4 rounded-full bg-white/30" />)}
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 rounded bg-white/50 w-3/4" />
                    <div className="h-2 rounded bg-white/30 w-1/2" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-sm rounded-lg px-2 py-1">
                  <span className="text-white text-xs font-medium">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {[0,1,2,3,4].map(i => (
              <div key={i} className={`rounded-full transition-all ${i === 0 ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-border'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* CMS PLATFORM */}
      <section className="py-24 px-6 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-black text-foreground mb-16 uppercase tracking-wide">
            Платформа CMS и надёжность ПО
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-2xl shadow-red-900/50">
                  <div className="text-center">
                    <div className="text-white text-5xl font-black mb-2">1C</div>
                    <div className="text-white/80 text-sm font-medium">Битрикс</div>
                    <div className="mt-3 text-white/60 text-xs">Управление сайтом</div>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <Icon name="Shield" size={20} className="text-white" />
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                Наши сайты разрабатываются и публикуются на платформе для web-сайтов, порталов и интернет-магазинов — 1С-Битрикс. Эта система давно завоевала лидирующие позиции на рынке.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                PHP, MySQL, 1С-Битрикс — это набор технологий, который является стандартом де-факто для создания корпоративных сайтов.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  { icon: "Lock", text: "Защита от взлома" },
                  { icon: "Zap", text: "Высокая скорость" },
                  { icon: "RefreshCw", text: "Регулярные обновления" },
                  { icon: "Headphones", text: "Поддержка 24/7" },
                ].map(item => (
                  <div key={item.text} className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon name={item.icon} fallback="Check" size={16} className="text-primary" />
                    </div>
                    <span className="text-sm text-foreground font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl sm:text-3xl font-black text-foreground mb-4 uppercase leading-tight">
            Для каких товаров подойдут наши готовые отраслевые решения интернет-магазина?
          </h2>
          <p className="text-center text-muted-foreground mb-6 max-w-3xl mx-auto text-sm leading-relaxed">
            Это отличное решение для любого бизнеса. Мы разрабатываем более 500 сайтов для различных отраслей и помогаем создать интернет-магазин под ключ.
          </p>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-sm leading-relaxed">
            Стоимость от 155 000 до 312 000 рублей, в зависимости от выбранного пакета и требований к функционалу.
          </p>
          {/* Mock shop banner */}
          <div className="rounded-2xl overflow-hidden border border-border mb-12 bg-card">
            <div className="h-3 bg-gradient-to-r from-sky-500 to-blue-600" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Icon name="Tv" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">ЭЛЕКТРОШОП</div>
                    <div className="text-xs text-muted-foreground">electroshop.ru</div>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
                  <Icon name="Phone" size={14} />
                  <span>+7 800 000-00-00</span>
                </div>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
                {categories.map(cat => (
                  <div key={cat.label} className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-background border border-border hover:border-primary/40 cursor-pointer transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name={cat.icon} fallback="Package" size={16} className="text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground text-center leading-tight">{cat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDIVIDUAL */}
      <section id="individual" className="py-24 px-6 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Индивидуальный подход</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Разрабатываем сложные решения под любые бизнес-требования. Цена — по согласованию после брифинга.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {individual.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 transition-colors">
                <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="Check" size={12} className="text-primary" />
                </div>
                <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="px-10 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all duration-200 shadow-xl shadow-primary/30 hover:-translate-y-0.5 transform">
              Обсудить индивидуальный проект
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <Icon name="ShoppingCart" size={12} className="text-white" />
            </div>
            <span className="font-semibold text-foreground">ГОТОВЫЙ</span>
            <span>© 2024. Все права защищены.</span>
          </div>
          <a href="tel:+74954154970" className="hover:text-primary transition-colors font-medium">
            +7 495 415-49-70
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Index;