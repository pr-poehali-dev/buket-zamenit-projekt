import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const blogPosts = [
  {
    id: 1,
    title: "Секреты идеального букета",
    description: "Как выбрать и составить букет кустовых роз, который покорит сердце",
    image: "https://cdn.poehali.dev/files/a92a29ab-a183-454c-90f7-23ccbbf4bcd7.jpeg",
    category: "Флористика",
    date: "15 октября 2024",
    readTime: "5 мин"
  },
  {
    id: 2,
    title: "Современные тренды в дизайне",
    description: "Исследуем актуальные направления минимализма и яркие акценты 2024",
    image: "https://cdn.poehali.dev/projects/e32337f4-d627-4d34-b5a5-740a8c07fcb2/files/baece1a2-3354-4af4-a929-18e656c483a3.jpg",
    category: "Дизайн",
    date: "12 октября 2024",
    readTime: "7 мин"
  },
  {
    id: 3,
    title: "Искусство цветовых градиентов",
    description: "Как создавать плавные переходы цвета и работать с современной палитрой",
    image: "https://cdn.poehali.dev/projects/e32337f4-d627-4d34-b5a5-740a8c07fcb2/files/bab63261-127f-4cd9-8090-2af0d3f019ff.jpg",
    category: "Креатив",
    date: "10 октября 2024",
    readTime: "4 мин"
  },
  {
    id: 4,
    title: "Психология цвета в интерьере",
    description: "Влияние оттенков на настроение и атмосферу вашего пространства",
    image: "https://cdn.poehali.dev/projects/e32337f4-d627-4d34-b5a5-740a8c07fcb2/files/baece1a2-3354-4af4-a929-18e656c483a3.jpg",
    category: "Интерьер",
    date: "8 октября 2024",
    readTime: "6 мин"
  },
  {
    id: 5,
    title: "Минимализм в деталях",
    description: "Как меньше значит больше: философия простоты в современном мире",
    image: "https://cdn.poehali.dev/projects/e32337f4-d627-4d34-b5a5-740a8c07fcb2/files/bab63261-127f-4cd9-8090-2af0d3f019ff.jpg",
    category: "Стиль жизни",
    date: "5 октября 2024",
    readTime: "8 мин"
  },
  {
    id: 6,
    title: "Цветочная композиция своими руками",
    description: "Пошаговое руководство по созданию профессионального букета дома",
    image: "https://cdn.poehali.dev/files/a92a29ab-a183-454c-90f7-23ccbbf4bcd7.jpeg",
    category: "Флористика",
    date: "3 октября 2024",
    readTime: "10 мин"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
              <Icon name="Sparkles" className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              CreativeBlog
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Категории</a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">О блоге</a>
            <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Подписаться
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white border-0">
              Новое в блоге
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Вдохновляющие истории и идеи
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Исследуйте мир дизайна, флористики и креативных решений. 
              Каждая статья — это путешествие в мир красоты и вдохновения.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 gap-2">
                <Icon name="BookOpen" className="h-5 w-5" />
                Читать статьи
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Rss" className="h-5 w-5" />
                RSS подписка
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </section>

      <section className="container py-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-2">Последние статьи</h3>
            <p className="text-muted-foreground">Свежий контент для вашего вдохновения</p>
          </div>
          <Button variant="ghost" className="gap-2">
            Все статьи
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-foreground border-0 backdrop-blur">
                    {post.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Icon name="Calendar" className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full gap-2 group-hover:bg-primary/10">
                  Читать далее
                  <Icon name="ArrowRight" className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary via-secondary to-accent py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Icon name="Mail" className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Подпишитесь на рассылку
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Получайте лучшие статьи прямо на почту. Без спама, только вдохновение.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                  <Icon name="Sparkles" className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-lg">CreativeBlog</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Вдохновляем и создаём красоту каждый день
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Навигация</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Главная</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Категории</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Архив</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О блоге</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Реклама</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Соцсети</h5>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white hover:border-primary">
                  <Icon name="Instagram" className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white hover:border-primary">
                  <Icon name="Twitter" className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white hover:border-primary">
                  <Icon name="Facebook" className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 CreativeBlog. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;