import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    childName: "",
    age: "",
    message: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена! ✨",
      description: "Мы свяжемся с вами в ближайшее время!",
    });
    setFormData({ name: "", childName: "", age: "", message: "", email: "" });
  };

  const stories = [
    {
      title: "Космическое приключение",
      description: "Путешествие к звёздам",
      image: "https://v3b.fal.media/files/b/koala/srpY46YSsElmOgqz8zpb6_output.png",
    },
    {
      title: "Волшебный лес",
      description: "Встреча с феями",
      image: "https://v3b.fal.media/files/b/koala/srpY46YSsElmOgqz8zpb6_output.png",
    },
    {
      title: "Подводный мир",
      description: "Дружба с дельфинами",
      image: "https://v3b.fal.media/files/b/koala/srpY46YSsElmOgqz8zpb6_output.png",
    },
    {
      title: "Сказочный замок",
      description: "Принцесса и дракон",
      image: "https://v3b.fal.media/files/b/koala/srpY46YSsElmOgqz8zpb6_output.png",
    },
    {
      title: "Радужный остров",
      description: "Поиск сокровищ",
      image: "https://v3b.fal.media/files/b/koala/srpY46YSsElmOgqz8zpb6_output.png",
    },
    {
      title: "Сладкое королевство",
      description: "Конфетные приключения",
      image: "https://v3b.fal.media/files/b/koala/srpY46YSsElmOgqz8zpb6_output.png",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-6xl animate-float">☁️</div>
        <div className="absolute top-20 right-20 text-5xl animate-float" style={{ animationDelay: "1s" }}>☁️</div>
        <div className="absolute top-40 left-1/3 text-4xl animate-float" style={{ animationDelay: "2s" }}>☁️</div>
        <div className="absolute top-5 right-1/4 text-4xl animate-sparkle">⭐</div>
        <div className="absolute top-32 left-1/4 text-3xl animate-sparkle" style={{ animationDelay: "1s" }}>✨</div>
        <div className="absolute top-16 right-1/3 text-3xl animate-sparkle" style={{ animationDelay: "0.5s" }}>⭐</div>
      </div>

      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(135deg, #FFB6C1 0%, #ADD8E6 50%, #FFEB99 100%)",
          }}
        />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-block">
            <h1 className="text-7xl md:text-9xl font-bold text-gray-800 mb-4">
              airnold logo
            </h1>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Добро пожаловать в мир<br />волшебных сказок<br />и мультфильмов!
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-semibold">
            Тут каждая история — о тебе!
          </p>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Погружайся в увлекательные приключения, которые ты захочешь смотреть и читать снова и снова.
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Создаем сказки и мультфильмы, которые рассказывают о тебе и твоих близких!
          </p>

          <Button 
            size="lg" 
            className="text-2xl px-12 py-8 rounded-full bg-gradient-to-r from-primary to-accent text-gray-800 font-bold shadow-2xl hover:scale-110 transition-transform duration-300"
            onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Поехали! 🚀
          </Button>

          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-6xl">
            🌈
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-white to-primary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-4">
              <span>📖</span> Наши сказки <span>🎬</span>
            </h2>
            <p className="text-xl text-gray-600">
              Уже создали более <span className="font-bold text-3xl text-primary">500+</span> волшебных историй!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:scale-105 transition-transform duration-300 bg-white/80 backdrop-blur-sm border-4 border-primary/30 shadow-xl"
              >
                <div className="relative h-64 bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl">
                      {["✨", "🎨", "🎭", "🎪", "🎯", "🎨"][index]}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2 shadow-lg">
                    <Icon name="Heart" size={24} className="text-primary" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{story.title}</h3>
                  <p className="text-lg text-gray-600 mb-4">{story.description}</p>
                  <Button variant="outline" className="w-full rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold">
                    Посмотреть <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="py-20 px-4 bg-gradient-to-b from-primary/20 via-secondary/20 to-accent/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-4">
              <span>✨</span> Заказать сказку <span>🪄</span>
            </h2>
            <p className="text-xl text-gray-600">
              Расскажите нам о своём ребёнке, и мы создадим уникальную историю!
            </p>
          </div>

          <Card className="bg-white/90 backdrop-blur-sm border-4 border-primary/40 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <Input
                    placeholder="Как к вам обращаться?"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="text-lg py-6 rounded-2xl border-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Имя ребёнка
                  </label>
                  <Input
                    placeholder="Кто станет героем сказки?"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    className="text-lg py-6 rounded-2xl border-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Возраст ребёнка
                  </label>
                  <Input
                    placeholder="Сколько лет?"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="text-lg py-6 rounded-2xl border-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="Куда отправить сказку?"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="text-lg py-6 rounded-2xl border-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Расскажите о своём ребёнке
                  </label>
                  <Textarea
                    placeholder="Какие у него интересы? Любимые персонажи? О чём мечтает?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="text-lg rounded-2xl border-2 min-h-32"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full text-2xl py-8 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-gray-800 font-bold shadow-xl hover:scale-105 transition-transform duration-300"
                >
                  Создать волшебство! ✨
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-5xl font-bold text-gray-800 mb-6">
            airnold logo
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <Button variant="ghost" className="text-lg font-semibold text-gray-700 hover:text-gray-900">
              <Icon name="Mail" size={24} className="mr-2" />
              info@airnold.ru
            </Button>
            <Button variant="ghost" className="text-lg font-semibold text-gray-700 hover:text-gray-900">
              <Icon name="Phone" size={24} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <Button size="lg" variant="ghost" className="rounded-full bg-white/80 hover:bg-white hover:scale-110 transition-transform">
              <Icon name="Instagram" size={28} />
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full bg-white/80 hover:bg-white hover:scale-110 transition-transform">
              <Icon name="Youtube" size={28} />
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full bg-white/80 hover:bg-white hover:scale-110 transition-transform">
              <Icon name="MessageCircle" size={28} />
            </Button>
          </div>

          <p className="text-gray-700 text-lg">
            © 2024 Airnold. Все права защищены. Создаём волшебство каждый день! 🌟
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
